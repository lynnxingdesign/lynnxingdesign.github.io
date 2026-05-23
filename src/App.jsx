import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import FeaturedWork from './components/FeaturedWork';
import ProjectDetail from './components/ProjectDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ContactPlaceholder = () => (
  <main className="contact-placeholder">
    <p>Contacts</p>
    <h1>Coming soon.</h1>
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured-works" element={<FeaturedWork />} />
        <Route path="/featured-works/:slug" element={<ProjectDetail />} />
        <Route path="/contacts" element={<ContactPlaceholder />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
