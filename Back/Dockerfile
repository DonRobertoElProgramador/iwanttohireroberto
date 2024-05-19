# Use a base image with JDK
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the application JAR file into the container
COPY target/hire-0.0.1-SNAPSHOT.jar /app/hire-0.0.1-SNAPSHOT.jar

# Expose the port the application runs on
EXPOSE 8080

# Define the command to run the application
ENTRYPOINT ["java", "-jar", "hire-0.0.1-SNAPSHOT.jar"]