'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faLayerGroup, faFileContract, faUserShield } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  const features = [
    {
      icon: faExchangeAlt,
      title: 'Native Token Payments',
      description: 'Users pay directly with our native token, reducing reliance on traditional currencies and ensuring seamless on-chain settlements.',
    },
    {
      icon: faLayerGroup,
      title: 'Fractional Ownership',
      description: 'Enables partial ownership of high-value assets, increasing accessibility and overall market liquidity.',
    },
    {
      icon: faFileContract,
      title: 'Smart Contract Integration',
      description: 'Automated, secure transactions managed through Hedera\'s reliable smart contract service.',
    },
    {
      icon: faUserShield,
      title: 'Transparency & Security',
      description: 'Complete transaction visibility with the robust security of the Hedera network.',
    },
  ];

  return (
    <section id="features" className="container-fluid py-5">
      <div id="features-container" className="container">
        <h2 id="features-title" className="text-center mb-5">Key Features</h2>
        <div id="features-row" className="row justify-content-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              id={`feature-item-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-md-4 mb-4"
            >
              <div id={`feature-card-${index}`} className="card h-100">
                <div id={`feature-icon-${index}`} className="card-header">
                  {/* <FontAwesomeIcon icon={feature.icon} /> */}
                </div>
                <div className="card-body">
                  <h3 id={`feature-title-${index}`} className="card-title">{feature.title}</h3>
                  <p id={`feature-description-${index}`} className="card-text">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}