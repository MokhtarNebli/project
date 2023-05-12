import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profil";
import AdminDashbord from "./pages/AdminDashbord";
import AdminProtectRoute from "./components/AdminProtectRoutes";


import {Routes, Route} from "react-router-dom";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route element={<ProtectRoute />}>
          <Route path="/home" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/profil" exact element={<Profile />} />
        </Route>
        <Route exact element={<AdminProtectRoute />}>
          <Route path="/adminDashbord" exact element={<AdminDashbord />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
