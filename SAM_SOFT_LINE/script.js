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

const timerElement = document.querySelector(".timer");
const initialTime = timerElement.textContent;

const [hours, minutes, seconds] = initialTime.split(":").map(Number);

let timer = hours * 3600 + minutes * 60 + seconds;

const countdown = () => {
  if (timer > 0) {
    timer--;

    const newHours = Math.floor(timer / 3600);
    const newMinutes = Math.floor((timer % 3600) / 60);
    const newSeconds = timer % 60;

    timerElement.textContent = `${newHours
      .toString()
      .padStart(2, "0")}:${newMinutes.toString().padStart(2, "0")}:${newSeconds
      .toString()
      .padStart(2, "0")}`;
    setTimeout(countdown, 1000);
  } else {
    alert("Таймер истек");
  }
};

countdown();

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
