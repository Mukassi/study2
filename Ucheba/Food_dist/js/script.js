
import tabs  from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import calc from './modules/calc';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () =>{

    const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 600000);
    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal('[data-modal]','.modal', modalTimerID);
    timer(".timer", '2022-06-11');
    cards();
    forms('form', modalTimerID);
    calc();
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: "#total",
        currentCounter:"#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
        slide: '.offer__slide'
    });

});

