import React from 'react';
import style from './App.module.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Menu from './components/menu/Menu';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <Banner />
      <Menu />
    </div>
  )
}

export default App