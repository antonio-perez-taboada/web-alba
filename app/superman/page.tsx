'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Superman() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-red-700 to-blue-900">
      {/* Estrellas y rayos */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
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
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            🦸
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-red-500 to-yellow-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% auto' }}
            animate={{
              backgroundPosition: ['0% center', '200% center'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            SUPERMAN
          </motion.h1>
          <p className="text-2xl text-yellow-300 font-bold drop-shadow-lg">
            El Último Hijo de Krypton
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
              👤 Identidad
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-red-600">Nombre kryptoniano:</strong>{' '}
                Kal-El
              </p>
              <p>
                <strong className="text-red-600">Nombre humano:</strong> Clark
                Kent
              </p>
              <p>
                <strong className="text-red-600">Profesión:</strong>{' '}
                Reportero del Daily Planet
              </p>
              <p>
                <strong className="text-red-600">Ciudad:</strong> Metrópolis
              </p>
              <p>
                <strong className="text-red-600">Planeta de origen:</strong>{' '}
                Krypton
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
              💪 Superpoderes
            </h2>
            <ul className="space-y-3 text-gray-700">
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
              >
                <span className="text-2xl">✈️</span>
                <span>Vuelo supersónico</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
              >
                <span className="text-2xl">👁️</span>
                <span>Visión de rayos X y calórica</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg"
              >
                <span className="text-2xl">💪</span>
                <span>Súper fuerza</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
              >
                <span className="text-2xl">🛡️</span>
                <span>Invulnerabilidad</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
              >
                <span className="text-2xl">⚡</span>
                <span>Súper velocidad</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg"
              >
                <span className="text-2xl">🌬️</span>
                <span>Súper aliento</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              📖 Historia
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p whileHover={{ scale: 1.02 }} className="p-4 bg-blue-50 rounded-xl">
                🪐 Enviado desde el planeta Krypton antes de su destrucción
              </motion.p>
              <motion.p whileHover={{ scale: 1.02 }} className="p-4 bg-red-50 rounded-xl">
                👨‍🌾 Criado por los Kent en Kansas como Clark Kent
              </motion.p>
              <motion.p whileHover={{ scale: 1.02 }} className="p-4 bg-yellow-50 rounded-xl">
                ☀️ Sus poderes provienen de la energía del sol amarillo de la
                Tierra
              </motion.p>
              <motion.p whileHover={{ scale: 1.02 }} className="p-4 bg-blue-50 rounded-xl">
                🦸 Se convirtió en el mayor protector de la Tierra
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              👥 Aliados y Villanos
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-3">
                  Aliados
                </h3>
                {[
                  { name: 'Lois Lane', emoji: '📰' },
                  { name: 'Batman', emoji: '🦇' },
                  { name: 'Wonder Woman', emoji: '⚔️' },
                ].map((ally, i) => (
                  <motion.div
                    key={ally.name}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-lg mb-2"
                  >
                    <span className="text-2xl">{ally.emoji}</span>
                    <span className="font-semibold text-gray-700">
                      {ally.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-3 mt-4">
                  Villanos
                </h3>
                {[
                  { name: 'Lex Luthor', emoji: '🧪' },
                  { name: 'Doomsday', emoji: '💀' },
                  { name: 'Brainiac', emoji: '🤖' },
                ].map((villain, i) => (
                  <motion.div
                    key={villain.name}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-3 p-3 bg-red-50 rounded-lg mb-2"
                  >
                    <span className="text-2xl">{villain.emoji}</span>
                    <span className="font-semibold text-gray-700">
                      {villain.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-yellow-300 mb-6 drop-shadow-lg">
            🎨 Paleta de Colores
          </h3>
          <div className="flex justify-center gap-6">
            {[
              { color: '#DC143C', name: 'Rojo' },
              { color: '#0047AB', name: 'Azul' },
              { color: '#FFD700', name: 'Amarillo' },
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
            className="text-3xl font-bold text-yellow-300 italic drop-shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            "¡Verdad, Justicia y un Mundo Mejor!"
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
