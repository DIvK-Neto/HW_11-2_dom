const app = require('./app');

beforeEach(() => {
  document.body.innerHTML = `
      <div id="game-field"></div>
      <button id="start-btn"></button>
      <button id="stop-btn"></button>
      <button id="restart-btn"></button>
    `;
});

test('createGrid populates 16 cells', () => {
  app.init(); // Вызываем инициализацию приложения перед созданием сетки
  app.createGrid(); // Создаем сетку клеток

  // Получаем созданные ячейки и проверяем количество
  const cells = document.querySelectorAll('#game-field .cell');
  expect(cells.length).toBe(16); // Ожидаем ровно 16 элементов
});