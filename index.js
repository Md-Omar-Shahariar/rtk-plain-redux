const store = require("./app/store");
const { counterAction } = require("./feature/counter/counterSlice");
const {
  dynamicActions,
} = require("./feature/dynamicCounterSlice/dynamicCounterSlice");
const { fetchPost } = require("./feature/post/postSlice");
const { fetchRelatedPost } = require("./feature/relatedpost/relatedPostSlice");

store.subscribe(() => {
  // console.log(store.getState());
});

// setTimeout(() => {
//   console.log(store.getState());
// }, 1000);

const load = async () => {
  const post = await store.dispatch(fetchPost());
  if (!post.error) {
    const title = post.payload.title;
    console.log(title);
    const titleSlice1 = title.split(" ")[5];
    const titleSlice2 = title.split(" ")[6];
    fetchRelatedPost(titleSlice1, titleSlice2);

    console.log(titleSlice1);
    console.log(titleSlice2);
  } else {
    console.log("tata");
  }
};
load();
