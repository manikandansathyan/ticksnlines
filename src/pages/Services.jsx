import Head from '../components/Head'
import Foot from '../components/Foot'
import { Card, Accordion, AccordionContent, AccordionPanel, AccordionTitle, Button } from 'flowbite-react'

function Services() {
  return (
    <>
      <Head />

      <section className="bg-gray-50">

        <div className="pt-24 pb-6 text-center">
          <h1 className="font-heading italic text-4xl md:text-5xl text-gray-800">
            Services
          </h1>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600 text-lg leading-relaxed mb-12">
          <p>
            We offer a wide spectrum of HR, accounting, and taxation services designed to simplify your business operations.
            With decades of expertise since 1997, we provide reliable, efficient, and cost-effective solutions tailored to your needs.
            Connect with us to explore how we can support your business growth.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pb-20">

          <div>
            <img
              src="https://instasize.com/p/63ecec42a64e8af24b4b7298bba21fe374f80e8ef2cc1de402c9deeb66070674"
              alt="GST Services"
              className="w-full h-[450px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h2>

            <Card className="p-8 rounded-2xl shadow-xl bg-white border border-gray-100">

              <Accordion className="space-y-4">

                <AccordionPanel className="rounded-xl border border-gray-200 overflow-hidden">
                  <AccordionTitle className="!text-gray-900 !bg-gray-50 hover:!text-blue-600 px-6 py-4 text-xl font-semibold transition">
                    What makes our services impeccable?
                  </AccordionTitle>
                  <AccordionContent>
                    <p className="text-gray-700 leading-relaxed pb-4">
                      Our strong infrastructure and highly trained professionals ensure seamless service delivery.
                      Continuous training keeps our team updated with evolving standards in business and compliance.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel className="rounded-xl border border-gray-200 overflow-hidden">
                  <AccordionTitle className="!text-gray-900 !bg-gray-50 hover:!text-blue-600 px-6 py-4 text-xl font-semibold transition">
                    Security & Confidentiality
                  </AccordionTitle>
                  <AccordionContent>
                    <p className="text-gray-700 leading-relaxed pb-4">
                      We ensure complete data protection through secure storage systems and digital solutions,
                      keeping your business information safe and confidential at all times.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

                <AccordionPanel className="rounded-xl border border-gray-200 overflow-hidden">
                  <AccordionTitle className="!text-gray-900 !bg-gray-50 hover:!text-blue-600 px-6 py-4 text-xl font-semibold transition">
                    Our Satisfied Clients
                  </AccordionTitle>
                  <AccordionContent>
                    <p className="text-gray-700 leading-relaxed pb-4">
                      With 350+ satisfied clients across industries, our services are trusted for reliability,
                      consistency, and measurable business impact.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

              </Accordion>

            </Card>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Services We Provide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Statutory & Compliance",
                desc: "We handle GST, ESI, PF, labour laws, and compliance filings to keep your business legally secure."
              },
              {
                title: "Accounting & Finance",
                desc: "From bookkeeping to financial statements, we ensure accurate and reliable financial management."
              },
              {
                title: "Audit & Assurance",
                desc: "Internal and on-site audits ensure your processes are compliant and efficient."
              },
              {
                title: "Business Consultancy",
                desc: "Expert advice in industrial, legal, and project consultancy to scale your business."
              },
              {
                title: "Registration & Licensing",
                desc: "We simplify business setup with registrations like PAN, Udyog Aadhaar, and licenses."
              },
              {
                title: "Support Services",
                desc: "Secure document storage and operational support for smooth business functioning."
              }
            ].map((service, i) => (
              <Card
                key={i}
                className="w-full p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 flex flex-col justify-between h-full"
              >
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h5>

                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.desc}
                </p>

              </Card>
            ))}

          </div>
        </div>

      </section>

      <Foot />
    </>
  )
}

export default Services