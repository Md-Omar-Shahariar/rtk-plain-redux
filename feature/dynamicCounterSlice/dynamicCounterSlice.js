const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  value: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dynamiCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicActions = dynamicCounterSlice.actions;
