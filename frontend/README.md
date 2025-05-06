
# 🖥️ Yapper Reputation Frontend

This is the frontend application for the **Yapper Reputation Dashboard**, built using **Next.js (App Router)** and styled with **Tailwind CSS**. It visually displays the reputation metrics of content creators (Yappers) based on their success rate, active streak, and overall performance.

---

## ✨ Features

- 📊 Dynamic dashboard with:
  - Reputation Score (visualized with semi-circle progress bar)
  - Submission stats (total, successful, rejected yaps)
  - 🔥 Active streak indicator
  - 🏅 Earned badges display
  - 📈 Line chart showing reputation growth over time
- 🏆 Leaderboard of top Yappers
- 🐦 Twitter mock authentication using **NextAuth.js**
- 🔐 Protected dashboard route
- 🎨 Clean, minimal UI design

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Ashish-Kumar-007/yapper-reputation-dashboard.git
cd yapper-frontend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
NEXT_PUBLIC_API_URL=http://localhost:5000  # Backend API URL
```

> Make sure your backend is running and accessible.

### 4. Run the development server

```bash
npm run dev
```

Frontend will be live at: `http://localhost:3000`

---

## 🔐 Authentication

Mock Twitter sign-in is handled via [NextAuth.js](https://next-auth.js.org/). To enable this:

* Configure Twitter credentials on a platform like Vercel
* Add the provider to `[...nextauth].js`

Temporary mock login is implemented for demo purposes.

---

## 🧪 API Integration

* Leaderboard and Yapper data is fetched from the backend:

```js
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/yapper/leaderboard`);
```

---

## 🖼️ UI Libraries & Tools

* Tailwind CSS for styling
* Recharts for charts
* react-progressbar-semicircle for score visualization
* NextAuth.js for Twitter OAuth (Will be Used but for now used temp Login)
* Icons via emoji and minimal graphics

---

## 🧪 Demo Mode

For testing or demo purposes, mock data is available:

```js
import { mockYapperData, mockLeaderboardData } from '@/lib/mockData';
```

---

## 📬 Contributing

Contributions, ideas, and issues are welcome!
Please fork the repo and submit a pull request.
