import yaml from 'js-yaml';

const parseJson = (content) => JSON.parse(content);

const parseYaml = (content) => yaml.load(content);

const parse = (content, extname) => {
  if (extname === '.json') {
    return parseJson(content);
  }

  if (extname === '.yml') {
    return parseYaml(content);
  }

  return null;
};

export default parse;
