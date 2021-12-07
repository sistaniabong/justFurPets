const createPetSubmitButton = document.querySelector('.createPetSubmit');
const createNewOwnerForm = document.querySelector('.new-petowner-form');

const createNewOwnerButton = document.querySelector('#submitPetOwnerBtn');
const newPetOwnerId = document.querySelector('.petOwnerField');
const newPetName = document.querySelector('.petNameField');
const newPetType = document.querySelector('.petTypeField');
const newPetSpecies = document.querySelector('.petSpeciesField');
const newPetOvernight = document.querySelector('.petOvernightField');
const newPetCheckIn = document.querySelector('.petCheckInField');
const newPetCheckOut = document.querySelector('.petCheckOutField');
const newPetDuration = document.querySelector('.petDurationField');
const newPetKennelSize = document.querySelector('.petKennelSizeField');

createPetSubmitButton.addEventListener('click', (event) => {
  event.preventDefault;
  // console.log(newPetOwnerId.value)
  // console.log(newPetName.value)
  // console.log(newPetType.value)
  // console.log(newPetSpecies.value)
  //console.log(newPetOvernight.value)
  // console.log(newPetCheckIn.value)
  // console.log(newPetCheckOut.value)
  // console.log(newPetKennelSize.value)
  console.log(newPetDuration.value)
  if (newPetOvernight.value=='1'){
  var boardedBoolean=true}
  else{
  var boardedBoolean=false;}

  const petData = {
    pet_name: newPetName.value.trim(),
    pet_type: newPetType.value.trim(),
    pet_species: newPetSpecies.value.trim(),
    pet_owner_id: newPetOwnerId.value.trim(),
    boarded: boardedBoolean,
    check_in_date: newPetCheckIn.value.trim(),
    check_out_date: newPetCheckOut.value.trim(),
    stay_duration: newPetDuration.value.trim(),
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
<<<<<<< Updated upstream
  console.log(response);
  console.log(response.Result)
=======
  const data = await response.json();
>>>>>>> Stashed changes
  if (response.ok) {
    
    //redirect to the create pet activity page after new pet submission
<<<<<<< Updated upstream
    //document.location.replace(`/createActivity`);
=======

    document.location.replace(`/createActivity?pet_id=${data.id}`);
>>>>>>> Stashed changes
  }
}


const createNewOwnerHandler = async (event) => {
  event.preventDefault();
  // TODO: Add a comment describing the functionality of these expressions
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

