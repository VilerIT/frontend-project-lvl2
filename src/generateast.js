import _ from 'lodash';

const generateAst = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));

  const ast = keys
    .map((key) => {
      const entry = {};
      const value1 = obj1[key];
      const value2 = obj2[key];

      if (!_.has(obj1, key) && _.has(obj2, key)) {
        entry.status = 'added';
        entry.value = value2;
      } else if (_.has(obj1, key) && !_.has(obj2, key)) {
        entry.status = 'removed';
      } else if (_.isEqual(value1, value2)) {
        entry.status = 'unchanged';
      } else if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { key, children: generateAst(value1, value2), status: 'nested' };
      } else if (!_.isEqual(value1, value2)) {
        entry.status = 'updated';
        entry.oldValue = value1;
        entry.value = value2;
      }

      return { key, value: value1, ...entry };
    });

  return _.sortBy(ast, (entry) => entry.key);
};

export default generateAst;
