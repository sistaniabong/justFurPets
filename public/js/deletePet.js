const deletePet = async (event) => {
    const petId = document.getElementById('id').textContent;    console.log("Test1")
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