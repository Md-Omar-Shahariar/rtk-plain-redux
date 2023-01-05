const store = require("./app/store");
const { counterAction } = require("./feature/counter/counterSlice");
const {
  dynamicActions,
} = require("./feature/dynamicCounterSlice/dynamicCounterSlice");
const { fetchPost } = require("./feature/post/postSlice");

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(counterAction.increment());
store.dispatch(dynamicActions.increment(4));
store.dispatch(fetchPost());
