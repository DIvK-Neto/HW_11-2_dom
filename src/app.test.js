import { beforeEach, test, expect } from '@jest/globals';

// Подключение модуля приложения
import * as app from './app.js'; 

// Настройка окружения перед каждым тестом
beforeEach(() => {
  document.body.innerHTML = `
    <div id="game-field"></div>
    <button id="start-btn"></button>
    <button id="stop-btn"></button>
    <button id="restart-btn"></button>
  `;
});

// Тестируем создание сетки
test('createGrid populates 16 cells', () => {
  app.init(); // Вызываем инициализацию приложения перед созданием сетки
  app.createGrid(); // Создаем сетку клеток

  // Проверяем количество созданных ячеек
  const cells = document.querySelectorAll('#game-field .cell');
  expect(cells.length).toBe(16); // Ожидаем ровно 16 элементов
});