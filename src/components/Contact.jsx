function Contact() {
  return (
    <section id="contact" className="bg-gray-950 px-6 py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Contact
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Have an opportunity or just want to connect? Send me a message.
        </p>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors duration-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
