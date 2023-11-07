import Auth from "./pages/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import Home from "./pages/home/home.page";
import NavbarComponent from "./components/navbar/navbar.component";
import Doctor from "./pages/doctor/doctor.page";
import Doctors from "./pages/doctors/doctors.page";
import SingleDoctor from "./containers/singleDoctor/singleDoctor";
import Layout from "./Layout/Layout";
import Settings from "./pages/settings/settings";
import EditPage from "./pages/edit/edit";
import Logout from "./pages/logout/logout";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="main">
      <Router>
        <div>
          <Routes>
            {/* <Route path="create" element={<Doctor/>}/>
            <Route path="doctor/:id" element={<SingleDoctor/>}/>
            <Route path="doctors" element={<Doctors/>}/>
            <Route path="/overview" element={<Home />} />
            {token ? null :  <Route path="/" element={<Auth />} />} */}
            {/* <Route path="/" element={<Auth />} /> */}
            {token ? null :  <Route path="/" element={<Auth />} />} 
            <Route path="/" element={<Layout />}>
              <Route index path="/overview" element={<Home />} />
              <Route path="create" element={<Doctor />} />
              <Route path="doctor/:id" element={<SingleDoctor />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="settings" element={<Settings/>}/> 
              <Route path="edit/:id" element={<EditPage/>}/> 
              <Route path="logout" element={<Logout/>}/> 
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
