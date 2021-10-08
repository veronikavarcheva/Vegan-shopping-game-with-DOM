let game = gameFactory();
game.startScreen.addEventListener('click', gameStart);

function gameStart() {
    game.startScreen.classList.add('hidden');
    game.playScreen.classList.remove('hidden');
}