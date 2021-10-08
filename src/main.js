let game = gameFactory();
game.startScreen.addEventListener('click', gameStart);

//global key listeners

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
let keys = {};

function gameStart() {
    game.startScreen.classList.add('hidden');
    game.playScreen.classList.remove('hidden');
}


//key handlers:

function onKeyDown(e) { 
    // console.log(e);
    // console.log(e.code); 
   keys[e.code] = true;
    console.log(keys);
}

function onKeyUp(e) {
    keys[e.code] = false;
    console.log(keys);
    
}