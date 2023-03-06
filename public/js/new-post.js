const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#new-post-title').value.trim();
  const body = document.querySelector('#new-post').value.trim();

  await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
