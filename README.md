If you are trying to run it on your local machine then follow the following steps
Step ! : npm install

Step 2 : npm start to start the application on port 8000

Step 3 : Open Postman and start testing the apis mentioned below
          Add localhost:8000 in the beginning of the request url
          eg localhost:8000/api/v1/products/create

Test the following apis

Create a Product
Method : POST
URL : /api/v1/products/create

Get all Products
Method : GET
URL : /api/v1/products

Delete a Product
Method : DELETE
URL : /api/v1/products/:id

Update the Product Quantity
Method : POST
URL : /api/v1/products/:id/update_quantity?number=10
Query Parameter : number
