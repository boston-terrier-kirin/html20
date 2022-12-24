document.querySelector('#loan-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const results = document.querySelector('#results');
  const loader = document.querySelector('#loading');

  results.classList.add('d-none');

  loader.classList.remove('d-none');
  loader.classList.add('d-flex');

  setTimeout(() => {
    const result = calculateResults(e);

    loader.classList.add('d-none');
    if (result) {
      results.classList.remove('d-none');
    }
  }, 3000);
});

function calculateResults(e) {
  e.preventDefault();

  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');

  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const caluculatedInterest = parseFloat(interest.value) / 100 / 12;
  const caluculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + caluculatedInterest, caluculatedPayments);
  const monthly = (principal * x * caluculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * caluculatedPayments).toFixed(2);
    totalInterest.value = (monthly * caluculatedPayments - principal).toFixed(
      2
    );
    return true;
  } else {
    showError('Please check your numbers');
    return false;
  }
}

function showError(message) {
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.textContent = message;

  card.insertBefore(errorDiv, heading);

  setTimeout(() => {
    errorDiv.remove();
  }, 3000);
}
