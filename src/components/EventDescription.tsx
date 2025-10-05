import { Card } from './ui/card';

/**
 * Componente com a descrição completa do evento e valores das entradas
 */
export function EventDescription() {
  return (
    <Card className="p-6 mb-8 bg-gray-900 border-gray-700">
      <h2 className="text-2xl font-bold text-red-500 mb-4">
        Sobre o Evento
      </h2>
      
      <div className="text-gray-100 space-y-4">
        <p>
          Prepare-se para um dia especial! 🎉
        </p>
        
        <p>
          No dia 16 de novembro de 2025, às 16h, vamos celebrar o aniversário da página Car Itz com um grande encontro automotivo.
        </p>
        
        <p>
          Será uma tarde de muita paixão por quatro rodas, reunindo carros antigos, modificados, rebaixados e projetos exclusivos, tudo em um só lugar.
        </p>
        
        <p>
          Além da exposição, vai rolar aquele clima de confraternização, boas conversas, fotos incríveis e a oportunidade de conhecer gente que compartilha o mesmo amor pelo automobilismo.
        </p>
        
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-6">
          <h3 className="text-lg font-bold text-red-400 mb-3">
            📍 Local e Valores
          </h3>
          <div className="space-y-2">
            <p><strong>Local:</strong> Estacionamento do Shopping Imperial</p>
            <div className="space-y-1">
              <p><strong>Entrada:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>💰 Carro: R$ 10</li>
                <li>🏍️ Moto: R$ 5</li>
                <li>🚶 Pedestres: Grátis</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="text-red-400 font-semibold">
          Não fique de fora desse marco! Garanta sua presença, traga seu carro ou moto e venha comemorar com a gente esse momento histórico da Car Itz.
        </p>
      </div>
    </Card>
  );
}