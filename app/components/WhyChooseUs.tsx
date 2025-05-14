'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

interface Benefit {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const benefits: Benefit[] = [
  {
    title: 'Secure & Compliant',
    description: 'Our platform ensures secure transactions and full legal compliance.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Best Market Value',
    description: 'Get the highest value for your software licenses with our market analysis.',
    icon: BanknotesIcon,
  },
  {
    title: 'Quick Process',
    description: 'Complete the entire process within 48 hours or less.',
    icon: ClockIcon,
  },
  {
    title: 'Expert Support',
    description: '24/7 support from our team of software licensing experts.',
    icon: UserGroupIcon,
  },
]

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <benefit.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 