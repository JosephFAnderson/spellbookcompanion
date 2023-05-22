import Spells from "./Spells";

async function fetchCharacter(id) {
    const response = await fetch(`http://localhost:3001/api/characters/${id}`)
    const character = await response.json();

    return character;
}

async function sortSpells(character) {
    const sortedSpells = [ [], [], [], [], [], [], [], [], [], [] ]
    const charClass = character.class.name;
    const spells = character.spells;

    await spells.forEach(spell => {
        for(let i = 0; i < spell.classes.length; i++) {
            if(spell.classes[i].name == charClass){
                sortedSpells[spell.classes[i].class_spells.level].push(spell);
            }
        }
    })

    return sortedSpells;
}

const Character = async ({ id }) => {
    const character = await fetchCharacter(id);
    const sortedSpells = await sortSpells(character);
    console.log(sortedSpells);

    return (
        <div>
            <h1>{character.name}</h1>
            {sortedSpells.map((spells, index) => {
                console.log("spells", spells);
                console.log("index", index);
                return <Spells level={index} spells={spells} />
            })}            
        </div>
    )
}

export default Character;