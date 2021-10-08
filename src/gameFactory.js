function gameFactory () {

    let {vegan} = state;

    let startScreen = document.querySelector('.start-screen');
    let scoreScreen = document.querySelector('.score-screen');
    let playScreen = document.querySelector('.play-screen');


    let factory = {
        startScreen,
        scoreScreen, 
        playScreen, 
        
    }

    return factory;
}