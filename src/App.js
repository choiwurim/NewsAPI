import React from "react";
import {Router, Route, Routes} from "react-router-dom";
import NewsPage from "./pages/NewsPage";
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<NewsPage/>}/>
        <Route path="/:category" element={<NewsPage/>}/>
      </Routes>
    
  );
};

export default App;
