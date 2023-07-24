import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Страница не найдена</h2>
      <button onClick={() => navigate(-1)} className="not-found__back-button button-hover" type="button" >Назад</button>
    </section>
  );
}

export default PageNotFound;