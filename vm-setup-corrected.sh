#!/bin/bash

echo "Starting VM setup for portfolio deployment..."

# Start and enable Docker
echo "Starting Docker..."
sudo systemctl start docker
sudo systemctl enable docker

# Add current user to docker group
echo "Adding user to docker group..."
sudo usermod -aG docker $USER

# Install Docker Compose
echo "Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create portfolio directory in current user's home
echo "Creating portfolio directory..."
mkdir -p ~/portfolio
cd ~/portfolio

# Create docker-compose.yml
echo "Creating docker-compose.yml..."
cat > docker-compose.yml << 'EOF'
version: '3.8'
services:
  portfolio:
    image: gcr.io/pet-pocket-5300/varun-portfolio:latest
    container_name: varun-portfolio
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3
EOF

echo "VM setup completed!"
echo "Current directory: $(pwd)"
echo "You can now run: docker-compose up -d"
echo "Or use the deploy.sh script for manual deployments" 