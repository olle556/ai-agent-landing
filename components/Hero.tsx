'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-r from-primary to-secondary text-light">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6"
        >
          AI Agents for Your Repetitive Tasks
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Let our AI agents handle your mundane tasks while you focus on what matters most.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#features" 
            className="bg-light text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero