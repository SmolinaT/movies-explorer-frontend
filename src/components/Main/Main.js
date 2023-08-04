import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NavLogin from '../NavLogin/NavLogin';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({ loggIn }) {
  return (
    <>
      <Header>
        {!loggIn ? <Navigation /> : <NavLogin />}
      </Header>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;