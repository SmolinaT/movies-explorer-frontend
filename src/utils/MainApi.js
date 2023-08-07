class MainApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
    this._handleReturnPromise = this._handleReturnPromise.bind(this);
  }

  _handleReturnPromise(res) {
    if (res.ok) {
      return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
  }

  takeRegister(password, email, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password,
        email,
        name
      })
    })
    .then(this._handleReturnPromise)
  }

  takeLogin(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password,
        email
      })
    })
    .then(this._handleReturnPromise)
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._handleReturnPromise)
  }

  getUserData() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then(this._handleReturnPromise)
  }

  editUserData(data) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then(this._handleReturnPromise)
  }

  getSavedMovies() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleReturnPromise)
  }

  addSavedMovies(data) {
    //console.log(data.id)
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU || ' ',
        nameEN: data.nameEN || ' ',
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id
      })
    })
    .then(this._handleReturnPromise)
  }

  deleteMovie(id) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then(this._handleReturnPromise)
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.smolinadip.nomoreparties.sbs"
});