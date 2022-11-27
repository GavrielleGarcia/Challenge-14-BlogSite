const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (userName && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
//Response when logging in
      if (response.ok) {    
        document.location.replace('/dashboard');
      } else {
        alert('Failed to login');
      }

    }
  };
  
  document
  .querySelector('#frmLogin')
    .addEventListener('submit', loginFormHandler);