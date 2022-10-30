import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LearningResources from "./pages/Learning-Resources";
import Calendar from "./pages/Calendar";
import NewLearning from "./pages/New-Learning";
import Glossary from "./pages/Glossary";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="learning-r" element={<LearningResources />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="n-learning" element={<NewLearning />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
