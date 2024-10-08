document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleButton");
  const infoBox = document.getElementById("infoBox");
  const closeButton = infoBox.querySelector(".p img");

  button.addEventListener("click", () => {
    if (infoBox.style.display === "none" || !infoBox.style.display) {
      infoBox.style.display = "block";
      button.style.display = "none";
    } else {
      infoBox.style.display = "none";
      button.style.display = "block";
    }
  });

  closeButton.addEventListener("click", () => {
    infoBox.style.display = "none";
    button.style.display = "block";
  });
});


document.getElementById('burgerMenu').addEventListener('click', function(event) {
  event.stopPropagation(); 
  this.classList.toggle('active');
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
});



window.addEventListener('click', function(event) {
  const burgerMenu = document.getElementById('burgerMenu');
  const navLinks = document.getElementById('navLinks');
  if (burgerMenu.classList.contains('active') && !burgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    "#benefits .title, #benefits .col-md-6"
  );

  function checkVisibility() {
    const triggerPoint = window.innerHeight * 0.8;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerPoint) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});


document.addEventListener("DOMContentLoaded", function () {
  const services = document.querySelectorAll(".service, .title, .dark");

  function checkVisibility() {
    const triggerPoint = window.innerHeight * 0.8;

    services.forEach((service) => {
      const serviceTop = service.getBoundingClientRect().top;
      if (serviceTop < triggerPoint) {
        service.classList.add("visible");
      } else {
        service.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

let modal = document.getElementById("myModal");

let btn = document.querySelector(".btn_ostavit");

let span = document.getElementsByClassName("close")[0];

let zayafka = document.querySelector(".zayafka");

btn.onclick = function () {
  modal.style.display = "block";
  zayafka.classList.add("hide");
};

span.onclick = function () {
  modal.style.display = "none";
  zayafka.classList.remove("hide");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    zayafka.classList.remove("hide");
  }
};
