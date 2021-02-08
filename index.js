import path from 'path';
import createDiff from './src/creatediff.js';
import { parseJson, parseYaml } from './src/parsers.js';

const genDiff = (path1, path2) => {
  let parse;

  const ext1 = path.extname(path1);
  const ext2 = path.extname(path2);

  if (ext1 === '.json' && ext2 === '.json') {
    parse = parseJson;
  } else if (ext1 === '.yml' && ext2 === '.yml') {
    parse = parseYaml;
  } else {
    return 'This format is not supported.';
  }

  return createDiff(path1, path2, parse);
};

export default genDiff;
