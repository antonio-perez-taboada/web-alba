'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BobEsponja() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-yellow-300 to-blue-600">
      {/* Burbujas animadas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
            }}
            animate={{
              y: [-20, -window.innerHeight - 100],
              x: [0, Math.random() * 100 - 50],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Botón volver */}
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

        {/* Header del personaje */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            className="text-9xl mb-6"
            animate={{
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            🧽
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 drop-shadow-lg mb-4">
            Bob Esponja
          </h1>
          <p className="text-2xl text-white font-semibold drop-shadow">
            El habitante más optimista de Fondo de Bikini
          </p>
        </motion.div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Tarjeta de información */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-yellow-600 mb-6">
              📋 Información
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-yellow-600">Nombre completo:</strong>{' '}
                Bob Esponja
              </p>
              <p>
                <strong className="text-yellow-600">Hogar:</strong> Piña en
                Fondo de Bikini
              </p>
              <p>
                <strong className="text-yellow-600">Trabajo:</strong> Cocinero
                en el Crustáceo Crujiente
              </p>
              <p>
                <strong className="text-yellow-600">Mejor amigo:</strong>{' '}
                Patricio Estrella
              </p>
              <p>
                <strong className="text-yellow-600">Mascota:</strong> Gary el
                caracol
              </p>
            </div>
          </motion.div>

          {/* Tarjeta de características */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              ⭐ Características
            </h2>
            <ul className="space-y-3 text-gray-700">
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">😊</span>
                <span>Eternamente optimista</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">🍔</span>
                <span>Experto en hacer Cangreburgers</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">💪</span>
                <span>Maestro en karate submarino</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">🎵</span>
                <span>Ama las pompas de jabón</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">🌊</span>
                <span>Vive en una piña bajo el mar</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Curiosidades */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              🎯 Curiosidades
            </h2>
            <div className="space-y-4 text-gray-700">
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-yellow-50 rounded-xl"
              >
                📺 La serie debutó en 1999 y se ha convertido en un fenómeno
                cultural mundial
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-blue-50 rounded-xl"
              >
                🎨 Su creador es Stephen Hillenburg, un biólogo marino
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-pink-50 rounded-xl"
              >
                🏆 Ha ganado múltiples premios Emmy
              </motion.p>
            </div>
          </motion.div>

          {/* Personajes relacionados */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              👥 Amigos y Vecinos
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Patricio', emoji: '⭐', color: 'bg-pink-100' },
                { name: 'Calamardo', emoji: '🐙', color: 'bg-teal-100' },
                { name: 'Arenita', emoji: '🐿️', color: 'bg-orange-100' },
                { name: 'Don Cangrejo', emoji: '🦀', color: 'bg-red-100' },
                { name: 'Gary', emoji: '🐌', color: 'bg-blue-100' },
              ].map((friend, i) => (
                <motion.div
                  key={friend.name}
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`flex items-center gap-4 p-4 ${friend.color} rounded-xl cursor-pointer`}
                >
                  <span className="text-3xl">{friend.emoji}</span>
                  <span className="font-semibold text-gray-700">
                    {friend.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Paleta de colores */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6 drop-shadow">
            🎨 Paleta de Colores
          </h3>
          <div className="flex justify-center gap-6">
            {[
              { color: '#FFFF00', name: 'Amarillo' },
              { color: '#0077BE', name: 'Azul Océano' },
              { color: '#8B4513', name: 'Marrón' },
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
                <p className="text-white font-semibold drop-shadow">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
