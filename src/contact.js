import './style.css';
import { mainPage } from './mainpage.js';
import menuForm from './menu.js'



function contactForm(){
    
    //append to body
    const oldDiv = document.getElementById("main");
    oldDiv.remove();
    //buttons 
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

    

    const contactInfoDiv = document.createElement("div")
    contactInfoDiv.setAttribute("id", "main")
    //apend to contactinfodiv
    const contactOneDiv = document.createElement("div")
    //append to contactone
    const header = document.createElement("h1")
    const name1 = document.createElement("p")
    const number = document.createElement("p")
    header.innerHTML = "CONTACT US"
    name1.innerHTML = "Owner: "
    number.innerHTML = "(209)777-8888"

    //append to contact infodiv
    const hoursDiv = document.createElement("div")
    const hoursHeader = document.createElement("h1")
    const hours = document.createElement("p")
    hoursHeader.innerHTML = "HOURS OF OPERATION"
    hours.innerHTML = "Open 24-7 M-F"
    
    buttonDiv.appendChild(homeBtn)
    buttonDiv.appendChild(menuBtn)
    buttonDiv.appendChild(contactBtn)
    contactInfoDiv.appendChild(buttonDiv)
    contactOneDiv.appendChild(header)
    contactOneDiv.appendChild(name1)
    contactOneDiv.appendChild(number)
    contactInfoDiv.appendChild(contactOneDiv)
    hoursDiv.appendChild(hoursHeader)
    hoursDiv.appendChild(hours)
    contactInfoDiv.appendChild(hoursDiv)
    document.body.appendChild(contactInfoDiv);

    menuBtn.addEventListener("click", function(){
     
        menuForm();
    });

    homeBtn.addEventListener("click", function(){
        const menuDiv = document.getElementById("main");
        menuDiv.remove();
        mainPage();
    })
}

export default contactForm;