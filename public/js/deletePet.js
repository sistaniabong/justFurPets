const deletePet = async (event) => {
    const petId = document.querySelector("#id").value.trim();

    const response = await fetch(`/api/pet/${petId}`, {
        method: 'DELETE',
    });
    console.log("Test")
    if (response.ok) {
        document.location.replace('/api/pet');
        console.log("if")
    } else {
        alert('Failed to delete pet');
        console.log("else")
    }

};

$("#deletePet").click(deletePet)