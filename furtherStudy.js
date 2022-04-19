'use strict';

function wordsInCommon(words1, words2) {
  // Replace this with your code
  
  //convert arrays into sets 
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  //initialize result set
  let result = new Set();

  //iterate over set1
  for (let word of words1Set) {
    //check if current word is in set2
    if (words2Set.has(word)) {
      result.add(word);
    }
  }

  //convert result set into an array 
  return Array.from(result);
}

// console.log(wordsInCommon(['hello', 'world', 'hackbright'], ['hi', 'hackbright', 'world']));

function kidsGame(names) {
  // output = [names.pop(0)]
  const output = [names.shift()];

  // first_letter_to_words = {}
  const firstLetterToWords = {};

  //   # Make a dictionary of {first-letter: [words-starting-with-that-letter]}
  //   # Note that we could also use .setdefault here
  for (let name of names) {
    // checking to see if firstLetterToWords has first letter of current word
    if (firstLetterToWords[name[0]]){     
      firstLetterToWords[name[0]].push(name);
    } else {
      firstLetterToWords[name[0]] = [name];
    }
  }  


  // chain together words until we run out
  while (true) {
    // Our starting letter will be the last letter of last word
    let lastWord = output[output.length - 1];
    //console.log("#########", lastWord);
    let startLetter = lastWord.slice(-1);

    //start_letter = output[-1][-1]

    //if there are no candidate words, we're done 
    if (!firstLetterToWords[startLetter] || firstLetterToWords[startLetter].length === 0 ) {
      break;
    } 
    let word = firstLetterToWords[startLetter].shift();
    output.push(word);  
  }

  return output
}

console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]));