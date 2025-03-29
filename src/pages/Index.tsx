
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GameShowcase from '@/components/GameShowcase';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern"></div>
          <GameShowcase />
        </div>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-game-dark">How to Play</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="game-card p-6 animate-hover">
                <div className="h-12 w-12 rounded-full game-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-game-dark">Download & Install</h3>
                <p className="text-gray-600">
                  Create an account and download the game setup file. Run the installer to set up the game on your computer.
                </p>
              </div>
              
              <div className="game-card p-6 animate-hover">
                <div className="h-12 w-12 rounded-full game-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-game-dark">Start the Game</h3>
                <p className="text-gray-600">
                  Launch the game and choose your preferred settings. You can play against the computer or challenge a friend.
                </p>
              </div>
              
              <div className="game-card p-6 animate-hover">
                <div className="h-12 w-12 rounded-full game-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-game-dark">Have Fun!</h3>
                <p className="text-gray-600">
                  Connect dots by drawing lines. Complete a box to claim it. The player with the most boxes at the end wins.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-2 text-game-dark">Open Source Project</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Dots & Boxes is an open-source JavaFX game. Contribute to the project or customize it for your needs.
            </p>
            <a 
              href="https://github.com/Kavi7605/dotsandboxes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              View Source Code
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
