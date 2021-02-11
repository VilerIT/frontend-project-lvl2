import _ from 'lodash';

const valueToString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return value;
};

const formatPlain = (ast) => {
  const iter = (properties, path) => {
    const result = properties
      .flatMap((property) => {
        const { key, value, status } = property;
        const pathToProperty = [...path, key].join('.');

        switch (status) {
          case 'removed':
            return `Property '${pathToProperty}' was removed`;
          case 'updated':
            return `Property '${pathToProperty}' was updated. From ${valueToString(property.oldValue)} to ${valueToString(value)}`;
          case 'unchanged':
            return null;
          case 'nested':
            return iter(value, [...path, key]);
          case 'added':
            return `Property '${pathToProperty}' was added with value: ${valueToString(value)}`;
          default:
            throw new Error('Unknown status name.');
        }
      });

    return _.remove(result, null).join('\n');
  };

  return iter(ast, []);
};

export default formatPlain;
