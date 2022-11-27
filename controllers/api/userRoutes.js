const router = require('express').Router();
const { User } = require('../../models');

//Creating a UserName

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            req.session.logged_in = true;
        
            res.status(200).json({ user: newUser, message: 'Thank you for signing up!' });
        });
        return;
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//Login parameters & statuses

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.userName
            }
        });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect User Name. Try again' });            
            return;
        }
        
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password. Try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in= true;
            res.status(200).json({ user: userData, message: 'Successfully logged in!' });
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Login out

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
        res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;