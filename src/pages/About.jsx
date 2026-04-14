import Foot from "../components/Foot"
import Head from "../components/Head"
import certImg from '../assets/certficate.jpg';
import aboutImg from '../assets/aboutimg.jpg';

function About() {
  return (
    <>
      <Head />

      <section className="bg-slate-50">

        {/* HERO */}
        <div className="pt-28 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            About Us
          </h1>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Simplifying business operations through expertise, compliance, and strategic guidance.
          </p>
        </div>

        {/* ABOUT */}
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pb-24">

          <div>
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-[450px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
              Who We Are
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Established in 1997, TicksNLines is a trusted consulting and advisory firm based in Kerala,
              helping businesses streamline operations and navigate complex regulatory environments.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              From taxation and compliance to financial advisory and HR services,
              we deliver reliable, accurate, and timely solutions tailored to every client.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Our mission is simple — to remove complexity so businesses can focus on growth and success.
            </p>

            {/* NIC */}
            <div className="mt-6 text-sm text-slate-500 border-l-2 border-blue-600 pl-4">
              <p className="font-medium text-[#0B1F3A]">Business Classification</p>
              <p>Accounting, Bookkeeping & Auditing Activities (NIC)</p>
            </div>
          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-white py-20">
          <div className="max-w-screen-xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-14">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-4 gap-10">
              {[
                "25+ Years Experience",
                "350+ Clients Served",
                "End-to-End Solutions",
                "Trusted Compliance Experts"
              ].map((item, i) => (
                <div key={i} className="text-lg font-medium text-slate-600">
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="max-w-screen-xl mx-auto px-6 py-24">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-16 text-center">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                step: "01",
                title: "Understand",
                desc: "We take time to understand your business challenges, goals, and operational needs."
              },
              {
                step: "02",
                title: "Strategize",
                desc: "We craft tailored solutions aligned with your business objectives and compliance requirements."
              },
              {
                step: "03",
                title: "Execute",
                desc: "We implement efficiently with ongoing support to ensure long-term success."
              }
            ].map((item, i) => (
              <div key={i}>
                <p className="text-blue-600 font-bold text-xl mb-2">{item.step}</p>
                <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* CREDENTIALS */}
        <div className="bg-slate-50 py-24">

          <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
                Our Credentials
              </p>

              <h2 className="text-4xl font-bold text-[#0B1F3A] mb-6">
                Certified & Trusted
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                With decades of experience, we are backed by industry-recognized certifications
                and compliance standards that ensure trust and reliability.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                Our commitment to accuracy, professionalism, and quality reflects in every service we deliver.
              </p>
            </div>

            <div>
              <img
                src={certImg}
                alt="Certified"
                className="w-full h-[500px] object-contain rounded-2xl shadow-xl hover:scale-105 transition duration-500"
              />
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="bg-[#0B1F3A] py-20 text-center text-white">

          <h2 className="text-3xl font-bold mb-4">
            Let’s Simplify Your Business
          </h2>

          <p className="text-blue-200 mb-6">
            Partner with us for reliable, efficient, and growth-focused solutions.
          </p>

          <button className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition">
            <a href="/contact">Contact Us →</a>
          </button>

        </div>

      </section>

      <Foot />
    </>
  )
}

export default About