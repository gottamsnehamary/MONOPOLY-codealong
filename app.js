var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
console.log(board)

const Player_Button1 = doucment.getElementById("Player-1");
const Player_Button2 = doucment.getElementById("Player-2");


console.log(Player_Button);

Player_Button1.addEventListener('click', rollDice_1);
Player_Button2.addEventListener('click', rollDice_2);

var player1 = ["ProGrad", 0, 1000];
var player2 = ["FACEPrep", 0, 1000];

function rollDice_1() {
    let position = math.floor(Math.random() * 6) + 1;
    changePosition_1 = (player1[1], position);
    console.log("player one rolls", position);

}

function changePosition_1(old, currentPos) {
    var newPosition = old + currentPos;
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);

}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length)
        updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    Console.log(updateMoney);

}

//player2 roll dice
function rollDice_2() {
    let position = math.floor(Math.random() * 6) + 1;
    changePosition_2 = (player2[1], position);
    console.log("player one rolls", position);

}

function changePosition_2(old, currentPos) {
    var newPosition = old + currentPos;
    player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney_1(player2[1]);

}

function updateMoney_2(p2) {
    var updateMoney = 0;
    if (p2 < board.length)
        updateMoney = player2[2] - board[p2 - 1];
    else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }
    Console.log(updateMoney);

}