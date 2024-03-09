FROM node:latest

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]