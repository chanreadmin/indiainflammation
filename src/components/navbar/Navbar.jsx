import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [textColor, setTextColor] = useState("black");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomColor();
      setTextColor(newColor);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 mb-8 backdrop-blur-md">
      <div className="relative isolate px-6 pt-2 lg:px-8 bg-[url('../assets/inflammation.png')] bg-cover bg-no-repeat">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl text-white"  >
              Society of Inflammation Research
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Envisaged in August 2015 and registered in July 2017, SIR is a
              non-profit association.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={`/donate`}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                to={`/about`}
                className="shadow-md rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
