# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - NFT preview card component solution](#frontend-mentor---nft-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/flexbox-and-sass-6DyoHHB-r
- Live Site URL: https://nft-card-andriy.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SASS

### What I learned

Learned how to use an absolute positioned div, to overlay some color on an img, on hover state.

```html
<div class="img-container">
  <img
    class="img-equilibrium"
    src="images/image-equilibrium.jpg"
    alt="Image of a cube standing on one of his vertices"
  />
  <div class="img-overlay">
    <img class="view-icon" src="images/icon-view.svg" alt="Eye form icon" />
  </div>
</div>
```

```css
.img-container {
  position: relative;
}

.img-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 99.1%;
  width: 100%;
  opacity: 0;
}

.img-overlay:hover {
  background-color: rgba(0, 255, 247, 0.5);
  cursor: pointer;
  opacity: 1;
  border-radius: 8px;
}
```

### Continued development

Looking to improve the .scss files structure, for better organization.

## Author

- Frontend Mentor - [@Andriy-Kozlovsky](https://www.frontendmentor.io/profile/Andriy-Kozlovsky)
- Twitter - [@UpperCut_Dev](https://twitter.com/UpperCut_Dev)
