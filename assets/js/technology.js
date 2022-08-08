let sectionTechnologyDetails = document.querySelector("#technology-details")
let sectionTechnologyHeader = document.querySelector("#header-technology-datails")

async function loadDefaultTechnology() {
  let id = 0
  const response = await fetch('/assets/json/technology.json')
  data = await response.json()
  data = data.technology

  technologyImageDefault = new Image()
  technologyImageDefault.src = (data[id].image)

  const technologyImage = document.querySelector("#technology-image");  
  const technologyName = document.querySelector("#technology-name");
  const technologyAbout = document.querySelector("#technology-details-text");
  
  technologyImage.innerHTML = technologyImageDefault.outerHTML
  technologyName.innerText = data[id].name
  technologyAbout.innerText = data[id].about
}

function getId(clickedId) { 
    const id = Number(clickedId)
    
  async function fileToField() {
    
    const response = await fetch('/assets/json/technology.json')
    data = await response.json()
    data = data.technology

    technologyImageDefault = new Image()
    technologyImageDefault.src = (data[id].image)

    const technologyImage = document.querySelector("#technology-image");    
    const technologyName = document.querySelector("#technology-name");
    const technologyAbout = document.querySelector("#technology-details-text");

    technologyImage.innerHTML = technologyImageDefault.outerHTML
    technologyName.innerText = data[id].name
    technologyAbout.innerText = data[id].about
  }
  fileToField()
}

loadDefaultTechnology()
