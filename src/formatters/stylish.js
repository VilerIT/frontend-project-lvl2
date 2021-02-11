import _ from 'lodash';

const propertyToString = (key, value, depth) => {
  if (!_.isObject(value)) {
    return `${key}: ${value}`;
  }

  const tab = '  '.repeat(depth + 1);
  const endTab = '  '.repeat(depth);
  const lineStart = `\n${tab}`;

  const result = Object.entries(value)
    .flatMap(([propertyKey, propertyValue]) => `  ${propertyToString(propertyKey, propertyValue, depth + 2)}`)
    .join(lineStart);

  const entryStart = `{${lineStart}`;
  const entryEnd = `\n${endTab}}`;

  return `${key}: ${entryStart}${result}${entryEnd}`;
};

const formatStylish = (ast) => {
  const iter = (properties, depth) => {
    const tab = '  '.repeat(depth);
    const lineStart = `\n${tab}`;

    const result = properties.flatMap((property) => {
      const { key, value, status } = property;
      const keyValue = propertyToString(key, value, depth + 1);

      switch (status) {
        case 'removed':
          return `- ${keyValue}`;
        case 'updated':
          return [`- ${propertyToString(key, property.oldValue, depth + 1)}`, `+ ${keyValue}`];
        case 'unchanged':
          return `  ${keyValue}`;
        case 'nested':
          return `  ${key}: ${iter(property.children, depth + 2)}`;
        case 'added':
          return `+ ${keyValue}`;
        default:
          throw new Error('Unknown status name.');
      }
    });

    const endTab = '  '.repeat(depth - 1);

    return `{${lineStart}${result.join(lineStart)}\n${endTab}}`;
  };

  return iter(ast, 1);
};

export default formatStylish;
