module.exports = {
    env: {
      node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    rules: {
      // Add your custom rules here
    }
  }