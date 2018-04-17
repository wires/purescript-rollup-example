import purs from "rollup-plugin-purs";
import uglify from 'rollup-plugin-uglify';

export default {
  entry: "src/Main.purs",
  dest: "bundle.js",
  format: "iife",
  // sourceMap: true,
  plugins: [
    purs(),
    uglify()
  ]
};