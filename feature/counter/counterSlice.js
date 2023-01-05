const { createSlice } = require("@reduxjs/toolkit");
const {
  dynamicActions,
} = require("../dynamicCounterSlice/dynamicCounterSlice");

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
  extraReducers: (builder) => {
    builder.addCase(dynamicActions.increment, (state, action) => {
      state.value += action.payload;
    });
  },
});

module.exports = counterSlice.reducer;
module.exports.counterAction = counterSlice.actions;
