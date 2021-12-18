import './style.css';
import contactForm from './contact.js'
import menuForm from './menu.js'
import {setBackgroundImage}  from './practice.js';
import {buttonMaker}  from './practice.js';
import {setTitle} from './practice.js';
import {buttons} from './index.js'


function mainPage(){
 
    //content = div in template
    let titleName = "Casa Flores Mexican Restaurant";
    setBackgroundImage();
    buttonMaker();
    setTitle(titleName);
    buttons();
   
}


export {mainPage};