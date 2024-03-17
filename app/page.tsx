import { Metadata } from 'next';

import LandingInfo from './components/landinginfo/LandingInfo';
import Games from './components/games/Games';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default async function Home() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <LandingInfo />

      <Games />
    </div>
  );
}
