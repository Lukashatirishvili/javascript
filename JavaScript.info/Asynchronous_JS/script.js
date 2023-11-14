/*
// Callback
const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "user left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User watching cat meme",
      message: "web dev sip",
    });
  } else {
    callback("Thumbs Up and subscribe");
  }
}

watchTutorialCallback(
  (message) => {
    console.log(`success: ${message}`);
  },
  (error) => {
    console.log(`failed: ${error.name} ${error.message}`);
  }
);

// Promise

const p = function () {
  return new Promise((resolve, reject) => {
    const userLeft = true;
    const userWatchingCatMeme = false;

    if (!userLeft && !userWatchingCatMeme) {
      reject("success");
    } else {
      resolve("failed");
    }
  });
};

p()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
*/

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  let x = 4;
  resolve("Video 2 Recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
