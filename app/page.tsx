'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import components to avoid SSR issues with Framer Motion
const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: false })
const HowItWorks = dynamic(() => import('./components/HowItWorks'), { ssr: false })
const WhyChooseUs = dynamic(() => import('./components/WhyChooseUs'), { ssr: false })
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: false })
const ContactForm = dynamic(() => import('./components/ContactForm'), { ssr: false })

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  )
}
