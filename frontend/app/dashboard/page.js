'use client';

import { useEffect, useState } from 'react';
import { mockYapperData, mockLeaderboardData } from '@/lib/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(mockYapperData);
  }, []);

  if (!data) return <div className="p-6 text-center text-lg">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Reputation Score */}
        <div className="bg-white rounded-xl p-6 shadow-sm col-span-1">
          <h2 className="text-[18px] font-medium text-black">Reputation Score</h2>
          <p className="text-[48px] font-semibold text-indigo-600 mt-2">{Math.round(data.reputationScore)}</p>
        </div>

        {/* Submission Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm col-span-1">
          <h2 className="text-[18px] font-medium text-black mb-4">Submission Stats</h2>
          <div className="space-y-2 text-[16px] text-black">
            <div className="flex justify-between">
              <span>Total Yaps</span>
              <span>{data.totalYaps}</span>
            </div>
            <div className="flex justify-between">
              <span>Successful Yaps</span>
              <span>{data.successfulYaps}</span>
            </div>
            <div className="flex justify-between">
              <span>Rejections</span>
              <span>{data.totalRejections}</span>
            </div>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white rounded-xl p-6 shadow-sm col-span-1 flex items-center justify-between">
          <h2 className="text-[18px] font-medium text-black">Streak</h2>
          <div className="text-[24px] font-semibold text-orange-500 flex items-center gap-2">
            🔥 {data.activeStreak}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-xl p-6 shadow-sm col-span-1">
          <h2 className="text-[18px] font-medium text-black mb-4">Badges</h2>
          <div className="flex gap-3">
            {data.badges.map((badge, i) => (
              <div key={i} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-xl p-6 shadow-sm col-span-1">
          <h2 className="text-[18px] font-medium text-black mb-4">Leaderboard</h2>
          <ul className="space-y-3">
            {mockLeaderboardData.map((entry, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={entry.avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-[16px] text-black">{entry.name}</span>
                </div>
                <span className="text-[16px] text-gray-500">{entry.rank}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reputation Growth */}
        <div className="bg-white rounded-xl p-6 shadow-sm col-span-1 md:col-span-2">
          <h2 className="text-[18px] font-medium text-black mb-4">Reputation Growth</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data.reputationHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#4F46E5" strokeWidth={3} fill="#EEF2FF" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
