const { Comment } = require('../models');

const commentData = [
  {
    comment: 'Great post! Thanks for sharing.',
    user_id: 3,
    post_id: 1
  },
  {
    comment: 'I found this article really helpful. Keep up the good work!',
    user_id: 3,
    post_id: 2
  },
  {
    comment: "I disagree with some of the points in this post. Here's why...",
    user_id: 2,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;