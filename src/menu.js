import './style.css';
import { mainPage } from './mainpage.js';
import contactForm from './contact.js'




function menuForm(){
    const menuDiv = document.getElementById("main");
        menuDiv.remove();
  
    const buttonDiv = document.createElement("div");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    buttonDiv.setAttribute("id", "buttons")
    homeBtn.classList.add("btn")
    menuBtn.classList.add("btn")
    contactBtn.classList.add("btn")
    homeBtn.innerHTML = "Home"
    menuBtn.innerHTML = "Menu"
    contactBtn.innerHTML = "Contact"

    const contentDiv = document.getElementById("content")
    const div = document.createElement("div");
    div.setAttribute("id","main")
    div.innerHTML = "menu"
    buttonDiv.appendChild(homeBtn)
    buttonDiv.appendChild(menuBtn)
    buttonDiv.appendChild(contactBtn)
    div.appendChild(buttonDiv)
    contentDiv.appendChild(div)

    contactBtn.addEventListener("click", function(){
     
        contactForm();
    });

    homeBtn.addEventListener("click", function(){
        const menuDiv = document.getElementById("main");
        menuDiv.remove();
        mainPage();
    })
}

export default menuForm;