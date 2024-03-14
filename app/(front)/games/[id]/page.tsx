import gameService from '@/lib/services/gameService';
import Image from 'next/image';
import Link from 'next/link';

export default async function GameDetails({
  params,
}: {
  params: { id: number };
}) {
  const game = await gameService.getGamesById(params.id);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <div className="my-2 mx-2">
        <Link href="/" className="hover:text-white">
          Return to home
        </Link>
      </div>

      <div className="flex flex-col container mx-auto items-center justify-center py-6 vh-100 gap-2">
        <h1 className="text-4xl text-white py-2">{game.name}</h1>
        <Image
          src={game.background_image}
          alt={game.name}
          width={640}
          height={640}
          sizes="100vh"
          style={{ objectFit: 'cover' }}
        />
        <div className="py-2">
          <p className="text-white"><span className='text-yellow-400'>Rating: </span>{game.rating}</p>
          <p className="text-white"><span className='text-yellow-400'>Released: </span> {game.released}</p>
          <p className="text-white">
            <span className='text-yellow-400' >Genres: </span> {game.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p className="text-white">
            <span className='text-yellow-400'>Platforms: </span>
            {game.platforms
              .map((platform) => platform.platform.name)
              .join(', ')}
          </p>

          <p className='text-yellow-400'>Description:</p>
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: game.description }}
          ></p>
        </div>
      </div>
    </div>
  );
}
