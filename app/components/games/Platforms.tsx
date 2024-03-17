'use client';

import fetchPlatforms from '@/lib/services/platformsService';
import { Platforms } from '@/lib/models/PlatformsModel';
import { useEffect, useState } from 'react';
import useGames from '@/lib/hooks/useGamesStore';

export default function PlatformsMenu() {
  const [platforms, setPlatforms] = useState<Platforms[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(
    null
  );

  const { setFilteredGames, games } = useGames();

  useEffect(() => {
    const fetchPlatformsData = async () => {
      const response = fetchPlatforms.getPlatforms();
      const data = await response;
      setPlatforms(data);
    };

    fetchPlatformsData();
  }, []);

  const platformHandler = (platform: Platforms) => {
    setSelectedPlatform(platform);
    if (platform) {
      const filtered = games.filter((game) =>
        game.platforms.map((p) => p.platform.name).includes(platform.name)
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Platforms
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {platforms?.map((platform: Platforms) => (
          <li key={platform.id}>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => platformHandler(platform)}
            >
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
