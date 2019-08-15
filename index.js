'use strict';

//@param {number} num
//@returns {*} will return 'fizzbuzz'/'fizz'/'buzz' OR the number itself
function fizzbuzz(num) {
  if (num % 15 === 0) {
    return ('fizzbuzz');
  }
  if (num % 5 === 0) {
    return ('buzz');
  }
  if (num % 3 === 0) {
    return ('fizz'); 
  }
  return num;
}  


/* 
@param {*} fizzResult will return 'fizzbuzz'/'fizz'/'buzz' OR the number itself
@returns {string} generate ONE fizzBuzz item 
*/
function generateFizzHtml(fizzResult) {
  let fizzClass = '';
  if(typeof fizzClass === 'string') {
    fizzClass = fizzResult;
  }
  return (`
  <div class="fizz-buzz-item ${fizzClass}">
  <span> ${fizzResult} </span>
  </div>
  `);
}


//Handles form submission
function handleSubmit() {
  $('#number-chooser').on('submit', function(event) {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    $('#number-choice').val('');
    const fizzBuzzResults = [];
    for (let i = 1; i <= countTo; i++) {
      fizzBuzzResults.push(fizzbuzz(i));
    }

    const newHtml = fizzBuzzResults.map(result => generateFizzHtml(result));
    $('.js-results').html(newHtml);
  });
}

$(handleSubmit);