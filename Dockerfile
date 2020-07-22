# create a file named Dockerfile
FROM node:14.4.0-slim
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install

