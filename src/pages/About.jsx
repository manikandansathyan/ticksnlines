import Foot from "../components/Foot"
import Head from "../components/Head"
import certImg from '../assets/certficate.jpg';
import aboutImg from '../assets/aboutimg.jpg';

function About() {
  return (
    <>
      <Head />
      <section className="bg-gray-100">

        <div className="pt-24 pb-10 text-center">
          <h1 className="font-heading italic text-4xl md:text-5xl text-gray-800">
            About Us
          </h1>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pb-20">

          <div>
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-[450px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Established in 1997, we are a leading HR consulting and business advisory firm in Kerala,
              helping organizations simplify operations through expert guidance and efficient solutions.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              From taxation, compliance, and financial advisory to HR and administrative services,
              our experienced professionals ensure accuracy, reliability, and timely execution.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              With a strong commitment to quality, trust, and client success, we empower businesses
              to focus on growth while we handle the complexities.
            </p>
          </div>

        </div>

        <div className="py-24 bg-white">

          <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
                Our Credentials
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Certified & Trusted
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                With decades of experience, TicksNLines is backed by industry-recognized
                certifications and compliance standards that ensure reliability and trust.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment to quality, accuracy, and professionalism reflects in every
                service we deliver to our clients.
              </p>
            </div>

            <div>
              <img
                src={certImg}
                alt="Certified"
                className="w-full h-[550px] object-contain rounded-2xl shadow-xl hover:scale-105 transition duration-500"
              />
            </div>

          </div>

        </div>

      </section>
      <Foot />
    </>
  )
}

export default About
