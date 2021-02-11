import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const formatAst = (ast, formatType) => {
  if (formatType === 'stylish') {
    return formatStylish(ast);
  }

  if (formatType === 'plain') {
    return formatPlain(ast);
  }

  if (formatType === 'json') {
    return formatJson(ast);
  }

  return `Unknown format: ${formatType}`;
};

export default formatAst;
