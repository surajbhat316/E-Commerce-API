# E-Commerce-API

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
Request Body:
{
    "product" :{
        "name": "product2",
        "quantity": 5
    }
}

Response:
{
    "data": {
        "product": {
            "name": "product2",
            "quantity": 5
        }
    }
}
Get all Products
Method : GET
URL : /api/v1/products
Response:
{
    "data": {
        "products": [
            {
                "id": "64b62ad773105a9ed33707df",
                "name": "product1",
                "quantity": 20
            },
            {
                "id": "64b62bd24bdbfd58ec231a38",
                "name": "product2",
                "quantity": 5
            }
        ]
    }
}
Delete a Product
Method : DELETE
URL : /api/v1/products/:id
Response:
    {
        "data": {
            "message": "Product deleted"
        }
    }
Update the Product Quantity
Method : POST
URL : /api/v1/products/:id/update_quantity?number=10
Query Parameter : number
Response:
    {
        "data": {
            "product": {
                "id": "64b62ad773105a9ed33707df",
                "name": "product1",
                "quantity": 20
            },
            "message": "Updated Successfully"
        }
    }
