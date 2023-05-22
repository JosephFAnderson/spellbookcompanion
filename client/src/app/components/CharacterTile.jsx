import "./characterTile.css";
import Link from "next/link";

export default function CharacterTile({ character }) {
    return (
        <div className="tile">
            <Link href={`./characters/${character.id}`} className="charCard">
                <p className="charInfo">{character.name}</p>
                <p className="charInfo">class: {character.class.name}</p>
            </Link>
        </div>
    )
}