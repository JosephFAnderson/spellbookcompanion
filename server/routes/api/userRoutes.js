const router = require('express').Router();
const { Op } = require('sequelize');
const { User } = require('../../models');

/* Create a new user account
 * Required in req.body
 *  - username: STRING
 *  - email: STRING
 *  - password: STRING (min 8 characters)
*/
router.post('/signup', async (req, res) => {
    try{
        const { username, email, password } = req.body;

        // Check if username or email already exist in database
        const user = await User.findAll({
            where: { 
                [Op.or]: [{username}, {email}]
            }
        });

        // If no data is returned and password is 8+ characters long create new account. Otherwise do not.
        if(user.length === 0 && password.length >= 8){
            const newUser = await User.create({username, email, password});
            res.status(200).json( {username: newUser.username} );
        }else {
            res.status(400).json("Account already exist using provided information");
        }
    }catch (err) {
        res.status(500).send("Error");
    }
});

/* Route to check user provided credentials and if correct provide the data back.
 * Required in req.body
 *  - username: STRING
 *  - password: STRING
*/
router.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username }});
        
        if(!user){
            res.status(400).json("Invalid username or password");
        }

        const valid = await user.validPassword(password);

        if(valid) {

            const userData = {
                id: user.id,
                username: user.username,
                email: user.email
            };

            // JWT will be returned in later!
            res.status(200).json(userData);
            return
        }

        res.status(400).json("Invalid username or password");
    }catch (err) {
        console.log(err);
        res.status(500).json("Error");
    }
})

module.exports = router;