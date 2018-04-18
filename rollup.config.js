import purs from "rollup-plugin-purs";
import uglify from 'rollup-plugin-uglify';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: "src/Main.purs",
  dest: "public/bundle.js",
  format: "iife",
  sourceMap: true,
  plugins: [
    purs(),
    commonjs(),
    resolve(),
    uglify()
  ]
};