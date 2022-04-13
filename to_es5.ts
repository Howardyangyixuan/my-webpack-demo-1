import * as babel from '@babel/core';

const code = `let a = 'let'; let b = 1`;
const ast = babel.parse(code, {sourceType: 'module'});
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
});
console.log(result.code);