'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechCorp Solutions',
    content: 'SoftSell made it incredibly easy to recover value from our unused enterprise licenses. The process was smooth and the team was highly professional.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    company: 'Global Systems Inc.',
    content: 'We were skeptical at first, but SoftSell delivered exactly what they promised. Quick valuation, fair price, and fast payment.',
    rating: 5,
  },
]

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {testimonial.role}, {testimonial.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials