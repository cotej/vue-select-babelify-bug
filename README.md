This is a barebones project that reproduces an issue seen when using the vue-select component from its NPM repository, along with browserify + vueify.

The issue that appears looks like the following:
```
Error: Cannot find module 'babelify'
```

To reproduce, clone this project and run
```
npm install
npm run build
```

Furthermore you will find that if you comment out the two lines in src/main.js that require and register the VueSelect component, the build command will run successfully.