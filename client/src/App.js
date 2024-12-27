import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewItem from './Components/AddNewItem';
import About from './Components/About';
import DisplayAllItems from './Components/DisplayAllItems';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import UpdateItem from './Components/UpdateItem';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/display" element={<DisplayAllItems />} />
          <Route path="/add" element={<AddNewItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
