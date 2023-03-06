const postTitleEl = document.querySelector('#post-title');
const post_id = postTitleEl.dataset.postId;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = postTitleEl.value.trim();
  const body = document.querySelector('#post').value.trim();

  await fetch(`/api/posts/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
