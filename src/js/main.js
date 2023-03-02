// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
const operator = document.querySelector('#operator');
const calculateButton = document.querySelector('#calculateButton');
let inputResult = document.querySelector ('#result');

calculateButton.onclick = function () {

	let result;

	switch ( operator.value ) {
		case '+': result = +num1.value + +num2.value;
		break;
		case '-': result= +num1.value - +num2.value;
		break;
		case '*': result = +num1.value * +num2.value;
		break;
		case '/': result = +num1.value / +num2.value;
		break
	}
inputResult.value = result;
}