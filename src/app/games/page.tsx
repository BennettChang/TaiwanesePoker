// 'use client';
// Shows a list of games

import { getGames } from '../api/gameData/route';

export default function ViewGame() {
    const keysList: string[] = getGames().map(gameInstance => gameInstance.gameId);
    console.log(keysList);
    return (
    <div>
      {keysList.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </div>);
}