// scroll Into ...

document.getElementById("O_mnie").addEventListener("click", function (event) {
  event.preventDefault();
  const abaut_me = document.querySelector("header");
  abaut_me.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("CV").addEventListener("click", function (event) {
  event.preventDefault();
  const CV_docuemnt = document.querySelector(".CV");
  CV_docuemnt.scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("Portfolio")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const Portfolio_document = document.querySelector(".portfolio");
    Portfolio_document.scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("kontakt").addEventListener("click", function (event) {
  event.preventDefault();

  const footer = document.getElementById("footer");
  footer.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("UpToday").addEventListener("click", function (event) {
  event.preventDefault();
  const UpToday = document.querySelector(".sushi");
  UpToday.scrollIntoView({ behavior: "smooth" });
});

// Menu button
const menu_small = document.querySelector(".menu_small");
const menuButton = document.querySelector(".menu_button");

menuButton.addEventListener("click", function () {
  if (menu_small.style.display === "none" || menu_small.style.display === "") {
    menu_small.style.display = "block";
  } else {
    menu_small.style.display = "none";
  }
});

document.getElementById("O_mnie_1").addEventListener("click", function (event) {
  event.preventDefault();
  const abaut_me = document.querySelector("header");
  abaut_me.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("CV_1").addEventListener("click", function (event) {
  event.preventDefault();
  const CV_docuemnt = document.querySelector(".CV");
  CV_docuemnt.scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("Portfolio_1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const Portfolio_document = document.querySelector(".portfolio");
    Portfolio_document.scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("kontakt_1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  });

// header hide

// const header = document.querySelector("header");

// let timeout;

// header.addEventListener("mousemove", function () {
//   clearTimeout(timeout);
//   header.style.display = "block";

//   timeout = setTimeout(function () {
//     header.style.display = "none";
//   }, 2000);
// });
