import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, Volume2 } from 'lucide-react';

const projects = [
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  
  {
    title: "Nike Commercial",
    description: "Dynamic voice-over for Nike's latest running shoe campaign.",
    audioUrl: "https://example.com/audio2.mp3",
    category: "Commercial",
    duration: "0:30"
  },

  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
 
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },

  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },
  {
    title: "National Geographic Documentary",
    description: "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "https://example.com/audio1.mp3",
    category: "Documentary",
    duration: "2:30"
  },


];

export default function VoiceOver() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="voice-over" className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-purple-950 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Voice-Over Work</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.category}</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                      <Play className="w-5 h-5 text-blue-400" />
                    </button>
                    <Volume2 className="w-5 h-5 text-gray-400" />
                    <div className="w-32 h-1 bg-gray-700 rounded-full">
                      <div className="w-1/3 h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{project.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}