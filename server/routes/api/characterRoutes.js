const router = require('express').Router();
const { Character, Class } = require('../../models');

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
        res.status(200).json(character);
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
            include: {
                model: Class,
                attributes: {
                    exclude: ["id"]
                }
        }});

        if(!character) {
            res.status(400).json("Character not found");
            return;
        }

        res.status(200).json(character);
    }catch (err) {
        res.status(500).json("Error");
    }
})

module.exports = router;
