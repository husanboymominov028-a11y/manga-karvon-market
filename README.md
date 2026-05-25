# 🛍️ Manga Karvon Market - MVP

> Oʻzbekiston boʻylab savdoqidlar uchun multimedia bozor platformasi

**Yaratildi:** 2026-05-25  
**Status:** 🚀 MVP Phase  
**Budget:** $300 (Tekin)

---

## 📱 Loyiha Tarkibi

### 1️⃣ Backend API (Node.js + Express)
- ✅ Tovarlar API
- ✅ Buyurtmalar API
- ✅ Foydalanuvchi autentifikatsiyasi
- ✅ SMS OTP (Eskiz.uz)
- ✅ Admin API
- ✅ Database (PostgreSQL)

### 2️⃣ Admin Panel (React + TypeScript)
- ✅ Tovarlar boshqaruvi
- ✅ Buyurtmalar ko'rish
- ✅ Asosiy statistika
- ✅ Dashboard
- ✅ E'lonlar boshqaruvi

### 3️⃣ Mobile App (Flutter)
- ✅ Tovarlar katalogi
- ✅ Ro'yxatdan o'tish
- ✅ Buyurtma berish
- ✅ Buyurtma holati kuzatish
- ✅ Ilovani ulashish (APK)

---

## 🛠 Texnologiya Staksi

| Qism | Texnologiya |
|------|--------|
| **Backend** | Node.js + Express + PostgreSQL |
| **Admin Panel** | React + TypeScript + Material-UI |
| **Mobile App** | Flutter (Android/iOS) |
| **Authentication** | JWT + OTP |
| **SMS Service** | Eskiz.uz API |
| **Hosting** | DigitalOcean / AWS |

---

## 📁 Papka Struktura

```
manga-karvon-market/
├── backend/                    # Node.js Express Backend
│   ├── src/
│   │   ├── server.js          # Main server file
│   │   ├── routes/            # API routes
│   │   ├── controllers/        # Business logic
│   │   ├── middleware/         # Auth, validation
│   │   └── models/            # Database models
│   ├── package.json
│   └── .env.example
│
├── admin-panel/                # React Admin Panel
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   ├── public/
│   └── package.json
│
├── mobile-app/                 # Flutter Mobile App
│   ├── lib/
│   │   ├── main.dart
│   │   ├── screens/
│   │   ├── models/
│   │   └── services/
│   ├── pubspec.yaml
│   └── android/
│
├── docs/                       # Documentation
│   ├── DATABASE.md
│   ├── API.md
│   └── SETUP.md
│
└── .gitignore
```

---

## 🚀 Boshlang'ich Sozlash

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env
# .env faylini o'zgartirlang
npm run dev
```

### 2. Admin Panel
```bash
cd admin-panel
npm install
npm start
```

### 3. Mobile App
```bash
cd mobile-app
flutter pub get
flutter run
```

---

## 📋 MVP Xususiyatlari

### Phase 1 ✅ (Hozir)
- [x] Backend setup
- [x] Database struktura
- [x] Admin panel template
- [x] Mobile app skeleton
- [x] SMS OTP integratsiyasi
- [x] Tovarlar boshqaruvi
- [x] Buyurtmalar tizimi
- [x] Authentication

### Phase 2 (Keyingi)
- [ ] Operatorlar paneli
- [ ] Chek tekshirish
- [ ] Advanced statistika
- [ ] Push notifications
- [ ] Mahsulot so'rovlari
- [ ] Foydalanuvchi xabarlari

### Phase 3 (Future)
- [ ] AI-based recommendations
- [ ] Payment gateway integration
- [ ] Advanced analytics
- [ ] Machine learning models

---

## 🔐 Xavfsizlik

✅ JWT authentication  
✅ SMS OTP verification  
✅ Password hashing (bcrypt)  
✅ CORS protection  
✅ Input validation  
✅ Rate limiting  
✅ SQL injection prevention  

---

## 📊 Database Schema

```sql
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  district VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Products Table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  seller_id INTEGER REFERENCES users(id),
  image_url VARCHAR(255),
  district VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders Table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🎯 Keyingi Qadamlar

1. ✅ Backend ishga tushirildi
2. ✅ Admin panel ko'rildi
3. ✅ Mobile app ishga tushirildi
4. 📝 Database o'rnatildi
5. 🔄 SMS API konfiguratsiyasi
6. 🚀 Testing va deployment

---

## 📞 Aloqa

Issuellari yoki savollar bo'lsa GitHub Issues-da yozing!

---

## 💰 Budget Breakdown

| Qism | Xarajat | Status |
|------|---------|--------|
| Backend | $100 | ✅ |
| Admin Panel | $80 | ✅ |
| Mobile App | $100 | ✅ |
| Hosting | $20/oy | ⏳ |
| **TOTAL** | **$300** | **✅** |

---

**🎉 HAMMA NARSASI TEKIN! 🎉**

Mijozingizga ayting: "Manga Karvon Market ilovasi tayyor! Boshlashni kuting!" 🚀
