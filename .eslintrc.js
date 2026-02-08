module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: 'eslint:recommended',
    globals: {},
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 2],              // отступы в две единицы
        quotes: ['error', 'single'],       // использование одинарных кавычек
        semi: ['error', 'always'],         // обязательные точки с запятыми
        eqeqeq: 'warn',                    // предупреждение при == и !=
        curly: 'warn',                     // рекомендуются фигурные скобки
        'no-console': 'off'                // разрешаем console.log для дебага
    }
};