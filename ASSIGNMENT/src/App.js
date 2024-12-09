import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/NavigationBar/Navbar'
import CusInfo from "./pages/cusInfo";
import EmpInfo from "./pages/empInfo";
import AddNewCus from "./pages/addnewCus";
import AddNewEmp from "./pages/addnewEmp";
import EditMarketingInfo from "./pages/editmarketingInfo";
import AddNewMarketing from "./pages/addnewMarketing";
import MarketingInfo from "./pages/marketingInfo";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path='/listcus/:cusId' element={<CusInfo />} />
          {/* /listcus/deactive element={<CusList/>*/}
          <Route path='/listemp/:empId' element={<EmpInfo />} />
          <Route path='/listcus/addcus' element={<AddNewCus />} />
          <Route path='/listemp/addemp' element={<AddNewEmp />} />
          <Route path='/listmarketing/edit/:marketingId' element={<EditMarketingInfo />} />
          <Route path='/listmarketing/addmar' element={<AddNewMarketing />} />
          <Route path='/listmarketing/:marketingId' element={<MarketingInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
