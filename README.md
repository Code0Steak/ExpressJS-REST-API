# Express.JS REST API

Express.JS is a backend web application development framework for building RESTful APIs with Node.JS

## Application Details
- The application is a REST API with endpoints dedicated to a Pet resource/collection. However, similar endpoints can be implemented for any resource.
- I have used the _**'Sequelize'**_ Middleware as ORM, for operating on the Pet model.
- The Application was developed by considering the **Mode-View-Controller** Web Architecture. In this case, when a matching route is hit, it maps a request to the 
 appropriate controller method(handler). The controller(Collections/Pet/controllers/petControllers.js) does operations on the Pet Model and returns a response. The **middleware AJV** is introduced in the route section to look for **schema validation** while pushing data by a POST request or updating data using a PATCH request.

## Folder structure
![image](https://github.com/Code0Steak/ExpressJS-REST-API/assets/55844298/b25e7687-0eb2-4be4-ba82-30f951f2e549)

- ``` server.js ```: constitutes the Express.js application. Runs the dev server at port 8000.
- The ``` Collections ``` folder has one collection Pet.
- The Pet collection is split into it's MVC components; viz. controllers, model and routes
- The ``` DB ```folder contains the Sqlite DB file. 

## Application Setup
- Clone the repository at : https://github.com/Code0Steak/ExpressJS-REST-API.git
- Then, to Install all node dependencies
```
npm install
```
I have used the npm package, **morgan** for HTTP error logging. Then **cors** and **express.json()** are the additional middlewares used. The npm package **ajv** is used for schema validation. And **sequelize** is used as an ORM to query over the Pet model.

- To start the application
```
npm run devStart
```
- Use Postman for sending requests to the server.

The first start creates a DB named 'pets' with the defined schema
![image](https://github.com/Code0Steak/ExpressJS-REST-API/assets/55844298/53b2d3a2-7d8a-444a-a5a5-30e311d6a132)
![image](https://github.com/Code0Steak/ExpressJS-REST-API/assets/55844298/b431f0e7-7ac5-451c-a78b-3f4def6d29fa)
![image](https://github.com/Code0Steak/ExpressJS-REST-API/assets/55844298/a6ce8bc7-f6f0-4990-bad1-16eaa88ec1e9)
![image](https://github.com/Code0Steak/ExpressJS-REST-API/assets/55844298/4063404e-9f08-4ef4-9ff0-2ba87f319341)
![image](https://github.com/Code0Steak/ExpressJS-REST-API/assets/55844298/58e1e5bc-0dfe-4c3a-be28-4a8bb2a01f4b)
![image](https://github.com/Code0Steak/ExpressJS-REST-API/assets/55844298/14579069-5421-4e68-91db-832ad7db9386)


## Pending Work
- Acknowledge schema from the payload sent via. the request and create a table accordingly: The model definition for Pet lies in the file petModel.js for Pet. createPetPayload.js and updatePetPayload.js contain the schema in json format for schema validation using a middleware. However, as per the problem statement a more generic solution is expected.
- Automated tests 

Author:
**Ameya Keskar
Email: ameyakeskar1999@gmail.com
Linkedin: https://www.linkedin.com/in/ameyakeskar/**
