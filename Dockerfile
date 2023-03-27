# Use node 16 base image
FROM node:18-alpine
# Create app directory
WORKDIR /nico-garcia-web
COPY . .
# BUILD
# Install Dependecies
RUN npm ci
# Build app
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "build"]
