import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const formatAst = (ast, formatType) => {
  let format;

  if (formatType === 'stylish') {
    format = formatStylish;
  } else if (formatType === 'plain') {
    format = formatPlain;
  } else {
    return `Unknown format: ${formatType}`;
  }

  return format(ast);
};

export default formatAst;
