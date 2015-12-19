# Rastlin

Rastlin is a dev- & buildtool for [browserify](http://browserify.org/).

Rastlin is named after the wizard [Rastlin Majere](https://en.wikipedia.org/wiki/Raistlin_Majere) from the [Dragonlance](https://en.wikipedia.org/wiki/Dragonlance) universe.

## Install

```sh
npm install --save-dev @asbjornenge/rastlin
```

## Use

Use the `rastlin` cli by itself or together with [npm-run-scripts]().

```sh
rastlin -h
rastlin create --type app someapp
```

```json
{
  "scripts": {
    "start": "rastlin start --hot --images --stylus",
    "build": "rastlin build",
    "bundle": "rastlin bundle"
  }
}
```

Rastlin is convention based. It is based on a 3 folder structure; `app` contains your source files, `build` is the build directory (used for development and builds) and `dist` is where bundles go to be published.

enjoy
