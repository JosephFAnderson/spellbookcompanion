import { useState, useEffect } from "react"
import { useUserContext } from "../context/user";


const classData = [
    {
        "id": 1,
        "name": "Adept"
    },
    {
        "id": 2,
        "name": "Apostle of Peace"
    },
    {
        "id": 3,
        "name": "Ardent"
    },
    {
        "id": 4,
        "name": "Artificer"
    },
    {
        "id": 5,
        "name": "Assassin"
    },
    {
        "id": 6,
        "name": "Bard"
    },
    {
        "id": 7,
        "name": "Beastmaster"
    },
    {
        "id": 8,
        "name": "Beguiler"
    },
    {
        "id": 9,
        "name": "Beloved of Valarian"
    },
    {
        "id": 10,
        "name": "Blackguard"
    },
    {
        "id": 11,
        "name": "Blighter"
    },
    {
        "id": 12,
        "name": "Bone Collector"
    },
    {
        "id": 13,
        "name": "Champion of Gwynharwyf"
    },
    {
        "id": 14,
        "name": "Cleric"
    },
    {
        "id": 15,
        "name": "Court Herald"
    },
    {
        "id": 16,
        "name": "Crusader"
    },
    {
        "id": 17,
        "name": "Death Delver"
    },
    {
        "id": 18,
        "name": "Death Master"
    },
    {
        "id": 19,
        "name": "Demonologist"
    },
    {
        "id": 20,
        "name": "Disciple of Thrym"
    },
    {
        "id": 21,
        "name": "Divine Bard"
    },
    {
        "id": 22,
        "name": "Dread Necromancer"
    },
    {
        "id": 23,
        "name": "Druid"
    },
    {
        "id": 24,
        "name": "Duskblade"
    },
    {
        "id": 25,
        "name": "Ebonmar Infiltrator"
    },
    {
        "id": 26,
        "name": "Emissary of Barachiel"
    },
    {
        "id": 27,
        "name": "Exalted Arcanist"
    },
    {
        "id": 28,
        "name": "Fatemaker"
    },
    {
        "id": 29,
        "name": "Harper Scout"
    },
    {
        "id": 30,
        "name": "Hathran"
    },
    {
        "id": 31,
        "name": "Healer"
    },
    {
        "id": 32,
        "name": "Hexblade"
    },
    {
        "id": 33,
        "name": "Hoardstealer"
    },
    {
        "id": 34,
        "name": "Hunter of the Dead"
    },
    {
        "id": 35,
        "name": "Jester"
    },
    {
        "id": 36,
        "name": "Justic of Weald and Woe"
    },
    {
        "id": 37,
        "name": "Knight of the Chalice"
    },
    {
        "id": 38,
        "name": "Knight of the Weave"
    },
    {
        "id": 39,
        "name": "Merchant Prince"
    },
    {
        "id": 40,
        "name": "Mortal Hunter"
    },
    {
        "id": 41,
        "name": "Nar Demonbinder"
    },
    {
        "id": 42,
        "name": "Nentyar Hunter"
    },
    {
        "id": 43,
        "name": "Paladin"
    },
    {
        "id": 44,
        "name": "Prime Underdark Guide"
    },
    {
        "id": 45,
        "name": "Ranger"
    },
    {
        "id": 46,
        "name": "Runescarred Berserker"
    },
    {
        "id": 47,
        "name": "Savant"
    },
    {
        "id": 48,
        "name": "Sha'ir"
    },
    {
        "id": 49,
        "name": "Shaman"
    },
    {
        "id": 50,
        "name": "Shugenja"
    },
    {
        "id": 51,
        "name": "Slayer of Domiel"
    },
    {
        "id": 52,
        "name": "Sorcerer"
    },
    {
        "id": 53,
        "name": "Telflammar Shadowlord"
    },
    {
        "id": 54,
        "name": "Thayan Slaver"
    },
    {
        "id": 55,
        "name": "Trapsmith"
    },
    {
        "id": 56,
        "name": "Urban Druid"
    },
    {
        "id": 57,
        "name": "Vassal of Bahamut"
    },
    {
        "id": 58,
        "name": "Vigilante"
    },
    {
        "id": 59,
        "name": "Warmage"
    },
    {
        "id": 60,
        "name": "Wizard"
    },
    {
        "id": 61,
        "name": "Wu Jen"
    }
]

export default function NewCharacter({ addCharacer }) {
    const [user, setUser] = useUserContext();
    const [name, setName] = useState("");
    const [classId, setClassId] = useState("");
    const [classOptions, setClassOptions] = useState(classData);

    const handleSave = () => {
        fetch("http://localhost:3001/api/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                user_id: user.id,
                class_id: classId
            })
        })
            .then( res => res.json() )
            .then( character => {
                character.class = {name: classOptions[classId-1].name};
                console.log(character);
                setUser({...user, characters: [...user.characters, character]});
                setName("");
                setClassId("");

                // This removes the new character component from user view
                addCharacer(false);
            })

        // setUser({...user, characters: [...user.characters, {name: "Wedge", id: "3", class: {name: "Artificer"}}]})
        
        
    }

    return(
        <div className="flex flex-col w-4/5 align-around">
            <input className="text-black m-2" value={name} placeholder="Character Name..." onChange={ (event) => {setName(event.target.value)}}></input>
            <select onChange={ (event) => {setClassId(event.target.value)}} className="text-black m-2" name="classId" id="classId" placeholder="Select Class">
                <option hidden>Select A Class</option>
                { classOptions.map( singClass => {
                    return <option key={singClass.id} value={singClass.id}>{singClass.name}</option>
                })}
            </select>
            <button onClick={handleSave}>Create</button>
        </div>        
    )
}