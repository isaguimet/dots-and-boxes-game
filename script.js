let fabricCanvas = new fabric.Canvas('myCanvas');
// fabricCanvas.hasControls = false;

const canvasWidth = 500
const canvasHeight = 500
const circleRadius = 10

// Initialization of objects

class Player {
    constructor(myName, myTurn, myColor, myPoints) {
        this.myName = myName;
        this.myTurn = myTurn;
        this.myColor = myColor;
        this.myPoints = myPoints;
    }
}

// Create 3 players each with unique colors
const player1 = new Player("player 1", false, "blue", 0);
const player2 = new Player("player 2", false, "red", 0);
const player3 = new Player("player 3", false, "green", 0);

// Create a box class to initialize 9 boxes on canvas
class Box {
    // Upon completing a box (all sides are true), change box's color to player's color
    boxColor = '';

    constructor(topSide, leftSide, rightSide, bottomSide) {
        this.topSide = topSide;
        this.leftSide = leftSide;
        this.rightSide = rightSide;
        this.bottomSide = bottomSide;
    }

    isBoxComplete() {
        return this.topSide === true && this.leftSide === true
            && this.rightSide === true && this.bottomSide === true;
    }
}

// let box1 = new Box(false, false, false, false);
// boxComplete = box1.isBoxComplete()
// box1.boxColor = player1.myColor;
// console.log(boxComplete)
// console.log(box1.boxColor)

let circle;
function drawCircles() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            circle = new fabric.Circle({
                id: 'circle',
                left: i*(canvasWidth/4)+50,
                top: j*(canvasHeight/4)+50,
                radius: circleRadius,
                fill: 'black'
            });
            circle.selectable = false;
            fabricCanvas.add(circle);
        }
    }
}
drawCircles();

// Boxes
// -----------
// 1 | 2 | 3 |
// 4 | 5 | 6 |
// 7 | 8 | 9 |
// -----------

// Creating boxes to be able to identify player points (filled boxes)
let box1 = new Box(false, false, false, false);
let box2 = new Box(false, false, false, false);
let box3 = new Box(false, false, false, false);

let box4 = new Box(false, false, false, false);
let box5 = new Box(false, false, false, false);
let box6 = new Box(false, false, false, false);

let box7 = new Box(false, false, false, false);
let box8 = new Box(false, false, false, false);
let box9 = new Box(false, false, false, false);

// Creating box lines for 9 boxes each with distinct ID's
function drawBox1Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox1Line',
        left: 60, top: 60,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox1Line',
        left: 60, top: (canvasHeight/4)+60,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox1Line',
        left: 59, top: 59,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox1Line',
        left: (canvasWidth/4)+59, top: 59,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}
// drawBox1Lines()

function drawBox2Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox2Line',
        left: (canvasWidth/4)+60, top: 60,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox2Line',
        left: (canvasWidth/4)+60, top: (canvasHeight/4)+60,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false,
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox2Line',
        left: (canvasWidth/4)+59, top: 59,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox2Line',
        left: 2*(canvasWidth/4)+59, top: 59,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}
drawBox2Lines()

function drawBox3Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox3Line',
        left: 2*(canvasWidth/4)+60, top: 60,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox3Line',
        left: 2*(canvasWidth/4)+60, top: (canvasHeight/4)+60,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false,
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox3Line',
        left: 2*(canvasWidth/4)+59, top: 59,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox3Line',
        left: 3*(canvasWidth/4)+59, top: 59,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}
drawBox3Lines()

function drawBox4Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox4Line',
        left: 60, top: (canvasHeight/4)+60,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox4Line',
        left: 60, top: 2*(canvasHeight/4)+60,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox4Line',
        left: 59, top: (canvasWidth/4)+59,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox4Line',
        left: (canvasWidth/4)+59, top: (canvasWidth/4)+59,
        stroke: 'grey', opacity: 0.5, strokeWidth: 5, strokeDashArray: [5,5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}
drawBox4Lines();

function drawLines() {
    drawBox1Lines();
    drawBox2Lines();
    drawBox3Lines();
    drawBox4Lines();
}

drawLines()

console.log(fabricCanvas.getObjects())

function restartGame() {
    fabricCanvas.clear()
    drawCircles()
    drawLines()
    console.log("need to make better");
    fabricCanvas.renderAll();
}

// When we click on a line, do the following
fabricCanvas.on('mouse:down', function(e) {
    let line = e.target;

    // Change the color of lines not circles
    function changeLineToPlayerColor() {
        if (line.id !== 'circle') {
            line.set('stroke', player2.myColor);
        }
    }

    function changeToSolidLine() {
        line.set('opacity', 1);
        // Changes line from dashed to solid
        line.set('strokeDashArray', [])
    }

    // Box 1
    if (line.id === 'topBox1Line') {
        changeToSolidLine()
        changeLineToPlayerColor();
        box1.topSide = true;
    }

    if (line.id === 'leftBox1Line') {
        changeToSolidLine()
        changeLineToPlayerColor();
        box1.leftSide = true;
    }

    // Box 2
    if (line.id === 'topBox2Line') {
        changeToSolidLine()
        changeLineToPlayerColor();
        box2.topSide = true;
    }

    // Box 3
    if (line.id === 'topBox3Line') {
        changeToSolidLine()
        changeLineToPlayerColor();
        box3.topSide = true;
    }

    if (line.id === 'rightBox3Line') {
        changeToSolidLine()
        changeLineToPlayerColor();
        box3.rightSide = true;
    }

    // Box 1, 2 and 3 sharing (L & R) sides
    if (line.id === 'rightBox1Line' || line.id === 'leftBox2Line') {
        changeToSolidLine()
        changeLineToPlayerColor();
        box1.rightSide = true;
        box2.leftSide = true;
    }

    if (line.id === 'rightBox2Line' || line.id === 'leftBox3Line') {
        changeToSolidLine()
        changeLineToPlayerColor();
        box2.rightSide = true;
        box3.leftSide = true;
    }

    // Box 4
    if (line.id === 'topBox4Line' || line.id === 'bottomBox1Line') {
        changeToSolidLine()
        changeLineToPlayerColor();
        box1.bottomSide = true;
        box4.topSide = true;
    }

    fabricCanvas.renderAll();
    if (box1.isBoxComplete()) {
       let rect = new fabric.Rect({
           left: 67,
           top: 67,
           fill: player1.myColor,
           width: (canvasWidth/4)-10,
           height: (canvasHeight/4)-10,
           selectable: false
        })
        fabricCanvas.add(rect)
        fabricCanvas.renderAll()
    }
})


