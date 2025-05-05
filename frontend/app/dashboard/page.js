'use client';

import { useEffect, useState } from 'react';
import { mockYapperData } from '@/lib/mockData'; // Importing demo data
import { YapperCard } from '@/components/YapperCard';
import { ReputationChart } from '@/components/ReputationChart';

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Use demo data directly (no API call)
    setData(mockYapperData);
  }, []);

  if (!data) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-8">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Yapper Reputation Dashboard</h1>
          <p className="text-lg text-gray-600">Track your progress and achievements as a Yapper</p>
        </header>

        {/* Yapper Profile Card */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <YapperCard yapper={data} />
          </div>

          {/* Reputation Chart */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <ReputationChart yapper={data} />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500">
          <p className="text-sm">Powered by Yapper - Track your social content achievements</p>
        </footer>
      </div>
    </div>
  );
}
