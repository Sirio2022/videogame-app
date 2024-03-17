import Image from 'next/image';
import Logo from '../../images/BgLogo.png';
import Link from 'next/link';
import GenresMenu from '../games/Genres';
import PlatformsMenu from '../games/Platforms';
import SearchBox from '../searchbox/SearchBox';

export default function Header() {
  return (
    <div className="flex flex-col g-4 md:flex-row md:justify-between md:items-center">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="w-32 h-auto" />
      </Link>

      <SearchBox />

      <div>
        <PlatformsMenu />

        <GenresMenu />
      </div>
    </div>
  );
}
