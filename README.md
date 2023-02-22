# Mongoose - Node JS - Mongo DB 
Node.js Rest API.

This API uses
- Express.js framework
- mongoose ORM
- Mongo DB in a docker container

and implements some CRUD operations on two types of collections Users and Books


### Execution:
To init Express.js server execute on root path
```
npm install
```
```
npm start
```
To start mongo db in a docker container execute on root path
```
docker build -t my-mongo .
```
```
docker run --name my-mongo -p 27017:27017 -d my-mongo
```

### Notes:

This API also uses Multer library which allow user to upload images on db from local path.

