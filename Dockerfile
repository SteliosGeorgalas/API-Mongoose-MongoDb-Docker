# Specify the base image to use
FROM mongo:latest

# Set the working directory in the container
WORKDIR /data/db

# Expose the default MongoDB port
EXPOSE 27017

# Set the default command to run when the container starts
CMD ["mongod"]
