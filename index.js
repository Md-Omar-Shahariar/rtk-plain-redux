const store = require("./app/store");
const { counterAction } = require("./feature/counter/counterSlice");
const {
  dynamicActions,
} = require("./feature/dynamicCounterSlice/dynamicCounterSlice");

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(counterAction.increment());
store.dispatch(dynamicActions.increment(4));
