import Head from '../components/Head'
import Foot from '../components/Foot'
import { Button, TextInput } from 'flowbite-react'

function Contact() {
  return (
    <>
      <Head />

      <section className="bg-slate-50">

        {/* HERO */}
        <div className="pt-28 pb-16 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            Get in Touch
          </h1>

          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            Whether you need consultation, compliance support, or business advice,
            our team is here to help.
          </p>
        </div>

        {/* CONTACT + MAP */}
        <div className="max-w-screen-xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start pb-20">

          {/* MAP */}
          <div className="w-full h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15712.850978044953!2d76.310781!3d10.081647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080e6725350343%3A0xa4fd0bcc1bc58323!2sTicks%20n%20Lines!5e0!3m2!1sen!2sus!4v1775402387157!5m2!1sen!2sus"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* EMAIL */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
              <div className="text-2xl mb-3">✉️</div>

              <h3 className="font-semibold text-[#0B1F3A] text-lg mb-2">
                Email
              </h3>

              <p className="text-slate-500 text-sm">
                esipf@ticksnlines.com
              </p>
              <p className="text-slate-500 text-sm">
                salestax@ticksnlines.com
              </p>
            </div>

            {/* HOURS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition">
              <div className="text-2xl mb-3">⏰</div>

              <h3 className="font-semibold text-[#0B1F3A] text-lg mb-2">
                Working Hours
              </h3>

              <p className="text-slate-500 text-sm">
                Monday – Saturday
              </p>
              <p className="font-medium text-[#0B1F3A]">
                8:00 AM – 5:00 PM
              </p>
            </div>

            {/* PHONE (FULL WIDTH) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition sm:col-span-2">
              <div className="text-2xl mb-3">📞</div>

              <h3 className="font-semibold text-[#0B1F3A] text-lg mb-3">
                Contact Numbers
              </h3>

              <div className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                <p>0484 2543885</p>
                <p>09562707090</p>
                <p>09562707091</p>
                <p>09562707092</p>
                <p>09562707093</p>
                <p>09562707094</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <div className="max-w-3xl mx-auto px-6 pb-24">

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10">

            <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#0B1F3A] mb-8">
              Send us a message
            </h2>

            <form className="grid gap-5">

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput placeholder="Your Name" required />
                <TextInput type="email" placeholder="Your Email" required />
              </div>

              <textarea
                rows="5"
                placeholder="Tell us about your requirement..."
                className="w-full rounded-xl border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              ></textarea>

              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full py-3 text-sm flex items-center justify-center gap-2">
                Send Message
              </Button>

            </form>

          </div>

        </div>

      </section>

      <Foot />
    </>
  )
}

export default Contact