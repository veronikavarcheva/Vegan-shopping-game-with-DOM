function gameFactory () {

    let { vegan, chickenLegStats } = state;

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
            chickenLegElement.classList.add('chickenLeg');
            chickenLegElement.style.width = chickenLegStats.width + 'px';
            chickenLegElement.style.height = chickenLegStats.height + 'px';

            chickenLegElement.style.left = playScreen.offsetWidth - chickenLegStats.width + 'px';
            chickenLegElement.style.top = (playScreen.offsetHeight - chickenLegStats.height)*Math.random() + 'px';
            playScreen.appendChild(chickenLegElement);
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