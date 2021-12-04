createPetSubmitButton=document.querySelector('.createPetSubmit');
createOwnerModal=document.querySelector('#createModal');


const postPet = (pet) =>
  fetch('/api/pet/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data);
      createCard(pet);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    
