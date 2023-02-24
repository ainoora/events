document.addEventListener("DOMContentLoaded", function () {
  const joinUsSection = document.querySelector(".app-section--join-us");

  const titleText = document.createElement("h2");
  titleText.className = "app-title";
  titleText.textContent = "Join Our Program";
  joinUsSection.appendChild(titleText);

  const subTitleText = document.createElement("p");
  subTitleText.className = "app-subtitle app-subtitle--join-us";
  subTitleText.textContent =
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  joinUsSection.appendChild(subTitleText);

  const inputField = document.createElement("form");
  inputField.className = "app-section__input";
  joinUsSection.appendChild(inputField);

  const inputEmail = document.createElement("input");
  inputEmail.className = "app-section__input-email";
  inputEmail.type = "email";
  inputEmail.placeholder = "Email";
  inputField.appendChild(inputEmail);

  const inputBtn = document.createElement("button");
  inputBtn.className = "app-section__button app-section__button--subscribe";
  inputBtn.textContent = "Subscribe";
  inputField.appendChild(inputBtn);

  inputField.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(inputEmail.value);
  });
});
