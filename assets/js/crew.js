let sectionCrewDetails = document.querySelector("#crew-details")
let sectionCrewHeader = document.querySelector("#header-crew-datails")

async function loadDefaultCrew() {
  let id = 0
  const response = await fetch('/assets/json/crew.json')
  data = await response.json()
  data = data.crew

  crewImageDefault = new Image()
  crewImageDefault.src = (data[id].image)

  const crewImage = document.querySelector("#crew-image");  
  const crewTitle = document.querySelector("#crew-title");
  const crewName = document.querySelector("#crew-name");
  const crewAbout = document.querySelector("#crew-details-text");
  
  crewImage.innerHTML = crewImageDefault.outerHTML
  crewTitle.innerText = data[id].title
  crewName.innerText = data[id].name
  crewAbout.innerText = data[id].about
}

function getId(clickedId) { 
    const id = Number(clickedId)
    
  async function fileToField() {
    
    const response = await fetch('/assets/json/crew.json')
    data = await response.json()
    data = data.crew

    crewImageDefault = new Image()
    crewImageDefault.src = (data[id].image)

    const crewImage = document.querySelector("#crew-image");    
    const crewTitle = document.querySelector("#crew-title");
    const crewName = document.querySelector("#crew-name");
    const crewAbout = document.querySelector("#crew-details-text");

    crewImage.innerHTML = crewImageDefault.outerHTML
    crewTitle.innerText = data[id].title
    crewName.innerText = data[id].name
    crewAbout.innerText = data[id].about
  }
  fileToField()
}

loadDefaultCrew()
