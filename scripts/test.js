require([
    'scripts/dom',
    'scripts/game'
], function draw(dom, game) {
    var canvas = dom.$("#canvas")[0];
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (500, 500, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (30, 30, 50, 50);
    }
  }
);
