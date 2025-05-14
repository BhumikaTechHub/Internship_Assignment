'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CloudArrowUpIcon, CurrencyDollarIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'

interface Step {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const steps: Step[] = [
  {
    title: 'Upload License',
    description: 'Simply upload your software license details through our secure platform.',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'Get Valuation',
    description: 'Receive an instant market-based valuation for your software license.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Get Paid',
    description: 'Accept our offer and receive payment within 24-48 hours.',
    icon: CurrencyDollarIcon,
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg"
            >
              <step.icon className="w-16 h-16 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 