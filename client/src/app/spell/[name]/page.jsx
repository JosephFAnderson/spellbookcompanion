"use client"

async function getSpell(name) {
    const response = await fetch(`http://localhost:3001/api/spells?name=${name}`);
    const spell = await response.json();
    console.log(spell);
    return spell[0];
}

export default async function SpellPage({ params: { name } }) {
    const spellName = name.replaceAll("-", "+");
    const spell = await getSpell(spellName);
    console.log(spell);

    return (
        <>
            <div>
                <h1 className="spellName">{spell.name}</h1>
                <p className="source">({spell.sourcebook})</p>
                {spell.schools.map( school => {
                    return <p>{school.name}</p>
                })}
                <p>(
                    {spell.subschools.map( subschool => {
                        return <span>{subschool.name}</span>
                    })}
                )
                </p>
                
            </div>
        </>
    )
    
}