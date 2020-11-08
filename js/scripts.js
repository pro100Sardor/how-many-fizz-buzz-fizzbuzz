/***********************************************\

1. Formadan va inputlardan kelayotgan qiymatlarni o'zgaruvchilarga olib olish kerak.
2. Formani by default submit bo'lish xususiyatini to'htatish kerak.
3. shartga mos algoritm tuzish kerak.
4. natijani htmlga jo'natib foydalanuvchiga ko'rsatish kerak.

\***********************************************/

var elUserForm = document.querySelector('#userForm');

var elUserNumber = elUserForm.querySelector('#userNumber');


elUserForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var userNumber = parseInt(elUserNumber.value.trim(), 10);

  if (isNaN(userNumber) || !userNumber) {
    document.querySelector('#resultsContainer').classList.add('d-none');

    document.querySelector('#wrontValueWarning').classList.remove('d-none');
    return;
  } else {
    document.querySelector('#resultsContainer').classList.remove('d-none');

    document.querySelector('#wrontValueWarning').classList.add('d-none');

    /* the reason the following variables are declared here is that if a string or empty value is received from the user, the program does not declare the following variables,
    only when the correct value is reached it declares the variables needed to calculate the value*/

    var fizzCheckNumber = 3;
    var buzzCheckNumber = 5;
    var fizzBuzzCheckNumber = 15;
    var fizzNumbers = [];
    var buzzNumbers = [];
    var fizzBuzzNumbers = [];

    for (var i = 1; i <= userNumber; i++) {
      if (!(i%15)) {
        fizzNumbers.push(i);
        buzzNumbers.push(i);
        fizzBuzzNumbers.push(i);
        continue;
      }

      if (!(i%3)) {
        fizzNumbers.push(i);
        continue;
      }

      if (!(i%5)) {
        buzzNumbers.push(i);
      }
    }

    var elFizzResult = document.querySelector('#fizzResult');
    elFizzResult.querySelector('#fizzQuantity').textContent = fizzNumbers.length;
    elFizzResult.querySelector('#fizzNumbers').textContent = fizzNumbers;


    var elBuzzResult = document.querySelector('#buzzResult');
    elBuzzResult.querySelector('#buzzQuantity').textContent = buzzNumbers.length;
    elBuzzResult.querySelector('#buzzNumbers').textContent = buzzNumbers;


    var elFizzBuzzResult = document.querySelector('#fizzBuzzResult');
    elFizzBuzzResult.querySelector('#fizzBuzzQuantity').textContent = fizzBuzzNumbers.length;
    elFizzBuzzResult.querySelector('#fizzBuzzNumbers').textContent = fizzBuzzNumbers;

    elUserNumber.value = "";
  }
});