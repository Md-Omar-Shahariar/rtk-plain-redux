const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const counterReducer = require("../feature/counter/counterSlice");
const dynamicCounterReducer = require("../feature/dynamicCounterSlice/dynamicCounterSlice");
const postReducer = require("../feature/post/postSlice");

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
