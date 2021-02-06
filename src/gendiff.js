import _ from 'lodash';
import { parseJson } from './parsers.js';
import readFile from './readfile.js';

const tab = '  ';

const genDiff = (path1, path2) => {
  const diff = [];

  const file1 = readFile(path1);
  const file2 = readFile(path2);

  const obj1 = parseJson(file1);
  const obj2 = parseJson(file2);

  Object.entries(obj1)
    .forEach(([key, value]) => {
      if (!_.has(obj2, key)) {
        diff.push(`- ${key}: ${value}`);
      } else if (obj2[key] !== value) {
        diff.push(`- ${key}: ${value}`);
        diff.push(`+ ${key}: ${obj2[key]}`);
      } else {
        diff.push(`${key}: ${value}`);
      }
    });

  Object.entries(obj2)
    .forEach(([key, value]) => {
      if (!_.has(obj1, key)) {
        diff.push(`+ ${key}: ${value}`);
      }
    });

  const diffStr = diff.join(`\n${tab}`);

  return `{\n${tab}${diffStr}\n}`;
};

export default genDiff;
