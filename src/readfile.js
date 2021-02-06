import fs from 'fs';
import path from 'path';

export default (pathToFile) => {
  const workingDir = process.cwd();
  const absPath = path.resolve(workingDir, pathToFile);

  return fs.readFileSync(absPath, 'utf-8');
};
