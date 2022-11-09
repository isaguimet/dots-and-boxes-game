let fabricCanvas = new fabric.Canvas('myCanvas');

const canvasWidth = 500
const canvasHeight = 500
const circleRadius = 10
// Offset of top left corner of circle
const horizontalOffset = 60
const verticalOffset = 60
const lineDefaultColor = 'rgb(211,211,211)'

let player1Points = document.getElementById('player1-counter');
let player2Points = document.getElementById('player2-counter');
let player3Points = document.getElementById('player3-counter');

let extraTurn = false;
let endOFGame = document.getElementById('endOfGame');

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
const player1 = new Player("player 1", false, "lightskyblue", 0);
const player2 = new Player("player 2", false, "lightcoral", 0);
const player3 = new Player("player 3", false, "lightgreen", 0);

// Create a box class to initialize 9 boxes on canvas
class Box {

    // Each box has 4 sides and a boolean that says if it has been colored or not.
    constructor(topSide, leftSide, rightSide, bottomSide, colored) {
        this.topSide = topSide;
        this.leftSide = leftSide;
        this.rightSide = rightSide;
        this.bottomSide = bottomSide;
        this.colored = colored;
    }

    resetBoxes() {
        this.topSide = false;
        this.leftSide = false;
        this.rightSide = false;
        this.bottomSide = false;
        this.colored = false;
    }

    // Need this, so we don't color boxes that have already been filled (colored)
    isBoxColored() {
        return this.colored;
    }

    isBoxComplete() {
        return this.topSide === true && this.leftSide === true
            && this.rightSide === true && this.bottomSide === true;
    }
}

let circle;
function drawCircles() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            circle = new fabric.Circle({
                id: 'circle',
                left: i * (canvasWidth / 4) + 50,
                top: j * (canvasHeight / 4) + 50,
                radius: circleRadius,
                fill: 'black'
            });
            circle.selectable = false;
            fabricCanvas.add(circle);
        }
    }
    fabricCanvas.renderAll();
}

drawCircles();

// Boxes
// -----------
// 1 | 2 | 3 |
// 4 | 5 | 6 |
// 7 | 8 | 9 |
// -----------

// Creating boxes to be able to identify player points (filled boxes)
let box1 = new Box(false, false, false, false, false);
let box2 = new Box(false, false, false, false, false);
let box3 = new Box(false, false, false, false, false);

let box4 = new Box(false, false, false, false, false);
let box5 = new Box(false, false, false, false, false);
let box6 = new Box(false, false, false, false, false);

let box7 = new Box(false, false, false, false, false);
let box8 = new Box(false, false, false, false, false);
let box9 = new Box(false, false, false, false, false);

// Creating box lines for 9 boxes each with distinct ID's
function drawBox1Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox1Line',
        left: horizontalOffset, top: horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox1Line',
        left: horizontalOffset, top: (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox1Line',
        left: verticalOffset, top: verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox1Line',
        left: (canvasWidth / 4) + verticalOffset, top: verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawBox2Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox2Line',
        left: (canvasWidth / 4) + horizontalOffset, top: horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox2Line',
        left: (canvasWidth / 4) + horizontalOffset, top: (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false,
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox2Line',
        left: (canvasWidth / 4) + verticalOffset, top: verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox2Line',
        left: 2 * (canvasWidth / 4) + verticalOffset, top: verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawBox3Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox3Line',
        left: 2 * (canvasWidth / 4) + horizontalOffset, top: horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox3Line',
        left: 2 * (canvasWidth / 4) + horizontalOffset, top: (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false,
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox3Line',
        left: 2 * (canvasWidth / 4) + verticalOffset, top: verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox3Line',
        left: 3 * (canvasWidth / 4) + verticalOffset, top: verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawBox4Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox4Line',
        left: horizontalOffset, top: (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox4Line',
        left: horizontalOffset, top: 2 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox4Line',
        left: verticalOffset, top: (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox4Line',
        left: (canvasWidth / 4) + verticalOffset, top: (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawBox5Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox5Line',
        left: (canvasHeight / 4) + horizontalOffset, top: (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox5Line',
        left: (canvasHeight / 4) + horizontalOffset, top: 2 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox5Line',
        left: (canvasWidth / 4) + verticalOffset, top: (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox5Line',
        left: 2 * (canvasWidth / 4) + verticalOffset, top: (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawBox6Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox6Line',
        left: 2 * (canvasHeight / 4) + horizontalOffset, top: (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox6Line',
        left: 2 * (canvasHeight / 4) + horizontalOffset, top: 2 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox6Line',
        left: 2 * (canvasWidth / 4) + verticalOffset, top: (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox6Line',
        left: 3 * (canvasWidth / 4) + verticalOffset, top: (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawBox7Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox7Line',
        left: horizontalOffset, top: 2 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox7Line',
        left: horizontalOffset, top: 3 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox7Line',
        left: verticalOffset, top: 2 * (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox7Line',
        left: (canvasWidth / 4) + verticalOffset, top: 2 * (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawBox8Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox8Line',
        left: (canvasHeight / 4) + horizontalOffset, top: 2 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox8Line',
        left: (canvasHeight / 4) + horizontalOffset, top: 3 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox8Line',
        left: (canvasWidth / 4) + verticalOffset, top: 2 * (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox8Line',
        left: 2 * (canvasWidth / 4) + verticalOffset, top: 2 * (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawBox9Lines() {
    let horizontalTopBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'topBox9Line',
        left: 2 * (canvasHeight / 4) + horizontalOffset, top: 2 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let horizontalBottomBoxLine = new fabric.Line([125, 0, 0, 0], {
        id: 'bottomBox9Line',
        left: 2 * (canvasHeight / 4) + horizontalOffset, top: 3 * (canvasHeight / 4) + horizontalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalLeftBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'leftBox9Line',
        left: 2 * (canvasWidth / 4) + verticalOffset, top: 2 * (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    let verticalRightBoxLine = new fabric.Line([0, 125, 0, 0], {
        id: 'rightBox9Line',
        left: 3 * (canvasWidth / 4) + verticalOffset, top: 2 * (canvasWidth / 4) + verticalOffset,
        stroke: lineDefaultColor, strokeWidth: 5, strokeDashArray: [5, 5], padding: 10,
        selectable: false
    });
    fabricCanvas.add(horizontalTopBoxLine);
    fabricCanvas.add(horizontalBottomBoxLine);
    fabricCanvas.add(verticalLeftBoxLine);
    fabricCanvas.add(verticalRightBoxLine);
    fabricCanvas.renderAll();
}

function drawLines() {
    drawBox1Lines();
    drawBox2Lines();
    drawBox3Lines();
    drawBox4Lines();
    drawBox5Lines();
    drawBox6Lines();
    drawBox7Lines();
    drawBox8Lines();
    drawBox9Lines();
}

function startGame() {
    drawCircles()
    drawLines()
    player1.myTurn = true;

    localStorage.setItem('saved-p1-score', '0');
    localStorage.setItem('saved-p2-score', '0');
    localStorage.setItem('saved-p3-score', '0');
}

startGame()

function restartGame() {
    fabricCanvas.clear()

    // Reset all boxes' side to false (have not been clicked yet)
    box1.resetBoxes();
    box2.resetBoxes();
    box3.resetBoxes();
    box4.resetBoxes();
    box5.resetBoxes();
    box6.resetBoxes();
    box7.resetBoxes();
    box8.resetBoxes();
    box9.resetBoxes();

    // Reset all players' points to 0
    player1.myPoints = 0;
    player1Points.innerText = "Player 1: " + player1.myPoints;

    player2.myPoints = 0;
    player2Points.innerText = "Player 2: " + player2.myPoints;

    player3.myPoints = 0;
    player3Points.innerText = "Player 3: " + player3.myPoints;

    startGame()
}

allBoxes = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9]
]

// If box is completed, then we fill the box with a rectangle with the current player's color.
function colorBoxIfCompleted() {

    for (let i = 0; i < allBoxes.length; i++) {
        for (let j = 0; j < allBoxes[i].length; j++) {
            if (allBoxes[j][i].isBoxComplete()) {
                let rect = new fabric.Rect({
                    left: i * (canvasWidth / 4) + 67,
                    top: j * (canvasWidth / 4) + 67,
                    width: (canvasWidth / 4) - 10,
                    height: (canvasHeight / 4) - 10,
                    selectable: false
                })

                // Need to make sure we are not creating and coloring the box again if it has already been colored
                if (player1.myTurn && allBoxes[j][i].isBoxColored() === false) {
                    rect.fill = player1.myColor;
                    fabricCanvas.add(rect)

                    // Increase player 1's point by 1
                    player1.myPoints++;
                    player1Points.innerText = "Player 1: " + player1.myPoints;

                    // Since the box was colored by player 1, player 1 gets one extra turn
                    extraTurn = true;
                }
                else if (player2.myTurn && allBoxes[j][i].isBoxColored() === false) {
                    rect.fill = player2.myColor;
                    fabricCanvas.add(rect)

                    // Increase player 2's point by 1
                    player2.myPoints++;
                    player2Points.innerText = "Player 2: " + player2.myPoints;

                    // Since the box was colored by player 2, player 2 gets one extra turn
                    extraTurn = true;
                }
                else if (player3.myTurn && allBoxes[j][i].isBoxColored() === false) {
                    rect.fill = player3.myColor;
                    fabricCanvas.add(rect)

                    // Increase player 3's point by 1
                    player3.myPoints++;
                    player3Points.innerText = "Player 3: " + player3.myPoints;

                    // Since the box was colored by player 3, player 3 gets one extra turn
                    extraTurn = true;
                }
                allBoxes[j][i].colored = true;
                fabricCanvas.renderAll()
            }
        }
    }
}

// Game ends when all 9 boxes are completed
function checkWinningCondition() {
    return (box1.isBoxComplete() && box2.isBoxComplete() && box3.isBoxComplete() &&
        box4.isBoxComplete() && box5.isBoxComplete() && box6.isBoxComplete() &&
        box7.isBoxComplete() && box8.isBoxComplete() && box9.isBoxComplete());
}

// At the end of the game, this function gets executed signaling that the game is over.
fabricCanvas.on('mouse:over', function () {
    if (checkWinningCondition()) {
        endOFGame.innerHTML = "It's the end of the game! Check out who won at " +
            "<a href='results.html'>See the Results</a>."
    }
});

// When we click on a line, do the following
fabricCanvas.on('mouse:down', function (e) {

    let line = e.target;

    // For extra turns, set variable to current player's turn to true.
    // Otherwise, it is the next's player's turn
    function potentialExtraTurnForP1() {
        if (extraTurn) {
            player1.myTurn = true;
        } else {
            player1.myTurn = false;
            player2.myTurn = true;
        }
        extraTurn = false;
    }

    function potentialExtraTurnForP2() {
        if (extraTurn) {
            player2.myTurn = true;
        } else {
            player2.myTurn = false;
            player3.myTurn = true;
        }
        extraTurn = false;
    }

    function potentialExtraTurnForP3() {
        if (extraTurn) {
            player3.myTurn = true;
        } else {
            player3.myTurn = false;
            player1.myTurn = true;
        }
        extraTurn = false;
    }

    // Change the color of lines not circles
    function changeLineToPlayerColor() {
        if (line.id !== 'circle') {
            if (player1.myTurn) {
                line.set('stroke', player1.myColor);
                colorBoxIfCompleted();
                potentialExtraTurnForP1();
            }
            else if (player2.myTurn) {
                line.set('stroke', player2.myColor);
                colorBoxIfCompleted();
                potentialExtraTurnForP2();
            }
            else if (player3.myTurn) {
                line.set('stroke', player3.myColor);
                colorBoxIfCompleted();
                potentialExtraTurnForP3();
            }
        }
    }

    function changeToSolidLine() {
        // Changes line from dashed to solid
        line.set('strokeDashArray', [])
    }

    // Box 1 top
    if (line.id === 'topBox1Line') {
        changeToSolidLine()
        box1.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Top 1 left
    else if (line.id === 'leftBox1Line') {
        changeToSolidLine()
        box1.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 2 top
    else if (line.id === 'topBox2Line') {
        changeToSolidLine()
        box2.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 3 top
    else if (line.id === 'topBox3Line') {
        changeToSolidLine()
        box3.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 3 right
    else if (line.id === 'rightBox3Line') {
        changeToSolidLine()
        box3.rightSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 1, 2 sharing (L & R) sides
    else if (line.id === 'rightBox1Line' || line.id === 'leftBox2Line') {
        changeToSolidLine()
        box1.rightSide = true;
        box2.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 2, 3 sharing (L & R) sides
    else if (line.id === 'rightBox2Line' || line.id === 'leftBox3Line') {
        changeToSolidLine()
        box2.rightSide = true;
        box3.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 1 and 4 sharing (T & B) sides
    else if (line.id === 'bottomBox1Line' || line.id === 'topBox4Line')  {
        changeToSolidLine()
        box1.bottomSide = true;
        box4.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 2 and 5 sharing (T & B) sides
    else if (line.id === 'bottomBox2Line' || line.id === 'topBox5Line')  {
        changeToSolidLine()
        box2.bottomSide = true;
        box5.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 3 and 6 sharing (T & B) sides
    else if (line.id === 'bottomBox3Line' || line.id === 'topBox6Line')  {
        changeToSolidLine()
        box3.bottomSide = true;
        box6.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 4 left
    else if (line.id === 'leftBox4Line') {
        changeToSolidLine()
        box4.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 4 and 5 sharing (R & L) sides
    else if (line.id === 'rightBox4Line' || line.id === 'leftBox5Line') {
        changeToSolidLine()
        box4.rightSide = true;
        box5.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 5 and 6 sharing (R & L) sides
    else if (line.id === 'rightBox5Line' || line.id === 'leftBox6Line') {
        changeToSolidLine()
        box5.rightSide = true;
        box6.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 6
    else if (line.id === 'rightBox6Line') {
        changeToSolidLine()
        box6.rightSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 7
    else if (line.id === 'leftBox7Line') {
        changeToSolidLine()
        box7.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 4 and 7 sharing (B & T) sides
    else if (line.id === 'bottomBox4Line' || line.id === 'topBox7Line')  {
        changeToSolidLine()
        box4.bottomSide = true;
        box7.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 5 and 8 sharing (B & T) sides
    else if (line.id === 'bottomBox5Line' || line.id === 'topBox8Line')  {
        changeToSolidLine()
        box5.bottomSide = true;
        box8.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 6 and 9 sharing (B & T) sides
    else if (line.id === 'bottomBox6Line' || line.id === 'topBox9Line')  {
        changeToSolidLine()
        box6.bottomSide = true;
        box9.topSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 7 and 8 sharing (R & L) sides
    else if (line.id === 'rightBox7Line' || line.id === 'leftBox8Line') {
        changeToSolidLine()
        box7.rightSide = true;
        box8.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 8 and 9 sharing (R & L) sides
    else if (line.id === 'rightBox8Line' || line.id === 'leftBox9Line') {
        changeToSolidLine()
        box8.rightSide = true;
        box9.leftSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 9 right
    else if (line.id === 'rightBox9Line') {
        changeToSolidLine()
        box9.rightSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 7 bottom
    else if (line.id === 'bottomBox7Line') {
        changeToSolidLine()
        box7.bottomSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 8 bottom
    else if (line.id === 'bottomBox8Line') {
        changeToSolidLine()
        box8.bottomSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    // Box 9 bottom
    else if (line.id === 'bottomBox9Line') {
        changeToSolidLine()
        box9.bottomSide = true;
        changeLineToPlayerColor();
        line.evented = false;
    }

    fabricCanvas.renderAll();

    // Saving scores for all players in local storage to be able to retrieve them in the results page
    localStorage.setItem('saved-p1-score', player1.myPoints)
    localStorage.setItem('saved-p2-score', player2.myPoints)
    localStorage.setItem('saved-p3-score', player3.myPoints)
})


