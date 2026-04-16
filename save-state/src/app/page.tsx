"use client";

import { useState } from "react";
import { Game } from "@/features/games/hooks/types";
import GameCard from "@/features/games/components/GameCard";
import AddGameForm from "@/components/AddGameForm";

export default function Dashboard() {
  const [games, setGames] = useState<Game[]>([]);

  const addGame = (game: Game) => {
    setGames((prev) => [...prev, game]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Welcome back 👋
      </h1>

      <AddGameForm onAdd={addGame} />

      <div className="grid grid-cols-3 gap-4 mt-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}