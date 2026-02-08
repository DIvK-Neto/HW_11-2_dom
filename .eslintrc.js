module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true
    },
    extends: 'eslint:recommended',
    globals: {},
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 2],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        eqeqeq: 'warn',
        curly: 'warn',
        'no-console': 'off'
    }
};
