let field = null;
const cells = [];
let lastPosition = -1;
let interval = null;

function createGrid() {
    if (!field) return;
    cells.length = 0;
    field.innerHTML = '';
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        field.appendChild(cell);
        cells.push(cell);
    }
}

function placeGoblin() {
    if (cells.length === 0) return;
    let pos;
    do { pos = Math.floor(Math.random() * 16); } while (pos === lastPosition);
    if (lastPosition !== -1 && cells[lastPosition]) cells[lastPosition].innerHTML = '';
    cells[pos].innerHTML = '<div class="goblin"></div>';
    lastPosition = pos;
    setTimeout(() => { if (cells[pos]) cells[pos].innerHTML = ''; }, 1000);
}

function handleClick(event) {
    const target = event.target;
    if (target.classList.contains('goblin')) {
        const cell = target.parentElement;
        cell.classList.add('hit');
        setTimeout(() => cell.classList.remove('hit'), 300);
    } else {
        const cell = target.classList.contains('cell') ? target : target.closest('.cell');
        if (!cell) return;
        cell.classList.add('miss');
        setTimeout(() => cell.classList.remove('miss'), 300);
    }
}

function attachHandlers() {
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick);
    });
}

function startGame() {
    if (interval) return;
    placeGoblin();
    interval = setInterval(placeGoblin, 1500);
}

function stopGame() {
    clearInterval(interval);
    interval = null;
}

function restartGame() {
    stopGame();
    lastPosition = -1;
    createGrid();
    attachHandlers();
    startGame();
}

function init(opts = {}) {
    field = opts.field || document.getElementById(opts.fieldId || 'game-field');
    if (!field) return;
    createGrid();
    attachHandlers();
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const restartBtn = document.getElementById('restart-btn');
    if (startBtn) startBtn.addEventListener('click', startGame);
    if (stopBtn) stopBtn.addEventListener('click', stopGame);
    if (restartBtn) restartBtn.addEventListener('click', restartGame);
}

// Экспорт в Node.js
if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
    module.exports = {
        init,
        createGrid,
        placeGoblin,
        handleClick,
        attachHandlers,
        startGame,
        stopGame,
        restartGame,
        _internals: { cells, getLastPosition: () => lastPosition }
    };
}

// Автозапуск в браузере
if (typeof window !== 'undefined') {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(() => init(), 0);
    } else {
        window.addEventListener('DOMContentLoaded', () => init());
    }
}