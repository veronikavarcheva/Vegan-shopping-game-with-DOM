function gameFactory () {

    let {vegan} = state;

    let startScreen = document.querySelector('.start-screen');
    let scoreScreen = document.querySelector('.score-screen');
    let playScreen = document.querySelector('.play-screen');
    let veganElement = createVegan(vegan.x, vegan.y);

    playScreen.appendChild(veganElement);

    let factory = {
        startScreen,
        scoreScreen, 
        playScreen, 

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