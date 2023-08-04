class MoviesApi {
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

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleReturnPromise)
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies"
});