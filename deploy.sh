#!/bin/bash

# Pull the latest Docker image
docker pull gcr.io/pet-pocket-5300/varun-portfolio:latest

# Stop and remove the existing container
docker stop varun-portfolio || true
docker rm varun-portfolio || true

# Run the new container
docker run -d \
  --name varun-portfolio \
  -p 80:80 \
  --restart unless-stopped \
  gcr.io/pet-pocket-5300/varun-portfolio:latest

# Clean up old images
docker image prune -f

echo "Deployment completed!"
echo "Your portfolio is now running on port 80" 