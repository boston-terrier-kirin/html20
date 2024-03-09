function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function queryAPI(sarchTerm) {
  console.log(`API REQUEST - ${sarchTerm}`);
}

const debouncedQueryAPI = debounce(queryAPI, 600);

const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (event) => {
  debouncedQueryAPI(event.target.value);
});
