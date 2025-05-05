'use client';

import { useEffect, useState } from 'react';
import { mockLeaderboardData } from '@/lib/mockData';  // Importing demo leaderboard data

export default function LeaderboardPage() {
  const [yappers, setYappers] = useState([]);

  useEffect(() => {
    // Use demo leaderboard data directly (no API call)
    setYappers(mockLeaderboardData);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Top Yappers - Leaderboard</h1>
      <div className="grid gap-4">
        {yappers
          .sort((a, b) => b.reputationScore - a.reputationScore)
          .map((yapper, i) => (
            <div key={i} className="bg-white p-4 rounded shadow-sm">
              <p><strong>{i + 1}. {yapper.name}</strong></p>
              <p>Reputation Score: {yapper.reputationScore.toFixed(2)}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
