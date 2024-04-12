import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer-1 bg-black py-4 mt-20 ">
        <div className="container mx-auto px-4 text-white">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 ">
            <div className="px-4 sm:w-1/1 md:w-1/3">
              <h5 className="text-xl font-bold mb-6 text-center md:text-left">Important Links</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="https://www.chanrejournals.com/"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Journals
                  </a>
                </li>
                <li className="mb-2">
                  <Link
                    to={`/about`}
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={'/sircon'}
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Sircon
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={'/membership'}
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Membership
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={'/gallery'}
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Gallery
                  </Link>
                </li>

              </ul>
            </div>

            <div className="px-4 sm:w-1/1 md:w-1/3 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6 text-center md:text-left">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link
                    to={'/donate'}
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Donate
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to={'/contact'}
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/1 md:w-1/3   sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 text-center md:text-left ">
                Address
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <p>ChanRe Rheumatology & Immunology Center & Research
                  No. 414/65, 20th Main, West of Chord Road, 1st Block, Rajajinagara, Bengaluru - 560 010 <br />Call - 080 42516635 <br />Email: indiainflammation@gmail.com</p>
                <p></p>

              </div>
            </div>
          </div>

          <div className="flex border-t">
            <div className="w-full text-center p-4">
              <strong className="text-center">Copyright @ 2023</strong>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
