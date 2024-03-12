import Image from 'next/image';
import Logo from '../images/BgLogo.png';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-between p-4">
                <div>
                    <Link href="/">
                        <Image src={Logo} alt="Logo" className="w-32 h-auto" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
