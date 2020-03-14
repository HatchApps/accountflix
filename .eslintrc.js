module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'indent': ['error', 4],
      'semi': ['error', 'always'],
      'vue/html-indent': ['error', 4],
      'vue/script-indent': ['error', 4],
  }
}
