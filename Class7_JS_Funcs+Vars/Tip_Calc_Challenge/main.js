//Interactive Elements
const calcBtn = document.getElementById('calculate');
const billInput = document.getElementById('amount');
const tipPercent = document.getElementById('percent');

//Static Elements
const tipTotal = document.getElementById('tip');
const total = document.getElementById('total');

//Event Listener
calcBtn.addEventListener('click', () => {
tipTotal.innerHTML = (tipPercent.value/100) * billInput.value;
total.innerHTML = (tipPercent.value/100) * billInput.value + Number(billInput.value);
const totalBill = (tipPercent.value/100) * billInput.value + Number(billInput.value);

})
