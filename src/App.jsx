import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageLoader from './components/ui/PageLoader';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
