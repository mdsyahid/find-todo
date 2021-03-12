# Todo Script

## Information

A Todo Script is node module which will return all the files declared in the path with the keyword (Default: TOOD).
The script will access all files and scanned for the keyword.
If the keyword is found, it will be part of the output which will display the file path

`TODO:`

- Added CLI to prompt user which keyword to search
- Allow multiple extension
- Allow multiple files to filter out
- Add performance script start end time
___

### Prerequisites

- Node.js `>= 12.x.x`
- npm `>= 6.x.x`

## Setup and Run local project

1. Download and install script

```sh
$ git clone https://github.com/mdsyahid/find-todo.git
$ npm install
```

2. Run the script
```sh
$ npm run start
```

## Setup and Run as node module library

1. Download and install script

```sh
$ cd /path/to/your/node/project
$ git clone https://github.com/mdsyahid/find-todo.git
$ npm install ../find-todo
```

***Note***
Ensure /path/to/your/node/project is same folder level as find-todo folder

2. Add a new script inside your package.json

```
"scripts": {
  "todo": "find-todo --ext=.js --filter=node_modules",
}
```

3. Run the script
```sh
$ npm run todo
```

## Available Arguments 

- `--filter` - To filter a filename or folder (Exact Match)
```
"scripts": {
  "todo": "find-todo --filter=node_modules",
}
```

- `--ext` - Which file extension to search. Accept only single word. Default: All files extension.
```
"scripts": {
  "todo": "find-todo --ext=.js",
}
```

- `--keyword` - Keyword to find. Default: TODO
```
"scripts": {
  "todo": "find-todo --keyword=TODO",
}
```

- `--customPath` - The path to search the keyword. Default: Root of the project
```
"scripts": {
  "todo": "find-todo --customPath=./",
}
```

## Test and Lint

1. Go to the script folder

To run all tests:
```sh
$ npm run test
```

To run all liniting:
```sh
$ npm run lint
```

To fix all liniting:
```sh
$ npm run lint:fix
```

### Generating the test coverage report

```sh
$ npm run cover
```

The coverage report will be generated as `coverage/index.html`

To view the report in the teriminal, you can also use

```sh
$ open coverage/lcov-report/index.html
```
for the HTML version

## Test for vulnerabilities

To check vulnerabilities threats we use `npm audit`. You can run it through:

```sh
$ npm run audit
```

To fix issues you can use:

```sh
$ npm run audit:fix
```

# License

Content is licensed under the [Creative Commons 4.0 (Non-Commercial, Attribution) license](https://creativecommons.org/licenses/by-nc-sa/4.0/)