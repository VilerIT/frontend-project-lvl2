import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
};

export default (ast, formatType) => {
  const format = formatters[formatType];

  if (!format) {
    throw new Error(`Unexpected format: ${formatType}`);
  }

  return format(ast);
};
