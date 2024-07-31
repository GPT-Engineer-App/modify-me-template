import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";

const Index = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground p-6">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <Heart className="mr-2" /> Pink Paradise
        </h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-primary">Welcome to Pink Paradise</h2>
        <p className="mb-6 text-foreground">Embrace the beauty of pink in this delightful application!</p>
        
        <div className="space-y-6 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Share your pink thoughts..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border-pink-300 focus:ring-pink-500"
          />
          <Button 
            onClick={() => alert(`Your pink thought: ${inputValue}`)}
            className="w-full bg-primary hover:bg-pink-600 transition-colors"
          >
            Spread Pink Joy
          </Button>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-6 text-center">
        <p>&copy; 2024 Pink Paradise. All rights reserved with love 💖</p>
      </footer>
    </div>
  );
};

export default Index;
