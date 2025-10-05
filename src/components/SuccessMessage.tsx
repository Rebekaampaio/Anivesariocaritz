import { Card } from './ui/card';
import { Button } from './ui/button';

interface SuccessMessageProps {
  onClose: () => void;
}

/**
 * Componente de mensagem de sucesso após confirmação e pagamento
 */
export function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <Card className="p-8 mb-8 bg-green-900/20 border-green-500/30 text-center">
      <div className="space-y-4">
        {/* Ícone de sucesso */}
        <div className="text-8xl">🎉</div>
        
        {/* Título */}
        <h2 className="text-3xl font-bold text-green-400">
          Confirmação Realizada com Sucesso!
        </h2>
        
        {/* Mensagem */}
        <div className="text-green-300 space-y-2">
          <p className="text-lg">
            Sua presença foi confirmada para o evento!
          </p>
          <p>
            Você já está na lista de participantes do <strong>Aniversário Car Itz</strong>.
          </p>
        </div>
        
        {/* Detalhes do evento */}
        <div className="bg-green-800/20 border border-green-600/30 rounded-lg p-4 my-6">
          <h3 className="text-green-400 font-semibold mb-2">
            📅 Lembre-se:
          </h3>
          <div className="text-green-300 space-y-1">
            <p><strong>Data:</strong> 16/11/2025</p>
            <p><strong>Horário:</strong> 16:00</p>
            <p><strong>Local:</strong> Estacionamento Imperial Shopping</p>
          </div>
        </div>
        
        {/* Informações adicionais */}
        <div className="text-sm text-green-400 space-y-2">
          <p>🚗 Traga seu carro ou moto e aproveite a exposição!</p>
          <p>📸 Não esqueça de tirar muitas fotos!</p>
          <p>🤝 Venha conhecer outros apaixonados por automobilismo!</p>
        </div>
        
        {/* Botão de fechar */}
        <Button
          onClick={onClose}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 mt-6"
        >
          Continuar Navegando
        </Button>
      </div>
    </Card>
  );
}