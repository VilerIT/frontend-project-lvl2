import _ from 'lodash';

const prefixes = {
  added: '+ ',
  removed: '- ',
  nested: '  ',
  unchanged: '  ',
};

const propertyToString = (key, value, depth) => {
  if (!_.isObject(value)) {
    return `${key}: ${value}`;
  }

  const tab = '  '.repeat(depth);
  const endTab = '  '.repeat(depth - 1);
  const startTab = `\n${tab}`;

  const result = Object.entries(value)
    .flatMap(
      ([propertyKey, propertyValue]) => `${prefixes.unchanged}${propertyToString(propertyKey, propertyValue, depth + 2)}`,
    )
    .join(startTab);

  const entryStart = `{${startTab}`;
  const entryEnd = `\n${endTab}}`;

  return `${key}: ${entryStart}${result}${entryEnd}`;
};

const formatStylish = (ast) => {
  const iter = (properties, depth) => {
    const tab = '  '.repeat(depth);
    const lineStart = `\n${tab}`;

    const result = properties.flatMap((property) => {
      const { key, value, status } = property;
      const keyValue = propertyToString(key, value, depth + 2);

      switch (status) {
        case 'updated':
          return [
            `${prefixes.removed}${propertyToString(key, property.oldValue, depth + 2)}`,
            `${prefixes.added}${keyValue}`,
          ];
        case 'nested':
          return `${prefixes.nested}${key}: ${iter(property.children, depth + 2)}`;
        default: {
          if (prefixes[status]) {
            return `${prefixes[status]}${keyValue}`;
          }
          throw new Error(`Unexpected status name: ${status}`);
        }
      }
    });

    const endTab = '  '.repeat(depth - 1);

    return `{${lineStart}${result.join(lineStart)}\n${endTab}}`;
  };

  return iter(ast, 1);
};

export default formatStylish;
