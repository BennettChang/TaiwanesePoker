import { NextResponse, NextRequest } from "next/server";

export const gameData: GameInstance[] = [];

function create_random_string(string_length:number):string {
    var random_string = "";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < string_length; i++) {
      random_string += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return random_string;
}

// API route to store data
export async function POST() {
    let gameId: string = create_random_string(5); // add logic to remove duplicates
    let players: Player[] = [];
    let gameObject: GameInstance = {gameId, players};
    gameData.push(gameObject); 
    console.log(gameData);
    return NextResponse.json({
        gameId: gameId
    })
}

export function getGames() {
    return gameData;
}
