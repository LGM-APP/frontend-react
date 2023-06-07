import React, { useEffect } from 'react';
import './Snaku.css';

const SnakeGame = () => {
  useEffect(() => {
    const dotSize = 20;
    const gameBoardSize = 400;
    let direction = 'right';
    let snake = [{ top: gameBoardSize / 2, left: gameBoardSize / 2 }];
    let apple = null;
    const gameBoard = document.getElementById('canvas');
    const ctx = gameBoard.getContext('2d');
    let score = 0;
    let isGameRunning = false;
    let isGamePaused = false;
    let lives = 3;

    function startGame() {
      isGameRunning = true;
      resetSnake();
      score = 0;
      updateGame();
    }

    function resetSnake() {
      snake = [{ top: gameBoardSize / 2, left: gameBoardSize / 2 }];
      direction = 'right';
    }

    function updateGame() {
      if (!isGameRunning) {
        return;
      }

      updateSnake();
      updateApple();
      drawGame();
      setTimeout(updateGame, 200);
    }

    function updateSnake() {
      const head = Object.assign({}, snake[0]); // copie de la tête
      if (direction === 'right') head.left += dotSize;
      if (direction === 'down') head.top += dotSize;
      if (direction === 'left') head.left -= dotSize;
      if (direction === 'up') head.top -= dotSize;

      snake.unshift(head);

      if (apple && apple.top === head.top && apple.left === head.left) {
        apple = null;
        score++;
      } else {
        snake.pop();
      }

      if (
        head.left < 0 ||
        head.top < 0 ||
        head.left >= gameBoardSize ||
        head.top >= gameBoardSize ||
        checkCollision(head, snake.slice(1))
      ) {
        lives--;
        score = 0;
        if (lives === 0) {
          resetButton.style.display = 'block';
          startButton.style.display = 'none';
          score = 0;
          isGameRunning = false;
          resetSnake();
          direction = 'right';
        } else {
          resetSnake();
          resetButton.style.display = 'none';
          startButton.style.display = 'block';
        }
      }
    }

    function checkCollision(head, array) {
      for (let i = 0; i < array.length; i++) {
        if (head.left === array[i].left && head.top === array[i].top) {
          return true;
        }
      }
      return false;
    }

    function updateApple() {
      if (!apple) {
        apple = {
          top: Math.floor((Math.random() * gameBoardSize) / dotSize) * dotSize,
          left: Math.floor((Math.random() * gameBoardSize) / dotSize) * dotSize,
        };
      }
    }

    function drawGame() {
      ctx.clearRect(0, 0, gameBoard.width, gameBoard.height); // efface le plateau de jeu
      snake.forEach(function (dot) {
        ctx.fillStyle = 'green'; // couleur du serpent
        ctx.fillRect(dot.left, dot.top, dotSize, dotSize); // dessine le serpent
      });

      if (apple) {
        ctx.fillStyle = 'red'; // couleur de la pomme
        ctx.fillRect(apple.left, apple.top, dotSize, dotSize); // dessine la pomme
      }

      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText('Score: ' + score, 10, 30);

      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText('Score: ' + score, 10, 30);
      ctx.fillText('Lives: ' + lives, gameBoardSize - 80, 30); // Affichage du nombre de vies
    }

    function handleKeyDown(e) {
      if (e.key === ' ') {
        isGamePaused = !isGamePaused;
      } else if (
        (e.key === 'ArrowUp' || e.key === 'z') &&
        direction !== 'down' &&
        isGameRunning
      ) {
        direction = 'up';
      } else if (
        (e.key === 'ArrowDown' || e.key === 's') &&
        direction !== 'up' &&
        isGameRunning
      ) {
        direction = 'down';
      } else if (
        (e.key === 'ArrowRight' || e.key === 'd') &&
        direction !== 'left' &&
        isGameRunning
      ) {
        direction = 'right';
      } else if (
        (e.key === 'ArrowLeft' || e.key === 'q') &&
        direction !== 'right' &&
        isGameRunning
      ) {
        direction = 'left';
      }
    }

    // creation des boutons
    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.id = 'startButton';
    startButton.addEventListener('click', startGame);
    document.body.appendChild(startButton);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.id = 'resetButton';
    resetButton.style.display = 'none';
    resetButton.addEventListener('click', resetGame);
    document.body.appendChild(resetButton);

    function resetGame() {
      lives = 3;
      startGame();
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <canvas id="canvas" width="400" height="400"></canvas>;
};

export default SnakeGame;
