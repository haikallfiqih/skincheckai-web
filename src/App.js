import React from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';

import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import MainNav from './components/MainNav';
import Hero from './components/Hero';

function App() {

  return (
    <>
      <MainNav />
      <Hero />
    </>
  );
}

export default App;
