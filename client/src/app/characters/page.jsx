"use client";
import { useUserContext } from "../context/user";
import CharacterTile from "../components/CharacterTile";

export default function Characters() {
    const [user, setUser] = useUserContext();
    console.log(user);

    return (
        <div className="abc">
            <h1>Welcome {user.username}</h1>
            {user.characters.map(char => {
                console.log(char);
                return(
                    <CharacterTile character={char} />
                )                
            })}
            <button className="button">Create Character</button>
        </div>
    )
}