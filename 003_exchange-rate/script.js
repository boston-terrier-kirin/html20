const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

currencyOne.addEventListener('change', calc);
amountOne.addEventListener('input', calc);
currencyTwo.addEventListener('change', calc);
amountTwo.addEventListener('input', calc);

swap.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;

  calc();
});

function calc() {
  const currencyOneValue = currencyOne.value;
  const currencyTwoValue = currencyTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyOneValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rateValue = data.conversion_rates[currencyTwoValue];
      rate.innerText = `1 ${currencyOneValue} = ${rateValue} ${currencyTwoValue}`;
      amountTwo.value = (rateValue * amountOne.value).toFixed(2);
    });
}

calc();
