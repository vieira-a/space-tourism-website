let sectionDestinationDetails = document.querySelector("#destination-details")

let sectionDataTravel = document.querySelector("data-travel")

let id = 0

async function getJson() {
  
  const response = await fetch('/src/json/destinations.json')

  data = await response.json()
  
  data = data.destination

  let destinationName = document.createElement("h3");

  destinationName.innerText = data[id].name

  sectionDestinationDetails.appendChild(destinationName)
}

getJson()