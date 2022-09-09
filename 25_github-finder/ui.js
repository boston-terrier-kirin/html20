class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfie(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}" />
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary d-block mb-3">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge bg-success">Follower: ${user.follower}</span>
                    <span class="badge bg-info">Following: ${user.following}</span>

                    <ul class="list-group mt-3">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    const output = repos
      .map(
        (repo) => `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>
            <div class="col-md-6">
              <span class="badge bg-primary">Starts: ${repo.stargazers_count}</span>
              <span class="badge bg-secondary">Public Gists: ${repo.watchers_count}</span>
              <span class="badge bg-success">Follower: ${repo.folks_count}</span>
            </div>
          </div>
        </div>
      `
      )
      .join('');

    const reposContainer = document.querySelector('#repos');
    reposContainer.innerHTML = output;
  }

  // POINT：bootstrapのalert
  showAlert(message, classNames) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = classNames;
    div.innerText = message;

    const container = document.querySelector('.search-container');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(() => {
      div.remove();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
