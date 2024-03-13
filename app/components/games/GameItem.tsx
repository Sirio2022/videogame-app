import { Game } from '@/lib/models/GameModel';
import Image from 'next/image';
import Link from 'next/link';

export default function GameItem({ game }: { game: Game }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/games/${game.slug}`}>
          <Image
            src={game.background_image}
            alt={game.name}
            width={300}
            height={200}
            className="object-cover w-full h-48"
          />
        </Link>
      </figure>

      <div className="card-body">
        <h2 className="card-title font-normal">
          <Link href={`/games/${game.slug}`}>{game.name}</Link>
        </h2>
        <p className="text-xs text-base-content mt-2">
          {game.genres.join(', ')}
        </p>
        <p className="text-xs text-base-content mt-2">
          {game.platforms.join(', ')}
        </p>
        <p className="text-xs text-base-content mt-2">{game.releaseDate}</p>
        <p className="text-xs text-base-content mt-2">Rating: {game.rating}</p>
      </div>
    </div>
  );
}
