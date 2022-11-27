const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup');
    const password = document.querySelector('#password-signup');
  
    if (username && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify ({    
            username: username.value.trim(), 
            password: password.value.trim()
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Login failed');
      }
    }
  };
  
  document
    .querySelector('#frmSignup')
    .addEventListener('submit', signupFormHandler);