import React from 'react';
import { Sprout, Clock, Trophy, Wallet2, Users, Youtube } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-green-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="block">SELHAMS</span>
            <span className="block text-emerald-400 mt-2">Farm, Play, Earn on TON</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl">
            The first massively multiplayer online role farming game on the TON blockchain. Farm, stake, and complete quests to earn rewards.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold hover:bg-emerald-600 transition">
              Play Now
            </button>
            <button className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white/10 transition">
              Watch Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}