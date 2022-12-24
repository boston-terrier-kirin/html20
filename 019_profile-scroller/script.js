const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jane Doe',
    age: 22,
    gender: 'female',
    lookingfor: 'male',
    location: 'Chicago',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: 22,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
];

const profiles = profileIterator(data);

document.querySelector('#next').addEventListener('click', () => {
  const profile = profiles.next().value;

  if (!profile) {
    // POINT：window.location
    window.location.reload();
    return;
  }

  document.querySelector('#image-display').innerHTML = `
        <img src="${profile.image}" />
    `;

  document.querySelector('#profile-display').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${profile.name}</li>
            <li class="list-group-item">Age: ${profile.age}</li>
            <li class="list-group-item">Gender: ${profile.gender}</li>
            <li class="list-group-item">Looking For: ${profile.lookingfor}</li>
            <li class="list-group-item">Location: ${profile.location}</li>
        </ul>
    `;
});

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
