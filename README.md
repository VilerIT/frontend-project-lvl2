# Gendiff
![CI](https://github.com/VilerIT/gendiff/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/75a463c491132806ea5f/maintainability)](https://codeclimate.com/github/VilerIT/gendiff/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/75a463c491132806ea5f/test_coverage)](https://codeclimate.com/github/VilerIT/gendiff/test_coverage)

This utility is made to compare two files and print the difference between them. You can use it as a library in your JavaScript code as well.

JSON, YAML and INI files are supported.

*Note*: you can compare files with different extensions, e.g. you can compare ``before.yml`` and ``after.json``.

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
npm install VilerIT/gendiff
```

Then, import it into your source code:

```js
import genDiff from 'gendiff';
```

or

```js
const genDiff = require('gendiff');
```

## Formats

List of formats - "stylish", "plain", and "json".

Stylish is used by default, but if you want to change it, run:

```sh
gendiff [filepath1] [filepath2] -f <your format here>
```

or, if you use this project as a library, run genDiff with following parameters:

```js
genDiff('[filepath1]', '[filepath2]', '<your format here>');
```

## Demonstration

### JSON

[![asciicast](https://asciinema.org/a/bcqipB5pnps8DkZCTtJV83mMw.svg)](https://asciinema.org/a/bcqipB5pnps8DkZCTtJV83mMw)

### YAML

[![asciicast](https://asciinema.org/a/uMnQ0sEOB229PAkzSJrQ1R92A.svg)](https://asciinema.org/a/uMnQ0sEOB229PAkzSJrQ1R92A)

### INI

[![asciicast](https://asciinema.org/a/Lw7cjsDobkIPOU7OAnMYkQGid.svg)](https://asciinema.org/a/Lw7cjsDobkIPOU7OAnMYkQGid)

### Plain format

[![asciicast](https://asciinema.org/a/qRTAD5gfZuBxF2b6kkQVkEC9Q.svg)](https://asciinema.org/a/qRTAD5gfZuBxF2b6kkQVkEC9Q)

### JSON format

[![asciicast](https://asciinema.org/a/Ohj5UsBSXEIFuUpUxrpiLnTh5.svg)](https://asciinema.org/a/Ohj5UsBSXEIFuUpUxrpiLnTh5)
