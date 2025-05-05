Here’s a clean and well-structured **README.md** file for your Yapper frontend built using **Next.js (App Router)**:

---

```markdown
# 🐦 Yapper Frontend

A minimalist dashboard for content creators ("Yappers") to track their Twitter content submissions ("Yaps"). This dashboard provides real-time statistics, reputation scoring, badge tracking, and leaderboard insights.

## 🚀 Features

- 🔐 Twitter authentication via NextAuth.js
- 📊 Reputation score with semi-circle progress visualization
- 📈 Reputation growth chart using Recharts
- 📝 Submission statistics (Yaps, Rejections, Streaks)
- 🏆 Badge collection display
- 🥇 Leaderboard comparison with other yappers
- ⚡ Fully responsive and clean UI using Tailwind CSS

## 🧾 Tech Stack

- **Framework:** Next.js (App Router)
- **Auth:** NextAuth.js (Twitter OAuth)
- **UI:** Tailwind CSS
- **Charts:** Recharts
- **State:** React Hooks
- **Mock Data:** Local mockData.ts file for development

## 📁 Folder Structure

```

yapper-frontend/
│
├── app/                       # App Router pages
│   ├── dashboard/             # Authenticated dashboard
│   └── page.tsx              # Landing / login page
│
├── components/                # Reusable UI components
│   ├── YapperCard.tsx
│   ├── ReputationChart.tsx
│   ├── LogoutButton.tsx
│   └── ...
│
├── lib/                       # Utilities and mock data
│   └── mockData.ts
│
├── styles/                    # Global CSS
│   └── globals.css
│
├── public/                    # Static files (avatars, icons)
│
├── .env.local                 # Environment variables (e.g., Twitter API keys)
└── ...

````

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/yapper-frontend.git
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
NEXTAUTH_SECRET=your_secret
TWITTER_CLIENT_ID=your_twitter_client_id
TWITTER_CLIENT_SECRET=your_twitter_client_secret
```

### 4. Run locally

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Notes

* Uses mock data (`lib/mockData.js`) for local testing without backend.
* Auth flow is integrated but can be mocked with fake session data during development.
* Add backend API later to store user data persistently.

