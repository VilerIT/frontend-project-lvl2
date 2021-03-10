import yaml from 'js-yaml';
import ini from 'ini';

const parseJson = (content) => JSON.parse(content);

const parseYaml = (content) => yaml.load(content);

const parseIni = (content) => ini.parse(content);

const parse = (content, extname) => {
  if (extname === '.json') {
    return parseJson(content);
  }

  if (extname === '.yml' || extname === '.yaml') {
    return parseYaml(content);
  }

  if (extname === '.ini') {
    return parseIni(content);
  }

  return null;
};

export default parse;
