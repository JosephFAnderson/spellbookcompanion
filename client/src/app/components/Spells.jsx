export default function Spells({ level, spells }) {

    console.log(spells);

    return (
        <div className="card">
            <h2 className="levelHeaader">Level {level}</h2>
            <section className="spellCard">
                <ul className="spellList">
                    {spells.map( spell => {
                        return (
                            <li key={spell.id}>{spell.name}</li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}