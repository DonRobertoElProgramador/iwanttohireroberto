#!/bin/bash

# Stop all running containers
echo "Stopping all running containers..."
docker stop $(docker ps -aq)

# Delete all containers
echo "Deleting all containers..."
docker rm $(docker ps -aq)

# Delete all volumes
echo "Deleting all volumes..."
docker volume rm $(docker volume ls -q)

# Delete all images
echo "Deleting all images..."
docker rmi $(docker images -q)

# Confirmation message
echo "Docker cleanup completed."
