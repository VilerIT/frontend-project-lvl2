import yaml from 'js-yaml';
import ini from 'ini';

const parsers = {
  json: (content) => JSON.parse(content),
  yml: (content) => yaml.load(content),
  yaml: (content) => yaml.load(content),
  ini: (content) => ini.parse(content),
};

export default (content, extname) => {
  const parse = parsers[extname];

  if (!parse) {
    throw new Error(`Unexpected file format: ${extname}`);
  }

  return parse(content);
};
