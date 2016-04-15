# Raistlin

Raistlin is a dev- & buildtool for [React](https://facebook.github.io/react/) and [browserify](http://browserify.org/).

It seeks to provide a great starting point for your React apps and components. It has the following features:

* development server :rocket:
* hot-reloading :fire: :recycle:
* tales :sparkles: (similar to [react-storybook](https://github.com/kadirahq/react-storybook))
* building & bundling :package:

Raistlin is named after the wizard [Raistlin Majere](https://en.wikipedia.org/wiki/Raistlin_Majere) from the [Dragonlance](https://en.wikipedia.org/wiki/Dragonlance) universe.

![raistlin-image](https://raw.githubusercontent.com/asbjornenge/raistlin/master/raistlin.jpg)

## Install

```sh
npm install -g raistlin
```

## Use

Create a new app using the `init` cmd.

```sh
raistlin init 
```

Notice how `raistlin` works together with [npm-run-scripts](https://docs.npmjs.com/cli/run-script).


```json
{
  "scripts": {
    "start": "raistlin start --hot app/dom.js"
  }
}
```

```sh
npm start
```

You now have :sparkles: with babelification and hot reloading up and running on [http://localhost:8080](http://localhost:8080) :rocket: :horse:

**NOTE!** 

You don't have to use `raistlin init` to use `raistlin` but it's highly recommended. It will include some required config in `package.json` etc.

## CMDs

### `init`

### `start`

### `build`

### `bundle`

## Tales



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
