'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const ReputationChart = ({ yapper }) => {
  // Mocked data for demo, ideally fetch this dynamically over time
  const chartData = [
    { day: 'Day 1', score: 55 },
    { day: 'Day 2', score: 60 },
    { day: 'Day 3', score: 61 },
    { day: 'Day 4', score: 62 },
    { day: 'Today', score: yapper.reputationScore },
  ];

  return (
    <div className="mt-6 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-md font-semibold mb-4">Reputation Over Time</h2>
      <LineChart width={500} height={300} data={chartData}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="day" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} />
      </LineChart>
    </div>
  );
};
