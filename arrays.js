'use strict';

// 1. printIndices
// """Print each item in the list, followed by its index.

//     The output should look like this:
//         apple 0
//         berry 1
//         cherry 2

//     Arguments:
//         items (list)

//     Returns:
//         None
//     """

//     for i in range(len(items)):
//         print(f'{items[i]} {i}')

function printIndices(items) {
  for (let i = 0; i < items.length ; i += 1) {
    console.log(`${items[i]} ${i}`);
  } 
  
}
// printIndices(['ap', 'be', 'che'])

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let ans_list = [];
  
  for (let i=0; i<items.length; i+=2){
    ans_list.push(items[i])
  }
  console.log(ans_list);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code

  //sort items from smallest to largest

  const sorted_items = items.sort((a, b) => a - b);
  console.log('sorted items: ', sorted_items);
  const sorted_n_items = sorted_items.slice(0, n);
  console.log('sorted_n_items: ', sorted_n_items);
  const result = sorted_n_items.reverse();
  console.log('result: ', result);
}

smallestNItems([1, 30, 4, 21, 100000], 3);
