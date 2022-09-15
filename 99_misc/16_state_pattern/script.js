class PageState {
  constructor() {
    this.currentState = new HomeState(this);
  }

  init() {
    this.change(new HomeState());
  }

  change(state) {
    this.currentState = state;
  }
}

class HomeState {
  constructor(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Home</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    `;
  }
}

class AboutState {
  constructor(page) {
    document.querySelector('#heading').textContent = 'About US';
    document.querySelector('#content').innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">About</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
  }
}

class ContactState {
  constructor(page) {
    document.querySelector('#heading').textContent = 'Contact US';
    document.querySelector('#content').innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Contact</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
    `;
  }
}

const page = new PageState();
page.init();

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

home.addEventListener('click', () => {
  page.change(new HomeState());
});

about.addEventListener('click', () => {
  page.change(new AboutState());
});

contact.addEventListener('click', () => {
  page.change(new ContactState());
});
