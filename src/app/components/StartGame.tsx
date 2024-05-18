'use client';

import { useRouter } from 'next/navigation';
import styles from "../page.module.css";

export default function StartGame( ) {
    const router = useRouter();
    const handleClick = async () => {

      //send request to backend
      let response: Response = await fetch('../api/gameData', {
        method: 'POST'
      })
      if(response.ok) {
        
        const data = await response.json();
        const {gameId, players} = data;
        const dynamicLink = '/games/' + gameId;
        router.push(dynamicLink);
      }
    };

    return (<a
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}>
        <h2>
          Create Game <span>-&gt;</span>
        </h2>
        <p>
          Create a new Game.
        </p>
      </a>);
}