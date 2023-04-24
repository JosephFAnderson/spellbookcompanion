const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const spellRoutes = require('./spellRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/spells', spellRoutes);

module.exports = router;