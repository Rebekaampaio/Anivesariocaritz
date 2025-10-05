import { useState, useEffect } from "react";
import { EventBanner } from "./components/EventBanner";
import { EventDescription } from "./components/EventDescription";
import { LocationSection } from "./components/LocationSection";
import { ConfirmationForm } from "./components/ConfirmationForm";
import { AttendeesList } from "./components/AttendeesList";
import { PaymentSection } from "./components/PaymentSection";
import { SuccessMessage } from "./components/SuccessMessage";
import { SocialLinks } from "./components/SocialLinks";

// Interface para definir os dados de um participante
interface Attendee {
  id: string;
  name: string;
  vehicle: string;
  whatsapp: string;
  vehicleType: "car" | "motorcycle" | "pedestrian";
  timestamp: string;
}

/**
 * Componente principal da aplicação
 * Página de confirmação de presença para o evento Car Itz
 */
export default function App() {
  // Estados para gerenciar a aplicação
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [currentPaymentAttendee, setCurrentPaymentAttendee] =
    useState<Attendee | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] =
    useState(false);

  // Carregar dados salvos do localStorage na inicialização
  useEffect(() => {
    const savedAttendees = localStorage.getItem(
      "caritz-attendees",
    );
    if (savedAttendees) {
      try {
        const parsedAttendees = JSON.parse(savedAttendees);
        // Migrar dados antigos que não tinham o campo "vehicle"
        const migratedAttendees = parsedAttendees.map((attendee: any) => ({
          ...attendee,
          vehicle: attendee.vehicle || 'Não informado'
        }));
        setAttendees(migratedAttendees);
      } catch (error) {
        console.error("Erro ao carregar dados salvos:", error);
      }
    }
  }, []);

  // Salvar dados no localStorage sempre que a lista de participantes mudar
  useEffect(() => {
    localStorage.setItem(
      "caritz-attendees",
      JSON.stringify(attendees),
    );
  }, [attendees]);

  // Função para adicionar um novo participante
  const handleAddAttendee = (newAttendee: Attendee) => {
    setAttendees((prev) => [...prev, newAttendee]);

    // Se for pedestre (gratuito), mostrar mensagem de sucesso imediatamente
    if (newAttendee.vehicleType === "pedestrian") {
      setShowSuccessMessage(true);
    }
  };

  // Função para mostrar a seção de pagamento
  const handleShowPayment = (attendee: Attendee) => {
    setCurrentPaymentAttendee(attendee);
  };

  // Função para quando o pagamento for concluído
  const handlePaymentComplete = () => {
    setCurrentPaymentAttendee(null);
    setShowSuccessMessage(true);
  };

  // Função para fechar a mensagem de sucesso
  const handleCloseSuccess = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div> {/* Removida: min-h-screen bg-gray-950 text-white */}
        {/* Container principal com padding responsivo */}
        <div> {/* Removida: container mx-auto px-4 py-8 max-w-4xl */}
            
            {/* Adicione um texto simples para garantir que apareça: */}
            <h1>SITE FUNCIONOU</h1>
            
 return (
    <div className="min-h-screen bg-gray-950 text-white"> 
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Banner principal do evento */}
        <EventBanner />

        {/* Mensagem de sucesso (quando visível) */}
        {showSuccessMessage && (
          <SuccessMessage onClose={handleCloseSuccess} />
        )}

        {/* Seção de pagamento (Comentado para ISOLAMENTO) 
        {currentPaymentAttendee && (
          <PaymentSection
            attendee={currentPaymentAttendee}
            onPaymentComplete={handlePaymentComplete}
          />
        )} */} 

        {/* Descrição completa do evento */}
        <EventDescription />

        {/* Formulário de confirmação de presença */}
        <ConfirmationForm
          onAddAttendee={handleAddAttendee}
          onShowPayment={handleShowPayment}
        />

        {/* Lista de participantes confirmados */}
        <AttendeesList attendees={attendees} />

        {/* Seção de localização com mapa */}
        <LocationSection />

        {/* Footer com redes sociais e informações adicionais */}
        <footer className="text-center text-gray-500 mt-12">
          {/* Links das redes sociais */}
          <SocialLinks />
          
          {/* Informações de copyright */}
          <div className="pt-8 border-t border-gray-800 mt-8">
            <p>© 2025 Car Itz - Evento de Aniversário</p>
            <p className="text-sm mt-2">
              Para dúvidas, entre em contato através das redes sociais acima
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
        </div>
    </div>
  );
}