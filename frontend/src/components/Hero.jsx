import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Building <span className="text-accent">dream homes</span> & exceptional spaces</h1>
            <p className="text-lg text-gray-600 max-w-xl">Elite Group delivers premium residential and commercial projects with integrity, quality, and outstanding design. Explore our services, projects and career opportunities.</p>
            <div className="flex gap-3">
              <a href="/contact" className="inline-block px-6 py-3 rounded-md bg-accent text-white font-semibold shadow">Contact us</a>
              <a href="/recruitment" className="inline-block px-6 py-3 rounded-md border">Careers</a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="rounded-xl overflow-hidden relative shadow-lg">
            <div className="h-64 md:h-80 bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">Craft. Quality. Trust.</div>
                <div className="mt-2 text-sm opacity-90">Featured projects across residential & commercial</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
