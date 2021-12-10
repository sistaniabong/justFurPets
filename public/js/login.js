const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const signUp = document.querySelector('#password-login')

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user_name:email, password:password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/pet');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
  // $("#signUp").click(function () 
  // { 
  //   document.location.replace('/signuppage');
  //   console.log("buttonclicked")
  // });

const signUpFormHandler = async (event) => 
{
  event.preventDefault();

  const email = document.querySelector('#email-signUp').value.trim();
  const password = document.querySelector('#password-signUp').value.trim();
  const verifyPassword = document.querySelector('#password-verify').value.trim();

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
  

$( "#dialog" ).dialog({ autoOpen: false });
$( "#signUp" ).click(function() 
{
  $( "#dialog" ).dialog( "open" );
});
$("#createAcct").click(signUpFormHandler)
