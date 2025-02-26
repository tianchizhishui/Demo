# Step 1: Build the React frontend
FROM node:18 as frontend-build
WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Step 2: Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk
WORKDIR /app
COPY backend/target/*.jar app.jar
COPY --from=frontend-build /app/build/ /app/src/main/resources/static/

#COPY --from=frontend-build /app/build backend/src/main/resources/static

# Step 3: Expose port and run the application
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
