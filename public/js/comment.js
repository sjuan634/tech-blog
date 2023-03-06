const commentFormHandler = async function(event) {
  event.preventDefault();

  const post_id = document.querySelector('#post-title').dataset.postId;
  const comment = document.querySelector('#new-comment-input').value.trim();

  if (comment) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);