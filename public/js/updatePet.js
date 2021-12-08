console.log(document.getElementById('id').textContent)
const updatePet = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    console.log("button submitted")
    const petId = document.getElementById('id').textContent;
    const petName = document.querySelector("#name").value.trim();
    const type = document.querySelector("#type").value.trim();
    const species = document.querySelector("#species").value.trim();
    const ownerName = document.querySelector("#ownerName").value.trim();
    const boarded = document.querySelector("#boarded").value.trim();
    const checkInDate = document.querySelector("#checkInDate") .value.trim();
    const checkOutDate = document.querySelector("#checkOutDate").value.trim();
    const kennelSize = document.querySelector("#kennelSize").value.trim();


    if (petName || type || species || ownerName || boarded || checkInDate || checkOutDate || kennelSize) 
    {
        const response = await fetch(`/api/pet/${petId}`, {
          method: 'PUT',
          body: JSON.stringify({
                id: petId, 
                pet_name: petName,
                pet_type: type,
                pet_species: species,
                pet_owner_id: ownerName,
                check_in_date: checkInDate,
                check_out_date: checkOutDate,
                kennel_size: kennelSize
            }),
          headers: { 'Content-Type': 'application/json' },
        });
    };
    document.location.replace(`/api/pet/${petId}`);
}
const modal = document.getElementById("#modal");
$( "#dialog" ).dialog({ autoOpen: false, minWidth: 400, title: "Edit Pet", dialogClass: "myTitleClass" });
$( "#updatePet" ).click(function() {
    $( "#dialog" ).dialog( "open" );
  });
$("#submitPet").click(updatePet);
console.log("linked")

const addActivity = () => 
{
  const petId = document.getElementById('id').textContent;
  document.location.replace(`/createActivity?pet_id=${petId}`);
}
$("#addActivity").click(addActivity);