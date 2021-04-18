# Docker Image which is used as foundation to create
# a custom Docker Image with this local_Dockerfile
FROM node

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Uses port which is used by the actual application
EXPOSE 4000

# Finally runs the application
CMD ["npm", "start"]