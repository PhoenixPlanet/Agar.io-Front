define([
    'scripts/dom'
], function(dom) {
    var canvas = dom.$("#canvas")[0];
    var context = canvas.getContext("2d");
    
    const CONST_WIDTH = 1920;
    const CONST_HEIGHT = 1080;
    const CONST_CENTER_Y = 1920 / 2;
    const CONST_CENTER_X = 1080 / 2;
    const CONST_UNIT = 120;

    /* function startGame() {
        myGameArea.start();
        myGamePiece = new component(30, 30, "red", 10, 120);
        gg = new grid( 0, 0, 2 );
        ac = new circle(30, 40, 30, "red", 1);
        ad = new circle(30, 40, 20, "red", 1);
        ae = new circle(30, 40, 10, "red", 1);
        //ll = new line( 0, tmpY, CONST_HEIGHT, tmpY );
        
    } */

    function unitToPixel( d, scale ) {
        return d * CONST_UNIT / scale;
    }

    function setScore(score) {
        dom.$("#score").innerText = score;
    }

    function component( width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;    
        ctx = context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    function circle( centerX, centerY, radius, color, borderWidth ) {
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = color;
        context.fill();
        context.lineWidth = borderWidth;
        context.strokeStyle = '#003300';
        context.stroke();
    }

    function line( x1, y1, x2, y2, color, width) {
        context.beginPath();
        context.moveTo( y1, x1 );
        context.lineTo( y2, x2 );
        context.lineWidth = width;
        context.strokeStyle = color;
        context.stroke();
    }

    // unit: unit grid
    /* function grid( context, viewCenterX, viewCenterY ) {
        // light line / 0.2 unit;
        
        // heavy line / 1 unit;
        
        // border
        
    } */

    function grid( disX, disY, scale ) {
        // light line / 0.2 unit;
        
        // heavy line / 1 unit;
        for ( i = -20; i <= 20; i++ ) {
            tmpY = CONST_CENTER_Y + disY + CONST_UNIT * i / scale;
            new line( 0, tmpY, CONST_HEIGHT, tmpY , '#000000', 3);
        }
        for ( i = -20; i <= 20; i++ ) {
            tmpY = CONST_CENTER_Y + disY + CONST_UNIT * i / scale;
            new line( 0, tmpY, CONST_HEIGHT, tmpY , '#000000', 3);
        }
    }

    return {
        canvas : canvas,
        ctx : context,
        setScore : setScore,
        component : component,
        circle : circle,
        line : line,
        grid : grid,
        unitToPixel : unitToPixel,
        values : {
            width : CONST_WIDTH,
            height : CONST_HEIGHT,
            unit : CONST_UNIT
        }
    }
    
});

