module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // ESLint で使用するパーサーを指定する
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    // @typescript-eslint/eslint-plugin のおすすめルールを適用する
    'plugin:@typescript-eslint/recommended',
    // ESLint と Prettier を共存させる場合、「ESLint のスタイル設定を全部 OFF にし ESLint の中から Prettier を実行」
    'plugin:prettier/recommended',
    // ※ extends 配列の一番最後に配置すること
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
  },
  rules: {},
}
