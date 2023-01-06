const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
  loading: false,
  relatedPost: [],
  error: "",
};

const fetchRelatedPost = createAsyncThunk("relatedPost/fetch", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const posts = await response.json();

  return posts;
});

const relatedPostSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedPost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchRelatedPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = JSON.stringify(action.payload);
    });
    builder.addCase(fetchRelatedPost.rejected, (state, action) => {
      state.loading = false;
      state.post = [];
      state.error = action.error.message;
    });
  },
});

module.exports = relatedPostSlice.reducer;
module.exports.fetchPost = fetchRelatedPost;
