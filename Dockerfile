# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build:main

# Stage 2: Serve the React application with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/main /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
