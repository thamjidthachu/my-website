# Use Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy project files
COPY . .

# Build Next.js app
RUN yarn build

# Expose port
EXPOSE 9999

# Start the app
CMD ["yarn", "start"]