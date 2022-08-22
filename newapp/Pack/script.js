
class Person {
    position;
    speed;
    width;
    height;
    keysStatus = {
        right: false,
        left: false,
        up: false,
        down: false,
        shift: false,
        ctrl: false
    }
    image = document.getElementById('image');
    constructor(){
        this.position = {
            x: 0,
            y: 0
        }
        this.speed = {
            x: 5,
            y: 5
        }
        this.width = 25;
        this.height = 25;
        
    }

    pressKey(key, value) {
        this.keysStatus[key] = value;

    }

    move() {
        if (this.keysStatus.right) {
            this.position.x += this.speed.x;
            this.image.style.left = `${this.position.x}px`;
            this.image.style.transform = 'rotate(0deg)';
        }

        if (this.keysStatus.left) {
            this.position.x -= this.speed.x;
            this.image.style.left = `${this.position.x}px`;
            this.image.style.transform = 'rotate(180deg)';
        }

        if (this.keysStatus.up) {
            this.position.y -= this.speed.y;
            this.image.style.top = `${this.position.y}px`;
            if(this.keysStatus.right){
                this.image.style.transform = 'rotate(-45deg)';
            }else{
            this.image.style.transform = 'rotate(-90deg)';}
        }

        if (this.keysStatus.down) {
            this.position.y += this.speed.y;
            this.image.style.top = `${this.position.y}px`;
            this.image.style.transform = 'rotate(90deg)';
        }
    }

    accelerate() {
        this.speed.x = 10;
        this.speed.y = 10;
    }

    slowDown() {
        this.speed.x = 1;
        this.speed.y = 1;
    }

    setDefaultSpeed() {
        this.speed.x = 5;
        this.speed.y = 5;
    }
}

const persone = new Person();
// let prev = performance.now();
// console.log(prev)
function animate() {

    requestAnimationFrame(animate);
    persone.move()

    if (persone.keysStatus.shift) {
        persone.accelerate()
    }

    if (persone.keysStatus.ctrl) {
        persone.slowDown()
    }
}    
animate()

window.addEventListener('keydown', (e) => {
    switch(e.key){
        case "ArrowLeft": 
            persone.pressKey('left', true);  
            break;
        case "ArrowRight":
            persone.pressKey('right', true);
            break;
        case "ArrowUp":
            persone.pressKey('up', true);
            break;
        case "ArrowDown":
            persone.pressKey('down', true);
            break;
        case "Shift":
            persone.pressKey('shift', true);
            break;
        case "Control":
            persone.pressKey('ctrl', true);
            break;   
    }
    
})

window.addEventListener('keyup', (e) => { 
    switch(e.key){
        case "ArrowLeft":
            persone.pressKey('left', false);
            break;
        case "ArrowRight":
            persone.pressKey('right', false);
            break;
        case "ArrowUp":
            persone.pressKey('up', false);
            break;
        case "ArrowDown":
            persone.pressKey('down', false);
            break;
        case "Shift":
            persone.pressKey('shift', false);
            persone.setDefaultSpeed();
            break;
        case "Control":
            persone.pressKey('ctrl', false);
            persone.setDefaultSpeed()
            break;
    }
 })