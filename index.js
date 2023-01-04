const store = require("./app/store");
const { counterActions } = require("./feature/counter/counterSlice");

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterActions.increment());
