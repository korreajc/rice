import './style.css';
import { mainPage } from './mainpage.js';
import menuForm from './menu.js'
import {setBackgroundImage}  from './practice.js';
import {buttonMaker}  from './practice.js';
import {setTitle} from './practice.js';
import {deletePage} from './practice.js';
import {buttons} from './index.js'



function contactForm(){
    
    //append to body
    let titleName = "Contact";
    deletePage();
    setBackgroundImage();
    buttonMaker();
    setTitle(titleName);
    buttons();

    
}

export default contactForm;