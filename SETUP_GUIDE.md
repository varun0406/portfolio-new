# CI/CD Pipeline Setup Guide

This guide will help you set up a complete CI/CD pipeline for your portfolio application using GitHub Actions, Docker, and Google Cloud Platform.

## Prerequisites

1. **Google Cloud Platform Account**
   - Active GCP project
   - Compute Engine API enabled
   - Container Registry API enabled
   - Service account with necessary permissions

2. **GitHub Repository**
   - Your portfolio code pushed to GitHub
   - Repository access for GitHub Actions

3. **GCloud VM Instance**
   - Ubuntu 20.04 or later
   - At least 1GB RAM
   - External IP address

## Step 1: Set Up Google Cloud Project

### 1.1 Create Service Account
```bash
# Create service account
gcloud iam service-accounts create portfolio-deployer \
    --display-name="Portfolio Deployer"

# Grant necessary roles
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
    --member="serviceAccount:portfolio-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/compute.instanceAdmin.v1"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
    --member="serviceAccount:portfolio-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

# Create and download key
gcloud iam service-accounts keys create ~/portfolio-deployer-key.json \
    --iam-account=portfolio-deployer@YOUR_PROJECT_ID.iam.gserviceaccount.com
```

### 1.2 Enable APIs
```bash
gcloud services enable compute.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

## Step 2: Set Up GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add these secrets:

1. **GCP_SA_KEY**: The entire content of the `portfolio-deployer-key.json` file
2. **GCP_PROJECT_ID**: Your GCP project ID
3. **VM_NAME**: Your VM instance name
4. **VM_ZONE**: Your VM zone (e.g., `us-central1-a`)

## Step 3: Set Up GCloud VM

### 3.1 Create VM Instance
```bash
gcloud compute instances create portfolio-vm \
    --zone=us-central1-a \
    --machine-type=e2-micro \
    --image-family=ubuntu-2004-lts \
    --image-project=ubuntu-os-cloud \
    --tags=http-server,https-server \
    --metadata=startup-script='#! /bin/bash
    sudo apt-get update
    sudo apt-get install -y docker.io
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -aG docker $USER'
```

### 3.2 Configure Firewall
```bash
gcloud compute firewall-rules create allow-http \
    --allow tcp:80 \
    --target-tags=http-server \
    --description="Allow HTTP traffic"

gcloud compute firewall-rules create allow-https \
    --allow tcp:443 \
    --target-tags=https-server \
    --description="Allow HTTPS traffic"
```

### 3.3 Run Setup Script
```bash
# Copy setup script to VM
gcloud compute scp setup-vm.sh portfolio-vm:~/ --zone=us-central1-a

# SSH into VM and run setup
gcloud compute ssh portfolio-vm --zone=us-central1-a

# On the VM, run:
chmod +x setup-vm.sh
./setup-vm.sh
```

## Step 4: Update Configuration Files

### 4.1 Update docker-compose.yml
Replace `YOUR_PROJECT_ID` with your actual GCP project ID:
```yaml
image: gcr.io/YOUR_ACTUAL_PROJECT_ID/varun-portfolio:latest
```

### 4.2 Update deploy.sh
Replace `YOUR_PROJECT_ID` with your actual GCP project ID:
```bash
docker pull gcr.io/YOUR_ACTUAL_PROJECT_ID/varun-portfolio:latest
```

### 4.3 Update Nginx Configuration (if using custom domain)
Edit `/etc/nginx/sites-available/portfolio` and replace `your-domain.com` with your actual domain.

## Step 5: Test the Pipeline

### 5.1 Manual Test
```bash
# On your local machine
docker build -t gcr.io/YOUR_PROJECT_ID/varun-portfolio:test .
docker push gcr.io/YOUR_PROJECT_ID/varun-portfolio:test

# On the VM
docker pull gcr.io/YOUR_PROJECT_ID/varun-portfolio:test
docker run -d --name varun-portfolio-test -p 8080:80 gcr.io/YOUR_PROJECT_ID/varun-portfolio:test
```

### 5.2 Trigger GitHub Actions
Push a commit to the main branch to trigger the CI/CD pipeline:
```bash
git add .
git commit -m "Test CI/CD pipeline"
git push origin main
```

## Step 6: Monitor and Troubleshoot

### 6.1 Check GitHub Actions
- Go to your repository → Actions tab
- Monitor the workflow execution
- Check for any errors in the logs

### 6.2 Check VM Status
```bash
# SSH into VM
gcloud compute ssh portfolio-vm --zone=us-central1-a

# Check Docker containers
docker ps
docker logs varun-portfolio

# Check Nginx status
sudo systemctl status nginx
```

### 6.3 Common Issues

**Docker Permission Issues:**
```bash
sudo usermod -aG docker $USER
newgrp docker
```

**Port Already in Use:**
```bash
sudo netstat -tulpn | grep :80
sudo kill -9 <PID>
```

**Nginx Configuration Error:**
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Step 7: Set Up Custom Domain (Optional)

### 7.1 Configure DNS
Point your domain to your VM's external IP address.

### 7.2 Update Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/portfolio
# Update server_name with your domain
sudo nginx -t
sudo systemctl reload nginx
```

### 7.3 Set Up SSL (Recommended)
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Maintenance

### Update Application
Simply push to the main branch - the pipeline will automatically deploy the new version.

### Monitor Logs
```bash
# Application logs
docker logs varun-portfolio

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Backup
```bash
# Backup Docker images
docker save gcr.io/YOUR_PROJECT_ID/varun-portfolio:latest > portfolio-backup.tar

# Backup configuration
tar -czf config-backup.tar.gz /etc/nginx/sites-available/portfolio docker-compose.yml
```

## Security Considerations

1. **Firewall Rules**: Only allow necessary ports (80, 443)
2. **Service Account**: Use minimal required permissions
3. **Secrets**: Never commit secrets to version control
4. **Updates**: Keep system and Docker images updated
5. **Monitoring**: Set up alerts for application health

## Cost Optimization

1. **VM Size**: Use e2-micro for development, scale up for production
2. **Preemptible Instances**: Consider for non-critical workloads
3. **Image Cleanup**: Regularly clean up old Docker images
4. **Monitoring**: Use Cloud Monitoring to track resource usage

---

**Your CI/CD pipeline is now ready!** 🚀

The pipeline will automatically:
- Run tests on every push
- Build and push Docker images
- Deploy to your GCloud VM
- Restart the application with zero downtime

For any issues, check the GitHub Actions logs and VM status as described above. 