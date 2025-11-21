import React, { useEffect } from 'react';
import { HashRouter as Router, Routes as ReactRoutes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Testimonials } from './pages/Testimonials';
import { Routes as RoutePaths } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-dark bg-offwhite">
        <Header />
        <div className="flex-grow">
          <ReactRoutes>
            <Route path={RoutePaths.HOME} element={<Home />} />
            <Route path={RoutePaths.WORKS} element={<Works />} />
            <Route path={RoutePaths.PROJECT} element={<ProjectDetail />} />
            <Route path={RoutePaths.ABOUT} element={<About />} />
            <Route path={RoutePaths.CONTACT} element={<Contact />} />
            <Route path={RoutePaths.TESTIMONIALS} element={<Testimonials />} />
          </ReactRoutes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;