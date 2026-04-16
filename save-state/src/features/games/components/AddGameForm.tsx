"use client";

import { useState } from "react";
import { Game } from "@/features/games/hooks/types";

interface AddGameFormProps {
  onAdd: (game: Game) => void;
}

export default function AddGameForm({ onAdd }: AddGameFormProps) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState<Game["status"]>("backlog");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGame: Game = {
      id: Date.now().toString(), // Simple ID generation
      title,
      platform,
      genre,
      status,
      progress: 0,
      createdAt: new Date().toISOString(),
    };
    onAdd(newGame);
    // Reset form
    setTitle("");
    setPlatform("");
    setGenre("");
    setStatus("backlog");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Game</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Game Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Game["status"])}
          className="p-2 border rounded"
        >
          <option value="backlog">Backlog</option>
          <option value="playing">Playing</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add Game
      </button>
    </form>
  );
}