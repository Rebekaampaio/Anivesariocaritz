import anniversaryImage from 'figma:asset/cffb3e64fc55636ba3f7f4c1f57195e463206a35.png';

/**
 * Componente do banner principal do evento
 * Exibe as informações principais do evento sobre a imagem oficial do aniversário
 * com melhor visibilidade da imagem
 */
export function EventBanner() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg mb-8 bg-gray-900">
      {/* Imagem de fundo do aniversário 2 anos */}
      <img
        src={anniversaryImage}
        alt="Aniversário 2 Anos Car Itz"
        className="w-full h-full object-contain"
      />
      
      {/* Overlay muito sutil apenas nas bordas para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Conteúdo do banner - informações posicionadas na parte inferior esquerda */}
      <div className="absolute bottom-6 left-6">
        <div className="text-white p-4 bg-black/80 rounded-lg backdrop-blur-sm border border-red-500/30">
          <div className="space-y-1">
            <p className="flex items-center gap-2 text-sm">
              <span>📅</span>
              <span className="font-medium">16/11/2025</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <span>⏰</span>
              <span className="font-medium">16:00</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <span>📍</span>
              <span className="font-medium">Estacionamento Imperial Shopping</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}