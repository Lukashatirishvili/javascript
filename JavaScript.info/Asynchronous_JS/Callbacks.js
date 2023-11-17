function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  // If load is successful
  script.onload = () => {
    callback(null, script);
  };

  // If Error
  script.onerror = () => {
    callback(new Error(`Script load error for ${script.src}`));
  };

  document.body.appendChild(script);
}

loadScript("script.js", (error, script) => {
  if (error) {
    console.log("error:");
  } else {
    console.log("success:");
  }
});
