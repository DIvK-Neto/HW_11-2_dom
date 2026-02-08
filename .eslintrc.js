module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020, // Обновляем версию ECMAscript до последней актуальной версии
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 2], // Строгая настройка отступов
        quotes: ['error', 'single'], // Одинарные кавычки обязательны
        semi: ['error', 'always'], // Точка с запятой должна быть везде
        eqeqeq: 'warn', // Предупреждение при использовании двойного равенства
        curly: 'warn', // Рекомендуются фигурные скобки вокруг блоков
        'no-console': 'off', // Разрешаем использование console.log
        'no-unused-vars': 'warn', // Предупреждаем о неиспользуемых переменных
        'prefer-const': 'warn', // Рекомендуем использование констант там, где возможно
        'arrow-parens': ['warn', 'as-needed'] // Требуем круглые скобки вокруг аргументов стрелочных функций
    }
};