module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'comma-dangle': 0,
    semi: ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single']
  }
}
