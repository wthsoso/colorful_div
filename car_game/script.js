const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("restartButton");
let score = 0;
let carX = 185; 
let obstacleX = 0;
let obstacleY = -30;
let gameInterval;

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", function() {
    location.reload();
});

function startGame() {
    startButton.disabled = true;
    gameInterval = setInterval(updateGameArea, 20);
    document.addEventListener("keydown", moveCar);
}

function moveCar(e) {
    if (e.key === "ArrowLeft" && carX > 0) {
        carX -= 10;
    } else if (e.key === "ArrowRight" && carX < 370) {
        carX += 10;
    }
}

function updateGameArea() {
    clearCanvas();
    drawObstacle();
    moveObstacle();
    drawCar();
    checkCollision();
    scoreDisplay.innerHTML = "Score: " + score;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCar() {
    ctx.fillStyle = "blue";
    ctx.fillRect(carX, canvas.height - 60, 30, 60);
}

function drawObstacle() {
    ctx.fillStyle = "red";
    ctx.fillRect(obstacleX, obstacleY, 30, 60);
}

function moveObstacle() {
    obstacleY += 5;

    if (obstacleY > canvas.height) {
        obstacleX = Math.floor(Math.random() * 370);
        obstacleY = -30;
        score++;
    }
}

function checkCollision() {
    if (
        carX < obstacleX + 30 &&
        carX + 30 > obstacleX &&
        canvas.height - 60 < obstacleY + 30
    ) {
        endGame();
    }
}

function endGame() {
    clearInterval(gameInterval);
    document.removeEventListener("keydown", moveCar);
    startButton.disabled = false;
}
