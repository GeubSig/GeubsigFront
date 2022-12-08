import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Nav from "./components/menubar";
import Main from "./pages/main";
import Dashborad from "./pages/dashborad";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element = {<Main/>}/>
          <Route path="/dashbord/" element = {<Dashborad/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
