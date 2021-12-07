const newActivityType = document.querySelector('.activityTypeField');
const newActivityDescription = document.querySelector('.activityDescriptionField');
const newActivityTime = document.querySelector('.activityTimeField');
const createActivitySubmitButton = document.querySelector('.createActivitySubmit');


createActivitySubmitButton.addEventListener('click', (event) => {
  event.preventDefault;
  // console.log(newActivityType.value)
  // console.log(newActivityDescription.value)
  // console.log(newActivityTime.value)
  const urlSearchParams = window.location.search;
  const pet_id = urlSearchParams.split('=')[1]
  

  const activityData = {
    activity_type: newActivityType.value.trim(),
    activity_description: newActivityDescription.value.trim(),
    pet_id: pet_id,
    time: newActivityTime.value.trim()
  }
  console.log(activityData);
  postActivity(activityData);
})


const postActivity = async (newActivity) => {
  const response = await fetch('/api/scheduledActivity/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newActivity),
  })
  console.log(response)
  console.log(response.Result)
  if (response.ok) {
    document.location.replace('/');
  }
}
