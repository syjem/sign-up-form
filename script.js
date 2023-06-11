const formSubmit = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox-terms");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = "";
  element.classList.add("valid");
  element.classList.remove("invalid");
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = message;
  element.classList.add("invalid");
  element.classList.remove("valid");
};

const checkEmail = (email) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(email);
};

const checkPassword = (password) => {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
};

const validateInputs = () => {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (firstNameValue === "") {
    setError(firstName, "Please, enter your first name");
  } else if (firstNameValue.length < 2) {
    setError(firstName, "Minimum of 2 characters");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Please, enter your last name");
  } else if (lastNameValue.length < 2) {
    setError(lastName, "Minimum of 2 characters");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Please, enter your email");
  } else if (!checkEmail(emailValue)) {
    setError(email, "Please, enter a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Please, enter your password");
  } else if (!checkPassword(passwordValue)) {
    setError(
      password,
      "Password must contain at least a number, an uppercase and lowercase letter, and a special character"
    );
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be minimum of 8 characters");
  } else {
    setSuccess(password);
  }

  if (!checkbox.checked) {
    setError(checkbox, "Check the box to agree to our Terms of Service");
  } else {
    setSuccess(checkbox);
  }
};
