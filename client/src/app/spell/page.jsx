"use client"
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SpellsQueryPage() {    
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const [spells, setSpells] = useState([]);
    const [isLoading, setLoading] = useState(false);          

    useEffect( () => {
        setLoading(true);
        const spellName = name.replaceAll("-", "+");
        fetch(`http://localhost:3001/api/spells?name=${spellName}`)
            .then( res => res.json() )
            .then( spell => {
                if(spell.length === 0) {
                    setSpells(null);
                } else {
                    setSpells(spell);
                }
                
                setLoading(false);
            })
            .catch( err => {
                setSpells(null);
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if(!spells) return <p>No spells found</p>
    if(spells.length === 1) redirect(`/spell/${name}`)

    return (
        <div className="card">
            <h2>Spells: </h2>
            <ul>
                {spells.map( spell => {
                    const urlSpell = spell.name.replaceAll(" ", "-");
                    return (
                        <li key={spell.id}><Link href={`./spell/${urlSpell}`}>{spell.name}</Link></li>
                    )
                    })
                }
            </ul>        
        </div>
    )
}