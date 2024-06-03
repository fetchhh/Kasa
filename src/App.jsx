// Utils
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles
import "./styles/App.scss";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import NotFound from "./pages/Errors/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:propertyId" element={<Property />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
