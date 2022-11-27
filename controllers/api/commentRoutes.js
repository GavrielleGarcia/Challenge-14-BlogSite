const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Authorization - Requires Username&Comments

router.get('/new/:id', withAuth, async (req, res) => {
    try {
        const postbyKey = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],                    
                },
            ],
        });
        const post = postbyKey.get({ plain: true });

        res.render('comment', {
            layout: 'dashboard',
            post
        });
//API Error number
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
} );

//Comments without Authorization

router.post('/:id', withAuth, async (req, res) => {
    try {
        await Comment.create({
            body: req.body.content,
            post_id: req.params.id,
            user_id: req.session.user_id,
        });

        const postbyKey = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],                    
                },
            ],
        });
        const post = postbyKey.get({ plain: true });

        console.log('TW0');
        console.log(post.comments[0]);
        console.log(post.comments[0].user);
        console.log(post.comments[0].user.username);
        

        res.render('comment', {
            layout: 'dashboard',
             post
        });
//API Error number
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;