const createPetSubmitButton = document.querySelector('.createPetSubmit');
const newPetOwnerId = document.querySelector('.petOwnerField');
const newPetName = document.querySelector('.petNameField');
const newPetType = document.querySelector('.petTypeField');
const newPetSpecies = document.querySelector('.petSpeciesField');
const newPetOvernight = document.querySelector('.petOvernightField');
const newPetCheckIn = document.querySelector('.petCheckInField');
const newPetCheckOut = document.querySelector('.petCheckOutField');
const newPetDuration = document.querySelector('.petDurationField');
const newPetKennelSize = document.querySelector('.petKennelSizeField');

createPetSubmitButton.addEventListener('click', () => {
  event.preventDefault;
  // console.log(newPetOwnerId.value)
  // console.log(newPetName.value)
  // console.log(newPetType.value)
  // console.log(newPetSpecies.value)
  //console.log(newPetOvernight.value)
  // console.log(newPetCheckIn.value)
  // console.log(newPetCheckOut.value)
  // console.log(newPetKennelSize.value)
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
  if (response.ok) {
    document.location.replace('/');
  }
}