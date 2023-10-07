import Homepage from "./components/HomePage.jsx";
import TopNav from "./components/topNav.jsx";
import AboutMePage from "./components/AboutMePage.jsx";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Myworks from "./components/Myworks.jsx";

function App() {
  return (
    <div className="page-con">
      <TopNav />
      <Homepage />
      <AboutMePage />
      <Experiences />
      <Myworks />
      <Footer />
    </div>
  );
}

export default App;
