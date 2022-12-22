import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/mainpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}> 
          {/* <Route path="*" element={<NotFound />} />  */}
        </Route>
      </Routes>
    </Router>
  );
} 

export default App;

