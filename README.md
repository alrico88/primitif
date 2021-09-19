# primitif

Generate any number of combinations between a min, a max, and given a certain length for lotteries.

## Installation

Using npm:

`npm i primitif`

Using yarn:

`yarn add primitif`

## Usage

Using CommonJS

```javascript
const { getRandomNumber } = require('primitif');

getRandomNumber(1, 6) // result is a random integer between 1 and 6
```

Using imports

```javascript
import { createCombination } from 'primitif';

createCombination(1, 49, 6) // Result is an array of 6 integers between 1 and 49, without repeating numbers
```

## Documentation

See [DOCS](./docs/modules.md)
