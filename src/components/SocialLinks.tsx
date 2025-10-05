import { Instagram, MessageCircle, Users } from 'lucide-react';

/**
 * Componente para exibir links das redes sociais do Car Itz
 * Inclui Instagram, WhatsApp individual e grupo do WhatsApp
 */
export function SocialLinks() {
  const instagramUrl = "https://www.instagram.com/car_iitz?igsh=eHRsMHA5MW9mYjA5&utm_source=qre";
  const whatsappNumber = "5599991043501"; // Formato internacional
  const whatsappGroupUrl = "https://chat.whatsapp.com/DQLpWRJ5UnLJtWE77gN7D6";

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: instagramUrl,
      label: "@car_iitz",
      color: "hover:text-pink-400"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/${whatsappNumber}`,
      label: "(99) 99104-3501",
      color: "hover:text-green-400"
    },
    {
      name: "Grupo WhatsApp",
      icon: Users,
      url: whatsappGroupUrl,
      label: "Grupo Car Itz",
      color: "hover:text-green-400"
    }
  ];

  return (
    <div className="border-t border-gray-800 pt-8 mt-8">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-red-500 mb-4">
          📱 Siga-nos nas Redes Sociais
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          Fique por dentro das novidades e entre em contato conosco
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-3 p-3 rounded-lg
                bg-gray-800 border border-gray-700
                transition-all duration-300 ease-in-out
                hover:border-gray-600 hover:bg-gray-750
                ${social.color}
                min-w-[200px] justify-center
              `}
            >
              <IconComponent size={20} />
              <div className="text-left">
                <div className="font-medium text-white text-sm">
                  {social.name}
                </div>
                <div className="text-gray-400 text-xs">
                  {social.label}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="text-center mt-6 text-xs text-gray-500">
        <p>Clique nos links acima para entrar em contato ou seguir nosso conteúdo</p>
      </div>
    </div>
  );
}