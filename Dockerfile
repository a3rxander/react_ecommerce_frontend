# Use Node.js LTS version for better stability
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the port Vite uses
EXPOSE 3000

# Define the command to run your app in dev mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]