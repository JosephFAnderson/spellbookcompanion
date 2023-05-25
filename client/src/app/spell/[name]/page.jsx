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
            <section className="spellCard">
                <h1 className="spellName">{spell.name}</h1>
                <p className="source">({spell.sourcebook})</p>
                <p className="schools">
                    <span>
                        {spell.schools.map( school => {
                            return <span key={school.name}>{school.name} </span>
                        })}
                    </span>
                    {spell.subschools.length !== 0 ?
                        <span>
                        (
                        {spell.subschools.map( subschool => {
                            return <span key={subschool.name}>{subschool.name}</span>
                        })}
                        )
                        </span> : <></>
                    }                   
                    {spell.descriptors.length !== 0 ? 
                        <span className="descriptors">
                            [
                                {spell.descriptors.map( descriptor => {
                                    return <span className="descriptor" key={descriptor.name}>{descriptor.name}</span>
                                })}
                            ]
                        </span> : <></>
                        }                  
                </p>
                <p className="level">Level: {
                    spell.classes.map( clas => {
                        return <span key={clas.name} className="classLevel">{clas.name} {clas.class_spells.level}, </span>
                    })} 
                    {
                        spell.domains.map( domain => {
                            return <span key={domain.name} className="domainLevel">{domain.name} {domain.domain_spells.level}, </span>
                        })
                    }
                </p>
                <p className="components">Components: {spell.components}</p>
                <p className="castTime">Cast Time: {spell.castingTime}</p>
                <p className="range">Range: {spell.range}</p>
                {spell.target ? <p className="target">Target: {spell.target}</p> : <></>}
                {spell.area ? <p className="area">Area: {spell.range}</p> : <></>}
                {spell.effect ? <p className="effect">Effect: {spell.effect}</p> : <></>}
                <p className="duration">Duration: {spell.duration}</p>
                <p className="savingThrow">Saving Throw: {spell.savingThrow}</p>
                <p className="spellResistance">Spell Resistance: {spell.spellResistance}</p>
                <section className="description">{spell.description}</section>
                {spell.materials ? <p className="materials">Materials: {spell.materials}</p> : <></>}
            </section>
        </>
    )
    
}