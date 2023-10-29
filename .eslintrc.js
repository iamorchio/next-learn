module.exports = {
  parser: '@typescript-eslint/parser', // Especifica el parser de ESLint
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Asegura que prettier tiene prioridad
    'prettier/@typescript-eslint', // Desactiva las reglas de TypeScript que pueden entrar en conflicto con Prettier
  ],
  parserOptions: {
    ecmaVersion: 2020, // Permite la sintaxis moderna de ECMAScript
    sourceType: 'module', // Permite el uso de imports
    ecmaFeatures: {
      jsx: true, // Permite la sintaxis de JSX
    },
  },
  rules: {
    // Aquí puedes añadir o sobrescribir reglas según tus preferencias
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React para configurar las reglas de eslint-plugin-react
    },
  },
};
