import "./characterTile.css";

export default function CharacterTile({ character }) {
    return (
        <div key={character.id} className="tile">
            <section className="charCard">
                <p className="charInfo">{character.name}</p>
                <p className="charInfo">class: {character.class.name}</p>
            </section>
        </div>
    )
}