const loginFormHandler = async (event) => 
{
  event.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const verifyPassword = document.querySelector('#password-verify').value.trim();
  const signUp = document.querySelector('#password-login');

  if (email && password === verifyPassword) 
  {
    const response = await fetch('/api/users/signup', 
    {
      method: 'POST',
      body: JSON.stringify({ user_name:email, password:password }),
      headers: { 'Content-Type': 'application/json' },
      
    })
    if (response.ok) 
    {
      document.location.replace('/login');
    
    } else 
    {
      alert('Failed to signup');
    }
  }
};
document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);
