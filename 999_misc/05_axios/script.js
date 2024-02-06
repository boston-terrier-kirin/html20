const getStarwarsPeople = async (id) => {
  const res = await axios.get(`https://swapi.dev/api/people/${id}`);
  console.log(res.data);
};

getStarwarsPeople(1);

const getDadJoke = async () => {
  const res = await axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(res.data);
};

getDadJoke();
