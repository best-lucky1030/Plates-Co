# Plates Co - React Test App
Add cart simple one page
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## Install Package

```bash
npm install
# or
yarn
```

## Requirenment

They sell three products –
| Product     | Code | Price  |
|-------------|------|--------|
| Red Plate   | R01  | $32.95 |
| Green Plate | G01  | $24.95 |
| Blue Plate  | B01  | $7.95  |
<br>

To incentivise customers to spend more, delivery costs are reduced based on the amount spent.
Orders under $50 cost $4.95. For orders under $90, delivery costs $2.95. Orders of $90 or more
have free delivery.
They are also experimenting with special offers. The initial offer will be “buy one red plate, get the second half price”.
- It is initialised with the product catalogue, delivery charge rules, and offers (the format of
how these are passed it up to you)
- It has an add method that takes the product code as a parameter.
- It has a total method that returns the total cost of the basket, taking into account the
delivery and offer rules.

Here are some sample baskets and expected totals to help you check your implementation.


## Sales System

- It's composable to update the code and sales architecture as components (`CartTable` and `ProductCard`)
- It's easy to update status using `useState`
- Added demo products to update(It means you can add more catalogue)
- It was built using Next.js (TypeScript)

## Demo Link [Plates-Co](https://plates-co.vercel.app)
- Deployed to vercel.
