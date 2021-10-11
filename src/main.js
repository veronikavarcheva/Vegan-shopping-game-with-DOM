let game = gameFactory();
game.startScreen.addEventListener('click', gameStart);

//global key listeners

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);


function gameStart() {
    game.startScreen.classList.add('hidden');
    game.playScreen.classList.remove('hidden');
    game.scoreScreen.classList.remove('hidden');

    //game infinite loop :
    window.requestAnimationFrame(gameLoop);

}

function gameLoop(timestamp) {
    let { vegan } = state;
    let { veganElement, scoreScreen } = game;
    // console.log(timestamp);
    
    modifyVeganPosition();

    if(state.keys.Space) {
        if(state.shoppingCartStats.nextShoppingCartCreation < timestamp) {
            game.createShoppingCart();
            state.shoppingCartStats.nextShoppingCartCreation = timestamp + state.shoppingCartStats.shoppingCartSpeed;   
        }
    }
    //move shopping cart:

    Array.from(document.getElementsByClassName('shopping-cart')).forEach(shoppingCart => {
        let currentPosition = parseInt(shoppingCart.style.left);
        if(currentPosition + state.shoppingCartStats.width < game.playScreen.offsetWidth) {
            shoppingCart.style.left = currentPosition + state.shoppingCartStats.speed + 'px';
        } else {
            shoppingCart.remove();
        }

        Array.from(document.getElementsByClassName('apple')).forEach(apple => {
            if(hasCollision(shoppingCart, apple)) {
                apple.remove();
                shoppingCart.remove();
                state.score += state.appleStats.score;
            }
        });

        Array.from(document.getElementsByClassName('chicken-leg')).forEach(chickenLeg => {
            if(hasCollision(shoppingCart, chickenLeg)) {
                chickenLeg.remove();
                shoppingCart.remove();
                state.score -= state.chickenLegStats.score;
                if( state.score < 0) {
                    state.score = 0;
                    state.gameOver = true;
                    
                }
            }
        });
    });

    //move chicken legs:
    Array.from(document.getElementsByClassName('chicken-leg')).forEach(x => {
        let currentPosition = parseInt(x.style.left);

        if(currentPosition > 0) {
            x.style.left = currentPosition - state.chickenLegStats.speed + 'px';
        } else {
            x.remove();
        }

        //check for collision:
        if(hasCollision(veganElement, x)) {
            state.gameOver = true;
        }
    });

    //spawn chicken legs:
    if(state.chickenLegStats.nextChickenLegCreation < timestamp){
        game.createChickenLeg();
        state.chickenLegStats.nextChickenLegCreation = timestamp + Math.random()*state.chickenLegStats.maxCreationInterval;
    }

    //move apples:
    Array.from(document.getElementsByClassName('apple')).forEach(x => {
        let currentPosition = parseInt(x.style.left);

        if(currentPosition > 0) {
            x.style.left = currentPosition - state.appleStats.speed + 'px';
        } else {
            x.remove();
        }
    });


    //spawn apples:
    if(state.appleStats.nextAppleCreation < timestamp) {
        game.createApple();
        state.appleStats.nextAppleCreation = timestamp + Math.random()*state.appleStats.maxCreationAppleInterval;
    }

    //render elements:
    veganElement.style.top = vegan.y + 'px';
    veganElement.style.left = vegan.x + 'px';
    //apply score:
    scoreScreen.textContent = state.score + ' pts.';

    if(!state.gameOver ){
        state.score++;
        window.requestAnimationFrame(gameLoop);
    } else {
        alert ('Game Over' + ' ' + state.score + 'pts.');
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

function hasCollision(firstElement, secondElement) {
    let firstRect = firstElement.getBoundingClientRect();
    let secondRect = secondElement.getBoundingClientRect();
    // console.log(firstRect);
    
    return (!(firstRect.top > secondRect.bottom || firstRect.bottom < secondRect.top || firstRect.right < secondRect.left || firstRect.left > secondRect.right));
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