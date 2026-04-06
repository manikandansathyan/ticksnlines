import Head from '../components/Head'
import Foot from '../components/Foot'
import { Button, TextInput } from 'flowbite-react'

function Contact() {
  return (
    <>
      <Head />

      <section className="bg-gradient-to-b from-white to-gray-100 pt-28 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Get in Touch
        </h1>

        <p className="mt-4 text-gray-600 text-base max-w-lg mx-auto">
          Have questions or need help? Our team is ready to assist you.
        </p>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">

          <div className="w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15712.850978044953!2d76.310781!3d10.081647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080e6725350343%3A0xa4fd0bcc1bc58323!2sTicks%20n%20Lines!5e0!3m2!1sen!2sus!4v1775402387157!5m2!1sen!2sus"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-white p-5 rounded-xl shadow-sm border text-center hover:shadow-md transition">
              <div className="text-xl mb-2">✉️</div>
              <h3 className="font-semibold text-xl">Email</h3>
              <p className="text-gray-600 mt-1">
                esipf@ticksnlines.com
              </p>
              <p className="text-gray-600">
                salestax@ticksnlines.com
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border text-center hover:shadow-md transition">
              <div className="text-xl mb-2">⏰</div>
              <h3 className="font-semibold text-xl">Working Hours</h3>
              <p className="text-gray-600 mt-1">
                Monday – Saturday
              </p>
              <p className="font-medium">
                8:00 AM – 5:00 PM
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border text-center col-span-1 sm:col-span-2 hover:shadow-md transition">
              <div className="text-xl mb-2">📞</div>
              <h3 className="font-semibold text-xl">Contact</h3>
              <p className="text-gray-600 mt-1">
                0484 2543885
              </p>

              <div className="mt-2 space-y-1">
                <p className="text-gray-600">09562707090</p>
                <p className="text-gray-600">09562707091</p>
                <p className="text-gray-600">09562707092</p>
                <p className="text-gray-600">09562707093</p>
                <p className="text-gray-600">09562707094</p>
              </div>
            </div>

          </div>
        </div>
      </section>

     
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-xl p-8 border">

            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Send us a message
            </h2>

            <form className="grid gap-4">

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput placeholder="Your Name"  required />
                <TextInput type="email" placeholder="Your Email" required />
              </div>

              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              ></textarea>

              <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-sm">
                Send Message →
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