module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended', // 1. eslint-plugin-import
        'plugin:prettier/recommended', // 3. eslint-plugin-prettier
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'simple-import-sort', // 2. eslint-plugin-simple-import-sort
    ],
    rules: {
        // 2. eslint-plugin-simple-import-sort
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['/vite.svg', './public/vite.svg']], // Unable to resolve path to module '/vite.svg
            },
        },
    },
    ignorePatterns: [
        'tailwind.config-all.cjs', // ignore tailwindcss config
    ],
};
