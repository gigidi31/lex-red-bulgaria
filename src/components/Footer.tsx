import { Scale, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-legal-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-legal-accent" />
              <span className="text-2xl font-bold">LawConnect Bulgaria</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Водещата платформа за правни консултации в България. Свързваме клиенти с най-добрите адвокати.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Гражданско право</li>
              <li>Корпоративно право</li>
              <li>Семейно право</li>
              <li>Наказателно право</li>
              <li>Трудово право</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Връзки</h3>
            <ul className="space-y-2 text-gray-300">
              <li>За нас</li>
              <li>Как работи</li>
              <li>Цени</li>
              <li>Често задавани въпроси</li>
              <li>Условия за ползване</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакт</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>София, бул. Витоша 1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+359 2 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@lawconnect.bg</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Пон-Пет: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LawConnect Bulgaria. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;