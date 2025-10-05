import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Attendee {
  id: string;
  name: string;
  vehicle: string;
  whatsapp: string;
  vehicleType: 'car' | 'motorcycle' | 'pedestrian';
  timestamp: string;
}

interface ConfirmationFormProps {
  onAddAttendee: (attendee: Attendee) => void;
  onShowPayment: (attendee: Attendee) => void;
}

/**
 * Componente do formulário de confirmação de presença
 * Coleta nome, WhatsApp e tipo de veículo do participante
 */
export function ConfirmationForm({ onAddAttendee, onShowPayment }: ConfirmationFormProps) {
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [vehicleType, setVehicleType] = useState<'car' | 'motorcycle' | 'pedestrian'>('car');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formatar número de WhatsApp automaticamente
  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (XX) XXXXX-XXXX
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, (match, p1, p2, p3) => {
        let result = '';
        if (p1) result += `(${p1}`;
        if (p1.length === 2) result += ') ';
        if (p2) result += p2;
        if (p2.length === 5) result += '-';
        if (p3) result += p3;
        return result;
      });
    }
    return value;
  };

  // Lidar com mudança no campo WhatsApp
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };

  // Submeter o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !vehicle.trim() || !whatsapp.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    // Criar novo participante
    const newAttendee: Attendee = {
      id: Date.now().toString(),
      name: name.trim(),
      vehicle: vehicle.trim(),
      whatsapp: whatsapp.trim(),
      vehicleType,
      timestamp: new Date().toISOString()
    };

    // Adicionar à lista
    onAddAttendee(newAttendee);

    // Se não for pedestre, mostrar seção de pagamento
    if (vehicleType !== 'pedestrian') {
      onShowPayment(newAttendee);
    }

    // Limpar formulário
    setName('');
    setVehicle('');
    setWhatsapp('');
    setVehicleType('car');
    setIsSubmitting(false);
  };

  // Obter valor da entrada baseado no tipo de veículo
  const getEntryPrice = () => {
    switch (vehicleType) {
      case 'car': return 'R$ 10,00';
      case 'motorcycle': return 'R$ 5,00';
      case 'pedestrian': return 'Gratuito';
      default: return '';
    }
  };

  return (
    <Card className="p-6 mb-8 bg-gray-900 border-gray-700">
      <h2 className="text-2xl font-bold text-red-500 mb-4">
        ✅ Confirmar Presença
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Nome */}
        <div>
          <Label htmlFor="name" className="text-gray-200">
            Nome Completo *
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome completo"
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
            required
          />
        </div>

        {/* Campo Veículo */}
        <div>
          <Label htmlFor="vehicle" className="text-gray-200">
            Veículo *
          </Label>
          <Input
            id="vehicle"
            type="text"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            placeholder="Ex: Honda Civic, Yamaha MT-03, A pé..."
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
            required
          />
        </div>

        {/* Campo WhatsApp */}
        <div>
          <Label htmlFor="whatsapp" className="text-gray-200">
            WhatsApp *
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            value={whatsapp}
            onChange={handleWhatsAppChange}
            placeholder="(XX) XXXXX-XXXX"
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
            maxLength={15}
            required
          />
        </div>

        {/* Seletor de tipo de veículo */}
        <div>
          <Label className="text-gray-200">
            Como você vai ao evento? *
          </Label>
          <Select value={vehicleType} onValueChange={(value: 'car' | 'motorcycle' | 'pedestrian') => setVehicleType(value)}>
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-red-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="car" className="text-white hover:bg-gray-700">
                🚗 Carro - R$ 10,00
              </SelectItem>
              <SelectItem value="motorcycle" className="text-white hover:bg-gray-700">
                🏍️ Moto - R$ 5,00
              </SelectItem>
              <SelectItem value="pedestrian" className="text-white hover:bg-gray-700">
                🚶 A pé - Gratuito
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mostrar valor da entrada */}
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          <p className="text-red-400">
            <strong>Valor da entrada: {getEntryPrice()}</strong>
          </p>
        </div>

        {/* Botão de confirmação */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3"
        >
          {isSubmitting ? 'Confirmando...' : 'Confirmar Presença'}
        </Button>
      </form>
    </Card>
  );
}