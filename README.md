# Todo Script

## Information

A Todo Script is node module which will return all the files declared in the path with the keyword (Default: TOOD).
The script will access all files and scanned for the keyword.
If the keyword is found, it will be part of the output which will display the file path

`TODO:`

- Allow multiple extension
- Allow multiple files to filter out
___

### Prerequisites

- Node.js `>= 12.x.x`
- npm `>= 6.x.x`

## Setup and Run

1. Download and install script

```sh
$ cd /path/to/your/node/project
$ git clone https://github.com/mdsyahid/find-todo.git
$ npm install ../find-todo
```


2. Add a new script inside your package.json

```
"scripts": {
  "todo": "find-todos --ext=.js --filter=node_modules",
}
```

3. Run the script
```sh
$ npm run todo
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