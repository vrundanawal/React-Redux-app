Steps:

create CoursesPage (form with handleChange, handleSubmit)
create CreateCourse action type into actions/actionTypes.js
create courseReducer into reducers/courseReducer.js
create rootReducer into reducers/index.js
create the store - configureStore.js (import 'createStore' from Redux and pass in initial state and root reducer as argument; it can receive also middleware to enhance Redux's capabilities - applyMiddleware use 'reduxImmutableStateInvariant' middleware to warn you when you try to mutate state) to add support for Redux dev tools: const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
in index.js configure an instance of the redux store and provide it to the App via 'provider' from react-redux; the store will be available app-wide
connect CoursesPage component to Redux store using 'connect' from 'react-redux' Connect can take 2 args: mapStateToProps & mapDipatchToProps (check below)
create actions/actionTypes.js to have action types constants and avoid hard-coded typos
3 principles of Redux: • one immutable store (it can’t be changed directly, it returns a new copy of the state) • actions trigger changes (click, events) • reducer functions update the store (components dispatch actions)

Note: Redux DevTools extension to check state in time

mapStateToProps
→ defines what state/part of store do you want to pass to your component on props (what state will be available in the component). → the component will subscribe to the Redux store updated and any time the store is updated, this function will be called. → it returns an object; each key property defined will become property on the container component. → ideal place to filter or transform the state to how you want to have it in the component. → pass as props only the parts of state/data (store) that the component needs (performance - component will re-render every time the props are changed, (this specific data) → every time the component re-renders, mapStateToProps is called (if you sort, filter or do something expensive as performance, use Reselect for memoization) → receives 2 arguments: state and ownProps (state- store data, ownProps - let us access props that are being attached to this component)

mapDispatchToProps
→ defines what actions do you want to pass your component on props (instead of state) → it is optional; if it omitted this, the component will receive “dispatch” method available into props automatically when it’s connected to the store → it returns the callbacks props that you want to pass down → 4 ways to handle mapDispatchToProps:

ignore it (this.props.dispatch(loadCourse()); it’s part of props via connect function

manually wrap in dispatch function mapDispatchToProps(dispatch) { return {createCourse: course => dispatch(courseActions.createCourse(course))} }

return object - wrap in dispatch automatically function mapDispatchToProps(dispatch) = { {createCourse: courseActions.createCourse} }

use bindActionCreators - wraps action creators in dispatch call for you function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(courseActions, dispatch)} } Note: bindActionCreators - turns an object whose values are action creators (https://redux.js.org/understanding/thinking-in-redux/glossary#action-creator ), into an object with the same keys, but with every action creator wrapped into a dispatch (https://redux.js.org/api/store#dispatchaction ) call so they may be invoked directly.

Each reducer handles a 'slice of state' (a portion of the entire Redux store)

Mock API

start development immediately, even before API exists
agree with the dev team about the shape of data the real api will return and create the mock api the same
fast, the data response comes quickly, helps at testing
test the real API before deployment, point to the real api later
add in webpack.config.dev.js: (webpack will replace in the app process.env.API_URL with url specified) plugins: [ new webpack.DefinePlugin({ "process.env.API_URL": JSON.stringify("http://localhost:3001"), }),# Starter Kit for [Building Applications in React and Redux](http://www.pluralsight.com/author/cory-house) on Pluralsight

## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)(https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
5. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

### Development Dependencies

| **Dependency**                     | **Use**                                                          |
| ---------------------------------- | ---------------------------------------------------------------- |
| @babel/core                        | Transpiles modern JavaScript so it runs cross-browser            |
| @testing-library/react             | Test React components                                            |
| @wojtekmaj/enzyme-adapter-react-17 | Configure Enzyme to work with React 17                           |
| babel-eslint                       | Lint modern JavaScript via ESLint                                |
| babel-loader                       | Add Babel support to Webpack                                     |
| babel-preset-react-app             | Babel preset for working in React. Used by create-react-app too. |
| css-loader                         | Read CSS files via Webpack                                       |
| cssnano                            | Minify CSS                                                       |
| enzyme                             | Simplified JavaScript Testing utilities for React                |
| eslint                             | Lints JavaScript                                                 |
| eslint-loader                      | Run ESLint via Webpack                                           |
| eslint-plugin-import               | Advanced linting of ES6 imports                                  |
| eslint-plugin-react                | Adds React-related rules to ESLint                               |
| fetch-mock                         | Mock fetch calls                                                 |
| html-webpack-plugin                | Generate HTML file via webpack                                   |
| http-server                        | Lightweight HTTP server to serve the production build locally    |
| jest                               | Automated testing framework                                      |
| json-server                        | Create mock API that simulates create, update, delete            |
| mini-css-extract-plugin            | Extract imported CSS to a separate file via Webpack              |
| node-fetch                         | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                        | Display results of multiple commands on single command line      |
| postcss                            | Post-process CSS                                                 |
| postcss-loader                     | Post-process CSS via Webpack                                     |
| react-test-renderer                | Render React components for testing                              |
| redux-immutable-state-invariant    | Warn when Redux state is mutated                                 |
| redux-mock-store                   | Mock Redux store for testing                                     |
| rimraf                             | Delete files and folders                                         |
| style-loader                       | Insert imported CSS into app via Webpack                         |
| webpack                            | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer            | Generate report of what's in the app's production bundle         |
| webpack-cli                        | Run Webpack via the command line                                 |
| webpack-dev-server                 | Serve app via Webpack                                            |
