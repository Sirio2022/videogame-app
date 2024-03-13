import { Metadata } from 'next';
import LandingInfo from './components/LandingInfo';
import gameService from '@/lib/services/gameService';
import GameItem from './components/games/GameItem';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default async function Home() {
  const games = await gameService.getGames();
  console.log(games);
  

  return (
    <main className="flex flex-col items-center justify-between p-6">
      <LandingInfo />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-flow-cols-6">
        {Array.isArray(games) &&
          games.map((game) => <GameItem key={game.id} game={game} />)}
      </div>
    </main>
  );
}
