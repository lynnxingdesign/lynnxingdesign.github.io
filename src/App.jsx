import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import FeaturedWork from './components/FeaturedWork';

function App() {
  return (
    <BrowserRouter>
      {/* header (with <Link>s) stays outside of <Routes> */}
      <Header />

      {/* your view changes here */}
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/featured-works"  element={<FeaturedWork />} />

        {/* optional: a “catch‑all” 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;