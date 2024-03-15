import { Metadata } from 'next';

import LandingInfo from './components/landinginfo/LandingInfo';
import Games from './components/games/Games';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-6">
      <LandingInfo />

      <Games />
    </div>
  );
}
