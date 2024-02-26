import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import QuestionnairePopup from "./Components/QuestionnairePopup";
import Screen1 from "./Components/Screen1";
import Calendar from "./Components/CustomCalendar";

function App() {
  const route = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
  
    <div className="min-h-screen">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/questionnairepopup" element={<QuestionnairePopup/>}/>
      <Route path="/screen1" element={<Screen1/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
