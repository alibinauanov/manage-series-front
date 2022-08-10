import Home from "./home/Home";
import Library from "./library/Library";
import {Result} from "./result/result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/library"} element={<Library />} />
            <Route path={"/result"} element={<Result/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;