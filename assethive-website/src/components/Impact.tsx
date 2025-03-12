'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Impact() {
  const metrics = [
    {
      icon: faChartLine,
      title: 'Transaction Volume',
      description: 'By using a native token, we incentivize recurring transactions and platform growth.',
    },
    {
      icon: faChartBar,
      title: 'Liquidity & TVL Growth',
      description: 'Facilitates fractional ownership and increases overall asset liquidity.',
    },
    {
      icon: faUsers,
      title: 'User Engagement',
      description: 'Token-based rewards encourage active participation and long-term retention.',
    },
  ];

  return (
    <section id="impact" className="container-fluid py-5">
      <div id="impact-container" className="container">
        <h2 id="impact-title" className="text-center mb-5">Sustainable Impact</h2>
        <div id="impact-row" className="row justify-content-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              id={`impact-item-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-md-4 mb-4"
            >
              <div id={`impact-card-${index}`} className="card h-100">
                <div id={`impact-icon-${index}`} className="card-header">
                  <FontAwesomeIcon icon={metric.icon} size="2x" />
                </div>
                <div className="card-body">
                  <h3 id={`impact-title-${index}`} className="card-title">{metric.title}</h3>
                  <p id={`impact-description-${index}`} className="card-text">{metric.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}