const updatePet = async (event) => {
    const petId = document.getElementById('id').textContent;
    const petName = document.querySelector("#name").value.trim();
    let type = document.querySelector('.petTypeField').value.trim();
    const species = document.querySelector("#species").value.trim();
    const checkInDate = document.querySelector('.petCheckInField').value.trim();
    const checkOutDate = document.querySelector('.petCheckOutField').value.trim();
    let kennelSize = document.querySelector('.petKennelSizeField').value.trim();
    if(type !== "Choose...")
    {
      type = document.querySelector('.petTypeField').value.trim();
    }
    else
    {
      type = null;
    }
    if(kennelSize !== "Choose...")
    {
      kennelSize = document.querySelector('.petKennelSizeField').value.trim();
    }
    else
    {
      kennelSize = null;
    }

    if (petName || type || species || checkInDate || checkOutDate || kennelSize) 
    {
        const response = await fetch(`/api/pet/${petId}`, {
          method: 'PUT',
          body: JSON.stringify({
                id: petId, 
                pet_name: petName,
                pet_type: type,               
                pet_species: species,
                pet_owner_id: ownerName,
                check_in_date: new Date (checkInDate.replace(/-/g, '\/')),
                check_out_date: new Date (checkOutDate.replace(/-/g, '\/')),
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