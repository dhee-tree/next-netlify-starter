import Link from 'next/link';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase';
import Image from 'next/image';
//import Logo from './pcLogo.jpg';
// import logo from './pcLogo.jpg';

export default function Nav() {

    const [user] = useAuthState(auth);

    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <Link href="/">
                    <Image 
                    src='/images/pcLogo.jpg' 
                    alt="logo" 
                    width={318}
                    height={159}
                    />
                                     
                </Link>
                
                <ul>
                    {!user && (
                    <Link href="/auth/login">
                        <a></a>
                    </Link>
                    )}
                    {user && (
                        <div>
                            {/* <p>Welcome {user.displayName}</p> */}
                            <Link href="/dashboard">
                                <picture>
                                    <source srcSet={user.photoURL} type="image/webp" />
                                    <img src={user.photoURL} alt="Landscape picture" className="w-50 rounded-circle" referrerPolicy='no-referrer'/>
                                </picture>
                            </Link>
                        </div>
                    )}
                </ul>
            </div>
        </nav>
    );
}