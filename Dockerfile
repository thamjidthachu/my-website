# Use Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy project files
COPY . .

# Build Next.js app
RUN yarn build --no-lint
# Expose port
EXPOSE 5000

# Start the app
CMD ["yarn", "start"]