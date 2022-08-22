const fragment =  document.getElementById('fragment');
let left = 0;
let down = 0;



function keyPressed (e) {
    switch(e.keyCode){
        case 37: 
            console.log("влево");
            left -= 10;
            fragment.style.left = left + "px" ;
            break;
        case 39:
            console.log("вправо");
            left += 10;
            fragment.style.left = left + "px";
            break;
        case 38:
            console.log("вверх");
            down -= 10;
            fragment.style.top = down + "px";
            break;
 
        case 40:
            console.log("вниз");
            down += 10;
            fragment.style.top = down + "px";
            break;
        case 102:
            console.log('vlevo');
            fragment.style.transform = "scaleX(1)";
            
            break;
        case 100:
            console.log('vpravo');
            fragment.style.transform = "scaleX(-1)";
            break;   
        case 104:
            console.log("vverh");
            fragment.style.transform = "scaleY(1)";
            break;
        case 98:
            console.log('vniz') ;
            fragment.style.transform = "scaleY(-1)";
            break;        
        case 27:
            console.log("выход")
            break;    
    }
}


window.addEventListener( "keydown" , (key) => { keyPressed(key)});