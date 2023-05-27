import Link from "next/link";

export default function Spells({ level, spells }) {
    return (
        <div className="card">
            <h2 className="levelHeaader">Level {level}</h2>
            <section className="spellCard">
                <ul className="spellList">
                    {spells.map( spell => {
                        const urlSpell = spell.name.replaceAll(" ", "-");
                        return (
                            <li key={spell.id}><Link href={`./spell/${urlSpell}`}>{spell.name}</Link></li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}