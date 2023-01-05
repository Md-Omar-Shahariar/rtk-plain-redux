const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const counterReducer = require("../feature/counter/counterSlice");
const dynamicCounterReducer = require("../feature/dynamicCounterSlice/dynamicCounterSlice");

const store = configureStore({
  reducer: { counter: counterReducer, dynamicCounter: dynamicCounterReducer },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
