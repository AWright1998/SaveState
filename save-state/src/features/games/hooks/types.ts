export type GameStatus = "playing" | "backlog" | "completed";

export type Game = {
    id: string;
    title: string;
    platform: string;
    genre: string;
    status: GameStatus;
    progress: number;
    createdAt: string;
};