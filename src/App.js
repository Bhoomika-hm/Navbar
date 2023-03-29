import"./index.css";
import {Route, Routes} from "react-router-dom";
import Asd from "./Routes/Asd";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path= "/Asd" element={<Asd />}></Route>
      <Route  path= "/Asd" element={<Asd />}></Route>
      <Route  path= "/Asd" element={<Asd />}></Route>
      <Route  path= "/Asd" element={<Asd />}></Route>
    </Routes>
   
    </>
  );
}

export default App;