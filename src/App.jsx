import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import CategoryNav from './components/layout/CategoryNav';
import Footer from './components/home/Footer';
import WhatsAppButton from './components/home/WhatsAppButton';
import CategoryLayout from './components/layout/CategoryLayout'; // Niche di gayi file banayein

// Page Components
import Home from './pages/Home';
import About from './pages/about/About';
import Quality from './pages/Quality/Quality';
import Enquiry from './pages/enquery/Enquiry';
import Warranty from './pages/warrenty/Warranty';
import Exhibitions from './pages/Exhabitons/Exhibitions';
import Contact from './pages/contactus/Contactus';

// Page slide show content
import Digno from './components/CatagoriesPages/Digno';
import Surb from './components/CatagoriesPages/Surb';
import Products from './pages/product/Product';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-cyan-500 selection:text-black flex flex-col">
        
        {/* Navigation - Har page par fixed rahega */}
        <header className="fixed top-0 w-full z-50 bg-white shadow-md">
          <TopBar />
          <Navbar />
          <CategoryNav />
        </header>

        <main className="flex-grow pt-44"> 
          <Routes>
            {/* 1. HOME PAGE - Isme sidebar nahi dikhega (Full Width) */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            
            {/* 2. SIDEBAR PAGES - In sab routes par Sidebar constant rahega */}
            <Route element={<CategoryLayout />}>
              <Route path="/aboutus" element={<About />} />
              <Route path="/diagnostic-equipments" element={<Digno />} />
              <Route path="/scrubs-linens" element={<Surb />} />
              <Route path="/products" element={<Products />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="/exhibition" element={<Exhibitions />} />
              <Route path="/contactus" element={<Contact />} />
            </Route>

            {/* 3. OTHER PAGES */}
            <Route path="/contactus" element={<Contact />} />
            <Route path="*" element={<div className="text-center py-20 text-2xl font-bold">404 - Page Not Found</div>} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;