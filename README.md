# Magic: The Gathering eCommerce website : Commander's Corner

## Demo & Snippets

- Include hosted link
- Include images of app if CLI or Client App

---

## Requirements / Purpose

- At a minimum your e-shop website should have two pages:

  - Home Page
    - This will contain:
      - A Grid of products
      - Carousel of featured products
      - Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
  - All products should be stored in Firestore:
    - You should store the following information:
      - quantity
      - variants (could be colors, sizes, etc)
      - price per unit
      - name
      - image url
      - favourited or not (boolean) All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application
  - Bonus

    - Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

      - List of products in cart

      - Ability to change quantity of products in cart
      - Ability to remove items from cart
      - Display the total cost of your cart
      - Purchase should remove items from stock and clear the cart (no need to track any kind of payment)

### Purpose:

This project was made with the aim to mock/emulate an eCommerce website that sells Magic: The Gathering singles. The aim was to have a near fully-functioning website that allows users to "purchase" items, which would change stock numbers.

I chose this product as it is a hobby of mine, and works well given the MVP's.

### Stack used:

- React
  - React-router-dom
- Firebase/Firestore
- JavaScript

---

## Build Steps

1. First you have to CD into Main
2. Then you can use either npm run start or npm run dev, and go to the given link (http://localhost:5173/)

### If firestore is down:

1. Change security rules to include current date
2. Firestore Database → Rules → line 16 - Change to a few months after current date

---

## Design Goals / Approach

### Design Goals

- This website was made with a simplistic aesthetic in mind, much like other eCommerce websites. The focal point being the cards, which was the main purpose of the website. The landing page has a carousel of cards, a search bar which then filters all cards based on search terms. The cart is mostly covered by the card and its information, with a small checkout box (showing total price).
- When a card is clicked, once again it is mainly the card information, with purchase options being a smaller object.
- why did you implement this the way you did?

### Why?

- As said, this website was made with other eCommerce websites in mind. Most of them follow a few specific rules, and this is what works so I decided to follow this. In most eCommerce websites, simple = better, so I wanted to follow this as well. The aesthetic is mostly white, with strong background colours to emphasise the product on sale.

---

## Features

- Search for cards based on terms
- "Purchase" cards with varying quality
- When card is added to cart, the product stock is updated.
- Remove cards from cart

---

## Known issues

- Too many items in cart makes cart display weird

- Removing items from cart will not revert changes made to stock values

---

## Future Goals

- I would like to add more search terms, such as rarity of card, price, colours.
- When purchasing card, I would also like to allow for alternate art to be chosen
- The option to favourite an item

## Change logs

### 16/11/2023 -

- Extended Firestore user authentication length
- Added users to cohort response payload
- Centralized API base URL on frontend using the proxy `package.json` property

---

## What did you struggle with?

- Getting the cards into the database was a struggle at first, but once I found an API that could gather the data for me I could compile card-sets to import into the database. After this, the struggle was setting the price up for the card, and was needed to be done individually.
- The design was something I struggled with, at first I wanted to implement something with each colour of the cards (red, blue, green, white, black, grey). After a review with a co-worker, they said to make it simpler and look at other eCommerce websites (as they all generally follow similar design) and choose features I liked. This made the aesthetics a lot easier.

---

## Further details

- If further cards are wanted to be added, go to https://docs.magicthegathering.io and follow instructions. For example, March of the Machine's set was added from the https://api.magicthegathering.io/v1/cards?set=MOM endpoint.
