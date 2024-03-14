import Image from 'next/image';
import Logo from '../../images/BgLogo.png';
import Link from 'next/link';
import GenresMenu from '../games/Genres';

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="w-32 h-auto" />
      </Link>

      <GenresMenu />
    </div>
  );
}
