document.addEventListener("DOMContentLoaded", () => {
  const formSubmit = document.querySelector("form");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const checkbox = document.getElementById("checkbox-terms");
  const terms = document.querySelector(".terms");

  firstName.addEventListener("keyup", () => {
    firstName.value.length < 3
      ? (firstName.className = "invalid")
      : (firstName.className = "valid");
  });

  lastName.addEventListener("keyup", () => {
    lastName.value.length < 3
      ? (lastName.className = "invalid")
      : (lastName.className = "valid");
  });

  const checkEmail = (str) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(str);
  };

  email.addEventListener("input", () => {
    if (!checkEmail(email.value)) {
      email.className = "invalid";
    } else {
      email.className = "valid";
    }
  });

  const checkPassword = (str) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  };

  password.addEventListener("keyup", () => {
    if (!checkPassword(password.value)) {
      password.className = "invalid";
    } else {
      password.className = "valid";
    }
  });

  formSubmit.addEventListener("submit", (e) => {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const passwordValue = password.value;

    if (firstNameValue.length < 3) {
      firstName.className = "invalid";
      e.preventDefault();
    } else {
      firstName.className = "valid";
    }

    if (lastNameValue.length < 3) {
      lastName.className = "invalid";
      e.preventDefault();
    } else {
      lastName.className = "valid";
    }

    if (!checkPassword(passwordValue)) {
      password.className = "invalid";
      e.preventDefault();
    } else {
      password.className = "valid";
    }

    if (!checkbox.checked) {
      terms.innerHTML = "Please check the box to agree to our";
      terms.classList.add("agree");
      terms.style.color = "#e01f2f";
      e.preventDefault();
    }
  });

  checkbox.addEventListener("input", () => {
    if (checkbox.checked === true) {
      terms.innerHTML = "I agree to all statements included in";
      terms.style.color = "#bdc5d0";
    }
  });
});
