/* eslint-env jest */

beforeEach(() => {
    document.body.innerHTML = `
    <div id="game-field"></div>
    <button id="start-btn"></button>
    <button id="stop-btn"></button>
    <button id="restart-btn"></button>
  `;
});

const app = require('./app.js');

test('createGrid populates 16 cells', () => {
    app.init();
    app.createGrid();
    const cells = document.querySelectorAll('#game-field .cell');
    expect(cells.length).toBe(16);
});
