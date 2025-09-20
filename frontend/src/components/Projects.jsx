import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Elite Residences', desc: 'Modern family homes', image: '' },
  { title: 'Riverside Tower', desc: 'Premium office complex', image: '' },
  { title: 'Green Villas', desc: 'Sustainable living community', image: '' },
]

export default function Projects(){
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p,i)=>(
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden shadow-lg">
            <div className="h-44 bg-gray-100 flex items-center justify-center text-gray-400">Image placeholder</div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
