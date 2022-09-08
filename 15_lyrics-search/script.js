const apiUrl = 'https://api.lyrics.ovh';
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const result = document.querySelector('#result');
const more = document.querySelector('#more');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert('Please type in a search term');
    return;
  }

  searchSongs(searchTerm);
});

// POINT：data属性 - clickしたところにdataをつけておけば、値のGETが楽になる。
result.addEventListener('click', (e) => {
  const clicked = e.target;
  if (clicked.tagName === 'BUTTON') {
    const artist = clicked.getAttribute('data-artist');
    const songTitle = clicked.getAttribute('data-songTitle');

    getLyrics(artist, songTitle);
  }
});

async function searchSongs(searchTerm) {
  const res = await fetch(`${apiUrl}/suggest/${searchTerm}`);
  const data = await res.json();

  showData(data);
}

// POINT：data属性
function showData(data) {
  const li = data.data
    .map(
      (song) =>
        `<li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songTitle="${song.title}">Get Lyrics</button>
        </li>`
    )
    .join('');

  result.innerHTML = `
    <ul class="songs">
        ${li}
    </ul>
  `;

  if (data.prev || data.next) {
    more.innerHTML = `
        ${
          data.prev
            ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`
            : ''
        }
        ${
          data.next
            ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>`
            : ''
        }
    `;
  } else {
    more.innerHTML = '';
  }
}

// POINT：cors-anywhere.herokuapp.com は使えなくなったらしい。
async function getMoreSongs(url) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();

  showData(data);
}

async function getLyrics(artist, songTitle) {
  const res = await fetch(`${apiUrl}/v1/${artist.trim()}/${songTitle.trim()}`);
  const data = await res.json();

  // 404で動かない
  console.log(data);

  result.innerHTML = `<h2>${data.error}</h2>`;
  more.innerHTML = '';
}
