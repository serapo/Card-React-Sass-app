import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import data from './data';

const App = () => {
  return (
    <div>
      <Header/>
      <Card data={data}/>
      <Footer/>
    </div>
  )
}

export default App