const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: [ 'name' ],
        },
        {
          model: Comment,
          attributes: [ 'comment' ],
          include: [
            {
              model: User,
              attributes: [ 'name' ]
            }
          ]
        },
      ]
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;