// /lib/mockData.ts

export const mockYapperData = {
    _id: "663728b1e7642a001efdeabc",
    name: "Ashish Sahoo",
    totalYaps: 45,
    successfulYaps: 40,
    successRate: 88.89,
    activeStreak: 6,
    totalRejections: 5,
    reputationScore: 88.89 * 0.6 + 6 * 0.4, // Reputation Score Calculation
    badges: [
      "🥉 10 Yaps",
      "🥈 5-Day Streak",
      "🥇 80%+ Success Rate",
    ],
    lastActiveDate: "2025-05-04T00:00:00.000Z",
    createdAt: "2025-04-15T12:00:00.000Z",
    updatedAt: "2025-05-04T12:30:00.000Z",
  };
  
  export const mockLeaderboardData = [
    {
      _id: "663728b1e7642a001efdeabc",
      name: "Ashish Sahoo",
      reputationScore: 61.73,
    },
    {
      _id: "a45329b1e7842c002df9abc",
      name: "John Doe",
      reputationScore: 58.12,
    },
    {
      _id: "d3f738a2e6242a004bf2fbc9",
      name: "Jane Smith",
      reputationScore: 67.45,
    },
    {
      _id: "ab283c1d92842b0089ffdefc",
      name: "Alice Johnson",
      reputationScore: 72.99,
    },
    {
      _id: "ac354e4b13456a002f26dbcd",
      name: "Bob Lee",
      reputationScore: 55.60,
    },
  ];
  