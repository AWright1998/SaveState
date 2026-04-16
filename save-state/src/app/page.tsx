"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Game } from "@/features/games/hooks/types";

import GameCard from "@/features/games/components/GameCard";
import AddGameForm from "@/features/games/components/AddGameForm";
import RandomPicker from "@/features/games/components/RandomPicker";

export default function Dashboard() {
  const [games, setGames] = useState<Game[]>([]);

  // 📥 FETCH GAMES FROM SUPABASE
  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("games")
        .select("*");

      if (error) {
        console.error("Error fetching games:", error);
        return;
      }

      if (data) {
        setGames(data);
      }
    };

    fetchGames();
  }, []);

  // ➕ ADD GAME TO STATE
  const addGame = (game: Game) => {
    setGames((prev) => [...prev, game]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Welcome back 👋
      </h1>

      {/* ➕ Add Game */}
      <AddGameForm onAdd={addGame} />

      {/* 🎲 Random Picker */}
      <RandomPicker games={games} />

      {/* 🎮 Game Grid */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}