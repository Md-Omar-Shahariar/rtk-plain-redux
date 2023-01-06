const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
  loading: false,
  relatedPost: [],
  error: "",
};

const fetchRelatedPost = createAsyncThunk(
  "relatedPost/fetch",
  async (first, second) => {
    console.log(first, second);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?title_like=${first}&title_like=${second}`
    );
    const relatedposts = await response.json();

    return relatedposts;
  }
);

const relatedPostSlice = createSlice({
  name: "relatedPost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedPost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchRelatedPost.fulfilled, (state, action) => {
      state.loading = false;
      state.relatedPost = JSON.stringify(action.payload);
    });
    builder.addCase(fetchRelatedPost.rejected, (state, action) => {
      state.loading = false;
      state.relatedPost = [];
      state.error = action.error.message;
    });
  },
});

module.exports = relatedPostSlice.reducer;
module.exports.fetchRelatedPost = fetchRelatedPost;
