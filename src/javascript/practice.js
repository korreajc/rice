import Icon from '/src/images/clouds.jpeg';
import '/src/style.css';


function deletePage(){
    const oldDiv = document.getElementById("main");
    oldDiv.remove();
}

function cloudMaker(){
    const cloud = document.createElement("div")
    cloud.setAttribute("id", "cloudy")
    cloud.classList.add("cloud")
    const contentDiv = document.getElementById("head")
    contentDiv.appendChild(cloud);

}

function layout(){
    const contentDiv = document.getElementById("content")
    const mainDiv = document.createElement("div");
    const headerDiv = document.createElement("div");

    mainDiv.setAttribute("id", "main")
    headerDiv.setAttribute("id", "head")

    mainDiv.appendChild(headerDiv);
    contentDiv.appendChild(mainDiv);

}

function buttonMaker(){
    const contentDiv = document.getElementById("content")
    const mainDiv = document.getElementById("main");
    const headerDiv = document.getElementById("head");

    const buttonDiv = document.createElement("div");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

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
    mainDiv.appendChild(buttonDiv);
    contentDiv.appendChild(mainDiv);

}

function setBackgroundImage(){
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.setAttribute("id", "pic");
    document.body.appendChild(myIcon)
}


function setTitle(titleName){
    const cloud = document.getElementById("head")
    const title = document.createElement("div")
    title.setAttribute("id", "title")
    title.innerHTML = titleName;
    cloud.appendChild(title)
}



export{ layout, cloudMaker, deletePage, buttonMaker, setBackgroundImage, setTitle}