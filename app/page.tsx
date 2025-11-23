'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const characters = [
  {
    id: 'bob-esponja',
    name: 'Bob Esponja',
    description: 'El optimista habitante de Fondo de Bikini',
    colors: ['#FFFF00', '#0077BE', '#8B4513'],
    gradient: 'from-yellow-400 via-blue-500 to-yellow-600',
    icon: '🧽',
  },
  {
    id: 'doctora-juguetes',
    name: 'Doctora Juguetes',
    description: 'La niña que cura a sus juguetes',
    colors: ['#FF69B4', '#9370DB', '#FFFFFF'],
    gradient: 'from-pink-400 via-purple-400 to-pink-600',
    icon: '🩺',
  },
  {
    id: 'superman',
    name: 'Superman',
    description: 'El Hombre de Acero de Metrópolis',
    colors: ['#DC143C', '#0047AB', '#FFD700'],
    gradient: 'from-red-600 via-blue-700 to-red-800',
    icon: '🦸',
  },
  {
    id: 'mario-bros',
    name: 'Mario Bros',
    description: 'El fontanero más famoso del Reino Champiñón',
    colors: ['#E52521', '#049CD8', '#FBD000'],
    gradient: 'from-red-500 via-blue-500 to-yellow-500',
    icon: '🍄',
  },
  {
    id: 'mickey-mouse',
    name: 'Mickey Mouse',
    description: 'El ratón más icónico de Disney',
    colors: ['#000000', '#FF0000', '#FFE302'],
    gradient: 'from-black via-red-600 to-yellow-400',
    icon: '🐭',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo animado con estrellas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header animado */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Web de Alba
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Descubre el mundo mágico de tus personajes favoritos
          </motion.p>
        </motion.div>

        {/* Grid de personajes */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              variants={item}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link href={`/${character.id}`}>
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${character.gradient} p-[2px]`}>
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-gray-900/70">
                    {/* Icono del personaje */}
                    <motion.div
                      className="text-8xl mb-4 text-center"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {character.icon}
                    </motion.div>

                    {/* Nombre */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white text-center">
                      {character.name}
                    </h2>

                    {/* Descripción */}
                    <p className="text-gray-300 text-center mb-6">
                      {character.description}
                    </p>

                    {/* Paleta de colores */}
                    <div className="flex justify-center gap-2 mb-4">
                      {character.colors.map((color, i) => (
                        <motion.div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white/30"
                          style={{ backgroundColor: color }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </div>

                    {/* Botón explorar */}
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white font-semibold transition-all">
                        Explorar →
                      </span>
                    </motion.div>

                    {/* Efecto de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${character.colors[0]}20, transparent 70%)`,
                      }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer decorativo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center text-gray-400"
        >
          <p className="text-sm">
            Sitio web educativo dedicado a personajes de series animadas y superhéroes
          </p>
        </motion.div>
      </main>
    </div>
  );
}
