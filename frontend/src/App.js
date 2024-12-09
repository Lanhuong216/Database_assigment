import Navbar from './components/NavigationBar/Navbar'
import CusInfo from "./pages/cusInfo";
import EmpInfo from "./pages/empInfo";
import AddNewCus from "./pages/addnewCus";
import AddNewEmp from "./pages/addnewEmp";
import EditMarketingInfo from "./pages/editmarketingInfo";
import AddNewMarketing from "./pages/addnewMarketing";
import MarketingInfo from "./pages/marketingInfo";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Marketing from './pages/Marketing';
import Inventory from './pages/Inventory';
import './App.css';

function App() {
  return (
    <>
      {/*       <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path='/listcus/:cusId' element={<CusInfo />} />
          <Route path='/listemp/:empId' element={<EmpInfo />} />
          <Route path='/listcus/addcus' element={<AddNewCus />} />
          <Route path='/listemp/addemp' element={<AddNewEmp />} />
          <Route path='/listmarketing/edit/:marketingId' element={<EditMarketingInfo />} />
          <Route path='/listmarketing/addmar' element={<AddNewMarketing />} />
          <Route path='/listmarketing/:marketingId' element={<MarketingInfo />} />
        </Routes>
      </Router> */}
      <Router>
        <div className="App">
          <Sidebar />
          <div className="main-content">
            <Header />
            <Routes>
              <Route path="/" element={<h1>Trang Tổng Quan</h1>} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;