const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: () => {
      state.value++;
    },
    decrement: () => {
      state.value--;
    },
  },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
