import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LearningResources from "./pages/Learning-Resources";
import Calendar from "./pages/Calendar";
import NewLearning from "./pages/New-Learning";
import Glossary from "./pages/Glossary";
import Infocenter from "./pages/Infocenter";
import Curriculum from "./pages/Curriculum";
import Homeroom from "./pages/Homeroom";
import Tutorials from "./pages/Tutorials";
import NoPage from "./pages/NoPage";
import React, { useState } from 'react';


import Login from "./pages/Login";




export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout setIsAuth={setIsAuth} isAuth = {isAuth}/>}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="learning-r" element={<LearningResources />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="n-learning" element={<NewLearning />} />
          <Route path="infocenter" element={<Infocenter />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="homeroom" element={<Homeroom />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth}/>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
