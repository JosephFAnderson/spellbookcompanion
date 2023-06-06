const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const spellRoutes = require('./spellRoutes');
const classRoutes = require('./classRoutes');

router.use('/users', userRoutes);
router.use('/class', classRoutes);
router.use('/characters', characterRoutes);
router.use('/spells', spellRoutes);

module.exports = router;