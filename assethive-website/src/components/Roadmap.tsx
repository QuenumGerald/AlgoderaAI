'use client';

import { motion } from 'framer-motion';

export default function Roadmap() {
  const milestones = [
    {
      title: 'MVP Launch',
      description: 'Complete a working prototype with token payment integration.',
      date: 'Q1 2024',
    },
    {
      title: 'User Onboarding',
      description: 'Target 500+ initial users.',
      date: 'Q2 2024',
    },
    {
      title: 'Metric Targets',
      description: 'Achieve predefined transaction volumes and TVL benchmarks.',
      date: 'Q3 2024',
    },
    {
      title: 'Iterative Improvements',
      description: 'Collect user feedback for rapid platform enhancements.',
      date: 'Q4 2024',
    },
  ];

  return (
    <section id="roadmap" className="py-5 bg-light">
      <div className="container">
        <h2 id="roadmap-title" className="text-center mb-4">Roadmap</h2>
        <div className="row">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="col-md-6 mb-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 bg-white rounded shadow text-center">
                <h3 className="h5">{milestone.title}</h3>
                <p>{milestone.description}</p>
                <span className="text-muted">{milestone.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}