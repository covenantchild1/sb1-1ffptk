import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <Leaderboard />
      
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 SELHAMS. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-emerald-400">Telegram</a>
            <a href="#" className="hover:text-emerald-400">YouTube</a>
            <a href="#" className="hover:text-emerald-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;