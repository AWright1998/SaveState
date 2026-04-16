"use client";

import { useState } from "react";
import { Game } from "@/features/games/hooks/types";

export default function AddGameForm({
  onAdd,
}: {
  onAdd: (game: Game) => void;
}) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = () => {
    if (!title) return;

    const newGame: Game = {
      id: crypto.randomUUID(),
      title,
      platform,
      genre,
      status: "backlog",
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    onAdd(newGame);

    // reset form
    setTitle("");
    setPlatform("");
    setGenre("");
  };

  return (
    <div className="bg-zinc-900 p-4 rounded-xl mb-6">
      <h2 className="mb-2 font-semibold">Add Game</h2>

      <input
        className="w-full p-2 mb-2 bg-zinc-800 rounded"
        placeholder="Game title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-zinc-800 rounded"
        placeholder="Platform (PC, PS5...)"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      />

      <input
        className="w-full p-2 mb-2 bg-zinc-800 rounded"
        placeholder="Genre (RPG, FPS...)"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-purple-600 px-4 py-2 rounded"
      >
        Add Game
      </button>
    </div>
  );
}