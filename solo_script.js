// ! ! !
// Three Bugs

// SWITCH needed () around CASEs
// Basepercent -1 ???
// Took [i] off of line 21 and added to line 19


// variables declared outside of functions
var incomeAdjustment = 0;
var newArray = [];
var basePercent = 0;


var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var arrayOfEmployees = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < arrayOfEmployees.length; i++){
	arrayOfEmployees[i] = calculateSTI(arrayOfEmployees[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(arrayOfEmployees[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

 

function calculateSTI(calcSTIArray){
 

  newArray[0] = calcSTIArray[0];


  var employeeNumber = calcSTIArray[1];
  var baseSalary = calcSTIArray[2];
  var reviewScore = calcSTIArray[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);

  if(bonus > 0.13){
    bonus = 0.13;
  }
  
  newArray[1] = bonus;
  newArray[2] = parseInt(baseSalary * (1.0 + bonus));
  newArray[3] = Math.ceil(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  

  return newArray;

}

function getBaseSTI(reviewScore){

  switch(reviewScore){
    case (1):
      basePercent = 0;
      break;
    case (2):
      basePercent = 0;
      break;
    case (3):
      basePercent = 0.04;
      break;
    case (4):
      basePercent = 0.06;
      break;
    case (5):
      basePercent = 0.10;
      break;
  }

  return basePercent;
}

function getYearAdjustment(employeeNumber){

var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){

  var salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  
  return incomeAdjustment;
}