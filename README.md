# Raistlin

Raistlin is a dev- & buildtool for [browserify](http://browserify.org/).

Raistlin is named after the wizard [Raistlin Majere](https://en.wikipedia.org/wiki/Raistlin_Majere) from the [Dragonlance](https://en.wikipedia.org/wiki/Dragonlance) universe.

## Install

```sh
npm install --save-dev @asbjornenge/raistlin
```

## Use

Use the `raistlin` cli by itself or together with [npm-run-scripts](https://docs.npmjs.com/cli/run-script).

```sh
raistlin -h
raistlin create --type app someapp
```

```json
{
  "scripts": {
    "start": "raistlin start --hot --images --stylus",
    "build": "raistlin build",
    "bundle": "raistlin bundle"
  }
}
```

Raistlin is convention based. It is based on a 3 folder structure; `app` contains your source files, `build` is the build directory (used for development and builds) and `dist` is where bundles go to be published.

enjoy
