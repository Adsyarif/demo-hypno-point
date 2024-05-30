//  user data blue print
class userData {
  constructor(name, email, dateTime, brief) {
    this.name = name;
    this.email = email;
    this.dateTime = dateTime;
    this.brief = brief;
  }
}

// add object user
const setUserInformation = (name, email, dateTime, brief) => {
  const user = new userData(name, email, dateTime, brief);
  return user;
};

// form validation
const checkedInput = (dataUser) => {
  if (inputForm.length == userInput.length) {
    firstModal.classList.add("hidden");
    secondModal.classList.remove("hidden");
    secondModal.classList.add("active");
    localStorage.setItem(dataUser, "userData");
  } else {
    if (!dataUser.name) {
      document.getElementById("name").classList.add("pressed");
      setTimeout(() => {
        document.getElementById("name").classList.remove("pressed");
      }, 300);
    }
    if (!dataUser.email) {
      document.getElementById("email").classList.add("pressed");
      setTimeout(() => {
        document.getElementById("email").classList.remove("pressed");
      }, 300);
    }
    if (!dataUser.dateTime) {
      document.getElementById("time").classList.add("pressed");
      setTimeout(() => {
        document.getElementById("time").classList.remove("pressed");
      }, 300);
    }
    if (!dataUser.brief) {
      document.getElementById("brief-meet").classList.add("pressed");
      setTimeout(() => {
        document.getElementById("brief-meet").classList.remove("pressed");
      }, 300);
    }
  }
};

// get user email
const getClientEmail = (clientEmail) => {
  document.getElementById("client-email").innerHTML = clientEmail;
};

// get user name
const getClientName = (clientName) => {
  document.getElementById("client-name").innerHTML = clientName;
};

// get user date and time
const printDateTime = (inputDateTime) => {
  let timeAppointment = inputDateTime;

  if (timeAppointment) {
    const [datePart, timePart] = timeAppointment.split("T");
    const date = new Date(datePart);
    const time = timePart.split(":")[0] + ":" + timePart.split(":")[1];
    document.getElementById("current-time").innerHTML = time;
    document.getElementById("current-date").innerHTML = date.toDateString();
  } else {
    console.error("Invalid date-time string.");
  }
};

// get array input
const countInput = () => {
  userInput = [];
  for (let i = 0; i < inputForm.length; i++) {
    if (inputForm[i].value != "") {
      userInput.push(inputForm[i].value);
    }
  }
  getClientName(userInput[0]);
  getClientEmail(userInput[1]);
  printDateTime(userInput[2]);
};

// select modal atribut
let firstModal = document.getElementsByClassName("pop-up")[0];
let secondModal = document.getElementsByClassName("pop-up")[1];
let modalBackGround = document.getElementById("card-form-modal");

// select input form atribut
let inputForm = document.querySelectorAll(".input");
let userInput = [];

// html selector
let menuBurger = document.getElementById("mobile-menu");
let navClose = document.getElementById("close-nav");
let menuButtons = document.querySelectorAll(".menu");
let navButtons = document.querySelectorAll(".menu");

// event pop up form
document.getElementById("modal-btn").addEventListener("click", () => {
  firstModal.classList.remove("hidden");
  firstModal.classList.add("active");
  modalBackGround.classList.add("block-content");
});

// close form button
document.getElementById("close-btn").addEventListener("click", () => {
  firstModal.classList.remove("active");
  firstModal.classList.add("hidden");
  modalBackGround.classList.remove("block-content");
});

// success event popup submit form button
document.getElementById("dismiss-popup").addEventListener("click", () => {
  secondModal.classList.remove("active");
  modalBackGround.classList.remove("block-content");
  secondModal.classList.add("hidden");
  firstModal.classList.add("hidden");
});

// event submit form button
document.getElementById("submit").addEventListener("click", () => {
  countInput();
  let dataUser = setUserInformation(
    userInput[0],
    userInput[1],
    userInput[2],
    userInput[3]
  );
  checkedInput(dataUser);
});

console.log(menuButtons);
for (let button = 0; button < menuButtons.length; button++) {
  menuButtons[button].addEventListener("click", () => {
    document.getElementById("navigation-menu").classList.add("display");
    navClose.classList.add("invisible");
  });
}

menuBurger.addEventListener("click", () => {
  document.getElementById("navigation-menu").classList.remove("display");
  navClose.classList.remove("invisible");
});

navClose.addEventListener("click", () => {
  document.getElementById("navigation-menu").classList.add("display");
  navClose.classList.add("invisible");
});

window.addEventListener("scroll", () => {
  let navContainer = document.querySelector(".nav-container");
  let navWrapper = document.querySelector(".nav-container > .nav-wrapper");
  let logoImage = document.querySelector(".image-logo img");
  navContainer.classList.toggle("sticky", window.scrollY > 10);
  navWrapper.classList.add("container-sticky", window.scrollY > 10);
  navWrapper.classList.toggle("container", window.scrollY < 10);
  logoImage.classList.add("image-scroll", window.scrollY > 10);
  logoImage.classList.toggle("image-logo-base", window.scrollY < 10);
});
