const router = require('express').Router();
const { Character, Class, CharacterSpell, Spell, Domain } = require('../../models');

/* Create a new character
 * Required in req.body
 *  - name: STRING
 *  - user_id: INT
 *  - class_id: INT
*/
router.post('/', async (req, res) => {
    try{
        const { name, user_id, class_id } = req.body;

        if(!name || !user_id || !class_id){
            res.status(400).json("Missing information");
            return;
        }

        const character = await Character.create( {name, user_id, class_id} );
        const charRes = {name: character.name, id: character.id}
        
        res.status(200).json(charRes);
    }catch (err) {
        res.status(500).json("Error");
    }
})

/* Return a specific character
 * Uses req.parms.id to query database for specific character
 * Joins the classes table to grab class.name
*/
router.get('/:id', async (req, res) => {
    try{
        const character = await Character.findOne({
            where: {
                id: req.params.id 
            },
            include: [{
                model: Class,
                attributes: {
                    exclude: "id"
                }
            }, {
                model: Spell,
                include: [{
                    model: Class,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: ["level"]
                    }
                }, {
                    model: Domain,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: ["level"]
                    }
                }]
            }]    
        });

        if(!character) {
            res.status(400).json("Character not found");
            return;
        }

        res.status(200).json(character);
    }catch (err) {
        res.status(500).json("Error");
    }
})

/* Updates a character's known spells
 *
 *
*/
router.put('/:id', async (req, res) => {
    try {
        const character_id = req.params.id;
        const spell_id = req.body.spell_id;

        const data = await CharacterSpell.create({ character_id, spell_id });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
