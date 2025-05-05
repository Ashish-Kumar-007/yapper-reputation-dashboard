
# 🧠 Yapper Reputation Dashboard

A full-stack project to track and visualize the reputation, performance, and behavioral patterns of Yappers based on their submission history. Built as a simulation for a real-world product feature.

## 🚀 Live Demo

> [Deployed Frontend URL](https://your-frontend-url.com)
> [Backend API (Optional)](https://your-backend-url.com)

---

## 📌 Features

* 📈 Tracks total yaps, success rate, and active streaks
* 🧮 Calculates a dynamic reputation score
* 🏅 Awards badges based on milestones
* 📊 Displays submission stats and reputation visually
* 🏆 Optional leaderboard and community comparison

---

## 🛠️ Tech Stack

**Frontend:**

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Recharts](https://recharts.org/) (for graphs)

**Backend:**

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/) (via Mongoose)

---

## 🧮 Reputation Formula

```txt
Reputation Score = (Success Rate % × 0.6) + (Active Streak Days × 0.4)
```

---

## 🗂️ Project Structure

```bash
yapper-reputation-dashboard/
│
├── backend/
│   ├── models/           # Mongoose schema for Yapper
│   ├── routes/           # Express routes (yap submission, fetch stats)
│   ├── controllers/      # Logic for updating reputation
│   └── server.js         # Express app entry point
│
├── frontend/
│   ├── pages/
│   │   ├── index.tsx     # Dashboard home
│   │   └── dashboard/[id].tsx # Yapper profile page
│   ├── components/       # Reusable UI components
│   └── styles/           # Tailwind configs
│
└── README.md
```

---

## 📦 Installation

### 🔧 Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### 🌐 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Sample API Endpoints

* `POST /api/yap` – Submit a yap
* `GET /api/yapper/:id` – Get reputation + stats

---

## 📅 Badges Logic

* 🥉 10 Yaps Badge
* 🥈 5-Day Streak Badge
* 🥇 90%+ Success Rate Badge
  *(customizable in backend logic)*

---

## 🎯 Future Improvements (Optional Add-ons)

* Community average comparison
* Leaderboard of top Yappers
* Auth integration for real users
* Admin panel for analytics

---

## 🤝 Author

**Ashish Kumar Sahoo**
🔗 [LinkedIn](https://linkedin.com/in/web3-eth-ashish)


