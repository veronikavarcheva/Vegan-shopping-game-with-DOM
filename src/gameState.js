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
        maxCreationInterval: 3500,
        width: 60,
        height: 50,
        speed: 3,
    },
   appleStats: {
       nextAppleCreation: 0,
       maxCreationAppleInterval: 2500,
       width: 50, 
       height: 53,
       speed: 3,
   },
   shoppingCartStats: {
       width: 90,
       height: 75, 
       speed: 15,
       nextShoppingCartCreation: 0,
       shoppingCartSpeed: 400,
   }
    

}