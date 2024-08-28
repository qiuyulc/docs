module.exports = {
    extends: ['eslint:recommended'],
    env: {
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        'no-var': 2
    },
    plugins:['import'],//解决动态导入语法报错
}