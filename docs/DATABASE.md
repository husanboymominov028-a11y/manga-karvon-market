# 🛢️ Database Struktura

## PostgreSQL Jadvallar

### 1. Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  location VARCHAR(100),
  district VARCHAR(100),
  role VARCHAR(50) DEFAULT 'user', -- user, seller, admin, operator
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Products Table
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  seller_id INTEGER REFERENCES users(id),
  image_url VARCHAR(255),
  category VARCHAR(100),
  district VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Orders Table
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  -- new, accepted, delivering, ready, completed
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  auto_completed_at TIMESTAMP
);
```

### 4. Announcements Table
```sql
CREATE TABLE announcements (
  id SERIAL PRIMARY KEY,
  seller_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  deleted_at TIMESTAMP
);
```

### 5. Messages Table
```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  sender_id INTEGER REFERENCES users(id),
  recipient_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 6. Checks Table (Cheklar)
```sql
CREATE TABLE checks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  order_ids TEXT[], -- JSON array
  total_amount DECIMAL(10, 2) NOT NULL,
  check_image_url VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending',
  -- pending, approved, rejected
  rejection_reason TEXT,
  approved_at TIMESTAMP,
  rejected_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 7. User Registration Logs
```sql
CREATE TABLE registration_logs (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(20) NOT NULL,
  district VARCHAR(100),
  location VARCHAR(255),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Indexes

```sql
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_products_seller_id ON products(seller_id);
CREATE INDEX idx_products_district ON products(district);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_recipient ON messages(recipient_id);
```
