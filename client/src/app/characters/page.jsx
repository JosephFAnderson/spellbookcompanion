"use client";
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useUserContext } from "../context/user";
import CharacterTile from "../components/CharacterTile";
import NewCharacter from '../components/NewCharacter';

export default function CharactersPage() {
    const [user, setUser] = useUserContext();
    const [isNew, setIsNew] = useState(false);

    const handleNewCharacter = () => {
        setIsNew(true);
    }

    return (
        <>
        { !user ? 
            (
                redirect("/login")
            ) :        
            (
                <div className="h-full flex flex-col items-center">
                    <h1>Welcome {user.username}</h1>
                    { isNew ? 
                        <NewCharacter addCharacer={setIsNew}/> :
                        <></>
                    }
                    {user.characters.map(char => {
                        return(
                            <CharacterTile key={char.id} character={char} />
                        )                
                    })}
                    <button className="button" onClick={handleNewCharacter}>Create Character</button>
                </div>
            )
        
        }  
        </>      
    )
}