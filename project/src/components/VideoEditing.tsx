import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Film, Award } from 'lucide-react';

const projects = [
  {
    title: "Brand Campaign",
    description: "A cinematic brand story featuring dynamic transitions and emotional storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "1:45",
    category: "Commercial"
  },
  {
    title: "Music Video",
    description: "Creative music video edit with synchronized visual effects and rhythm-based cuts.",
    thumbnail: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "3:30",
    category: "Music"
  }
];

export default function VideoEditing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="video-editing" className="min-h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Video Editing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                            <Play className="w-5 h-5 text-blue-400" />
                          </button>
                          <span className="text-sm text-gray-400">{project.duration}</span>
                        </div>
                        <span className="text-sm text-gray-400">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}