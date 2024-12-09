import CusInfo from "./pages/cusInfo";
import EmpInfo from "./pages/empInfo";
import AddNewCus from "./pages/addnewCus";
import AddNewEmp from "./pages/addnewEmp";
import EditMarketingInfo from "./pages/editmarketingInfo";
import AddNewMarketing from "./pages/addnewMarketing";
import MarketingInfo from "./pages/marketingInfo";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Marketing from './pages/Marketing';
import Inventory from './pages/Inventory';
import Home from './pages/homepage';
import NewOrder from "./pages/newOrder";
import Employee from "./pages/Employee";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/listcus/:cusId' element={<CusInfo />} />
          <Route path='/listemp/:empId' element={<EmpInfo />} />
          <Route path='/listcus/addcus' element={<AddNewCus />} />
          <Route path='/listemp/addemp' element={<AddNewEmp />} />
          <Route path='/listmarketing/edit/:marketingId' element={<EditMarketingInfo />} />
          <Route path='/listmarketing/addmar' element={<AddNewMarketing />} />
          <Route path='/listmarketing/:marketingId' element={<MarketingInfo />} />
          <Route path="/listorder" element={<Orders />} />
          <Route path="/listcus" element={<Customers />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path='/neworder' element={<NewOrder />} />
          <Route path='/listemp' element={<Employee />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;