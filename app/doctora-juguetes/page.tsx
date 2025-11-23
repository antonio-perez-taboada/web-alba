'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DoctoraJuguetes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-pink-400">
      {/* Corazones flotantes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            💖
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
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            🩺
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-purple-600 drop-shadow-lg mb-4">
            Doctora Juguetes
          </h1>
          <p className="text-2xl text-white font-semibold drop-shadow">
            La niña que cura a sus juguetes con amor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              👧 Sobre Doctora Juguetes
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-pink-600">Nombre:</strong> Dottie
                McStuffins
              </p>
              <p>
                <strong className="text-pink-600">Edad:</strong> 6 años
              </p>
              <p>
                <strong className="text-pink-600">Habilidad especial:</strong>{' '}
                Puede darle vida a sus juguetes
              </p>
              <p>
                <strong className="text-pink-600">Clínica:</strong> Clínica
                para Juguetes
              </p>
              <p>
                <strong className="text-pink-600">Herramienta:</strong>{' '}
                Estetoscopio mágico
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-purple-600 mb-6">
              🎯 Valores que Enseña
            </h2>
            <ul className="space-y-3 text-gray-700">
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">❤️</span>
                <span>Empatía y compasión</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">🩹</span>
                <span>Cuidado de la salud</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">👥</span>
                <span>Trabajo en equipo</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">🌟</span>
                <span>Responsabilidad</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">💪</span>
                <span>Valentía ante los problemas</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              🧸 Juguetes Amigos
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Stuffy', emoji: '🐉', desc: 'Dragón valiente' },
                { name: 'Hallie', emoji: '🦛', desc: 'Hipopótamo enfermera' },
                { name: 'Lambie', emoji: '🐑', desc: 'Oveja cariñosa' },
                { name: 'Chilly', emoji: '⛄', desc: 'Muñeco de nieve' },
              ].map((toy, i) => (
                <motion.div
                  key={toy.name}
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl cursor-pointer"
                >
                  <span className="text-3xl">{toy.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-700">{toy.name}</p>
                    <p className="text-sm text-gray-600">{toy.desc}</p>
                  </div>
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
              📚 Lecciones de Salud
            </h2>
            <div className="space-y-4 text-gray-700">
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-pink-50 rounded-xl"
              >
                🏥 La importancia de las revisiones médicas regulares
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-purple-50 rounded-xl"
              >
                🦷 Cómo cuidar los dientes cepillándolos correctamente
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-pink-50 rounded-xl"
              >
                🤸 La importancia del ejercicio y una vida activa
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-purple-50 rounded-xl"
              >
                🥗 Alimentación saludable y balanceada
              </motion.p>
            </div>
          </motion.div>
        </div>

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
              { color: '#FF69B4', name: 'Rosa' },
              { color: '#9370DB', name: 'Morado' },
              { color: '#FFFFFF', name: 'Blanco' },
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
