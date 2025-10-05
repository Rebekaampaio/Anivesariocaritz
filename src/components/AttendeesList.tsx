import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface Attendee {
  id: string;
  name: string;
  vehicle: string;
  whatsapp: string;
  vehicleType: 'car' | 'motorcycle' | 'pedestrian';
  timestamp: string;
}

interface AttendeesListProps {
  attendees: Attendee[];
}

/**
 * Componente que exibe a lista de participantes confirmados
 */
export function AttendeesList({ attendees }: AttendeesListProps) {
  if (attendees.length === 0) {
    return (
      <Card className="p-6 mb-8 bg-gray-900 border-gray-700">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          👥 Lista de Confirmados
        </h2>
        <p className="text-gray-400 text-center py-8">
          Nenhuma confirmação ainda. Seja o primeiro a confirmar sua presença!
        </p>
      </Card>
    );
  }

  // Função para obter o ícone do tipo de veículo
  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'car': return '🚗';
      case 'motorcycle': return '🏍️';
      case 'pedestrian': return '🚶';
      default: return '❓';
    }
  };

  // Função para obter a cor do badge baseado no tipo de veículo
  const getVehicleBadgeVariant = (type: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (type) {
      case 'car': return 'destructive';
      case 'motorcycle': return 'secondary';
      case 'pedestrian': return 'outline';
      default: return 'default';
    }
  };

  // Função para formatar o tipo de veículo
  const formatVehicleType = (type: string) => {
    switch (type) {
      case 'car': return 'Carro';
      case 'motorcycle': return 'Moto';
      case 'pedestrian': return 'A pé';
      default: return type;
    }
  };

  // Contar participantes por tipo
  const carCount = attendees.filter(a => a.vehicleType === 'car').length;
  const motorcycleCount = attendees.filter(a => a.vehicleType === 'motorcycle').length;
  const pedestrianCount = attendees.filter(a => a.vehicleType === 'pedestrian').length;

  return (
    <Card className="p-6 mb-8 bg-gray-900 border-gray-700">
      <h2 className="text-2xl font-bold text-red-500 mb-4">
        👥 Lista de Confirmados ({attendees.length})
      </h2>
      
      {/* Estatísticas rápidas */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-red-900/20 rounded-lg border border-red-500/30">
          <div className="text-2xl">🚗</div>
          <div className="text-red-400 font-bold">{carCount}</div>
          <div className="text-xs text-gray-400">Carros</div>
        </div>
        <div className="text-center p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <div className="text-2xl">🏍️</div>
          <div className="text-blue-400 font-bold">{motorcycleCount}</div>
          <div className="text-xs text-gray-400">Motos</div>
        </div>
        <div className="text-center p-3 bg-green-900/20 rounded-lg border border-green-500/30">
          <div className="text-2xl">🚶</div>
          <div className="text-green-400 font-bold">{pedestrianCount}</div>
          <div className="text-xs text-gray-400">A pé</div>
        </div>
      </div>

      {/* Lista de participantes */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {attendees.map((attendee, index) => (
          <div
            key={attendee.id}
            className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                {getVehicleIcon(attendee.vehicleType)}
              </span>
              <div>
                <div className="text-white font-medium">
                  {index + 1}. {attendee.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {attendee.vehicle}
                </div>
              </div>
            </div>
            <Badge variant={getVehicleBadgeVariant(attendee.vehicleType)}>
              {formatVehicleType(attendee.vehicleType)}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}