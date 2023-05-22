"use client";
import { redirect } from 'next/navigation';
import { useUserContext } from "../context/user";
import CharacterTile from "../components/CharacterTile";

export default function CharactersPage() {
    const [user, setUser] = useUserContext();

    return (
        <>
        { !user ? 
            (
                redirect("/login")
            ) :        
            (
                <div className="abc">
                    <h1>Welcome {user.username}</h1>
                    {user.characters.map(char => {
                        return(
                            <CharacterTile key={char.id} character={char} />
                        )                
                    })}
                    <button className="button">Create Character</button>
                </div>
            )
        
        }  
        </>      
    )
}