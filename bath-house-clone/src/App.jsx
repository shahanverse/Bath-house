import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/carousel'
import Category from './components/Category';
import MostLoved from './components/MostLoved';
import Vids from './components/Vids';
import Luxury from './components/Luxury';
import Towel from './components/Towel';
import Moving from './components/Moving';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Category/>
      <MostLoved/>
      <Vids/>
      <Luxury/>
      <Towel/>
      <Moving/>
      <Footer/>
    </>
  );
}

export default App
