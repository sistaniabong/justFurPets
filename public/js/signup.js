const signUpFormHandler = async (event) => 
{
  // TODO: Add a comment describing the functionality of this statement
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  const email = document.querySelector('#email-signUp').value.trim();
  const password = document.querySelector('#password-signUp').value.trim();
  const verifyPassword = document.querySelector('#password-verify').value.trim();

  if (email && password === verifyPassword) 
  {
    // TODO: Add a comment describing the functionality of this expression
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

$("#createAcct").click(signUpFormHandler)
