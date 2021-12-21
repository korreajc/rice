import './style.css';
import {buttonMaker}  from './practice.js';
import {setTitle} from './practice.js';
import {buttons} from './index.js'
import{cloudMaker} from './practice.js'
import {layout} from './practice.js'
import { mainFunctions } from './mainpageFunctions';

function mainPage(){
    //content = div in template
    let titleName = "Rice Dreams";
    layout();
    cloudMaker()
    buttonMaker();
    setTitle(titleName);
    buttons();
    mainFunctions();
    
}


export {mainPage};