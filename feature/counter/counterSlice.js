const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

module.exports = counterSlice.reducer;
module.exports.counterAction = counterSlice.actions;
