# osuLevelCalculator.js

## Description
This bad boi right here calculates how much score you need to level up ~~your ego~~ 

## Example

```js
const osulevel = require('osuLevelCalculator.js');
osulevel(10, 5150000)
```
### Total score for a level
* Current score can be 0 or undefined. by default is 0 and this parameter is optional
```js
osulevel(69); // How much we need to get to level 69
//returns 2166140247

osulevel(100, 0); // How much we need to get to level 100
//returns 26931190828
```
### Score needed for an user
```js
osulevel(98, 10525092523); // User at level 97 wants to reach level 98
//and he has a total score of 10525092523

//returns 1971303782
```
