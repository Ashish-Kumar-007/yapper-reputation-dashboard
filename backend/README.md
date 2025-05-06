
# 🐦 Yapper Reputation Backend

This is the backend service for the **Yapper Reputation Dashboard**, which tracks the performance of Twitter content creators ("Yappers") based on their submission success, streaks, and community reputation.

Built with **Node.js**, **Express**, and **MongoDB**, this backend provides APIs to create, update, and retrieve Yapper performance data.

---

## 🚀 Features

- Submit new yaps (content)
- Automatically update success rate, reputation score, and active streak
- Badge assignment based on milestones
- Get individual Yapper profile
- Leaderboard showing top reputed Yappers

---

## 📁 Folder Structure

```

backend/
├── controllers/          # Request handlers
│   └── yapperController.js
├── models/               # Mongoose schemas
│   └── Yapper.js
├── routes/               # Route definitions
│   └── yapperRoutes.js
├── .env                  # Environment variables
├── server.js             # Entry point
└── package.json

````

---

## 🛠️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/Ashish-Kumar-007/yapper-reputation-dashboard.git
cd yapper-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yapper
```

> You can use a free MongoDB Atlas URI or run MongoDB locally.

### 4. Start the server

```bash
npm run dev
```

Server will run at: `http://localhost:5000`

---

## 📡 API Endpoints

### `GET /api/yapper/:id`

Fetch full profile for a Yapper

---

### `GET /api/yapper/leaderboard`

Get top 5 Yappers based on reputation score

---

## ✨ Reputation Score Formula

```
Reputation Score = (Success Rate * 0.6) + (Active Streak * 0.4)
```

Badges are earned based on:

* 🔟 10 Yaps
* 🔥 5-Day Streak
* 🏆 80%+ Success Rate

---

## 📦 Dependencies

* Express
* Mongoose
* dotenv
* cors
* nodemon (for development)

---

## 🧪 Coming Soon

* Authentication with Twitter OAuth
* Admin dashboard
* Analytics API

---

## 📬 Feedback & Contributions

Feel free to submit issues or pull requests to improve the project!