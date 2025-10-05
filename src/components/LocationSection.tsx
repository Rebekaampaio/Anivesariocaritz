import { Card } from './ui/card';
import eventLayoutImage from 'figma:asset/be34ff53b9c61a09add2b56b756e0d005bea822e.png';

/**
 * Componente da seção de localização com iframe do Google Maps e layout do evento
 */
export function LocationSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1234567890123!2d-47.470404!3d-5.5290675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c55f0ac325bfed%3A0x8f072f4cce2c961a!2sMarginal%20BR-010%2C%20100%20-%20Jardim%20Sao%20Luis%2C%20Imperatriz%20-%20MA%2C%2065913-015!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr";

  return (
    <Card className="p-6 mb-8 bg-gray-900 border-gray-700">
      <h2 className="text-2xl font-bold text-red-500 mb-6">
        📍 Localização e Layout do Evento
      </h2>
      
      <div className="text-gray-100 mb-6">
        <p><strong>Endereço:</strong></p>
        <p>Marginal BR-010, 100 - Jardim São Luís</p>
        <p>Imperatriz - MA, 65913-015</p>
        <p>Estacionamento do Shopping Imperial</p>
      </div>

      {/* Informações sobre estacionamento e pagamento */}
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">
          🅿️ Informações Importantes
        </h3>
        <div className="space-y-2 text-blue-300">
          <p>
            <strong>Estacionamento:</strong> Será utilizado o estacionamento próprio do Shopping Imperial durante todo o evento.
          </p>
          <p>
            <strong>Pagamento:</strong> A taxa de entrada será cobrada apenas para veículos participantes da exposição (carros e motos). O estacionamento regular do shopping permanece gratuito para visitantes.
          </p>
          <p>
            <strong>Duração:</strong> O evento acontece das 16h até o final, com acesso liberado durante todo o período.
          </p>
        </div>
      </div>

      {/* Layout do evento */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">
          🎯 Como será organizado o espaço
        </h3>
        <div className="relative rounded-lg overflow-hidden border border-gray-700">
          <img
            src={eventLayoutImage}
            alt="Layout do evento - organização do estacionamento"
            className="w-full h-auto object-contain bg-gray-800"
          />
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Visualização da organização do estacionamento com áreas demarcadas para exposição de veículos, entrada, DJ e circulação.
        </p>
      </div>

      {/* Container responsivo para o mapa */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-3">
          🗺️ Localização no mapa
        </h3>
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gray-700">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Localização do evento - Shopping Imperial"
          ></iframe>
        </div>
      </div>
      
      {/* Link para abrir no Google Maps */}
      <div className="mt-4">
        <a
          href="https://www.google.com/maps/dir//Marginal+BR-010,+100+-+Jardim+Sao+Luis,+Imperatriz+-+MA,+65913-015/@-5.5371011,-47.5733443,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x92c55f0ac325bfed:0x8f072f4cce2c961a!2m2!1d-47.470404!2d-5.5290675?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium"
        >
          <span>🗺️</span>
          <span>Abrir no Google Maps para navegação</span>
        </a>
      </div>
    </Card>
  );
}