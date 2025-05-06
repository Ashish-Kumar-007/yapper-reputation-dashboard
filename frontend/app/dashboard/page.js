"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { mockYapperData, leaderboard } from "@/lib/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { FaSignOutAlt } from "react-icons/fa";
import { SiHoneybadger, SiOpenbadges } from "react-icons/si";
import { GiRupee } from "react-icons/gi";


export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const[yapper, setYapper] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);


  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/yapper/leaderboard`);
        const data = await res.json();
        const yapperData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/yapper/68190a7ac5015bd9dfcffec6`);
        const yapper = await yapperData.json();
        setYapper(yapper);
        setLeaderboard(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        setLoading(false);
      }
    }
  
    fetchLeaderboard();
  }, []);
  
  if (status === "loading") return <div className="p-4">Loading...</div>;

  if (!yapper)
    return <div className="p-6 text-center text-lg">Loading Dashboard...</div>;

  return (
    <>
      <nav className="bg-indigo-600 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-xl">
            Welcome, {yapper?.name}
          </div>

          {status === "authenticated" && (
            <div className="flex items-center gap-4">
              <p className="text-white text-sm">{session?.user?.email}</p>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-500 hover:bg-red-600 text-white cursor-pointer font-medium py-2 px-4 rounded flex items-center gap-2"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="min-h-screen bg-gray-50 p-8 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Reputation Score */}
          <div className="bg-white rounded-xl p-6 shadow-lg col-span-1 flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-semibold text-gray-700">
                Reputation Score
              </h2>
              <p className="text-[48px] font-bold text-indigo-600 mt-2">
                {Math.round(yapper.reputationScore)}
              </p>
            </div>
            <SemiCircleProgressBar
              percentage={yapper.reputationScore}
              stroke={"#533cfa"}
              diameter={100}
              strokeWidth={15}
            />
          </div>

          {/* Submission Stats */}
          <div className="bg-white rounded-xl p-6 shadow-lg col-span-1">
            <h2 className="text-[18px] font-semibold text-gray-700 mb-4">
              Submission Stats
            </h2>
            <div className="space-y-4 text-[16px] text-gray-600">
              <div className="flex justify-between">
                <span className="font-medium">Total Yaps</span>
                <span>{yapper.totalYaps}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Successful Yaps</span>
                <span>{yapper.successfulYaps}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Rejections</span>
                <span>{yapper.totalRejections}</span>
              </div>
            </div>
          </div>

          {/* Streak */}
          <div className="bg-white rounded-xl p-6 shadow-lg col-span-1 flex flex-col justify-center items-center">
            <h2 className="text-[18px] font-semibold text-gray-700 mb-4">
              Streak
            </h2>

            <div className="w-full flex items-center justify-between mb-4">
              <div className="text-[24px] font-semibold text-orange-500 flex items-center gap-2">
                🔥 {yapper.activeStreak}
              </div>
              <span className="text-sm text-gray-400">Active Streak</span>
            </div>
          </div>

          {/* Badges */}
          <div className="bg-white rounded-xl p-6 shadow-lg col-span-1">
            <h2 className="text-[18px] font-semibold text-gray-700 mb-4">
              Badges
            </h2>
            <div className="flex gap-4 flex-wrap">
              {yapper.badges.map((badge, i) => (
                <div
                  key={i}
                  className="w-12 h-12  flex items-center justify-center text-2xl text-indigo-600"
                >
                  {badge === "10 Yaps" && <SiHoneybadger size={50}/>}
                  {badge === "5-Day Streak" && <SiOpenbadges size={50}/>}
                  {badge === "80%+ Success Rate" && <GiRupee size={50} width={50} />}

                </div>
              ))}
            </div>
          </div>

          {/* Reputation Growth */}
          <div className="bg-white rounded-xl p-6 shadow-lg col-span-3">
            <h2 className="text-[18px] font-semibold text-gray-700 mb-4">
              Reputation Growth
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yapper.reputationHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#4F46E5"
                  strokeWidth={3}
                  fill="#EEF2FF"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-xl p-6 shadow-lg col-span-1">
            <h2 className="text-[18px] font-semibold text-gray-700 mb-4">
              Leaderboard
            </h2>
            <ul className="space-y-4">
              {leaderboard.map((entry, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[16px] text-gray-700">
                      {entry.name}
                    </span>
                  </div>
                  <span className="text-[16px] text-gray-500">
                    {Math.round(entry.reputationScore)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
