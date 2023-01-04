const { configureStore } = require("@reduxjs/toolkit");

const counterReducer = require("../feature/counter/counterSlice");
const dynamicCounterReducer = require("../feature/dynamicCounterSlice/dynamicCounterSlice");

const store = configureStore({
  reducer: { counter: counterReducer, dynamicCounter: dynamicCounterReducer },
});

module.exports = store;
