import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import MainContent from "./components/maincontent/maincontent";
import "./css/bootstrap.min.css";
import "./css/flex-slider.css";
import "./css/font-awesome.css";
import "./css/templatemo-hexashop.css";
import ProductDetail from "./components/productdetail/productdetail";

function App() {
  const APIURLBASEURL = "https://fakestoreapi.com";
  return (
    <Router>
      <Header aipBaseUrl={APIURLBASEURL} />
      <Routes>
        <Route path="/" element={<MainContent aipBaseUrl={APIURLBASEURL} />} />
        <Route
          path="/productdetail/:id"
          element={<ProductDetail aipBaseUrl={APIURLBASEURL} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
