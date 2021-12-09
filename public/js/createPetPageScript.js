const createPetSubmitButton = document.querySelector('.createPetSubmit');
const createNewOwnerForm = document.querySelector('.new-petowner-form');

const createNewOwnerButton = document.querySelector('#submitPetOwnerBtn');
const newPetOwnerId = document.querySelector('.petOwnerField');
const newPetName = document.querySelector('.petNameField');
const newPetType = document.querySelector('.petTypeField');
const newPetSpecies = document.querySelector('.petSpeciesField');
const newPetCheckIn = document.querySelector('.petCheckInField');
const newPetCheckOut = document.querySelector('.petCheckOutField');
const newPetKennelSize = document.querySelector('.petKennelSizeField');

createPetSubmitButton.addEventListener('click', (event) => {
  event.preventDefault;
  console.log(pet_type, kennel_size)
  const petData = {
    pet_name: newPetName.value.trim(),
    pet_type: newPetType.value.trim(),
    pet_species: newPetSpecies.value.trim(),
    pet_owner_id: newPetOwnerId.value.trim(),
    check_in_date: newPetCheckIn.value.trim(),
    check_out_date: newPetCheckOut.value.trim(),
    kennel_size: newPetKennelSize.value.trim()
  }
  console.log(petData)
  postPet(petData)
})


const postPet = async (newPet) => {
  const response = await fetch('/api/pet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPet),
  })

  const data = await response.json();
  
  if (response.ok) {
    
    //redirect to the create pet activity page after new pet submission
    document.location.replace(`/createActivity?pet_id=${data.id}`);
  }
}


const createNewOwnerHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#ownerNameInput').value.trim();
  const phone_number = document.querySelector('#ownerPhoneNumberInput').value.trim();

  try{
    if (name && phone_number) {
      console.log("creating pet owner")
      const response = await fetch('/api/petOwner', {
        method: 'POST',
        body: JSON.stringify({ owner_name:name, phone_number:phone_number }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)

      if (response.ok) {
        document.location.replace('/create');
      } else {
        alert('Failed to create pet owner');
      }
    }
  }catch (err){
    console.log(err)
  }
};




createNewOwnerForm.addEventListener('submit',createNewOwnerHandler)

