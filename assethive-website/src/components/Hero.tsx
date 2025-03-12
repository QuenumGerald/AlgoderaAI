'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient" style={{ backgroundImage: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}>
      <div id="hero-container" className="container-fluid p-0">
        <div id="hero-row" className="row justify-content-center align-items-center">
          <div id="hero-text" className="col-md-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 id="hero-title" className="display-4 fw-bold">
                Revolutionizing Real-World Asset Trading
              </h1>
              <p id="hero-description" className="lead">
                AssetHive is a decentralized marketplace on Hedera that enables users to buy and sell tokenized real-world assets using our native payment token.
              </p>
              <div id="hero-buttons" className="d-flex justify-content-center">
                <motion.a
                  href="#about"
                  id="learn-more-button"
                  className="btn btn-primary me-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
                <motion.a
                  href="#contact"
                  id="get-started-button"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div id="hero-image-container" className="col-md-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                id="hero-image"
                src="/hero-image.jpg"
                alt="AssetHive Platform"
                fill
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}