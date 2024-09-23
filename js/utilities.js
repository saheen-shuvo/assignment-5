function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function getTextById(id) {
  const text = document.getElementById(id).innerText;
  return text;
}

function getTextFieldStringById(id) {
  const textString = document.getElementById(id).value;
  return textString;
}

// create a new `Date` object
const now = new Date();

// get the current date and time as a string
const currentDateTime = now.toLocaleString();

console.log(currentDateTime); // output: "7/20/2021, 2:28:15 PM" (will vary depending on your time zone)



function showSectionById(id){
  // Hide
  document.getElementById('section-donation').classList.add('hidden');
  document.getElementById('section-donation-history').classList.add('hidden');

  //Show
  document.getElementById(id).classList.remove('hidden');
}