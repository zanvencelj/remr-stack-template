# Development
FROM node:18-alpine AS development
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]

# Production
FROM node:18-alpine AS production
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["node", "src/server.js"]
