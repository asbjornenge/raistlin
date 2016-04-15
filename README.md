# Raistlin

Raistlin is a dev- & buildtool for [React](https://facebook.github.io/react/) and [browserify](http://browserify.org/).

It seeks to provide a great starting point for your React apps and components. It has the following features:

* development server
* hot-reloading
* tales (similar to [react-storybook](https://github.com/kadirahq/react-storybook))
* building
* bundling

Raistlin is named after the wizard [Raistlin Majere](https://en.wikipedia.org/wiki/Raistlin_Majere) from the [Dragonlance](https://en.wikipedia.org/wiki/Dragonlance) universe.

![raistlin-image](https://raw.githubusercontent.com/asbjornenge/raistlin/master/raistlin.jpg)

## Install

```sh
npm install -g @asbjornenge/raistlin
```

## Use

Create a new app using the `cli`.

```sh
raistlin init 
```

Raistlin will populate the folder with a basic app layout. 

Notice how `raistlin` works together with [npm-run-scripts](https://docs.npmjs.com/cli/run-script).


```json
{
  "scripts": {
    "start": "raistlin start --hot app.js",
    "build": "raistlin build app.js --out build.js",
    "bundle": "raistlin bundle build.js --out dist.js"
  }
}
```

## Changelog

### 2.0.0

* Loosing up the conventions
* Allow any browserify transform
* Added `raistlin init` command to layout basic app
* Support for tales (inspired by [react-storybook](https://github.com/kadirahq/react-storybook))

### 1.1.1

* `start` is no longer using -h and -p as abbr for host and port since --help was eating -h

### 1.1.0

* Don't remember. Had no changelog.

### 1.0.0

* Initial release

enjoy
