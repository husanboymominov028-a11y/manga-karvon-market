# 🚀 Setup Guide

## Prerequisites

- Node.js >= 14.0
- npm >= 6.0
- PostgreSQL >= 12
- Flutter >= 3.0
- Git

---

## 1. Backend Setup

### Install Dependencies
```bash
cd backend
npm install
```

### Configure Environment
```bash
cp .env.example .env
```

Edit `.env` file:
```bash
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=manga_karvon_market
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
ESKIZ_EMAIL=your_email
ESKIZ_PASSWORD=your_password
```

### Create Database
```bash
psql -U postgres
CREATE DATABASE manga_karvon_market;
\q
```

### Run Migrations
```bash
# Later: npm run migrate
```

### Start Backend
```bash
npm run dev
# Server runs on http://localhost:5000
```

---

## 2. Admin Panel Setup

### Install Dependencies
```bash
cd admin-panel
npm install
```

### Start Development Server
```bash
npm start
# Opens on http://localhost:3000
```

### Build for Production
```bash
npm run build
# Creates 'build' folder
```

---

## 3. Mobile App Setup

### Install Dependencies
```bash
cd mobile-app
flutter pub get
```

### Run on Android
```bash
flutter run -d android
```

### Run on iOS
```bash
flutter run -d ios
```

### Build APK
```bash
flutter build apk --release
# APK file: build/app/outputs/flutter-apk/app-release.apk
```

### Build for Play Store
```bash
flutter build appbundle --release
# Bundle file: build/app/outputs/bundle/release/app-release.aab
```

---

## 4. Testing

### Backend Tests
```bash
cd backend
npm test
```

### Admin Panel Tests
```bash
cd admin-panel
npm test
```

### Mobile App Tests
```bash
cd mobile-app
flutter test
```

---

## 5. Deployment

### Backend Deployment (DigitalOcean)

1. Create Droplet (Ubuntu 20.04)
2. SSH into Droplet
3. Install Node.js and PostgreSQL
4. Clone repository
5. Setup environment variables
6. Install PM2 for process management
```bash
npm install -g pm2
pm2 start src/server.js --name "manga-backend"
pm2 startup
pm2 save
```

### Admin Panel Deployment (Vercel)

```bash
npm install -g vercel
vercel login
vercel deploy
```

### Mobile App Deployment (Google Play Store)

1. Create Google Play Developer Account
2. Prepare app signing certificate
3. Build release APK
4. Upload to Google Play Console
5. Fill app details, screenshots, etc.
6. Submit for review

---

## 6. Troubleshooting

### Backend won't start
- Check if port 5000 is available
- Verify database connection
- Check .env file

### Admin Panel not loading
- Clear browser cache
- npm install again
- Check if backend is running

### Mobile app build fails
- flutter clean
- flutter pub get
- Check Dart SDK version

---

## 7. API Testing

### Using cURL

```bash
# Send OTP
curl -X POST http://localhost:5000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+998901234567"}'

# Get Products
curl http://localhost:5000/api/products

# Get Stats
curl http://localhost:5000/api/admin/stats \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Using Postman

1. Import API collection (docs/postman.json)
2. Set environment variables
3. Test endpoints

---

## Questions?

Create an issue in GitHub!
