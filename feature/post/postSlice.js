const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
  loading: false,
  post: [],
  error: "",
};

const fetchPost = createAsyncThunk("post/fetch", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const posts = await response.json();

  return posts;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = JSON.stringify(action.payload);
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.error = action.error.message;
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;
