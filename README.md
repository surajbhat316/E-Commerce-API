<p>If you are trying to run it on your local machine then follow the following steps</p>
<p>Step ! : npm install</p>

<p>Step 2 : npm start to start the application on port 8000</p>

<p>Step 3 : Open Postman and start testing the apis mentioned below. <br>
          <p>Add localhost:8000 in the beginning of the request url</p>
          <p>eg localhost:8000/api/v1/products/create</p>

<p>Test the following apis</p>

Create a Product <br>
Method : POST <br>
URL : /api/v1/products/create<br>

Get all Products<br>
Method : GET<br>
URL : /api/v1/products<br>

Delete a Product<br>
Method : DELETE<br>
URL : /api/v1/products/:id<br>

Update the Product Quantity<br>
Method : POST<br>
URL : /api/v1/products/:id/update_quantity?number=10<br>
Query Parameter : number<br>
