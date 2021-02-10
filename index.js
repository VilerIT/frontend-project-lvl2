import path from 'path';
import readFile from './src/readfile.js';
import generateAst from './src/generateast.js';
import parse from './src/parsers.js';
import stylish from './src/formatters.js';

const genDiff = (path1, path2, format = 'stylish') => {
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

  if (format === 'stylish') {
    return stylish(ast);
  }

  return 'No such format is found.';
};

export default genDiff;
