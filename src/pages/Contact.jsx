import contact_img from "../assets/images/helpdesk1.png";

const Contact = () => {
  return (
    <section className="mt-[10rem]">
      <div className="custom-width grid gap-8 items-center grid-cols-1 lg:grid-cols-2">
        {/* Contact Information Section */}
        <div className="relative">
          <img
            src={contact_img}
            alt="Contact us"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
            <ul className="text-gray-700 space-y-2">
              <li className="font-semibold">📞 +233 24 428 1122</li>
              <li className="font-semibold">📧 wconsult@yahoo.com</li>
              <li className="font-semibold">📍 Kumasi, Ghana</li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us A Message
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
