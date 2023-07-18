/*
var p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("good to go");
  }, 1000);

  //  setTimeout(() => {
  //    reject("oh");
  // }),
  //   500;
});

p.then(res1 => {
  console.log(res1);
}).catch(err2 => {
  console.log(err2);
});

//  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

var p2 = new Promise((resolve, reject) => {
  //setTimeout(() => {
  //    resolve("promise 2 prmising");
  // }, 1500);

  setTimeout(() => {
    reject("oh2");
  });
});

p2.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Promise.all([p, p2])
  .then(data => {
    console.log(data);
  })

  .catch(err => {
    console.log("blad" + err);
  });

  */
let img = document.querySelector("img");
let loader = document.querySelector("#loading");

async function sendApiRequest() {
  try {
    let searchTerm = document.getElementById("input").value;
    let myAPIkey = "f63d7132d4254b0f96785024231707";
    let url = `https://api.weatherapi.com/v1/current.json?key=${myAPIkey}&q=${searchTerm}`;

    displayLoading();
    let response = await fetch(url, {
      mode: "cors", // Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be accessed from another domain outside the domain from which the first resource was served.
    });

    let catData = await response.json();
    hideLoading();

    console.log(catData);
    console.log(catData.location.name);
    console.log(catData.current.cloud);
    console.log(catData.current.condition.text);
    console.log("temp C" + catData.current.temp_c);
    console.log("temp F" + catData.current.temp_f);
    console.log(catData.current.condition.icon.slice(2));
    img.src = "https://" + catData.current.condition.icon.slice(2);
  } catch (error) {
    errorHandler();
  }
}

function displayLoading() {
  loader.classList.add("display");
  setTimeout(() => {
    hideLoading();
  }, 5000);
}

function hideLoading() {
  loader.classList.remove("display");
}

function errorHandler() {
  document.querySelector(".error").textContent = "Error";
}
