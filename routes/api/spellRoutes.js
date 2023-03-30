const router = require('express').Router();
const { Spell, Class, Domain, School, Subschool, Descriptor } = require('../../models');

/* Routes to get all spells
 * When used with no query parameters will grab all spells from database
 * Allowed query params:
 * - class
 * - domain
 * - school
 * - descriptor
*/
router.get('/', async (req, res) => {
    try{
        const filter = req.query;

        // Gets all spells when no filters are applied
        if(Object.keys(filter).length === 0){
            const spells = await Spell.findAll({
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
                }, {
                    model: School,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }, {
                    model: Subschool,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }, {
                    model: Descriptor,
                    attributes: {
                        exclude: "id"
                    },
                    through: {
                        attributes: []
                    }
                }]
                });
            res.status(200).json(spells);
            return;
        }
    }catch (err) {
        res.status(500).json("Error");
    }
});

module.exports = router;