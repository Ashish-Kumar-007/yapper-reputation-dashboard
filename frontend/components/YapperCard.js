import React from 'react';

export const YapperCard = ({ yapper }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
      <div className="text-lg font-bold">{yapper.name}</div>
      <div className="text-sm">
        Reputation Score: <span className="font-semibold">{yapper.reputationScore.toFixed(2)} / 100</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <p>Total Yaps (Tweets): {yapper.totalYaps}</p>
        <p>Viral Yaps: {yapper.successfulYaps}</p>
        <p>Hit Rate: {yapper.successRate}%</p>
        <p>Posting Streak: {yapper.activeStreak} days</p>
        <p>Flopped Yaps: {yapper.totalRejections}</p>
      </div>
      <div className="text-sm mt-2">
        <strong>Achievements:</strong>
        <div className="flex flex-wrap gap-2 mt-1">
          {yapper.badges.map((badge, i) => (
            <span key={i} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">{badge}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
