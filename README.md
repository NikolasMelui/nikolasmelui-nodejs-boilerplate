# 🔥 Nikolasmelui Nodejs Boilerplate

Nikolasmelui Nodejs Boilerplate powered by [NikolasMelui][nikolasmelui] is a lightweight nodejs boilerplate using [eslint][eslint], [prettier][prettier], [lint-staged][lint-staged], [husky][husky] and [nodemon][nodemon] onboard. Just clone it, `nmp i`, `npm start` and have fun!

## Installation

```bash
npm i
```

## Config

All necessary configs is in the `config.js` file. You need to create last one or copy `config.example.js` to the `config.js` and use it!

```bash
cp config.example.js config.js
```

### Quick Start

Once everything is installed just run the project:

```bash
npm start
```

You can run the development mode:

```bash
npm run develop
```

Or if you need to debug with an inspector:

```bash
npm run debug
```

## Makefile

All of the npm scripts is in Makefile, so you can us it

## Husky and lint-staged onboard

The husky and lint-staged will not let you make a mistake, pre-comit and pre-push are always on guard!

## Development

Contribute? Sure!
This is an opensource project, so all of the contributions are welcome. Make a fork and go!

| Todos       | Status |
| ----------- | ------ |
| Nodemon     | +      |
| Tests       | +      |
| ESLint      | +      |
| Lint-staged | +      |
| Prettier    | +      |
| Husky       | +      |
| Logger      | -      |
| CI\CD       | -      |
| Docker      | -      |
| Postgres    | -      |
| Workers     | -      |
| WebSockets  | -      |
| VMContexts  | -      |

---

## License

MIT License

Copyright (c) 2018 NikolasMelui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**From developers 2 developers.**
[NikolasMelui][nikolasmelui]

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[nikolasmelui]: https://github.com/NikolasMelui
[nodejs]: http://nodejs.org
[npm]: https://www.npmjs.com/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[lint-staged]: https://github.com/okonet/lint-staged
[husky]: https://github.com/typicode/husky
[nodemon]: https://www.npmjs.com/package/nodemon
