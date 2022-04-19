'use strict';

// 1. isHometown
function isHometown(town) {
    if(town === 'San Francisco'){
        return true;
    }
    return false;
}
// console.log(isHometown('San Francisco'));
// console.log(isHometown('Sunnyvale'));


// 2. getFullName
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// console.log(getFullName('Olga', 'Tar'))

// 3. calculateTotal
function calculateTotal(basePrice, state, tax = 0.05) {
    let subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        fee = 2;
    } else if (state === 'MA') {
        fee = 1;
    } else {
        fee = 3;
    }

    return subtotal + fee
}

console.log(calculateTotal(100, 'MA'))

// Define your function here
