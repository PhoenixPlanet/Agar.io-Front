define([
    'scripts/dom'
], function (dom) {
    $ = dom.$;
    var ws = new WebSocket("ws://127.0.0.1");

    var gameData = {};

    ws.onmessage = function(event) {
        gameData = JSON.parse(event.data);
    };

    ws.addEventListener("close", function(e) {

    });

    function showScreen(screenId) {
        var activeScreen = $("#game");
    }

    return {
        socket : ws,
        gameData : gameData
    };
}
);