var state = {
    score: 0,
    gameOver: false,
    vegan : {
        x: 100, 
        y: 200,
        width: 90, 
        height: 130, 
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
        score: 1500, 
    },
   appleStats: {
       nextAppleCreation: 0,
       maxCreationAppleInterval: 2500,
       width: 50, 
       height: 53,
       speed: 3,
       score: 1000,
   },
   shoppingCartStats: {
       width: 90,
       height: 75, 
       speed: 10,
       nextShoppingCartCreation: 0,
       shoppingCartSpeed: 400,
   }
    

}