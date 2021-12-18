import Icon from './clouds.jpeg';
import contactForm from './contact';
import menuForm  from './menu';
import './style.css';
import { mainPage } from './mainpage.js';


function deletePage(){
    const oldDiv = document.getElementById("main");
    oldDiv.remove();
}

function buttonMaker(){
    const contentDiv = document.getElementById("content")
    const mainDiv = document.createElement("div");
    const headerDiv = document.createElement("div");
    const titles = document.createElement("div");

    const buttonDiv = document.createElement("div");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    mainDiv.setAttribute("id", "main")
    headerDiv.setAttribute("id", "head")
    titles.setAttribute("id", "title")

    buttonDiv.setAttribute("id", "buttons")
    homeBtn.classList.add("btn")
    homeBtn.setAttribute("id", "home")
    menuBtn.setAttribute("id", "menu")
    contactBtn.setAttribute("id", "contact");
    menuBtn.classList.add("btn")
    contactBtn.classList.add("btn")

    homeBtn.innerHTML = "Home"
    menuBtn.innerHTML = "Menu"
    
    contactBtn.innerHTML = "Contact"

    
    buttonDiv.appendChild(homeBtn)
    buttonDiv.appendChild(menuBtn)
    buttonDiv.appendChild(contactBtn)
    headerDiv.appendChild(titles);
    headerDiv.appendChild(buttonDiv)
    mainDiv.appendChild(headerDiv);
    contentDiv.appendChild(mainDiv);

}

function setBackgroundImage(){
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.setAttribute("id", "pic");
    document.body.appendChild(myIcon)
}

function setTitle(titleName){
    const titles = document.getElementById("title");
    titles.innerHTML = titleName;
}

export{deletePage, buttonMaker, setBackgroundImage, setTitle}