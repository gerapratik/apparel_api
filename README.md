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
