import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import qrCodeImage from '../assets/qrCodeImage.png';

interface Attendee {
  id: string;
  name: string;
  vehicle: string;
  whatsapp: string;
  vehicleType: 'car' | 'motorcycle' | 'pedestrian';
  timestamp: string;
}

interface PaymentSectionProps {
  attendee: Attendee | null;
  onPaymentComplete: () => void;
}

/**
 * Componente da seção de pagamento PIX
 * Exibe informações de pagamento e QR Code gerado
 */
export function PaymentSection({ attendee, onPaymentComplete }: PaymentSectionProps) {
  const [qrCodeData, setQrCodeData] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  // Chave PIX específica do evento Car Itz
  const pixKey = 'cariitz.eventos@gmail.com';
  const pixCode = '00020101021126470014br.gov.bcb.pix0125cariitz.eventos@gmail.com5204000053039865802BR5923FRANCISCO G DE S ARAUJO6010IMPERATRIZ62070503***6304AA01';
  
  // Obter valor baseado no tipo de veículo
  const getPaymentAmount = () => {
    if (!attendee) return '0.00';
    switch (attendee.vehicleType) {
      case 'car': return '10.00';
      case 'motorcycle': return '5.00';
      default: return '0.00';
    }
  };

  // Usar a chave PIX específica fornecida
  useEffect(() => {
    if (attendee && attendee.vehicleType !== 'pedestrian') {
      // Usar o código PIX específico fornecido pelo usuário
      setQrCodeData(pixCode);
    }
  }, [attendee]);

  // Usar o QR Code específico fornecido
  const getQrCodeUrl = () => {
    return qrCodeImage;
  };

  // Confirmar pagamento (simulação)
  const handlePaymentConfirmation = () => {
    setPaymentConfirmed(true);
    setTimeout(() => {
      onPaymentComplete();
    }, 2000);
  };

  // Copiar código PIX para clipboard
  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      alert('Código PIX copiado para a área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar código PIX:', err);
      alert('Erro ao copiar código PIX. Tente novamente.');
    }
  };

  if (!attendee || attendee.vehicleType === 'pedestrian') {
    return null;
  }

  if (paymentConfirmed) {
    return (
      <Card className="p-6 mb-8 bg-green-900/20 border-green-500/30">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">
            Pagamento Confirmado!
          </h2>
          <p className="text-green-300">
            Processando confirmação...
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 mb-8 bg-gray-900 border-gray-700">
      <h2 className="text-2xl font-bold text-red-500 mb-4">
        💳 Pagamento PIX
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Informações de pagamento */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Detalhes do Pagamento
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Participante:</strong> {attendee.name}</p>
              <p><strong>Veículo:</strong> {attendee.vehicle}</p>
              <p><strong>Tipo:</strong> {attendee.vehicleType === 'car' ? '🚗 Carro' : '🏍️ Moto'}</p>
              <p><strong>Valor:</strong> R$ {getPaymentAmount()}</p>
            </div>
          </div>

          {/* Chave PIX */}
          <div>
            <Label className="text-gray-200 mb-2 block">
              Chave PIX (E-mail)
            </Label>
            <div className="flex gap-2">
              <Input
                value={pixKey}
                readOnly
                className="bg-gray-800 border-gray-600 text-white text-sm"
              />
              <Button
                onClick={copyPixCode}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Copiar
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Ou copie o código PIX completo clicando em "Copiar"
            </p>
          </div>

          {/* Instruções */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-2">
              Como pagar:
            </h4>
            <ol className="text-sm text-blue-300 space-y-1">
              <li>1. Abra o app do seu banco</li>
              <li>2. Escaneie o QR Code ou use a chave PIX</li>
              <li>3. Confirme o valor: R$ {getPaymentAmount()}</li>
              <li>4. Realize o pagamento</li>
              <li>5. Clique em "Confirmar Pagamento"</li>
            </ol>
          </div>
        </div>

        {/* QR Code */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-4">
            QR Code PIX
          </h3>
          <div className="bg-white p-4 rounded-lg inline-block">
            <img
              src={getQrCodeUrl()}
              alt="QR Code PIX - Car Itz"
              className="w-64 h-64 mx-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Escaneie com seu app bancário
          </p>
          <p className="text-xs text-gray-500 mt-1">
            QR Code oficial do evento
          </p>
        </div>
      </div>

      {/* Botão de confirmação */}
      <div className="mt-6 text-center">
        <Button
          onClick={handlePaymentConfirmation}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3"
        >
          ✅ Confirmar Pagamento Realizado
        </Button>
        <p className="text-xs text-gray-500 mt-2">
          Clique apenas após realizar o pagamento
        </p>
      </div>
    </Card>
  );
}