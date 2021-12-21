import './style.css';
import {buttonMaker}  from './practice.js';
import {setTitle} from './practice.js';
import {deletePage} from './practice.js';
import {buttons} from './index.js'
import{cloudMaker} from './practice.js'
import {layout} from './practice.js'
import {menuMaker} from './menuFunctions.js'
import {menuItem} from './menuFunctions.js'
import Icon from './katsu.jpeg';
import Roll from './roll.jpeg'
import ComboPlate from './comboplate.jpeg'
import CreamRoll from './creamroll.jpeg'
import EbiRoll from './ebiroll.jpeg'
import UwuRoll from './uwuroll.jpeg'


function menuForm(){
    let titleName = "Menu";
    deletePage();
    layout();
    setTitle(titleName);
    cloudMaker()
    buttonMaker();
    buttons();
    menuMaker();
    menuItem(Icon, "Chicken Katsu", "Chicken Katsu served with rice and macaroni", "5");
    menuItem(Roll, "California Roll", "A classic California roll served with a twist", "3");
    menuItem(ComboPlate, "Chicken Katsu", "A plate with two choices of meat accompanied by rice and macaroni", "10");
    menuItem(CreamRoll, "Cream Roll", "A sushi roll filled with cream", "8");
    menuItem(EbiRoll, "Ebi Roll", "Our fan favorite Ebi Roll made with love", "8");
    menuItem(UwuRoll, "Uwu Roll", "Our original Uwu Roll made only in Stockton", "8");


    
}

export default menuForm;