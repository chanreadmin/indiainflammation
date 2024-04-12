import React from "react";
import Team from "../../components/team/Team";

const About = () => {
  return <div className="bg-white">
    <div className="relative isolate px-6 pt-2 lg:px-8">
      <div
        className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-4xl py-32 sm:py-35 lg:py-35">

        <div className="">
          <h1 className="text-xl text-center font-bold tracking-tight sm:text-4xl">
            About Us
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">Envisaged in August 2015 and registered in July 2017,
            SIR is a non-profit association that will
            strive to serve as a biomarker consortium at the
            national level to facilitate the interaction
            between clinicians and basic scientists related to
            Inflammation Research. The diverse background of
            the society members, including academicians,
            researchers, basic scientists, clinicians and
            specialists, policy makers, and scientific experts has
            helped in establishing a strong foothold for
            the society. The society strives to achieve the mission
            through publications, scientific meetings,
            educational activities, policy work, and offering awards
            and grants to researchers and students.
          </p>
          <h2 className="font-bold text-gray-600 mt-6 text-2xl" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">Foundation</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            Inflammation is an immune response of the body to harmful external or internal stimuli. Chronic inflammation has been identified as a common link that runs through various clinical conditions/ diseases. Researchers from clinical and basic sciences, working in the field of inflammation, attended the 2-day scientific meet held in August 2015 at Bengaluru to initiate a crosstalk on role inflammation in non-communicable diseases. The meeting served as a platform for founding a national forum envisioned at strengthening the inflammation research in India.
          </p>


          <h2 className="font-bold text-gray-600 mt-6 text-2xl" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">Constitution</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            The Society constitution provides for an equal participation of clinicians and basic scientists in the organization set up, to blend both of them together. The executive committee will have an equal share of clinicians and basic scientists including the other office positions.
          </p>


          <h2 className="font-bold text-gray-600 mt-6 text-2xl" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">Objectives</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            This society is created as a scientific body constantly striving for knowledge advancement in the field of inflammation and to fulfill the following objectives:

          </p>
          <ul className="mt-6 text-lg leading-8 text-gray-600" >
            <li data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"><i className="fa-solid fa-circle-right text-indigo-500"></i> To accentuate the knowledge and awareness as well
              as to share the progress on on-going
              research happening in the key areas.</li>
            <li data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"><i className="fa-solid fa-circle-right text-indigo-500"></i> To provide a platform for collaboration,
              facilitating innovation and supporting links between
              academia and industry.</li>
            <li data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"><i className="fa-solid fa-circle-right text-indigo-500"></i> To promote the interaction between clinical and
              basic scientists to collaborate and share
              their expertise for a common goal of understanding
              inflammatory disease/ conditions.</li>
            <li data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"><i className="fa-solid fa-circle-right text-indigo-500"></i> To conduct educational events and workshops to
              facilitate the sharing of expertise and
              dissemination of knowledge.</li>
            <li data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"><i className="fa-solid fa-circle-right text-indigo-500"></i> To promote academic activities through the
              voluntary help of institutions and researchers
              working in the field of inflammation.</li>
            <li data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"><i className="fa-solid fa-circle-right text-indigo-500"></i> To convene scientific meetings/seminars at periodic
              intervals at convenient places as decided
              upon by the Executive Committee/General Body Meeting.</li>
          </ul>

          <h2 className="font-bold text-gray-600 mt-6 text-2xl">Founding Executive Committee Members</h2>
          <Team />

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="shadow-md rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  </div>;
};

export default About;
