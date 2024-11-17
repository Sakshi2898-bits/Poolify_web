# Step 1: Use the official Node.js LTS image as a base
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project directory into the container
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Install a lightweight web server for static file hosting
RUN npm install -g serve

# Step 8: Expose the port the server will run on
EXPOSE 3000

# Step 9: Start the application
CMD ["serve", "-s", "build"]
