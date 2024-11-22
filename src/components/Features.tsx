import React from 'react';
import { Clock, Trophy, Wallet2, Users, Youtube, Sprout } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: "Farm Every 8 Hours",
    description: "Create and customize your farm. Collect rewards every 8 hours with boosters available through TON transactions."
  },
  {
    icon: Trophy,
    title: "Quests & Missions",
    description: "Complete daily tasks, watch YouTube videos, and participate in community activities to earn points."
  },
  {
    icon: Users,
    title: "Community & Referrals",
    description: "Invite friends and earn rewards. Join a growing community of farmers and players."
  },
  {
    icon: Wallet2,
    title: "TON Integration",
    description: "Seamlessly connect your TON wallet to start farming and earning rewards."
  },
  {
    icon: Youtube,
    title: "YouTube Channel",
    description: "Daily educational content and updates reaching over 300,000 subscribers."
  },
  {
    icon: Clock,
    title: "Limited Time Event",
    description: "Play for 4-6 months before listing and earn exclusive rewards."
  }
];

export default function Features() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Game Features</h2>
          <p className="mt-4 text-lg text-gray-400">
            Discover all the ways you can earn and grow in SELHAMS
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-800 bg-gray-800/50 p-8 hover:bg-gray-800/70 transition"
            >
              <div className="absolute -top-4 left-4 inline-block rounded-xl bg-emerald-500 p-3">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}