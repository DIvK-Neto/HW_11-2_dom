module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true, // Поддержка Jest для тестов
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 2],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        eqeqeq: 'warn',
        curly: 'warn',
        'no-console': 'off',
        'no-unused-vars': 'warn',
        'prefer-const': 'warn',
        'arrow-parens': ['warn', 'as-needed']
    },
    globals: {
        beforeEach: 'readonly',
        test: 'readonly',
        expect: 'readonly'
    }
};
