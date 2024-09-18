import React from 'react';

import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddAppointment from './appointments/AddAppointment';
import EditAppointment from './appointments/EditAppointment';
import ViewAppointment from './appointments/ViewAppointment';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addappointment' element={<AddAppointment/>}/>
          <Route path='/editappointment/:id' element={<EditAppointment/>}/>
          <Route path='/viewappointment/:id' element={<ViewAppointment/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
