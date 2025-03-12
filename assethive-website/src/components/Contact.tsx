'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#111827" }}>Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2" style={{ color: "#111827" }}>Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                style={{ color: "#111827" }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2" style={{ color: "#111827" }}>Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                style={{ color: "#111827" }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2" style={{ color: "#111827" }}>Message</label>
              <textarea
                id="message"
                rows={5}
                className="shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                style={{ color: "#111827" }}
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
