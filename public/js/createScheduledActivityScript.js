const newActivityType = document.querySelector('.activityTypeField');
const newActivityDescription = document.querySelector('.activityDescriptionField');
const newActivityTime = document.querySelector('.activityTimeField');
const createActivitySubmitButton = document.querySelector('.createActivitySubmit');


createActivitySubmitButton.addEventListener('click', () => {
  event.preventDefault;
  console.log(newActivityType.value)
  console.log(newActivityDescription.value)
  console.log(newActivityTime.value)

  const activityData = {
    activity_type: newActivityType.value.trim(),
    activity_description: newActivityDescription.value.trim(),
    //How do I assign this to the pet were adding?
    pet_id: 2,
    time: newActivityTime.value.trim()
  }
  console.log(activityData)
  postActivity(activityData)
})


const postActivity = async (newActivity) => {
  const response = await fetch('/api/activity/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newActivity),
  })
  console.log(response)
  if (response.ok) {
    document.location.replace('/');
  }
}
