import _ from 'lodash';

const entryToString = (key, value, depth) => {
  if (!_.isObject(value)) {
    return `${key}: ${value}`;
  }

  const tab = '  '.repeat(depth + 1);
  const endTab = '  '.repeat(depth);
  const lineStart = `\n${tab}`;

  const result = Object.entries(value)
    .flatMap(([entryKey, entryValue]) => `  ${entryToString(entryKey, entryValue, depth + 2)}`)
    .join(lineStart);

  const entryStart = `{${lineStart}`;
  const entryEnd = `\n${endTab}}`;

  return `${key}: ${entryStart}${result}${entryEnd}`;
};

const stylish = (diff) => {
  const iter = (entries, depth) => {
    const tab = '  '.repeat(depth);
    const lineStart = `\n${tab}`;

    const result = entries
      .flatMap((entry) => {
        const { key, value, status } = entry;
        const keyValue = entryToString(key, value, depth + 1);

        switch (status) {
          case 'deleted':
            return `- ${keyValue}`;
          case 'edited':
            return [`- ${entryToString(key, entry.oldValue, depth + 1)}`, `+ ${keyValue}`];
          case 'unchanged':
            return `  ${keyValue}`;
          case 'nested':
            return `  ${key}: ${iter(value, depth + 2)}`;
          case 'added':
            return `+ ${keyValue}`;
          default:
            return null;
        }
      });

    const endTab = '  '.repeat(depth - 1);
    const entryStart = `{${lineStart}`;
    const entryEnd = `\n${endTab}}`;

    return `${entryStart}${result.join(lineStart)}${entryEnd}`;
  };

  return iter(diff, 1);
};

export default stylish;
