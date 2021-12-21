import './style.css';
import Icon from './katsu.jpeg';


function menuMaker(){
    const main = document.getElementById("main")
    const menuForm = document.createElement("div")
    menuForm.setAttribute("id", "menuForm")

    main.appendChild(menuForm)
}

function menuItem(Icon, name, description, cost){
    const main = document.getElementById("main")
    const form = document.getElementById("menuForm")

    const container = document.createElement("div")
    const imageContainer = document.createElement("div")
    const infoContainer = document.createElement("div")
    const infoHeader = document.createElement("h2")
    const itemInfo = document.createElement("p")
    const price = document.createElement("p")

    infoHeader.innerHTML = name;
    itemInfo.innerHTML = description
    price.innerHTML = "$ "+  cost
    
    const myIcon = new Image();

    myIcon.classList.add("menuPic")
    myIcon.src = Icon;
    
    price.classList.add("price")
    container.classList.add("menuItem")
    imageContainer.classList.add("menuItemImg")
    infoContainer.classList.add("itemInfo")
    infoHeader.classList.add("itemTitle")
    itemInfo.classList.add("foodInfo")

    infoContainer.appendChild(infoHeader)
    infoContainer.appendChild(itemInfo)
    infoContainer.appendChild(price)
    
    imageContainer.appendChild(myIcon)
    
    container.appendChild(imageContainer)
    container.appendChild(infoContainer);
    form.appendChild(container)
    main.appendChild(form)


}

export {menuMaker, menuItem}