#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .action((path1, path2) => {
    console.log(genDiff(path1, path2));
  })
  .parse();
