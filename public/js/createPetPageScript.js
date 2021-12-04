const createPetSubmitButton=document.querySelector('.createPetSubmit');
const petOwnerList=document.querySelector('.petOwnerField');

  // const getPetOwner = async (petOwner) => {
  // console.log('working');
  // try{
  //   const response = async () => {
  //     const result = await fetch('/api/petOwner', {
  //       method: 'GET',
  //     });
  //     const json = await result.json();
  //     return json;
  //   };

  const postPet = (pet) => {
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
  }


getPetOwner();

    
