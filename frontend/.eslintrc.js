module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ["plugin:vue/essential", "@vue/airbnb", "eslint:recommended"],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "comma-dangle": ["error", "never"],
    quotes: ["off", "single"],
    "arrow-parens": "off"
  }
};
