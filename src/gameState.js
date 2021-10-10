var state = {
    score: 0,
    gameOver: false,
    vegan : {
        x: 100, 
        y: 200,
        width: 100, 
        height: 150, 
        speed: 6,
        gravity: 2
    }, 
    keys: {},
    chickenLegStats: {
        nextChickenLegCreation: 0,
        maxCreationInterval: 2500,
        width: 60,
        height: 50,
        speed: 3,
    },
   appleStats: {
       nextAppleCreation: 0,
       maxCreationAppleInterval: 1500,
       width: 50, 
       height: 50,
       speed: 2,
   }
    

}