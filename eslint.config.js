const { dirname } = require("path");
const { FlatCompat } = require("@eslint/eslintrc");

const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
]; 