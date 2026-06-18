import React from 'react';
import { motion } from 'framer-motion';

interface TaskScrollerProps {
  className?: string;
}

const TaskScroller: React.FC<TaskScrollerProps> = ({ className }) => {
  const tasks = [
    'Email Drafting',
    'Data Analysis',
    'PR Reviews',
    'Scheduling',
    'SQL Queries',
    'API Calls',
    'File',
    'Slack Summaries',
    'Lead Scoring',
    'Image Tagging',
    'Test Running',
    'Deployment',
    'Log Parsing'
  ];

  // Split tasks into two rows
  const row1Tasks = tasks.slice(0, 7); // First 7 items
  const row2Tasks = tasks.slice(7); // Last 6 items

  return (
    <section className={`py-16 px-4 overflow-hidden ${className || ''}`}>
      <div className="max-w-7xl mx-auto">
        {/* Horizontal line with text */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="flex-grow h-px" style={{ 
            background: 'linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)'
          }} />
          <span className="px-6 text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--neon-blue)' }}>
            Capabilities
          </span>
          <div className="flex-grow h-px" style={{ 
            background: 'linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)'
          }} />
        </div>

        {/* Row 1 - Moves Left to Right */}
        <div className="relative flex overflow-hidden mb-4">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...row1Tasks, ...row1Tasks].map((task, index) => (
              <div
                key={`row1-${index}`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl neon-border"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--neon-blue)' }} />
                <span className="text-sm font-medium text-foreground">{task}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves Right to Left */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...row2Tasks, ...row2Tasks].map((task, index) => (
              <div
                key={`row2-${index}`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl neon-border"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--neon-pink)' }} />
                <span className="text-sm font-medium text-foreground">{task}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaskScroller;