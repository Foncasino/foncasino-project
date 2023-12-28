<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold; margin-block-start: 1em; margin-block-end: 1em;">
  <br /><br /><strong>Casino</strong>
</h1>

<br/>1 `star` == 1 `thank you`. By starring the project you thank the contributors for work.

## Table of contents

- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
- [Motivation](#motivation)
- [Features](#features)
- [How is the app implemented?](#how-is-the-app-implemented)
  - [Frontend](#frontend)
  - [Smart Contracts](#smart-contracts)
  - [React and Solidity Conection](#react-and-solidity-conection)
- [Installation](#installation)

## Introduction[![](./docs/img/pin.svg)](#introduction)

This is a decentralized crypto casino project. In this casino, unlike most of them, you don't need to be registered, you can connect your wallet and play directly. It also has its own token to play with so people can also trade it. For now the only game available is roulette but I plan to add many more.

## Motivation[![](./docs/img/pin.svg)](#motivation)

Some time ago I became interested in learning how to program smart contracts and to know everything that could be done with them. After learning to program in [Solidity](https://soliditylang.org) I learned to program frontend with [React](https://es.reactjs.org).

## Features[![](./docs/img/pin.svg)](#features)

- Connect Browser Wallet
- Buy Tokens
- Withdraw Tokens
- Play Roulette
- Responsive UI
- Important Notifications
- Deployed on Polygon Testnet

## How is the app implemented?[![](./docs/img/pin.svg)](#how-is-the-app-implemented)

This project has two main differentiated parts. The frontend built with [React](https://es.reactjs.org) and the backend built with Smart Contracts programmed with [Solidity](https://soliditylang.org).

### Frontend[![](./docs/img/pin.svg)](#frontend)

As I said before, the frontend is made with React. To do it I have used many of its features like hooks, useEffect and much more.

### Smart Contracts[![](./docs/img/pin.svg)](#smart-contracts)

Using Solidity I created 2 Smart Contracts, one called ERC20 (Token.sol), created from 0 only with the functionalities that were going to be used to make it cheaper to deploy. And the other one called Casino, which is in charge of creating the token contract. This contract is the manager of the casino as it allows:

- Buy Tokens
- Withdraw Tokens
- Consult the price of the Token
- Obtain the token's address
- Play roulette
- View your game history

### React and Solidity Conection[![](./docs/img/pin.svg)](#react-and-solidity-conection)

To connect react with Smart Contracts I used the ethers.js library. With this library I created the contractsService.js class that is in charge of loading the contracts and doing all the actions requested by the rest of the application, such as simulating a game, buying tokens, etc. In order to query the contract information I used redux.js that communicates with contractsService.js to ask different aspects of the contract. By doing this, the rest of the frontend code does not have to communicate directly with the contract, only with these two classes.






## Installation[![](./docs/img/pin.svg)](#installation)

If you want to install the casino to modify it is very easy, you just have to clone this repository, you can do it using the IDE or using the console with the command:


After that, you just have to open in the console the address where you just cloned the project and execute the command:

```shell
npm install --force
```

It will take some time and once you are done, if you want to deploy it, just execute:

```shell
npm start
```

This command will deploy the project and open it in a new browser window.

