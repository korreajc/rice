import './style.css';
import { mainPage } from './mainpage.js';
import Icon from './clouds.jpeg';
import contactForm from './contact.js'
import {setBackgroundImage}  from './practice.js';
import {buttonMaker}  from './practice.js';
import {setTitle} from './practice.js';
import {deletePage} from './practice.js';
import {buttons} from './index.js'

function menuForm(){
    let titleName = "Menu";
    deletePage();
    setBackgroundImage();
    buttonMaker();
    setTitle(titleName);
    buttons();
}

export default menuForm;