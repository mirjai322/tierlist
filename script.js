let nameInput = document.querySelector("#name")
let imgInput = document.querySelector("#img")
let rankInput = document.querySelector("#rank")

function addToList(){
  let tier = document.querySelector("#"+rankInput.value.toLowerCase())
  let itemContainer = document.createElement("div")
  let nameElement = document.createElement("p")
  nameElement.innerHTML = nameInput.value;
  let imageElement = document.createElement("img")
  imageElement.src = imgInput.value;
  itemContainer.append(imageElement)
  itemContainer.append(nameElement)
  tier.append(itemContainer)
  reset()
}

function reset(){
  nameInput.value = ""
  imgInput.value = ""
  rankInput.value = ""
}

function changeTitle(){
  let title = document.getElementById("title")
  let title2 = document.getElementById("title2")
  let titleInput = document.getElementById("titleInput")
  title.innerHTML = titleInput.value
  title2.innerHTML = titleInput.value
}