import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import AboutMe from '../pages/AboutMe';
import Error from '../pages/Error';

function App() {
  return (
    <BrowserRouter>
      <RouteTransitions />
    </BrowserRouter>
  );
}

function RouteTransitions() {
  const location = useLocation();

  return (
    <AnimatePresence mode='out-in'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
