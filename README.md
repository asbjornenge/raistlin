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
    "start": "raistlin start app/dom.js --hot"
  }
}
```

```sh
npm start
```

You now have :sparkles: with [babelification](https://babeljs.io/) and hot reloading up and running on [http://localhost:8080](http://localhost:8080) :rocket: :horse:

**NOTE!** 

You don't have to use `raistlin init` to use `raistlin` but it's highly recommended. It will include some required config in `package.json` etc.

## CMDs

### init

`raistlin init`

Initialize a basic app layout in the taste of Raistlin Majere. Feel free to use it as a starting point and move things around to feed your own :monkey:.

```
package.json    // Created package.json with a few extras
.gitignore      // .gitignore with a few good defaults
dist/           // Builds ready for distribution go here 
app/            // Your app <3
app/dom.js      // ReactDOM.render(<App />)
app/app.js      // App entrypoint
tales/          // Tales app (see below)
tales/tales.js  // Authored tales go here
.raistlin/      // Temporary build folder
```

#### CLI Options

```
None for now.
```

### start

`raistlin start <entrypoint> <options>`

Start the browserify development server. It uses [watchify](https://github.com/substack/watchify), [babelify](https://github.com/babel/babelify) and [browserify-hmr](https://github.com/AgentME/browserify-hmr) by default. 

#### CLI Options

```
--hot              // Include the hot reloading (boolean flag)
--out <output>     // Where to output the build (defaults to magic place)
--static <folder>  // Folder for the static files (defaults to magic place)
--port <port>      // Port to bind (default 8080)
--host <host>      // Host to bind (default 127.0.0.1)
```

#### Passing additional options to browserify

`raistlin start app.js -- -t imgurify` 

Options passed after `--` will be forwarded to `browserify`.

### build

`raistlin build <entrypoint> --out <output>`

Build your app using browserify without the debug flag and with appropriate `NODE_ENV` and `BABEL_ENV`.

#### CLI Options

```
--out  // Where to output the build (required)
```

### bundle

`raistlin bundle <build> --out <output>`

Bundles your app using [uglifyjs](https://github.com/mishoo/UglifyJS2).

#### CLI Options

```
--out  // Where to output the bundle (required)
```

## Tales

Tales is a feature inspired by [react-storybook](https://github.com/kadirahq/react-storybook). It's a simple app that will allow you to render your app in different states easily. It is added to your app if you do `raistlin init`.

Give it a try and give us some [feedback](https://github.com/asbjornenge/raistlin/issues). :sparkles:

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
