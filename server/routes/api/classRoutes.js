const router = require('express').Router();
const { Class } = require('../../models');

router.get("/", async (req, res) => {
    try{
        const classData = await Class.findAll();

        res.status(200).json(classData);
    } catch ( err ) {
        res.status(500).json(err);
    }
})

module.exports = router;