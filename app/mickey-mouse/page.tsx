'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MickeyMouse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-600 to-yellow-400">
      {/* Orejas de Mickey flotantes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ⚫
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
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            🐭
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
            MICKEY MOUSE
          </h1>
          <p className="text-2xl text-yellow-300 font-bold drop-shadow">
            El ratón más icónico del mundo
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
              ℹ️ Información
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-red-600">Primera aparición:</strong> 1928
              </p>
              <p>
                <strong className="text-red-600">Debut:</strong> Steamboat
                Willie
              </p>
              <p>
                <strong className="text-red-600">Creador:</strong> Walt Disney
              </p>
              <p>
                <strong className="text-red-600">Novia:</strong> Minnie Mouse
              </p>
              <p>
                <strong className="text-red-600">Mascota:</strong> Pluto
              </p>
              <p>
                <strong className="text-red-600">Hogar:</strong> Mouseton
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-black mb-6">
              🌟 Características
            </h2>
            <ul className="space-y-3 text-gray-700">
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
              >
                <span className="text-2xl">😄</span>
                <span>Siempre alegre y optimista</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg"
              >
                <span className="text-2xl">🎭</span>
                <span>Personalidad carismática</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-black/5 rounded-lg"
              >
                <span className="text-2xl">👔</span>
                <span>Icónicos pantalones rojos</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
              >
                <span className="text-2xl">🧤</span>
                <span>Guantes blancos característicos</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg"
              >
                <span className="text-2xl">👟</span>
                <span>Grandes zapatos amarillos</span>
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
              📺 Historia y Evolución
            </h2>
            <div className="space-y-4 text-gray-700">
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-black/5 rounded-xl"
              >
                🎬 Debutó en 1928 en el cortometraje "Steamboat Willie", el
                primer dibujo animado con sonido sincronizado
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-red-50 rounded-xl"
              >
                🎨 Su diseño ha evolucionado a lo largo de los años, pero
                siempre mantiene sus orejas redondas características
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-yellow-50 rounded-xl"
              >
                ⭐ Se convirtió en el símbolo de The Walt Disney Company
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-black/5 rounded-xl"
              >
                🌍 Es uno de los personajes más reconocidos del mundo
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-black mb-6">
              👨‍👩‍👧‍👦 Familia y Amigos
            </h2>
            <div className="space-y-3">
              {[
                { name: 'Minnie Mouse', emoji: '🎀', desc: 'Su novia' },
                { name: 'Pluto', emoji: '🐕', desc: 'Su mascota fiel' },
                { name: 'Donald Duck', emoji: '🦆', desc: 'Mejor amigo' },
                { name: 'Goofy', emoji: '🐶', desc: 'Compañero de aventuras' },
                { name: 'Daisy Duck', emoji: '🦢', desc: 'Amiga' },
              ].map((friend, i) => (
                <motion.div
                  key={friend.name}
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-100 to-yellow-100 rounded-xl"
                >
                  <span className="text-3xl">{friend.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-700">{friend.name}</p>
                    <p className="text-sm text-gray-600">{friend.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Curiosidades especiales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 max-w-6xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
              🎯 Curiosidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl"
              >
                <p className="font-semibold text-gray-700 mb-2">
                  🌟 Estrella del Paseo de la Fama
                </p>
                <p className="text-sm text-gray-600">
                  Mickey tiene su propia estrella en el Paseo de la Fama de
                  Hollywood
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl"
              >
                <p className="font-semibold text-gray-700 mb-2">
                  🎤 Voz Original
                </p>
                <p className="text-sm text-gray-600">
                  Walt Disney fue la voz original de Mickey durante casi 20
                  años
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-black/5 to-red-50 rounded-xl"
              >
                <p className="font-semibold text-gray-700 mb-2">🏰 Parques</p>
                <p className="text-sm text-gray-600">
                  Es el anfitrión de los parques Disney en todo el mundo
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-red-50 to-black/5 rounded-xl"
              >
                <p className="font-semibold text-gray-700 mb-2">🏆 Premios</p>
                <p className="text-sm text-gray-600">
                  Ha ganado un Oscar honorífico y múltiples premios
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Paleta de colores */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
            🎨 Paleta de Colores
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { color: '#000000', name: 'Negro' },
              { color: '#FF0000', name: 'Rojo' },
              { color: '#FFE302', name: 'Amarillo' },
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
                <p className="text-white font-semibold drop-shadow-lg">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frase icónica */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-center"
        >
          <motion.p
            className="text-4xl font-bold text-yellow-300 drop-shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            "¡Oh, boy!"
          </motion.p>
          <p className="text-xl text-white mt-4 drop-shadow">
            - Frase característica de Mickey
          </p>
        </motion.div>
      </main>
    </div>
  );
}
