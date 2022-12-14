let sectionDestinationDetails = document.querySelector("#destination-details")
let sectionDataTravel = document.querySelector("data-travel")
let sectionDestinationHeader = document.querySelector("#destination-header")

async function loadDefaultDestination() {
  let id = 0
  const response = await fetch('/assets/json/destinations.json')
  data = await response.json()
  data = data.destination

  destinationImageDefault = new Image()
  destinationImageDefault.src = (data[id].image)

  const destinationImage = document.querySelector("#destination-image");  
  const destinationName = document.querySelector("#destination-name");
  const destinationDescription = document.querySelector("#destination-description");
  const destinationDistance = document.querySelector("#destination-distance");
  const destinationTime = document.querySelector("#destination-time");
  
  destinationImage.innerHTML = destinationImageDefault.outerHTML
  destinationName.innerText = data[id].name
  destinationDescription.innerText = data[id].description
  destinationDistance.innerText = data[id].distance
  destinationTime.innerText = data[id].time  
}

function getId(clickedId) { 
    const id = Number(clickedId)
    
  async function fileToField() {
    
    const response = await fetch('/assets/json/destinations.json')
    data = await response.json()
    data = data.destination

    destinationImageDefault = new Image()
    destinationImageDefault.src = (data[id].image)

    const destinationImage = document.querySelector("#destination-image");    
    const destinationName = document.querySelector("#destination-name");
    const destinationDescription = document.querySelector("#destination-description");
    const destinationDistance = document.querySelector("#destination-distance");
    const destinationTime = document.querySelector("#destination-time");

    destinationImage.innerHTML = destinationImageDefault.outerHTML
    destinationName.innerText = data[id].name
    destinationDescription.innerText = data[id].description
    destinationDistance.innerText = data[id].distance
    destinationTime.innerText = data[id].time  
  }
  fileToField()
}

loadDefaultDestination()
