const github = new Github();
const ui = new UI();
const searchUser = document.querySelector('#search-user');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText === '') {
    ui.clearProfile();
    return;
  }

  github.getUser(userText).then((data) => {
    if (data.profile.message === 'Not Found') {
      ui.showAlert('User not found', 'alert alert-danger');
    } else {
      ui.showProfie(data.profile);
      ui.showRepos(data.repos);
    }
  });
});
