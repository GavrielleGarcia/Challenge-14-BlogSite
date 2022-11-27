const router = require('express').Router();
const { User, Post } = require('../../models');


//Creating a post
router.post('/', async (req, res) => {
    try {
        await Post.create({
            title: req.body.title,
            body: req.body.content,
            user_id: req.session.user_id
        });

        const posts = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [User],
            order: [['created_at', 'DESC']],
        });

        const userPosts = posts.map((post) => post.get({ plain:true }));
        res.render('userPost', {
            layout: 'dashboard',
            userPosts,
            logged_in: req.session.logged_in,
        });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//Updating a post

router.put('/:id', async (req, res) => {
    try {
        await Post.update({
            title: req.body.title,
            body: req.body.content,
        }, 
        {
            where: {
                id: req.params.id,
            }
        }); 
        res.status(200).end();               

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


//Deleting a post

router.delete('/:id', async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.status(200).end();
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;