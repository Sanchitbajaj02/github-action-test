console.log("hello world!");

function main() {
  console.log("main code");
}

// adding new changes

// add function to make a promise
function makePromise(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("number is even");
    } else {
      reject("number is odd");
    }
  });
}

makePromise(2)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
