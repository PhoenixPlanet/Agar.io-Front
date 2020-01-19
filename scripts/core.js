define([
    'scripts/dom',
    'scripts/game',
    'scripts/render'
], function (dom, game, renderer) {
    var gameData = game.gameData;
    var constValue = renderer.values;
    var canvas = renderer.canvas;
    var a = 0;
    
    renderer.ctx.font = "20px malgun gothic";

    function Update(){
        renderer.ctx.beginPath();
        renderer.ctx.clearRect(0, 0, constValue.width, constValue.height);

        if (typeof gameData == "object" && !Object.keys(gameData).length){
            renderer.ctx.fillText("Loading...", constValue.width / 2, constValue.height / 2);
        } else if (gameData['state'] == "dead") {
            renderer.ctx.font = "70px malgun gothic";
            renderer.ctx.fillText("Game Over!", constValue.width / 2 - 150, constValue.height / 2 - 100);
            renderer.ctx.font = "50px malgun gothic";
            renderer.ctx.fillText(gameData['score'], constValue.width / 2 - 50, constValue.height / 2);
            renderer.ctx.font = "20px malgun gothic";
        } else {
            renderer.setScore(gameData['score']);

            for (key in gameData['enemy']) {
                value = gameData['enemy'][key];
                renderer.circle(constValue.width / 2 + value['x'], constValue.height / 2 + value['y'], 
                    renderer.unitToPixel(value['r'], gameData['scale']), value['c'], 1);
            }
    
            for (key in gameData['food']) {
                value = gameData['food'][key];
                renderer.circle(constValue.width / 2 + value['x'], constValue.height / 2 + value['y'], 
                    2, value['c'], 1);
            }
    
            playerData = gameData['player'];
            renderer.circle(constValue.width / 2, constValue.height / 2,
                renderer.unitToPixel(playerData['r'], gameData['scale']), playerData['c'], 1);    
        }

        renderer.ctx.closePath();
    }

    function Setup() {

    }

    return {
        Update : Update,
        Setup : Setup
    }
})