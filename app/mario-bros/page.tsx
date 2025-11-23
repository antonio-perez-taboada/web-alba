'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MarioBros() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-blue-500 to-green-500">
      {/* Monedas flotantes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🪙
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white rounded-full font-semibold text-gray-800 shadow-lg transition-all hover:scale-105"
          >
            ← Volver
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            className="text-9xl mb-6"
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🍄
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
            MARIO BROS
          </h1>
          <p className="text-2xl text-yellow-300 font-bold drop-shadow">
            ¡El fontanero más famoso del mundo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              👨‍🔧 Información
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-red-600">Nombre completo:</strong> Mario
              </p>
              <p>
                <strong className="text-red-600">Profesión:</strong> Fontanero
              </p>
              <p>
                <strong className="text-red-600">Hermano:</strong> Luigi
              </p>
              <p>
                <strong className="text-red-600">Princesa:</strong> Peach
              </p>
              <p>
                <strong className="text-red-600">Enemigo:</strong> Bowser
              </p>
              <p>
                <strong className="text-red-600">Reino:</strong> Reino Champiñón
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              ⭐ Power-Ups
            </h2>
            <ul className="space-y-3 text-gray-700">
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
              >
                <span className="text-2xl">🍄</span>
                <span>Super Champiñón - Crecer de tamaño</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
              >
                <span className="text-2xl">🔥</span>
                <span>Flor de Fuego - Lanzar bolas de fuego</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg"
              >
                <span className="text-2xl">⭐</span>
                <span>Estrella - Invencibilidad temporal</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
              >
                <span className="text-2xl">🍃</span>
                <span>Hoja - Volar como mapache</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
              >
                <span className="text-2xl">🐱</span>
                <span>Campana - Traje de gato</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              🎮 Juegos Destacados
            </h2>
            <div className="space-y-4">
              {[
                { game: 'Super Mario Bros', year: '1985', icon: '🎮' },
                { game: 'Super Mario 64', year: '1996', icon: '🌟' },
                { game: 'Super Mario Galaxy', year: '2007', icon: '🌌' },
                { game: 'Super Mario Odyssey', year: '2017', icon: '🎩' },
                { game: 'Super Mario Wonder', year: '2023', icon: '✨' },
              ].map((item, i) => (
                <motion.div
                  key={item.game}
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-red-100 to-blue-100 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-gray-700">
                      {item.game}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-600">
                    {item.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              👥 Personajes
            </h2>
            <div className="space-y-3">
              {[
                { name: 'Luigi', emoji: '💚', desc: 'Hermano de Mario' },
                { name: 'Peach', emoji: '👑', desc: 'Princesa del Reino' },
                { name: 'Toad', emoji: '🍄', desc: 'Sirviente leal' },
                { name: 'Yoshi', emoji: '🦖', desc: 'Dinosaurio amigo' },
                { name: 'Bowser', emoji: '🐲', desc: 'Rey de los Koopas' },
              ].map((char, i) => (
                <motion.div
                  key={char.name}
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-100 to-red-100 rounded-xl"
                >
                  <span className="text-3xl">{char.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-700">{char.name}</p>
                    <p className="text-sm text-gray-600">{char.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
            🎨 Paleta de Colores
          </h3>
          <div className="flex justify-center gap-6">
            {[
              { color: '#E52521', name: 'Rojo Mario' },
              { color: '#049CD8', name: 'Azul' },
              { color: '#FBD000', name: 'Amarillo Moneda' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 rounded-full border-4 border-white shadow-2xl mx-auto mb-2"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-white font-semibold drop-shadow-lg">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.p
            className="text-4xl font-bold text-yellow-300 drop-shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            ¡Wahoo! Let's-a-go!
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
