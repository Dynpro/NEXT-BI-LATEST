# Use lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only dependency files first (for better caching)
COPY package*.json ./

# Install dependencies (full since it's dev)
RUN npm install

# Copy the rest of the project
COPY . .

# Expose backend port
EXPOSE 3001

# Default command: run dev server
CMD ["npm", "run", "dev"]