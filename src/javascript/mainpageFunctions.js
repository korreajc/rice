import Icon from '/src/images/streetpic.jpeg';

function mainFunctions(){
    const main = document.getElementById("main")
    const middleDiv = document.createElement("div")
    const sloganDiv = document.createElement("div")
    sloganDiv.innerHTML = "Serving Asian Inspired Dishes in the Greater Stockton, California Area"

    const myIcon = new Image();
    sloganDiv.setAttribute("id", "slogan")
    myIcon.setAttribute("id", "truckpic")
    myIcon.src = Icon;
    
    main.appendChild(myIcon);
    main.appendChild(sloganDiv)

}

export {mainFunctions}