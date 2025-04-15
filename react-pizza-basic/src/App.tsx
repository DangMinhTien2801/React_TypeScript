import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import HomePage from './pages/Homepage';
import Footer from './layouts/Footer';
import CreatePizzaPage from './pages/CreatePizzaPage';

function App() {
  const [name, setName] = useState('Tien Dev');
  const changeName = () => {
    setName('Tien Master');
  }

  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
