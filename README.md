# eCommerce

## Purpose:

- To create a functional eCommerce store that utilizes a Firestore database. It was also done to show my working knowledge of JavaScript, React, SCSS and the Firestore API.

## How to run:

1. CD into main/
2. Run command in either terminal or git bash (if installed): `npm run dev`
3. Open the given local host in your browser

## Process:

- I started this project with a basic database structure, knowing this would be important later. I then started working on importing cards in, and how I would handle them. After this was mostly working, I started working on the structure of my React pages:

  1. Landing

  - Carousel, search function and all cards

  2. Individual Cards
  3. Cart

- All cards in cart and total price
- After all of this was working, I added variants and the logic behind that. Finally SCSS was added with a relatively simplistic style in mind.

## Future goals:

- I would like to seperate the firestore services into different files. Have all the cart services and card services in different files
- Tidy up React structure, removing unneccessary code (either from testing or no longer in use)
- Add the option to remove quantities from cart - will probably need to restructure how I store variants and quantities
