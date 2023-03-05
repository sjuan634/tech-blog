const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    if (name && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        localStorage.setItem('back', document.referrer);
        const back = localStorage.getItem('back');
        location.href = back;      
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
  