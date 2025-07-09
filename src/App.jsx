import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans text-center flex flex-col items-center justify-center px-6">
      <img src="/logo-lenhita.webp" alt="Lenhita Logo" className="w-48 h-auto mb-6 animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Tradição e Inovação no Ramo</h1>
      <p className="text-lg md:text-xl italic text-lime-400 mb-2">Em breve unidade Osório</p>
      <p className="text-md md:text-lg max-w-xl text-gray-300 mb-6">
        Atendimento Balão • Encomendas para Eventos • Distribuição para Atacados e Rede de Postos
      </p>
      <a href="https://wa.me/5551999999999" target="_blank" className="bg-lime-500 text-black px-6 py-3 rounded-full text-lg hover:bg-lime-400 transition">
        Faça seu pedido antecipado 🍕
      </a>
    </div>
  )
}