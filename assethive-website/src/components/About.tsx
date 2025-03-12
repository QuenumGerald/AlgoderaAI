'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="container-fluid p-5">
      <div id="about-container" className="row justify-content-center">
        <div id="about-row" className="col-md-6">
          <div id="about-text">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="about-title" className="text-center mb-4">About AssetHive</h2>
              <p id="about-description" className="lead text-center mb-5">
                Addressing the liquidity and transparency challenges of traditional RWA markets.
              </p>
              <h3 id="problem-title" className="text-center mb-3">Problem Solved</h3>
              <p id="problem-description" className="text-center mb-5">
                AssetHive addresses the liquidity and transparency challenges of traditional RWA markets by streamlining transactions through smart contracts and eliminating intermediaries.
              </p>
              <h3 id="solution-title" className="text-center mb-3">Our Solution</h3>
              <p id="solution-description" className="text-center mb-5">
                We've created a decentralized marketplace that enables fractional ownership of real-world assets, increasing liquidity and providing transparent, secure transactions on the Hedera network.
              </p>
            </motion.div>
          </div>
        </div>
        <div id="about-image-container" className="col-md-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              id="about-image"
              src="/about-image.jpg"
              alt="AssetHive Solution"
              fill
              priority
              className="img-fluid"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}