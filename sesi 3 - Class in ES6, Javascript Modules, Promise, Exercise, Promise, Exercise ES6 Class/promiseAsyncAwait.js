import fetch from "node-fetch";

// implicit return arrow function
fetch("https://fake-tweets-api.herokuapp.com/posts")
  .then((response) => response.json())
  .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
  .then((tweets) => tweets.filter((tweet) => tweet.rts > 50))
  .catch((err) => {
    console.error(error);
  });

// new Promise

const doSomething = function () {
  return new Promise((resolve, reject) => {});
};

// Call dosomething and receive a Promise as return
let doIt = doSomething();

// wait for the promise to get resolved...
doIt.then((response) => {
  // use response
});

// ...or to get rejected
doIt.catch((error) => {});

const setTimeoutPromise = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });

setTimeoutPromise(1000).then(() => console.log("Tick"));

// Async / Await
const fetchTweets = async () => {
  const response = await fetch("https://fake-tweets-api.herokuapp.com/posts");

  const tweetResult = await response.json();

  let tweets = tweetResult.filter((tweet) => tweet.stars > 50);

  tweets = tweets.filter((tweet) => tweet.rts > 50);

  console.log(tweets);
};
async () => {
  const response = await fetch("https://fake-tweets-api.herokuapp.com/posts");

  const tweetResult = await response.json();

  let tweets = tweetResult.filter((tweet) => tweet.stars > 50);

  tweets = tweets.filter((tweet) => tweet.rts > 50);

  console.log(tweets);
};
