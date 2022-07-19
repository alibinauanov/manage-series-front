import Home from "./home/Home";
import Library from "./library/Library";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/library"} element={<Library />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;