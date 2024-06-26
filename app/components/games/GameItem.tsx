import { Game } from '@/lib/models/GameModel';
import Image from 'next/image';
import Link from 'next/link';

export default function GameItem({ game }: { game: Game }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4 self-start">
      <Link href={`/games/${game.id}`}>
        <Image
          src={game.background_image}
          alt={game.name}
          width={300}
          height={200}
          className="object-cover w-full h-48"
        />
      </Link>

      <div className="card-body">
        <h2 className="card-title font-normal">
          <Link href={`/games/${game.slug}`}>{game.name}</Link>
        </h2>
        <div className="text-xs text-base-content mt-2">
          <p className="mb-1">Genres:</p>
          {game.genres.map((genre) => (
            <span key={genre.id} className="mr-2">
              {genre.name}
            </span>
          ))}
        </div>
        <div className="text-xs text-base-content mt-2">
          <p className="mb-1">Platforms:</p>
          {game.platforms.map((platform) => (
            <span key={platform.platform.id} className="mr-2">
              {platform.platform.name}
            </span>
          ))}
        </div>

        <div className="text-xs text-base-content mt-2">
          <p className="mb-1">Realese Date:</p>
          {game.released}
        </div>
        <p className="text-xs text-base-content mt-2">Rating: {game.rating}</p>
      </div>
    </div>
  );
}
