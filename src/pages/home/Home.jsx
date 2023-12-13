import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Team from "../../components/team/Team";
import FeatureSection from "../../components/featureSection/FeatureSection";
import SirconMenu from "../../components/sirconmenu/SirconMenu";
import Popup from "../../components/popup/Popup";

const Home = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div>
      <Navbar />
      <FeatureSection />
      <Team />
      <SirconMenu />

      <div className="flex items-center justify-center" >
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} >
          <img src="../../assets/sircon/meet2017/1.jpg" alt="" className="h-[315px] w-full" onClick={handleClosePopup} data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" />
        </Popup>
      </div>
    </div>
  );
};

export default Home;
