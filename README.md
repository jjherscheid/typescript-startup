# typescript-startup

This repository contains a simple set of files for starting up with Typescript.  
It can be used to check how Typescript works and play with it.  
Have fun!

# Setup

Clone the repository using Git clone  
```
$ git clone https://github.com/jjherscheid/typescript-startup.git
```

Run Npm install, this will install typescript 
```
$ npm i
```

Run the typescript build process using npm  
```
$ npm run tsc
```
The src/dog.ts file will be converted to the lib/dog.js file.

Run the typecsript build with watch and lite-server using npm  
```
$ npm start
```
The src/dog.ts file will be converted to the lib/dog.js file.
The server will refresh the browser

# File structure

The project contains the following files:

```
|- src 
|   |- dog.ts
|
|- package.json
|- tsconfig.json
|- index.html
```

*tsconfig.json* explanation
```js
{
  "compilerOptions": {
    // Compile to ES5
    "target": "es5",
    // Use CommonJS module system
    "module": "commonjs",
    "moduleResolution": "node",

    // Create Source maps
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,

    // Implicit any's are allowed. If upgrading set to false otherwise to true
    "noImplicitAny": false,

    // Output directory for the files
    "outDir": "lib"
  }
}

```

*package.json* explanation
```js
{
    "name": "typescript-startup",
    "version": "0.0.1",
    "description": "Typescript Startup project",
    "author": "Johan Herscheid",
    "dependencies": {
        "systemjs": "^0.19.28"
    },
    // Dependencies needed for typescript to work.
    // typscript is the command line interface 
    // for transpiling typescript into javascript.
    "devDependencies": {
        "concurrently": "^2.1.0",
        "lite-server": "^2.2.2",
        "typescript": "^1.8.10"
    },
    // Npm script for running typscript using
    // $ npm run tsc.
    "scripts": {
        "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
        "lite": "lite-server",
        "tsc": "tsc",
        "tsc:w": "tsc -w"
    },    
    // ES Lint configuration for VSCode 
    // to support ES6.
    "eslintConfig": {
        "parserOptions": {
            "ecmaVersion": 6,
            "sourceType": "module"
        }
    },
    // JS Hint configuration for VSCode
    // to support ES6.
    "jshintConfig": {
        "esversion": 6
    }
}
```
