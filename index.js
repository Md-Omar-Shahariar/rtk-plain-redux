const store = require("./app/store");
const { counterAction } = require("./feature/counter/counterSlice");

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterAction.increment());
