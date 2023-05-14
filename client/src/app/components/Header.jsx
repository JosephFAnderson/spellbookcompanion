"use client"
import Link from 'next/link';
import { useUserContext } from "../context/user";


export default function Header() {
    const [user, setUser] = useUserContext();

    // reset UserProvider when user logs out
    const handleLogout = () => {
        setUser();
    }


    return (
        <header className="header">
            <div className="headerContainer">
                <div className="logo">
                    <Link href="/">Spellbook Companion</Link>
                </div>
                <div className="links">
                    { !user ? 
                        (
                            <>
                                <Link href="/login">Login</Link>
                                <Link href="/signup">Sign Up</Link>
                            </>                            
                        ) : 
                        (
                            <>
                                <Link href="/characters">Characters</Link>
                                <Link onClick={handleLogout} href="/login">Logout</Link>
                            </>
                        )
                    }                      
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Spell name"></input>
                </div>
            </div>
        </header>
    )
}