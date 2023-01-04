const { configureStore } = require("@reduxjs/toolkit/dist/configureStore");

const counterReducer = require("../feature/counter/counterSlice");

const store = configureStore({
  counter: counterReducer,
});

module.exports = store;
