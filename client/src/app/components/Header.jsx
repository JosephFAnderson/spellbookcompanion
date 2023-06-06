"use client"
import Link from "next/link";
import { useState } from "react";
import { useUserContext } from "../context/user";


export default function Header() {
    const [user, setUser] = useUserContext();
    const [query, setQuery] = useState("");

    // reset UserProvider when user logs out
    const handleLogout = () => {
        setUser();
    }

    const handleSearch = () => {
        setQuery("");
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
                <div className="searchBar flex justify-center">
                    <input type="text" placeholder="Spell name" className="text-black" value={query} onChange={event => setQuery(event.target.value)}></input>
                    <Link onClick={handleSearch} href={`/spell?name=${query}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 bg-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    )
}


