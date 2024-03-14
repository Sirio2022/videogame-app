import fetchGenres from '@/lib/services/genresService';
import { Genres } from '@/lib/models/GenresModel';
import Link from 'next/link';

export default async function GenresMenu() {
    
  const genres = await fetchGenres.getGenres();

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Genres
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {genres?.map((genre: Genres) => (
          <li key={genre.id}>
            <Link href={`/genres/${genre.slug}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
