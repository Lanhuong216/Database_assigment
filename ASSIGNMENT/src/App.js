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
        </Routes>
      </Router>
    </>

  );
}

export default App;
