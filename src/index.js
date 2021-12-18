import { mainPage } from './mainpage.js';
import contactForm from './contact.js'
import menuForm from './menu.js'
(function (){
    mainPage();
})();

function buttons(){

    const menuBtn = document.getElementById("menu")
    const homeBtn = document.getElementById("home")
    const contactBtn = document.getElementById("contact")

    menuBtn.addEventListener("click", function(){
        menuForm();
    });

    homeBtn.addEventListener("click", function(){
        const menuDiv = document.getElementById("main");
        menuDiv.remove();
        mainPage();
    })

    contactBtn.addEventListener("click", function(){
     
        contactForm();
    });
    
}

export{buttons};