import Foot from '../components/Foot'
import Head from '../components/Head'

function Landingpage() {
  return (
    <>

      <Head />

      <section className="mt-16">

        <img
          src="https://instasize.com/p/64e55046e6a7a65ce7ddd7defcec356dcb3aa7d54e30cdf623dfc1f5815c29f3"
          alt="Hero"
          className="w-full h-[70vh] object-cover"
        />
      </section>

      <section className="bg-blue-800 py-16">

        <div className="max-w-screen-xl mx-auto px-6">

          <div className="bg-blue-900 rounded-lg p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-sm tracking-widest text-blue-200 uppercase mb-4">
                What Sets Us Apart
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                TicksNLines.
              </h1>

              <h2 className="text-4xl md:text-5xl font-semibold text-blue-200 mt-2">
                Simplify Your Business.
              </h2>
            </div>

            <div>
              <p className="text-blue-100 text-lg leading-relaxed">
                We help businesses overcome daily challenges by handling paperwork,
                compliance, and legal processes with ease. Combining expertise,
                technology, and a client-first approach, we deliver reliable and
                efficient solutions.
              </p>

              <p className="text-blue-100 text-lg mt-6 leading-relaxed">
                Our goal is to simplify operations, reduce burdens, and empower you
                to focus on growing your business with confidence.
              </p>

              <button className="mt-8 px-6 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2">
                Get Started
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

      </section>

      <section className="py-20 bg-gray-50">

        <div className="max-w-screen-xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-wide">
            OUR CLIENTS
          </h2>

          <p className="text-gray-500 italic text-lg mb-14">
            We have 350+ business and corporate clients, and the list keeps growing.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <img src="https://imgs.search.brave.com/msvXGxyxfpERYd1pNaYKJm-N3x07cYIxSQTAh1QiFg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzNjL1Nt/YXJ0Q2l0eV9Lb2No/aV9Mb2dvLkpQRy8y/NTBweC1TbWFydENp/dHlfS29jaGlfTG9n/by5KUEc"
              className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" />
            <p className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition">
              Cochin Smart City Infrastructures Ltd
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <img src="https://imgs.search.brave.com/2pFu17WfMAOIgYqmuDSQYkTQR2KOYI_gxXDwtv8IFQM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzkwL0x1/bHVfTG9nby5wbmcv/MjUwcHgtTHVsdV9M/b2dvLnBuZw"
              className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" />
            <p className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition">
              Lulu Group of Companies
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <img src="https://speedwings.org/images/logo.png"
              className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" />
            <p className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition">
              SpeedWings Aviation Academy
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <img src="https://thewetzlar.com/wp-content/uploads/2018/06/resort-logo.png"
              className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" />
            <p className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition">
              Wetzlar Resorts & Hotels Pvt Ltd
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <img src="https://empressinfotech.com/images/logo_big.png"
              className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" />
            <p className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition">
              Empress Cybernetic Systems Pvt Ltd
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <img src="https://admod.com/wp-content/uploads/2022/07/ad-png-1.png"
              className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition duration-300" />
            <p className="mt-4 text-sm text-gray-600 group-hover:text-blue-600 transition">
              Admod Technologies
            </p>
          </div>

        </div>
      </section>

      <Foot />
    </>

  )
}

export default Landingpage
