import Icon from './IMG_1224.jpeg';
import './style.css';
import contactForm from './contact.js'
import menuForm from './menu.js'


function mainPage(){
 

    const contentDiv = document.getElementById("content")
    const mainDiv = document.createElement("div");
    const headerDiv = document.createElement("div");
    const buttonDiv = document.createElement("div");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    const title = document.createElement("div");
    const slogan = document.createElement("p");
    const description = document.createElement("div");
    const myIcon = new Image();
    myIcon.src = Icon;

    mainDiv.setAttribute("id", "main")
    headerDiv.setAttribute("id", "head")
    buttonDiv.setAttribute("id", "buttons")
    homeBtn.classList.add("btn")
    menuBtn.classList.add("btn")
    contactBtn.classList.add("btn")
    title.setAttribute("id", "title")
    slogan.setAttribute("id", "slogan")
    description.setAttribute("id", "description")
    myIcon.setAttribute("id", "pic")

    title.innerHTML = "Casa Flores Mexican Restaurant";
    homeBtn.innerHTML = "Home"
    menuBtn.innerHTML = "Menu"
    contactBtn.innerHTML = "Contact"
    slogan.innerHTML = "The Best Mexican Food in the 209!"
    description.innerHTML = "Our dishes are authentic Mexican food made with love by our long line of family cooks from Mexico. We proudly serve the food with our loving and charismatic waiters who love their jobs. Come check out what the rave is all about and satisfy your Mexican food cravings!";

    buttonDiv.appendChild(homeBtn)
    buttonDiv.appendChild(menuBtn)
    buttonDiv.appendChild(contactBtn)
    headerDiv.appendChild(title)
    headerDiv.appendChild(buttonDiv)
    mainDiv.appendChild(headerDiv);
    mainDiv.appendChild(myIcon);
    mainDiv.appendChild(slogan);
    mainDiv.appendChild(description);
    contentDiv.appendChild(mainDiv);

    contactBtn.addEventListener("click", function(){
        contactForm();
    });

    menuBtn.addEventListener("click", function(){
        menuForm();
    })
}

export {mainPage};