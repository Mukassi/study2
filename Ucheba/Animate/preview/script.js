'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if(!phoneAnimation){
        phoneAnimation = images[0].animate([
            {transform: 'translateY(0)',
            filter: 'opacity(100%)'},
            {transform: 'translateY(100px)',
            filter: 'opacity(50%)'},
            {transform: 'translateY(-100px)',
            filter: 'opacity(75%)'},
            {transform: 'translateY(0) ',
            filter: 'opacity(100%)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused'){
        phoneAnimation.play()
    } else {
        phoneAnimation.pause()
    }
});
let macAnimation;
btnMacbook.addEventListener('click',() => {
    if(!macAnimation){
        macAnimation = images[1].animate([
            {transform: 'translateX(0)', filter: 'opacity(0%)'},
            {transform: 'translateX(200px)', filter: 'opacity(100%)'},
            {transform: 'translateX(0)', filter: 'opacity(0%)'}
        ], {
            duration: 5000,
            easing: "ease",
            iterations: Infinitygit 
        })
    } else if(macAnimation.playState === 'paused'){
        macAnimation.play()
    } else {
        macAnimation.pause()
    }
})
