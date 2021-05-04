const { override, addBabelPreset } = require("customize-cra");

module.exports = override(
  addBabelPreset("@emotion/babel-preset-css-prop"),
  (config) => {
    // https://github.com/facebook/create-react-app/issues/9127#issuecomment-721795018
    // Let Babel compile outside of src/.
    const tsRule = config.module.rules[1].oneOf[2];
    tsRule.include = undefined;
    tsRule.exclude = /node_modules/;

    return config;
  }
);
