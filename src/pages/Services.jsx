import Head from "../components/Head"
import Foot from "../components/Foot"
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react"
import gst from "../assets/gst.jpg"
import { Link } from "react-router-dom"

function Services() {

  const clients = [
    { img: "https://imgs.search.brave.com/K42_7ClbYZtR_NOVBBtzCcGTyxDPBRxgGiPvH67zN-0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzNjL1Nt/YXJ0Q2l0eV9Lb2No/aV9Mb2dvLkpQRy8y/NTBweC1TbWFydENp/dHlfS29jaGlfTG9n/by5KUEc", name: "Cochin Smart City Infrastructures Ltd" },
    { img: "https://imgs.search.brave.com/2pFu17WfMAOIgYqmuDSQYkTQR2KOYI_gxXDwtv8IFQM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzkwL0x1/bHVfTG9nby5wbmcv/MjUwcHgtTHVsdV9M/b2dvLnBuZw", name: "Lulu Group of Companies" },
    { img: "https://speedwings.org/images/logo.png", name: "SpeedWings Aviation Academy" },
    { img: "https://thewetzlar.com/wp-content/uploads/2018/06/resort-logo.png", name: "Wetzlar Resorts & Hotels Pvt Ltd" },
    { img: "https://empressinfotech.com/images/logo_big.png", name: "Empress Cybernetic Systems Pvt Ltd" },
    { img: "https://admod.com/wp-content/uploads/2022/07/ad-png-1.png", name: "Admod Technologies" }
  ]

  const services = [
    {
      title: "Statutory & Compliance",
      desc: "GST, ESI, PF and labour law compliance handled efficiently.",
      points: ["GST Filing", "PF & ESI", "Labour Laws"],
      link: "/services/compliance"
    },
    {
      title: "Accounting & Finance",
      desc: "Accurate financial management and reporting solutions.",
      points: ["Bookkeeping", "Financial Reports", "Cash Flow"],
      link: "/services/accounting"
    },
    {
      title: "Audit & Assurance",
      desc: "Ensure transparency and compliance through structured audits.",
      points: ["Internal Audit", "Risk Review", "Compliance Check"],
      link: "/services/audit"
    },
    {
      title: "Business Consultancy",
      desc: "Strategic advisory to grow and optimize your business.",
      points: ["Strategy", "Process Improvement", "Advisory"],
      link: "/services/consulting"
    },
    {
      title: "Registration & Licensing",
      desc: "Hassle-free business setup and legal registrations.",
      points: ["Company Setup", "Licenses", "Registrations"],
      link: "/services/registration"
    },
    {
      title: "Support Services",
      desc: "Operational and documentation support for daily business.",
      points: ["Admin Support", "Document Storage", "Tracking"],
      link: "/services/support"
    }
  ]

  return (
    <>
      <Head />

      {/* HERO */}
      <section className="bg-slate-50 pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
          Our Services
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
          End-to-end business solutions designed to simplify operations,
          ensure compliance, and support long-term growth.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 pb-24">
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src={gst}
            alt="GST"
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
              Why Choose Us
            </h2>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
              <Accordion>

                <AccordionPanel>
                  <AccordionTitle>What makes our services stand out?</AccordionTitle>
                  <AccordionContent>
                    Accurate, efficient, and reliable service delivery with expert professionals.
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel>
                  <AccordionTitle>Security & Confidentiality</AccordionTitle>
                  <AccordionContent>
                    Strict data protection and secure systems for complete confidentiality.
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel>
                  <AccordionTitle>Trusted by Businesses</AccordionTitle>
                  <AccordionContent>
                    350+ clients trust us for consistent, high-quality solutions.
                  </AccordionContent>
                </AccordionPanel>

              </Accordion>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
              Services We Provide
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-2xl border border-slate-200 
                hover:shadow-xl hover:-translate-y-2 transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 mb-4">{service.desc}</p>

                  <ul className="text-sm text-slate-500 space-y-1 mb-6">
                    {service.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-screen-xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">Our Clients</h2>
          <p className="text-blue-500 mt-2 italic">
            Trusted by 350+ businesses
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl text-center">
              <img src={client.img} className="h-16 mx-auto object-contain grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm text-slate-500">{client.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                quote: "TicksNLines simplified our compliance process.",
                name: "Operations Manager",
                company: "Cochin Smart City"
              },
              {
                quote: "Helped us make better financial decisions.",
                name: "Finance Head",
                company: "Lulu Group"
              },
              {
                quote: "Reliable and professional partner.",
                name: "Director",
                company: "Empress Systems"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border shadow-sm">
                <p className="text-slate-600 mb-6">“{t.quote}”</p>
                <p className="font-semibold text-[#0B1F3A]">{t.name}</p>
                <p className="text-sm text-slate-500">{t.company}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F3A] py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Simplify Your Business?
        </h2>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Get Expert Consultation
          <span className="bg-white text-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
            →
          </span>
        </Link>
      </section>

      <Foot />
    </>
  )
}

export default Services