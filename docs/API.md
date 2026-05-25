# 📡 API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication Endpoints

### 1. Send OTP
```
POST /auth/send-otp
Content-Type: application/json

{
  "phone": "+998901234567"
}

Response:
{
  "success": true,
  "message": "OTP sent to phone",
  "expires_in": 300
}
```

### 2. Verify OTP
```
POST /auth/verify-otp
Content-Type: application/json

{
  "phone": "+998901234567",
  "otp": "123456"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "phone": "+998901234567",
    "name": "John Doe",
    "district": "Tashkent"
  }
}
```

## Products Endpoints

### 1. Get All Products
```
GET /products?page=1&limit=10&district=Tashkent

Response:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Telefon",
      "price": 500000,
      "description": "...",
      "image_url": "...",
      "category": "Electronics",
      "district": "Tashkent"
    }
  ],
  "total": 100
}
```

### 2. Create Product (Admin/Seller)
```
POST /products
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Telefon Samsung",
  "price": 500000,
  "description": "Eng yangi model",
  "category": "Electronics",
  "image_url": "https://...",
  "district": "Tashkent"
}

Response:
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Telefon Samsung",
    ...
  }
}
```

### 3. Get Product by ID
```
GET /products/:id

Response:
{
  "success": true,
  "data": {...}
}
```

### 4. Update Product
```
PUT /products/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "...",
  "price": 550000,
  ...
}

Response:
{
  "success": true,
  "data": {...}
}
```

### 5. Delete Product
```
DELETE /products/:id
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Product deleted"
}
```

## Orders Endpoints

### 1. Create Order
```
POST /orders
Authorization: Bearer {token}
Content-Type: application/json

{
  "product_id": 1,
  "quantity": 2
}

Response:
{
  "success": true,
  "data": {
    "id": 1,
    "user_id": 1,
    "product_id": 1,
    "quantity": 2,
    "total_price": 1000000,
    "status": "new"
  }
}
```

### 2. Get My Orders
```
GET /orders/my-orders
Authorization: Bearer {token}

Response:
{
  "success": true,
  "data": [...]
}
```

### 3. Update Order Status
```
PUT /orders/:id/status
Authorization: Bearer {token}
Content-Type: application/json

{
  "status": "accepted"
}

Response:
{
  "success": true,
  "data": {...}
}
```

## Admin Endpoints

### 1. Get Dashboard Stats
```
GET /admin/stats
Authorization: Bearer {admin_token}

Response:
{
  "success": true,
  "data": {
    "total_orders": 100,
    "total_revenue": 50000000,
    "total_users": 500,
    "today_orders": 10,
    "today_revenue": 5000000
  }
}
```

### 2. Get All Orders
```
GET /admin/orders?status=new&limit=50
Authorization: Bearer {admin_token}

Response:
{
  "success": true,
  "data": [...]
}
```

### 3. Get Users by District
```
GET /admin/users?district=Tashkent&page=1
Authorization: Bearer {admin_token}

Response:
{
  "success": true,
  "data": [...]
}
```

## Error Responses

```json
{
  "success": false,
  "message": "Error description",
  "error_code": "INVALID_REQUEST"
}
```
