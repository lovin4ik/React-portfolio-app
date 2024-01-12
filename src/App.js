import "./css/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/util/scrollToTop/ScrollToTop";

import Header from "./components/site/header/Header";
import Main from "./components/site/main/Main";
import Footer from "./components/site/footer/Footer";
import MyContact from "./pages/contacts/MyContact";
import Skils from "./pages/skils/Skils";
import MyProject from "./pages/project-big/ProjectBig";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/MyContact" element={<MyContact />} />
          <Route path="/Skils" element={<Skils />} />
          <Route path="/Project/:id" element={<MyProject />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
