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
          {[{ icon: FaClock, title: "Agendamento Rápido", longDesc: "Nossa plataforma permite que você agende consultas em poucos cliques..." },
            { icon: FaCalendar, title: "Flexibilidade Total", longDesc: "Entendemos que imprevistos acontecem..." },
            { icon: FaHeart, title: "Atendimento Personalizado", longDesc: "Cada paciente é único..." },
            { icon: FaMobileAlt, title: "App Intuitivo", longDesc: "Nosso aplicativo móvel foi projetado..." },
            { icon: FaUsers, title: "Suporte Dedicado", longDesc: "Nossa equipe de suporte está sempre pronta para ajudar..." },
            { icon: FaLeaf, title: "Histórico Completo", longDesc: "Mantenha todos os seus registros médicos..." }].map((item, index) => (
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
