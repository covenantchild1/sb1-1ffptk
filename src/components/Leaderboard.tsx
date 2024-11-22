import React from 'react';

const mockLeaders = [
  { rank: 1, name: "CryptoFarmer", points: "125,430", level: 42 },
  { rank: 2, name: "TONMaster", points: "98,750", level: 38 },
  { rank: 3, name: "BlockchainGuru", points: "87,620", level: 35 },
  { rank: 4, name: "FarmKing", points: "76,540", level: 33 },
  { rank: 5, name: "CryptoHarvest", points: "65,430", level: 31 }
];

export default function Leaderboard() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Top Farmers</h2>
        
        <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-800/50">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Farmer</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Points</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {mockLeaders.map((leader) => (
                <tr key={leader.rank} className="hover:bg-gray-800/70 transition">
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      leader.rank <= 3 ? 'bg-emerald-500' : 'bg-gray-700'
                    } text-white font-bold`}>
                      {leader.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white">{leader.name}</td>
                  <td className="px-6 py-4 text-emerald-400">{leader.points}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                      Level {leader.level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}