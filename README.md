# Node.js Apparel API

## Description
This is a RESTful API for managing apparel inventory. Vendors can update stock quality and prices, while users can check stock availability and the lowest cost to fulfill customer orders.

## Installation
**Clone the Repository**:
git clone https://github.com/your-username/nodejs-apparel-api.git
cd nodejs-apparel-api

**Install Dependencies**: 
npm install

**Start server**: 
npm start

## API definition
Base Url - http://localhost:3000/api

***1. Update Apparel***
Method: PUT
URL: /api/apparel/update
Request Body:
```
{
  "id": "string",            // Unique identifier for the apparel item
  "name": "string",          // Name of the apparel item
  "size": "string",          // Size of the apparel item
  "color": "string",         // Color of the apparel item
  "price": number,           // Price of the apparel item
  "stock": number            // Available stock quantity
}
```
Response:
```
{
  "message": "Apparel updated successfully"
}
```
Status Codes:
200: Success
400: Invalid input (if validation is implemented)
   
***3. Bulk Update Apparel***
Method: PUT
URL: /api/apparel/bulk-update
Request Body:
```
[
  {
    "id": "string",
    "name": "string",
    "size": "string",
    "color": "string",
    "price": number,
    "stock": number
  },
  // more items...
]
```
Response:
```
{
  "message": "Bulk update successful"
}
```
Status Codes:
200: Success
400: Invalid input
***3. Check Order Fulfillment***
Method: POST
URL: /api/apparel/fulfill-check
Request Body:
```
[
  {
    "id": "string",        // Unique identifier for the apparel item
    "quantity": number     // Quantity of the item ordered
  },
  // more items...
]
```
Response:
```
{
  "canFulfill": true      // or false based on stock availability
}
```
Status Codes:
200: Success
   
***5. Calculate Order Cost***
Method: POST
URL: /api/apparel/calculate-cost
Request Body:
```
[
  {
    "id": "string",        // Unique identifier for the apparel item
    "quantity": number     // Quantity of the item ordered
  },
  // more items...
]
```
Response Success:
```
{
  "totalCost": number   // Total cost of the order
}
```
Response Error:
```
{
  "message": "Order cannot be fulfilled due to insufficient stock"
}
```
Status Codes:
200: Success
400: Insufficient stock

Key Features:
Update Apparel: Users can easily update details for individual clothing items—like name, size, color, price, and available quantity. This is done by sending a PUT request to /api/apparel/update, along with the item’s unique ID and the new information.

Bulk Update Apparel: Users can update multiple clothing items in one go. By sending a PUT request to /api/apparel/bulk-update, they can include an array of items with their updated details.

Check Order Fulfillment: Users can check if their orders can be fulfilled based on what’s in stock. By sending a POST request to /api/apparel/fulfill-check, they provide a list of items and quantities to see if they can get what they ordered.

Calculate Order Cost: The API also calculates the total cost of an order. Users can send a POST request to /api/apparel/calculate-cost with the items and their quantities, and the API will return the total cost if everything is available. If there’s not enough stock, it will send back an error message.

