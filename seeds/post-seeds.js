const { Post } = require('../models');

const postData = [
  {
    title: 'My First Blog Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lorem vitae arcu rhoncus bibendum. Nam sed ligula id augue tristique lobortis. Suspendisse potenti. Sed ultrices, est eget tempus lobortis, nisl massa vulputate mi, ac tristique justo leo a nibh. Sed laoreet nisi vel elit ullamcorper faucibus. Aenean sit amet massa semper, luctus odio non, iaculis enim. Nulla facilisi. Aliquam euismod tortor justo, id eleifend tellus varius ac. Sed ut quam dui. Nunc viverra pharetra vestibulum. Sed ut sapien quis mauris blandit efficitur.',
    user_id: 1
  },
  {
    title: 'How to Build a Website',
    body: "In this tutorial, we'll show you how to build a website using HTML, CSS, and JavaScript. First, create a new HTML file and add the basic structure of the page, including the head and body tags. Next, create a CSS file and style the page using CSS selectors and properties. Finally, add JavaScript code to make the page interactive, such as by adding a click event listener to a button. With these steps, you can create a basic website from scratch.",
    user_id: 2
  },
  {
    title: '10 Tips for Better Time Management',
    body: 'Time management is a crucial skill for success in any field. Here are 10 tips to help you manage your time more effectively: 1. Prioritize your tasks. 2. Set realistic goals. 3. Use a planner or calendar. 4. Minimize distractions. 5. Take breaks when needed. 6. Delegate tasks when possible. 7. Stay organized. 8. Learn to say no. 9. Practice good habits, such as getting enough sleep and exercise. 10. Continuously evaluate and adjust your time management strategies.',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;