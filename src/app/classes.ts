interface Player {
    name: string;
    startBalance: number;
    currentBalance: number;
}

interface GameInstance {
    gameId: string;
    players: Player[];
}