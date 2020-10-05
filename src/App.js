import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import Header from './component/Header';
import Konten from './component/Konten';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Konten/>
      <Footer/>
    </div>
  );
}

export default App;
