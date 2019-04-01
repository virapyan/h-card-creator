module.exports = {
  plugins: [
    'babel-plugin-styled-components',
    "@babel/plugin-proposal-class-properties",
    'jest-hoist'
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
};