import path from 'path';
import readFile from './src/readFile.js';
import generateAst from './src/generateAST.js';
import parse from './src/parsers.js';
import format from './src/formatters/index.js';

const genDiff = (path1, path2, formatType = 'stylish') => {
  const ext1 = path.extname(path1);
  const ext2 = path.extname(path2);

  const content1 = readFile(path1);
  const content2 = readFile(path2);

  const obj1 = parse(content1, ext1);
  const obj2 = parse(content2, ext2);

  if (!obj1 || !obj2) {
    return 'Unsupported file.';
  }

  const ast = generateAst(obj1, obj2);

  return format(ast, formatType);
};

export default genDiff;
