# 📦 JS Data Translator

This is a Node.js application that fetches data from a remote API, transforms it, stores it in a PostgreSQL database, and exposes the stored data through a REST API. It also logs activity using Winston.

---

## 🧭 Step-by-Step Guide

### 🔧 Step 1: Setup Your Environment

**Prerequisites:**
- Node.js (v18+ recommended)
- PostgreSQL
- A code editor (e.g., VS Code)

**Install dependencies:**
```bash
npm install express pg axios dotenv winston
```

---

### 📁 Step 2: Project Structure

```
js-data-translator/
├── src/
│   ├── api.js
│   ├── fetcher.js
│   ├── transformer.js
│   ├── db.js
│   ├── logger.js
│   └── index.js
├── .env
└── package.json
```

---

### 🔐 Step 3: Configure Environment (.env)

```
PGHOST=localhost
PGUSER=translator
PGPASSWORD=secret
PGDATABASE=library
PGPORT=5432
SOURCE_URL=https://api.publicapis.org/entries
PORT=3000
```

---

### 🛢️ Step 4: Set Up PostgreSQL

**Create database and user:**
```sql
CREATE DATABASE library;
CREATE USER translator WITH ENCRYPTED PASSWORD 'secret';
GRANT ALL PRIVILEGES ON DATABASE library TO translator;
```

**Create the records table:**
```sql
CREATE TABLE records (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  timestamp TIMESTAMP
);
```

---

### 🚀 Step 5: Run the App

```bash
node src/index.js
```

You should see log messages confirming startup, data fetch, transformation, and DB insertion.

---

### 🌐 Step 6: Access the API

Access stored records via:
```bash
curl http://localhost:3000/api/records
```

---

## ✅ Features
- Fetches data from a remote JSON source
- Transforms and stores data in PostgreSQL
- RESTful API endpoint for data access
- Logging using Winston

---

## 🛠 Future Improvements
- Add scheduler (e.g., `node-cron`) for periodic fetching
- Add Swagger documentation for API
- Add unit tests (e.g., with Jest)
- Extend with authentication if needed

---

## 📄 License
MIT (or specify your own)
