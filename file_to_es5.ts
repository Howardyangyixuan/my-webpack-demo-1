import * as babel from '@babel/core';
import * as fs from 'fs';

const code = fs.readFileSync('./test.js').toString()
const ast = babel.parse(code, {sourceType: 'module'});
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
});
fs.writeFileSync('./test.es5.js',result.code)