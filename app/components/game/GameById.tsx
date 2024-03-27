import Image from 'next/image';
import Link from 'next/link';

export default function GameById({ game }: { game: any }) {
  return (
    <div>
      <div className="container mx-auto items-center justify-center">
        <div className="mx-2">
          <Link href="/" className=" text-white hover:text-blue-400">
            Return to home
          </Link>
        </div>

        <div>
          <h1 className="text-4xl text-white py-2">{game.name}</h1>
          <Image
            src={game.background_image}
            alt={game.name}
            width={640}
            height={640}
            sizes="100vh"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-white">
            <span className="text-yellow-400">Rating: </span>
            {game.rating}
          </p>
          <p className="text-white">
            <span className="text-yellow-400">Released: </span> {game.released}
          </p>
          <p className="text-white">
            <span className="text-yellow-400">Genres: </span>{' '}
            {game.genres.map((genre: any) => genre.name).join(', ')}
          </p>
          <p className="text-white">
            <span className="text-yellow-400">Platforms: </span>
            {game.platforms
              .map((platform: any) => platform.platform.name)
              .join(', ')}
          </p>

          <p className="text-yellow-400">Description:</p>
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: game.description }}
          ></p>
        </div>
      </div>
    </div>
  );
}
