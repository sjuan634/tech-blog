    const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#new-username-input').value.trim();
    const password = document.querySelector('#new-password-input').value.trim();
  
    if (name && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        localStorage.setItem('back', document.referrer);
        const back = localStorage.getItem('back');
        location.href = back;  
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);