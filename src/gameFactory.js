function gameFactory () {

    let { vegan, chickenLegStats, appleStats, shoppingCartStats } = state;

    let startScreen = document.querySelector('.start-screen');
    let scoreScreen = document.querySelector('.score-screen');
    let playScreen = document.querySelector('.play-screen');
    let veganElement = createVegan(vegan.x, vegan.y);

    playScreen.appendChild(veganElement);

    let factory = {
        startScreen,
        scoreScreen, 
        playScreen, 
        veganElement,
        createChickenLeg: () => {
            let chickenLegElement = document.createElement('div');
            chickenLegElement.classList.add('chicken-leg');
            chickenLegElement.style.width = chickenLegStats.width + 'px';
            chickenLegElement.style.height = chickenLegStats.height + 'px';

            chickenLegElement.style.left = playScreen.offsetWidth - chickenLegStats.width + 'px';
            chickenLegElement.style.top = (playScreen.offsetHeight - chickenLegStats.height)*Math.random() + 'px';
            playScreen.appendChild(chickenLegElement);
        },
        createApple: () => {
            let appleElement = document.createElement('div');
            appleElement.classList.add('apple');
            appleElement.style.width = appleStats.width + 'px';
            appleElement.style.height = appleStats.height + 'px';

            appleElement.style.left = playScreen.offsetWidth - appleStats.width + 'px';
            appleElement.style.top = (playScreen.offsetHeight - appleStats.height)*Math.random() + 'px';
            playScreen.appendChild(appleElement);
        },
        createShoppingCart: () => {
            let shoppingCartElement = document.createElement('div');
            
            shoppingCartElement.classList.add('shopping-cart');
            shoppingCartElement.style.width = shoppingCartStats.width + 'px';
            shoppingCartElement.style.height = shoppingCartStats.height + 'px';

            shoppingCartElement.style.left = vegan.x + shoppingCartStats.width + 'px';
            shoppingCartElement.style.top = vegan.y + shoppingCartStats.height + 'px';

            playScreen.appendChild(shoppingCartElement);

        }
    }

    return factory;
}

function createVegan (posX, posY) {
    let veganElement =  document.createElement('div');
    veganElement.classList.add('vegan');
    veganElement.style.top = posY + 'px';
    veganElement.style.left = posX + 'px';

    return veganElement;
}