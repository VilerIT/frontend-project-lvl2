# Gendiff
[![Actions Status](https://github.com/VilerIT/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/VilerIT/frontend-project-lvl2/actions)
![CI](https://github.com/VilerIT/frontend-project-lvl2/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/cf227cf977c60b70f186/maintainability)](https://codeclimate.com/github/VilerIT/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cf227cf977c60b70f186/test_coverage)](https://codeclimate.com/github/VilerIT/frontend-project-lvl2/test_coverage)

This utility is made to compare two files and print the difference between them. You can use it as a library in your JavaScript code as well.

Only flat JSON files are yet supported.

## Setup

### As a utility

Clone this repository and run these commands in it:

```sh
npm install
npm link
```

After that, you will be able to use the utility. For help use:

```sh
gendiff -h
```
### As a library

Firstly, install the library as a dependency in your project:

```sh
npm install VilerIT/frontend-project-lvl2
```

Then, import it into your source code:

```js
import genDiff from '@hexlet/code';
```

or

```js
const genDiff = require('@hexlet/code');
```

## Demonstration

### Flat JSON

[![asciicast](https://asciinema.org/a/O3DMvYcqoqodoZZX1BbI1hcaQ.svg)](https://asciinema.org/a/O3DMvYcqoqodoZZX1BbI1hcaQ)
