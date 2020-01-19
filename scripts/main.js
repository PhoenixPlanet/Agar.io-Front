require([
    'scripts/core'
], function(core) {
    core.Setup();
    var mainLoop = setInterval(core.Update, 20);
});

