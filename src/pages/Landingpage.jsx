import Foot from '../components/Foot'
import Head from '../components/Head'
import heroVid from '../assets/heroVid.mp4'
import { motion } from 'framer-motion'

function Landingpage() {

  const clients = [
    {
      img: "https://imgs.search.brave.com/MH6iXcMaBSOr8QHJAadcjjxdesYnogQFTA4BMycCN0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWhi/cHIwOXB3ejBzay5j/bG91ZGZyb250Lm5l/dC9sb2dvX3VybC9j/b2NoaW4tc21hcnQt/bWlzc2lvbi1saW1p/dGVkLTg1NmZiYTlj",
      name: "Cochin Smart City Infrastructures Ltd"
    },
    {
      img: "https://imgs.search.brave.com/2pFu17WfMAOIgYqmuDSQYkTQR2KOYI_gxXDwtv8IFQM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzkwL0x1/bHVfTG9nby5wbmcv/MjUwcHgtTHVsdV9M/b2dvLnBuZw",
      name: "Lulu Group of Companies"
    },
    {
      img: "https://speedwings.org/images/logo.png",
      name: "SpeedWings Aviation Academy"
    },
    {
      img: "https://thewetzlar.com/wp-content/uploads/2018/06/resort-logo.png",
      name: "Wetzlar Resorts & Hotels Pvt Ltd"
    },
    {
      img: "https://empressinfotech.com/images/logo_big.png",
      name: "Empress Cybernetic Systems Pvt Ltd"
    },
    {
      img: "https://admod.com/wp-content/uploads/2022/07/ad-png-1.png",
      name: "Admod Technologies"
    }
  ]


  const services = [
    {
      title: "Statutory & Compliance",
      image: "https://imgs.search.brave.com/bxD4MEWFTzjTNZNEBT-1SJsQbl6krJp0CknrDCz8SbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnFh/bmRsZS5jb20vYmxv/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNi9XaGF0LWlz/LVN0YXR1dG9yeS1D/b21wbGlhbmNlLUNv/bXBsZXRlLUd1aWRl/LXNjYWxlZC5qcGVn/P2ZpdD0xMDI0LDU0/NyZzc2w9MQ",
      desc: "We help businesses stay compliant with laws and regulations, reducing risks and ensuring smooth operations."
    },
    {
      title: "Accounting & Finance",
      image: "https://imgs.search.brave.com/GWgO9Wi4w-Ta-Y3pz7bNE2pOcc5y8smGM61N9CA3H6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/MjAzLzQyNi9zbWFs/bC9idXNpbmVzcy1m/aW5hbmNlLWFuZC1h/Y2NvdW50aW5nLWNv/bmNlcHRzLXBob3Rv/LmpwZWc",
      desc: "Expert accounting solutions to manage your finances efficiently and support business growth."
    },
    {
      title: "Audit & Assurance",
      image: "https://imgs.search.brave.com/OAx_uSTov0dkRYIcX-l_a0R2H_mmPeVv3X0qv7eYA4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jZXJ0/aWZpY2F0ZS1hcHBy/b3ZhbC1wcm9jZXNz/LWRvY3VtZW50LWNo/ZWNrbGlzdC1tYWdu/aWZ5aW5nLWZvY3Vz/LXF1YWxpdHktYXNz/dXJhbmNlLXZlcmlm/aWNhdGlvbi1zeXN0/ZW0tY29tcGxpYW5j/ZS1hdWRpdC0zOTI4/ODI5MTYuanBn",
      desc: "Comprehensive audit services to ensure transparency, accuracy, and compliance."
    },
    {
      title: "Business Consultancy",
      image: "https://imgs.search.brave.com/a1nLbYaInXxBPYn3olfHhfS4HvLs8N6r7M1vUTuwjgc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iaXpj/b25zdWx0YW5jeS5p/aWQub3JnLmluL19u/ZXh0L3N0YXRpYy9t/ZWRpYS9FeHBlcnRf/dGFsa19uZXcuYmM5/ZGQ0YTEuanBn",
      desc: "Strategic consulting to optimize performance and scale your business effectively."
    },
    {
      title: "Registration & Licensing",
      image: "https://imgs.search.brave.com/LvE5Y4K9yWYzdJmizd3Ens9XWG8Nfers_Y0cQuSNwpQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb20u/b2hpby5nb3Yvd3Bz/L3djbS9jb25uZWN0/L2dvdi8zMWQ3MjFh/ZC00ZjJhLTQxYmYt/YWNmZS0zNDNiZDdh/MjcwMmYvQ29tcGxp/YW5jZVNtYWxsLmpw/Zz9NT0Q9QUpQRVJF/UyZDQUNIRUlEPVJP/T1RXT1JLU1BBQ0Uu/WjE4X0pRR0NINFMw/NFA0MTIwNkhOVUtW/RjMxMDAwLTMxZDcy/MWFkLTRmMmEtNDFi/Zi1hY2ZlLTM0M2Jk/N2EyNzAyZi1vOFQz/b3FW",
      desc: "End-to-end assistance for business registrations and licensing processes."
    },
    {
      title: "Support Services",
      image: "https://imgs.search.brave.com/-23sMsiMA1EbfULaAGmqocOnBcugUyicLT4enwj_vW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NzBjY2UyNzU3N2Ew/ZWViMjdlMWM1NmIv/Njg1ZTY0MzZmYWRl/M2E3MDA0N2Y2NDg5/X0hvdyUyMFNlcmRh/byUyMENhbiUyMEhl/bHAlMjBpbiUyMElU/JTIwTWFpbnRlbmFu/Y2UlMjBhbmQlMjBT/dXBwb3J0JTIwc2Vy/dmljZXMud2VicA",
      desc: "Reliable support services to streamline your day-to-day business operations."
    }
  ];

  const insights = [
    {
      title: "Industry Trends",
      desc: "Stay ahead with market insights, sector reports, and emerging trends shaping industries.",
    },
    {
      title: "Business Strategy",
      desc: "Guidance on scaling, digital transformation, and improving business performance.",
    },
    {
      title: "Finance & Compliance",
      desc: "Updates on regulations, tax changes, and financial strategies to reduce risks.",
    },
    {
      title: "Technology",
      desc: "Explore AI, automation, and digital tools transforming modern businesses.",
    },
    {
      title: "Case Studies",
      desc: "Real success stories showcasing how we help businesses grow and succeed.",
    }
  ];

  return (
    <>
      <Head />

      {/* HERO (STICKY) */}
      <div className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0  ">

          <video
            src={heroVid}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-[#0B1F3A]/80"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Your Business, Simplified
            </h1>

            <p className="mt-6 text-lg md:text-xl text-blue-200 max-w-2xl">
              We handle compliance, paperwork, and legal complexity so you can focus on growth.
            </p>
          </div>

        </div>
      </div>

      {/* ABOUT (SCROLLS OVER HERO) */}
      <section className="relative z-30 bg-slate-50 py-20 -mt-[100vh]">
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="bg-[#0B1F3A] rounded-2xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center shadow-2xl">

            <div>
              <p className="text-sm tracking-widest text-blue-400 uppercase mb-4">
                What Sets Us Apart
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-white">
                TicksNLines.
              </h1>

              <h2 className="text-3xl md:text-4xl text-blue-300 mt-3">
                Simplify Your Business.
              </h2>
            </div>

            <div>
              <p className="text-blue-100 text-lg leading-relaxed">
                We help businesses overcome daily challenges by handling paperwork,
                compliance, and legal processes with ease.
              </p>

              <p className="text-blue-100 text-lg mt-6 leading-relaxed">
                Combining expertise, technology, and a client-first approach, we deliver reliable and efficient solutions that empower growth.
              </p>

              <button className="mt-8 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-medium hover:bg-gray-100 transition">
                Get Started →
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* INSIGHTS */}
    <section className="relative z-30 bg-slate-50 py-24 -mt-32">
  <div className="max-w-screen-xl mx-auto px-6">

    {/* Heading */}
    <div className="mb-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
        Insights & Expertise
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

      {/* Insight Cards */}
      {insights.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          viewport={{ once: false }}
          className="group h-full rounded-2xl p-[1px] 
                     bg-gradient-to-br from-blue-600/20 to-transparent 
                     hover:from-blue-600/50 transition duration-300"
        >
          <div className="h-full bg-[#0B1F3A] rounded-2xl p-8 flex flex-col justify-between 
                          group-hover:bg-white transition duration-300">

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white 
                             group-hover:text-[#0B1F3A] transition">
                {item.title}
              </h3>

              <p className="text-slate-300 group-hover:text-slate-600 transition leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Hover CTA */}
            <div className="mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
              <span className="text-blue-600 font-medium text-sm">
                Learn more →
              </span>
            </div>

          </div>
        </motion.div>
      ))}

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        className="group h-full rounded-2xl p-8 border border-blue-700 
                   bg-slate-50 text-blue-700 flex flex-col justify-between 
                   hover:shadow-xl transition duration-300"
      >

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Explore More Insights
          </h3>

          <p className="text-blue-500 leading-relaxed">
            Dive deeper into our expert articles, case studies, and industry knowledge.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <span className="font-medium">
            Learn More
          </span>

          <div className="w-11 h-11 flex items-center justify-center rounded-full 
                          bg-blue-600 text-white 
                          group-hover:translate-x-1 transition">
            
            <button><a href="/insights">→</a></button>
          </div>
        </div>

      </motion.div>

    </div>

  </div>
</section>

      {/* CLIENTS */}
      <section className="relative z-30 bg-slate-50 py-20 -mt-32">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">
            OUR CLIENTS
          </h2>
          <p className="text-blue-500 italic text-lg">
            Trusted by 350+ businesses and growing every day.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-16 mt-4 rounded"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 text-center">
              <img
                src={client.img}
                className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition"
              />
              <p className="mt-4 text-sm text-slate-500 group-hover:text-blue-700">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-30 bg-slate-50 py-20 -mt-32">
        <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] text-center">
            OUR SERVICES
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto mb-16 mt-4 rounded"></div>

          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-12 items-center"
              >

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.0 }}
                  viewport={{ once: false }}
                  className={`${i % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[250px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
                  />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.0 }}
                  viewport={{ once: false }}
                  className={`${i % 2 !== 0 ? "md:order-1" : ""}`}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-slate-500 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </section>


      <Foot />
    </>
  )
}

export default Landingpage