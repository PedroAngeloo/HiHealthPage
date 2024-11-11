import React from "react";
import Button from "../components/button";
import { FaCheck } from "react-icons/fa";
import "../styles/pricing.css";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="pricing-title">Nossos Planos</h2>
        <p className="pricing-subtitle">Escolha o plano ideal para suas necessidades</p>
        <div className="pricing-grid">
          {[
            { name: "Básico", price: "R$ 29,90", features: ["Agendamento de consultas", "Histórico médico básico", "Suporte por email"], color: "#3498db" },
            { name: "Padrão", price: "R$ 59,90", features: ["Tudo do plano Básico", "Lembretes de consultas", "Chat com médicos", "Suporte prioritário"], color: "#2ecc71", recommended: true },
            { name: "Premium", price: "R$ 99,90", features: ["Tudo do plano Padrão", "Consultas online ilimitadas", "Acesso a especialistas", "Suporte 24/7"], color: "#e74c3c" }
          ].map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`} style={{ borderTopColor: plan.color }}>
              {plan.recommended && <span className="recommended-badge">Recomendado</span>}
              <h4 className="plan-name">{plan.name}</h4>
              <p className="plan-price">{plan.price}<span>/mês</span></p>
              <ul className="plan-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}><FaCheck className="feature-icon" /> {feature}</li>
                ))}
              </ul>
              <Button text="Escolher Plano" buttonClassName="plan-button" style={{ backgroundColor: plan.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
