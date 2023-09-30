import "./App.css";
import Agents from "./Pages/Agents";
import CA90069 from "./Pages/CA90069";
import CA9007 from "./Pages/CA9007";
import CA90266 from "./Pages/CA90266";
import Property from "./Pages/Property";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-slate-50/2">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Property />} />
            <Route path="/CA9007" element={<CA9007 />}></Route>
            <Route path="/CA90266" element={<CA90266 />}></Route>
            <Route path="/CA90069" element={<CA90069 />}></Route>
            <Route path="/Agents" element={<Agents />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
