let game = gameFactory();
game.startScreen.addEventListener('click', gameStart);

//global key listeners

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);


function gameStart() {
    game.startScreen.classList.add('hidden');
    game.playScreen.classList.remove('hidden');

    //game infinite loop :
    window.requestAnimationFrame(gameLoop);

}

function gameLoop() {
    let { vegan } = state;
    let { veganElement } = game;

    modifyVeganPosition();
    
    //render elements:
    veganElement.style.top = vegan.y + 'px';
    veganElement.style.left = vegan.x + 'px';

    if(!state.gameOver){
        window.requestAnimationFrame(gameLoop);
    } else {
        alert ('Game Over');
    }
    
}

function modifyVeganPosition() {
    let vegan = state.vegan;

    //apply gravity:
    if(vegan.y + vegan.height < game.playScreen.offsetHeight) {
        vegan.y += vegan.gravity;
    }
    //modify vegan position - up, down, left and right:
    if(state.keys.ArrowUp && vegan.y > 0) {
        vegan.y -= vegan.speed;
    }

    if(state.keys.ArrowDown && (vegan.y + vegan.height) < game.playScreen.offsetHeight){
        vegan.y += vegan.speed;
    }

    if( state.keys.ArrowLeft && vegan.x > 0) {
        vegan.x -= vegan.speed;
    }

    if(state.keys.ArrowRight && (vegan.x + vegan.width) < game.playScreen.offsetWidth) {
        vegan.x += vegan.speed;
    }
}

//key handlers:

function onKeyDown(e) { 
    // console.log(e);
    // console.log(e.code); 
   state.keys[e.code] = true;
   console.log(state.keys);
   
}

function onKeyUp(e) {
    state.keys[e.code] = false;
    console.log(state.keys);
    
}