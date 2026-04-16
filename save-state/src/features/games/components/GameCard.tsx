import { Game } from "@/features/games/hooks/types";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl">
      <h2 className="font-semibold">{game.title}</h2>
      <p className="text-sm text-gray-400">
        {game.genre} • {game.platform}
      </p>

      <div className="mt-2">
        <div className="h-2 bg-gray-700 rounded">
          <div
            className="h-2 bg-blue-500 rounded"
            style={{ width: `${game.progress}%` }}
          />
        </div>
      </div>

      <p className="text-xs mt-2">
        {game.status}
      </p>
    </div>
  );
}