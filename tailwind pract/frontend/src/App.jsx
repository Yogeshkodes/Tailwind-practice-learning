import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./Pages/Signin";
import SendMoney from "./Pages/SendMoney";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// mongodb+srv://Yogeshkodes:%40RONALDo%4007%40@cluster0.axgl13t.mongodb.net/
