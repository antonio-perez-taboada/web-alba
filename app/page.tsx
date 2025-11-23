'use client'

import { useState } from 'react'

export default function Home() {
  const [coins, setCoins] = useState(0)

  const characters = [
    {
      name: 'Mario',
      image: 'https://i.imgur.com/5qzXHjf.png',
      description: 'El valiente fontanero héroe del Reino Champiñón',
      color: 'bg-red-500',
    },
    {
      name: 'Luigi',
      image: 'https://i.imgur.com/DKw7XxD.png',
      description: 'El hermano de Mario, siempre listo para la aventura',
      color: 'bg-green-500',
    },
    {
      name: 'Princesa Peach',
      image: 'https://i.imgur.com/ZdYCiGl.png',
      description: 'La amable gobernante del Reino Champiñón',
      color: 'bg-pink-500',
    },
    {
      name: 'Yoshi',
      image: 'https://i.imgur.com/W2gXB8t.png',
      description: 'El fiel compañero dinosaurio de Mario',
      color: 'bg-lime-500',
    },
  ]

  const powerUps = [
    { name: 'Super Champiñón', icon: '🍄', effect: '+1 Vida' },
    { name: 'Flor de Fuego', icon: '🌺', effect: 'Lanzar bolas de fuego' },
    { name: 'Super Estrella', icon: '⭐', effect: 'Invencibilidad' },
    { name: 'Hoja', icon: '🍃', effect: 'Volar con cola' },
  ]

  return (
    <main className="min-h-screen">
      {/* Clouds decoration */}
      <div className="fixed top-10 left-10 opacity-80 animate-float">
        <div className="text-6xl">☁️</div>
      </div>
      <div className="fixed top-20 right-20 opacity-80 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-6xl">☁️</div>
      </div>
      <div className="fixed top-40 left-1/3 opacity-80 animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-5xl">☁️</div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <div className="inline-block mb-6">
            <h1 className="text-7xl md:text-9xl font-bold text-white drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] animate-bounce-mario">
              SUPER MARIO BROS
            </h1>
            <div className="flex justify-center gap-4 mt-4">
              <span className="text-3xl animate-bounce-mario" style={{ animationDelay: '0.1s' }}>🍄</span>
              <span className="text-3xl animate-bounce-mario" style={{ animationDelay: '0.2s' }}>⭐</span>
              <span className="text-3xl animate-bounce-mario" style={{ animationDelay: '0.3s' }}>🌺</span>
            </div>
          </div>

          {/* Coin Counter */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="question-block px-8 py-4 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-5xl animate-coin-spin">🪙</span>
                <span className="text-4xl font-bold text-white drop-shadow-lg">x {coins}</span>
              </div>
            </div>
            <button
              onClick={() => setCoins(coins + 1)}
              className="question-block hover:scale-110 transition-transform px-6 py-4 rounded-lg text-4xl cursor-pointer active:scale-95"
              aria-label="Recolectar moneda"
            >
              ❓
            </button>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="brick-block rounded-3xl p-8 md:p-12 mb-12 mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-white text-center mb-6 drop-shadow-lg">
            🏰 ¡Bienvenido al Reino Champiñón! 🏰
          </h2>
          <p className="text-2xl text-white text-center leading-relaxed drop-shadow-md">
            Únete a Mario y sus amigos en una aventura épica para rescatar a la Princesa Peach
            de las garras de Bowser. ¡Salta, corre y recolecta monedas en el viaje de tu vida!
          </p>
        </section>

        {/* Characters Grid */}
        <section className="mb-12">
          <h2 className="text-5xl font-bold text-center text-white mb-8 drop-shadow-lg">
            👥 Personajes Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characters.map((character, index) => (
              <div
                key={character.name}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer border-8 border-yellow-400"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${character.color} p-6 relative`}>
                  <div className="w-full h-48 flex items-center justify-center">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-40 h-40 object-contain drop-shadow-2xl hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-bold mb-3 text-gray-800">{character.name}</h3>
                  <p className="text-gray-600 text-lg">{character.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Power-ups Section */}
        <section className="mb-12">
          <h2 className="text-5xl font-bold text-center text-white mb-8 drop-shadow-lg">
            ⚡ Power-Ups Especiales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {powerUps.map((powerUp, index) => (
              <div
                key={powerUp.name}
                className="question-block rounded-2xl p-6 text-center hover:scale-110 transition-transform cursor-pointer shadow-2xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl mb-4 animate-bounce-mario">{powerUp.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{powerUp.name}</h3>
                <p className="text-white text-lg drop-shadow">{powerUp.effect}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Game Info */}
        <section className="max-w-4xl mx-auto">
          <div className="mario-pipe rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
              🎮 Sobre el Juego
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-white text-xl">
              <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
                <h3 className="text-3xl font-bold mb-4">📖 Historia</h3>
                <p>
                  Super Mario Bros es un clásico videojuego de plataformas donde Mario debe
                  atravesar el Reino Champiñón para rescatar a la Princesa Peach del malvado Bowser.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
                <h3 className="text-3xl font-bold mb-4">🎯 Objetivo</h3>
                <p>
                  Supera 8 mundos llenos de enemigos, obstáculos y secretos. Recolecta monedas,
                  power-ups y encuentra caminos secretos para completar tu aventura.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
                <h3 className="text-3xl font-bold mb-4">👾 Enemigos</h3>
                <p>
                  Enfrenta a Goombas, Koopa Troopas, Piranha Plants y muchos otros enemigos
                  mientras avanzas por cada nivel del juego.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
                <h3 className="text-3xl font-bold mb-4">🏆 Logros</h3>
                <p>
                  Encuentra todas las monedas secretas, completa niveles sin recibir daño y
                  descubre las warp zones para desbloquear todo el contenido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 pb-8">
          <div className="brick-block inline-block rounded-2xl px-8 py-6">
            <p className="text-2xl text-white font-bold drop-shadow-lg">
              🎮 ¡It's-a me, Mario! 🎮
            </p>
            <p className="text-white text-lg mt-2 drop-shadow">
              © Nintendo - Super Mario Bros
            </p>
          </div>
        </footer>
      </div>

      {/* Ground decoration */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-green-600 to-green-800 border-t-8 border-yellow-600 -z-10"></div>
    </main>
  )
}
