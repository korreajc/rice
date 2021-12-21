import './style.css';
import { mainPage } from './mainpage.js';
import menuForm from './menu.js'
import {setBackgroundImage}  from './practice.js';
import {buttonMaker}  from './practice.js';
import {setTitle} from './practice.js';
import {deletePage} from './practice.js';
import {buttons} from './index.js'
import{cloudMaker} from './practice.js'
import {layout} from './practice.js'
import {infoForm} from './contactFunctions.js'


function contactForm(){
    
    //append to body
    let titleName = "Contact";
    deletePage();
    layout();
    cloudMaker()
    buttonMaker();
    setTitle(titleName);
    buttons();
    infoForm()

    
}

export default contactForm;