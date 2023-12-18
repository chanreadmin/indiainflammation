import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Team from "../../components/team/Team";
import FeatureSection from "../../components/featureSection/FeatureSection";
import SirconMenu from "../../components/sirconmenu/SirconMenu";
import Popup from "../../components/popup/Popup";
import axios from "axios";
import { Link } from "react-router-dom";
import { MediaUrl } from "../../ApiUrl";

const Home = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [popup, setPopup] = useState([])

  const fetchpopup = async () => {
    await axios.get(`http://localhost/inflammation/admin/api/popup.php`).then(res => setPopup(res.data))
  }
  // console.log(popup)
  useEffect(() => {
    fetchpopup()
  }, [])


  return (
    <div>
      <Navbar />
      <FeatureSection />
      <Team />
      <SirconMenu />

      <div className="flex items-center justify-center" >
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} >
          {
            popup.map((item, index) => {
              return (
                <div key={index}>
                  <img key={index} src={MediaUrl + item.imgTitle} alt="" className="h-[315px] w-full" onClick={handleClosePopup} data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" />
                  {
                    item.buttonurl != 0 ? <div className="mt-10 flex items-center justify-center gap-x-6">
                      <Link
                        to={item.buttonurl}
                        className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        {item.buttontitle}
                      </Link>
                      {/* <a
                        href="#"
                        className="shadow-md rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a> */}
                    </div> : ''
                  }

                </div>
              )
            })
          }

        </Popup>
      </div>
    </div>
  );
};

export default Home;
