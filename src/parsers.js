import yaml from 'js-yaml';

export const parseJson = (content) => JSON.parse(content);

export const parseYaml = (content) => yaml.load(content);
