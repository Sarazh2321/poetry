import React from "react";
import TopNav from "../components/Navs/TopNav";
import BottomNav from '../components/Navs/BottomNav';
import LandingPage from '../components/landingPage/LandingPage';


function App() {
  return (
    <div>
      <div className="back">
        <TopNav />
        <LandingPage />
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
