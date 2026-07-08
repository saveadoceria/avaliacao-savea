'use client';
import { useState } from 'react';

export default function Avaliacao() {
  const [notas, setNotas] = useState({ atendimento: 0, produto: 0, entrega: 0 });
  const [comentario, setComentario] = useState('');

  const renderEstrelas = (categoria: 'atendimento' | 'produto' | 'entrega') => (
    <div className="flex gap-2 justify-center my-4">
      {[1, 2, 3, 4, 5].map((estrela) => (
        <button
          key={estrela}
          onClick={() => setNotas(prev => ({ ...prev, [categoria]: estrela }))}
          className={`text-2xl transition-all ${notas[categoria] >= estrela ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#f3eae1', fontFamily: 'sans-serif' }}>
      <div className="w-full max-w-lg mx-auto">
        
        {/* LOGO E TOPO */}
        <div className="text-center pb-6">
          <div className="flex justify-center mb-2">
            <img src="/logo-savea.png" alt="Sávea Doceria" className="h-20 object-contain" />
          </div>
          <p className="text-xs italic tracking-wide" style={{ color: '#606246' }}>Sua opinião é muito importante para nós. ♡</p>
        </div>

        {/* CARD BRANCO PRINCIPAL */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 text-gray-800">
          <div className="text-center mb-6">
            <h1 className="text-xl font-medium tracking-tight" style={{ color: '#444631' }}>Avalie seu pedido</h1>
            <p className="text-sm text-gray-500 mt-1">Como foi a experiência?</p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-center">Atendimento</p>
              {renderEstrelas('atendimento')}
            </div>
            <div>
              <p className="text-sm font-semibold text-center">Produto</p>
              {renderEstrelas('produto')}
            </div>
            <div>
              <p className="text-sm font-semibold text-center">Entrega</p>
              {renderEstrelas('entrega')}
            </div>
            <div>
              <p className="text-sm font-semibold text-center mb-2">Comentário (opcional)</p>
              <textarea 
                className="w-full p-3 border border-gray-200 rounded-lg text-sm"
                rows={3}
                placeholder="Conte-nos o que achou..."
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}