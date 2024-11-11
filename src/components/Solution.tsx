import React from "react";
import { FaClock, FaCalendar, FaHeart, FaMobileAlt, FaUsers, FaLeaf } from "react-icons/fa";
import "../styles/solutions.css";

const Solution: React.FC = () => {
  return (
    <section id="solution" className="solutions">
      <div className="container">
        <h2 className="solutions-title">Soluções Inovadoras</h2>
        <p className="solutions-subtitle">Descubra como o Hi Health revoluciona o gerenciamento das suas consultas</p>
        <div className="solutions-grid">
          {[
            { icon: FaClock, title: "Agendamento Rápido", longDesc: "Nossa plataforma permite que você agende consultas em poucos cliques, economizando seu tempo e garantindo que você receba o atendimento que precisa quando precisa.", id: "agendamento" },
            { icon: FaCalendar, title: "Flexibilidade Total", longDesc: "Entendemos que imprevistos acontecem. Por isso, oferecemos a opção de cancelar ou reagendar suas consultas de forma fácil e rápida, sem burocracia.", id: "flexibilidade" },
            { icon: FaHeart, title: "Atendimento Personalizado", longDesc: "Cada paciente é único. Nossa plataforma permite que os médicos tenham acesso ao seu histórico e preferências, garantindo um atendimento verdadeiramente personalizado.", id: "atendimento" },
            { icon: FaMobileAlt, title: "App Intuitivo", longDesc: "Nosso aplicativo móvel foi projetado pensando em você. Interface amigável, fácil de usar e com todas as funcionalidades na palma da sua mão.", id: "app" },
            { icon: FaUsers, title: "Suporte Dedicado", longDesc: "Nossa equipe de suporte está sempre pronta para ajudar. Seja por chat, e-mail ou telefone, estamos aqui para garantir que sua experiência seja a melhor possível.", id: "suporte" },
            { icon: FaLeaf, title: "Histórico Completo", longDesc: "Mantenha todos os seus registros médicos em um só lugar. Acompanhe sua evolução, visualize resultados de exames e tenha um panorama completo da sua saúde.", id: "historico" },
          ].map((item, index) => (
            <div key={index} className="solution-box box-with-border">
              <item.icon className="solution-icon" />
              <h3 className="solution-card-title">{item.title}</h3>
              <p className="solution-card-longdesc">{item.longDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
