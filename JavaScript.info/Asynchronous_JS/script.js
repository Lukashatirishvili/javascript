function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("done");
    }, 1);
  });
}

async function start() {
  try {
    const promise = await getData();
    console.log(`success ${promise}`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

start();
