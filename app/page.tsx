import { Metadata } from 'next';

import gameService from '@/lib/services/gameService';
import GameItem from './components/games/GameItem';
import LandingInfo from './components/landinginfo/LandingInfo';
import Pagination from './components/pagination/Pagination';


export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default async function Home() {
  
  const games = await gameService.getGames();

  return (
    <div className="flex flex-col items-center justify-between p-6">
      <LandingInfo />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-8">
        {Array.isArray(games) &&
          games.map((game) => <GameItem key={game.id} game={game} />)}
      </div>

      <Pagination />
     
    </div>
  );
}
