# GitHub Secrets Setup Guide

## Step 1: Get Your Service Account Key

The service account key has been created and saved as `portfolio-deployer-key.json` in your current directory.

## Step 2: Set Up GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Click on **Secrets and variables** → **Actions**
4. Click **New repository secret** and add these secrets:

### Secret 1: GCP_SA_KEY
- **Name**: `GCP_SA_KEY`
- **Value**: Copy the entire content of the `portfolio-deployer-key.json` file

### Secret 2: GCP_PROJECT_ID
- **Name**: `GCP_PROJECT_ID`
- **Value**: `pet-pocket-5300`

### Secret 3: VM_NAME
- **Name**: `VM_NAME`
- **Value**: `pet-pocket-vm`

### Secret 4: VM_ZONE
- **Name**: `VM_ZONE`
- **Value**: `us-west1-b`

## Step 3: Set Up VM (Manual Steps)

1. SSH into your VM:
   ```bash
   gcloud compute ssh pet-pocket-vm --zone=us-west1-b
   ```

2. Copy and paste the contents of `setup-vm-manual.sh` into the VM terminal

3. Or run these commands one by one:
   ```bash
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   mkdir -p /home/ubuntu/portfolio
   cd /home/ubuntu/portfolio
   ```

## Step 4: Test the Pipeline

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Setup CI/CD pipeline"
   git push origin main
   ```

2. Check GitHub Actions:
   - Go to your repository → Actions tab
   - Monitor the workflow execution

## Step 5: Access Your Portfolio

Once deployed, your portfolio will be available at:
- **VM External IP**: Check your VM's external IP in GCP Console
- **Port**: 80 (HTTP)

## Troubleshooting

### If Docker commands fail:
```bash
# Re-login to get docker group permissions
exit
gcloud compute ssh pet-pocket-vm --zone=us-west1-b
```

### If GitHub Actions fail:
- Check the Actions tab for error details
- Verify all secrets are set correctly
- Ensure the service account has proper permissions

### Manual deployment:
```bash
# On the VM
cd /home/ubuntu/portfolio
docker pull gcr.io/pet-pocket-5300/varun-portfolio:latest
docker-compose up -d
``` 