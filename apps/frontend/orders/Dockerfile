# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies separately for caching
COPY ../../.. /app
RUN npm install

# Expose port for development
EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev", "--workspace=shell"]
