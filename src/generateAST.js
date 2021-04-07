import _ from 'lodash';

const generateAst = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));

  const ast = keys
    .map((key) => {
      const value = obj1[key];
      const valueInSecondObject = obj2[key];

      if (!_.has(obj1, key) && _.has(obj2, key)) {
        return { key, value: valueInSecondObject, status: 'added' };
      }

      if (_.has(obj1, key) && !_.has(obj2, key)) {
        return { key, value, status: 'removed' };
      }

      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { key, children: generateAst(value, valueInSecondObject), status: 'nested' };
      }

      if (!_.isEqual(value, valueInSecondObject)) {
        return {
          key, value: valueInSecondObject, oldValue: value, status: 'updated',
        };
      }

      return { key, value, status: 'unchanged' };
    });

  return _.sortBy(ast, (entry) => entry.key);
};

export default generateAst;
