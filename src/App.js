import "./css/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/site/header/Header";
import Main from "./components/site/main/Main";
import Footer from "./components/site/footer/Footer";
import MyContact from "./pages/contacts/MyContact";
import Skils from "./pages/skils/Skils";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/MyContact" element={<MyContact />} />
          <Route path="/Skils" element={<Skils />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
