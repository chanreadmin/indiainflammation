import React from "react";
// import membershipfile from '../../../public/assets/'

const Membership = () => {
  return (
    <>
      <div className="bg-white ">
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
          <div className="mx-auto max-w-2xl py-5 sm:py-5 lg:py-5">
            <div className="hidden sm:mb-8 md:flex md:justify-center">

            </div>
            <div className="">
              <h1 className="text-xl text-center font-bold tracking-tight sm:text-4xl">
                Membership Details
              </h1>


              <div className="flex items-center justify-center">
                <table className="table mt-8 items-center border-collapse border border-slate-400">
                  <tbody><tr >
                    <th className="border-collapse border border-slate-400 p-2">Types of Membership Offered</th>
                    <th className="border-collapse border border-slate-400 p-2">Criteria for acceptance</th>
                    <th className="border-collapse border border-slate-400 p-2">Fee details</th>
                  </tr>
                    <tr>
                      <td className="border-collapse border border-slate-400 p-2">Life Membership<br />(with voting rights)</td>
                      <td className="border-collapse border border-slate-400 p-2">Two publications<br />(inflammation Research)</td>
                      <td className="border-collapse border border-slate-400 p-2">INR 5,000/-</td>
                    </tr>
                    <tr>
                      <td className="border-collapse border border-slate-400 p-2">Associate Membership<br />(Five years term)</td>
                      <td className="border-collapse border border-slate-400 p-2">One publications<br />(inflammation Research)</td>
                      <td className="border-collapse border border-slate-400 p-2">INR 2,500/-</td>
                    </tr>
                    <tr>
                      <td className="border-collapse border border-slate-400 p-2">Overseas Membership<br />(Annual / Life)</td>
                      <td className="border-collapse border border-slate-400 p-2">Researcher in the field<br /> of inflammtion</td>
                      <td className="border-collapse border border-slate-400 p-2">USD 100 / 500</td>
                    </tr>
                    <tr>
                      <td className="border-collapse border border-slate-400 p-2">Student Membership<br />(Annual)</td>
                      <td className="border-collapse border border-slate-400 p-2">Postgraduate students in<br />medical / biological sciences</td>
                      <td className="border-collapse border border-slate-400 p-2">INR 500/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="assets/sir-membership.pdf"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download Membership Form
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
      </div>
    </>
  );
};

export default Membership;
