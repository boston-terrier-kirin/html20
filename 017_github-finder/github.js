class Github {
  constructor() {}

  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}`);
    const reposRes = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created: asc`
    );

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    return {
      profile,
      repos,
    };
  }
}
