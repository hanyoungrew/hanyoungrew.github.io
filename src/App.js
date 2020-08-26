import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import CssBaseline from '@material-ui/core/CssBaseline';



import Routing from "./components/Routing.jsx"
import Header from "./components/Header.jsx"


function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter basename="/">
        <Header/>
        <Routing/>
      </BrowserRouter>
    </>
  );
}

export default App;