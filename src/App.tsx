import React from 'react';
import logo from './logo.svg';
import './App.css';

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";


import { Routes , Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './component/Navbar'
import { Sidebar } from './component/Sidebar'
import  AdminStore  from './pages/Admin/Store'
import { ShoppingCartProvider } from './content/ShoppingCartContent';
import Footer from './component/Footer';
function App() {
  return (
  <>
  
    <ShoppingCartProvider>
    <Navbar />
   
   
    
    {/* <div style={{display:'flex' , flexDirection:'row'}}>
    {/* <Sidebar /> */}
    <Container className="mb-4"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/AdminStore" element={<AdminStore/>} />
      </Routes>
    </Container>
    {/* </div> */}
    <Footer/>
 
    </ShoppingCartProvider>
  
  </>
  );
}

export default App;
