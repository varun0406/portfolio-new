# Create New GitHub Repository Guide

## Step 1: Create Repository on GitHub

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the repository details:**
   - **Repository name**: `varun-kotwani-portfolio` (or your preferred name)
   - **Description**: `Next-Generation Portfolio Application - Data Analytics, AI & Full-Stack Development Expert`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. **Click "Create repository"**

## Step 2: Connect Your Local Repository

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/varun-kotwani-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify the Push

1. **Go to your repository on GitHub**
2. **Check that all files are uploaded:**
   - ✅ `.github/workflows/deploy.yml`
   - ✅ `src/` (React application)
   - ✅ `public/` (static files)
   - ✅ `package.json`
   - ✅ `dockerfile`
   - ✅ `nginx.conf`
   - ✅ All setup scripts and guides

## Step 4: Set Up GitHub Secrets

1. **Go to your repository → Settings → Secrets and variables → Actions**
2. **Add these secrets:**

### Secret 1: GCP_SA_KEY
- **Name**: `GCP_SA_KEY`
- **Value**: Copy the entire content of `portfolio-deployer-key.json` from your local folder

### Secret 2: GCP_PROJECT_ID
- **Name**: `GCP_PROJECT_ID`
- **Value**: `pet-pocket-5300`

### Secret 3: VM_NAME
- **Name**: `VM_NAME`
- **Value**: `pet-pocket-vm`

### Secret 4: VM_ZONE
- **Name**: `VM_ZONE`
- **Value**: `us-west1-b`

## Step 5: Test the CI/CD Pipeline

1. **Make a small change to your code** (e.g., update README.md)
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Test CI/CD pipeline"
   git push origin main
   ```
3. **Check GitHub Actions:**
   - Go to your repository → Actions tab
   - Monitor the workflow execution

## Step 6: Complete VM Setup

1. **SSH into your VM:**
   ```bash
   gcloud compute ssh pet-pocket-vm --zone=us-west1-b
   ```

2. **Run the setup commands:**
   ```bash
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   mkdir -p /home/ubuntu/portfolio
   cd /home/ubuntu/portfolio
   ```

## Repository Structure

Your repository should contain:
```
varun-kotwani-portfolio/
├── .github/workflows/deploy.yml    # CI/CD pipeline
├── src/                            # React application
├── public/                         # Static files
├── package.json                    # Dependencies
├── dockerfile                      # Docker configuration
├── nginx.conf                      # Nginx configuration
├── docker-compose.yml              # Container orchestration
├── setup-vm-manual.sh              # VM setup script
├── deploy.sh                       # Manual deployment script
├── GITHUB_SECRETS_SETUP.md         # Setup guide
├── SETUP_GUIDE.md                  # Comprehensive guide
├── README.md                       # Project documentation
└── .gitignore                      # Git ignore rules
```

## Next Steps After Repository Creation

1. **Set up GitHub Secrets** (Step 4 above)
2. **Complete VM setup** (Step 6 above)
3. **Test the pipeline** by making a commit
4. **Access your portfolio** at your VM's external IP

## Troubleshooting

### If push fails:
```bash
# Check remote URL
git remote -v

# If wrong URL, remove and add correct one
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### If GitHub Actions fail:
- Check the Actions tab for error details
- Verify all secrets are set correctly
- Ensure the service account has proper permissions

### If VM setup fails:
- Check that Docker is running: `sudo systemctl status docker`
- Re-login to get docker group permissions: `exit` then SSH again 