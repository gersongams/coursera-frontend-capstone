module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "eslint-config-prettier"
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/react-in-jsx-scope": "off"
  },
}
