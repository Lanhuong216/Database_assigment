import CusInfo from "./pages/cusInfo";
import EmpInfo from "./pages/empInfo";
import AddNewCus from "./pages/addnewCus";
import AddNewEmp from "./pages/addnewEmp";
import AddPoduct from "./pages/addProduct";
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
import Defective from "./pages/defectiveorder";
import OrderInfo from "./pages/OrderInfo";
import Issueorder from "./pages/issueorder";
import AddSupply from "./pages/addSupply";
import Productinfo from "./pages/Productinfo";
import Listsupplier from "./pages/listsupplier";
import Employee from "./pages/Employee";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:shop_id" element={<Home />} />
          <Route path='/listcus/:customerId' element={<CusInfo />} />
          <Route path='/listemp/:empId' element={<EmpInfo />} />
          <Route path='/listemp/addemp' element={<AddNewEmp />} />
          <Route path='/listmarketing/edit/:marketingId' element={<EditMarketingInfo />} />
          <Route path='/listmarketing/addmar' element={<AddNewMarketing />} />
          <Route path='/listmarketing/:marketingId' element={<MarketingInfo />} />
          <Route path="/listorder" element={<Orders />} />
          <Route path="/listcus" element={<Customers />} />
          <Route path="/listcus/add" element={<AddNewCus />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path='/neworder' element={<NewOrder />} />
          <Route path='/defectiveorder' element={<Defective />} />
          <Route path='/issueorder' element={<Issueorder />} />
          <Route path='/listproduct' element={<Productinfo />} />
          <Route path='/supplier' element={<Listsupplier />} />
          <Route path='/supplier/add' element={<AddSupply />} />
          <Route path='/listproduct/newproduct' element={<AddPoduct />} />
          <Route path='/listemp' element={<Employee />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;