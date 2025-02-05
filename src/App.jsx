import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home/Home';
import Main from './component/main';
import Listing from './component/listing/listing';
import PlaceOrder from './component/Orders/placeOrder';
import ViewOrder from './component/Orders/viewOrder';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="/:link" element={<Listing />} />
            <Route path="placeOrder/:itemName" element={<PlaceOrder />} />
            <Route path="viewOrder" element={<ViewOrder />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App
