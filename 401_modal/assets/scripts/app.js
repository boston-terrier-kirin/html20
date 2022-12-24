const backdrop = document.querySelector('#backdrop');
const startAddMovieButton = document.querySelector('header button');
const addMovieModal = document.querySelector('#add-modal');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = addMovieModal.querySelector('.btn--success');
const entryText = document.querySelector('#entry-text');

const movies = [];

backdrop.addEventListener('click', () => {
  toggleMovieModal();
  toggleBackdrop();
});

startAddMovieButton.addEventListener('click', () => {
  toggleMovieModal();
  toggleBackdrop();
});

cancelAddMovieButton.addEventListener('click', () => {
  toggleMovieModal();
  toggleBackdrop();
  clearInput();
});

addMovieButton.addEventListener('click', () => {
  const title = document.querySelector('#title');
  const imageUrl = document.querySelector('#image-url');
  const rating = document.querySelector('#rating');

  const newMovie = {
    title: title.value,
    imageUrl: imageUrl.value,
    rating: rating.value,
  };

  movies.push(newMovie);
  renderNewMovie(newMovie);

  updateUI();
  toggleMovieModal();
  toggleBackdrop();
  clearInput();
});

function updateUI() {
  if (movies.length === 0) {
    entryText.style.display = 'block';
    return;
  }

  entryText.style.display = 'none';
}

function renderNewMovie(newMovie) {
  const movie = document.createElement('li');
  movie.className = 'movie-element';
  movie.innerHTML = `
    <div class="movie-element__image">
        <img src="${newMovie.imageUrl}" alt="${newMovie.title}" />
    </div>
    <div class="movie-element__info">
        <h2>${newMovie.title}</h2>
        <p>${newMovie.rating} / 5 stars</p>
    </div>
  `;

  const moiveList = document.querySelector('#movie-list');
  moiveList.appendChild(movie);
}

function clearInput() {
  const title = document.querySelector('#title');
  const imageUrl = document.querySelector('#image-url');
  const rating = document.querySelector('#rating');

  title.value = '';
  imageUrl.value = '';
  rating.value = '';
}

function toggleMovieModal() {
  addMovieModal.classList.toggle('visible');
}

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
}
