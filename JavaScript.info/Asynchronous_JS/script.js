// function call() {
//   const request = fetch("https://course-api.com/react-store-products")
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("always run");
//     });
// }

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", call);

let lottery = new Promise(function (resolve, reject) {
  console.log("Lotery is happening");

  setTimeout(() => {
    if (Math.random() >= 0.5)
  }, timeout);
});
