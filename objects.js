'use strict';

// 1. countWords
function countWords(phrase) {
  const word_counts = {};
  const word_list = phrase.split(" ");

  for(let i = 0; i < word_list.length; i += 1){
    if(word_counts[word_list[i]]){
      // capitals.hasOwnProperty('OR');
      word_counts[word_list[i]] += 1
    }else{
      word_counts[word_list[i]] = 1
    }
  }
  return word_counts
}

// console.log(countWords('cherry berry apple apple'));

// melon_prices = {
//   2.50: ['Cantaloupe', 'Honeydew'],
//   2.95: ['Watermelon'],
//   3.25: ['Musk', 'Crenshaw'],
//   14.25: ['Christmas']
// }

// if price not in melon_prices:
//   return

// sorted(melon_prices[price])

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrice = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  //if price in melonPrice
  //check if melonPrice has a {{price}} key

  if (melonPrice.hasOwnProperty(price)) {
    const prices = Object.keys(melonPrice);
    return prices.sort((a, b) => a - b);
  } else {
    return null;
  }
}

// console.log(getMelonsAtPrice(8.25));
