import React from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';

import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import MainNav from './components/MainNav';
import Hero from './components/Hero';
import Features from './components/Features';
import Customer from './components/Customer';
import Pricing from './components/Price';
function App() {

  return (
    <>
      <MainNav />
      <Hero />
      <Features/>
      <Customer />
      <Pricing />
    </>
  );
}

export default App;
