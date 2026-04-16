"use client";

import { useState } from "react";
import { Game, GameStatus } from "@/features/games/hooks/types";


export default function RandomPicker({ games }: { games: Game[] }) {
  const [selected, setSelected] = useState<Game | null>(null);
  const [isPicking, setIsPicking] = useState(false);

  const pickGame = () => {
    setIsPicking(true);
    const backlog = games.filter(
      (g) => g.status === "backlog"
    );

  if (backlog.length === 0) {
    alert("No backlog games!");
    return;
  }
setIsPicking(true);
setSelected(null);

let index = 0;

const interval = setInterval(() => {
    const game = backlog[Math.floor(Math.random() * backlog.length)];
    setSelected(game);
    index++;
}, 100);

setTimeout(() => {
    clearInterval(interval);

    const final = backlog[Math.floor(Math.random() * backlog.length)];

    const updatedGame: Game = {
        ...final,
        status: "playing",
    };
    setSelected(updatedGame);
    setIsPicking(false);}, 2000);
  const random =
    backlog[Math.floor(Math.random() * backlog.length)];

  // create a NEW updated object
  const updatedGame: Game = {
    ...random,
    status: "playing",
  };

  setSelected(updatedGame);
};
  return (
    <div className="mb-6">
      <button
        onClick={pickGame}
         disabled={isPicking}
        className="bg-purple-600 px-6 py-3 rounded-xl mb-4"
      >
       {isPicking ? "Picking..." : "🎲 Pick a Game"}
      </button>

      
<button onClick={pickGame} className="bg-purple-600 px-6 py-3 rounded-xl mb-4">
  Pick Again
</button>
      {selected && (
        <div className="bg-zinc-900 p-4 rounded-xl mt-4">
          <h2 className="text-lg font-semibold">
            🎮 {selected.title}
          </h2>
          <p className="text-sm text-gray-400">
            {selected.genre} • {selected.platform}
          </p>
          <p className="text-xs mt-2">
            Status: {selected.status}
          </p>
        </div>
      )}
    </div>
  );
}