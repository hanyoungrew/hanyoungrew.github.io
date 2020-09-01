import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Routing from "./components/Routing.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"



function App() {

  return (
    <>
      <CssBaseline />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <BrowserRouter basename="/">
        <div>
          <Header/>
          <Routing/>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;