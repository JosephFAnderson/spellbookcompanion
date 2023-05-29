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
                    <input type="text" placeholder="Spell name" onChange={event => setQuery(event.target.value)}></input>
                    <Link href={`/spell?name=${query}`}>Search</Link>
                </div>
            </div>
        </header>
    )
}