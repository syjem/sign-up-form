# THE ODIN PROJECT - SIGN-UP FORM

This is my solution to [The Odin Project Sign-up Form](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form)

- [Overview](#overview)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Credits](#credits)

## Overview

### Links

- Live Site URL: [https://syjem.github.io/sign-up-form/](https://syjem.github.io/sign-up-form/)

### Screenshot
![](imgs/screenshot.png/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flex-box
- Mobile-first workflow
- JavaScript

### What I learned

- Client Side Form Validation

``` js
const checkPassword = (password) => {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
};
```

## Credits

- [The Odin Project](https://www.theodinproject.com/home)