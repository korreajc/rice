import '/src/cloud.css'

function bigCloud(cell){
    const cloud = document.createElement("div")
    cloud.setAttribute("id", "cloudy")
    cloud.classList.add("cloud")
    const contentDiv = document.getElementById(cell)
    contentDiv.appendChild(cloud);

}

function mediumCloud(cell){
    const cloud = document.createElement("div")
    cloud.setAttribute("id", "newCloud")
    const contentDiv = document.getElementById(cell)
    contentDiv.appendChild(cloud);

}

function smallCloud(cell){
		const cloud = document.createElement("div")
    cloud.setAttribute("id", "smallCloud")
    const contentDiv = document.getElementById(cell)
    contentDiv.appendChild(cloud);
}

function create(){
	let cell = cellPicker(1);
	smallCloud(cell);  
    

  
}

function cellPicker(num){
    let cellNum = "nothing"
        switch(num){
            case 1:
            cellNum = "one"
          break;
       case 2:
            cellNum = "two"
          break;
       case 3:
            cellNum = "three"
          break;
       case 4:
            cellNum = "four"
          break;
       case 5:
            cellNum = "five"
          break;
       case 6:
            cellNum = "six"
          break;
       case 7:
            cellNum = "seven"
          break;
       case 8:
            cellNum = "eight"
          break;
       case 9:
            cellNum = "nine"
          break;
       case 10:
            cellNum = "ten"
          break;
        case 11:
            cellNum = "eleven"
          break;
        case 12:
            cellNum = "twelve"
          break;
        case 13:
            cellNum = "thirteen"
          break;
        case 14:
            cellNum = "fourteen"
          break;
        case 15:
            cellNum = "fifteen"
                break;
        case 16:
            cellNum = "sixteen"
        }
      return cellNum
    }



export {bigCloud, mediumCloud, smallCloud, cellPicker, create};