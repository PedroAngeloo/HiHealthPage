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
          {[{ name: "Básico", price: "R$ 29,90", features: ["Agendamento de consultas", "Histórico médico básico", "Suporte por email"], color: "#3498db" },
            { name: "Padrão", price: "R$ 59,90", features: ["Tudo do plano Básico", "Lembretes de consultas", "Chat com médicos", "Suporte prioritário"], color: "#2ecc71", recommended: true },
            { name: "Premium", price: "R$ 99,90", features: ["Tudo do plano Padrão", "Consultas online ilimitadas", "Acesso a médicos especializados", "Suporte VIP"], color: "#e74c3c" }].map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.recommended ? "recommended" : ""}`} style={{ borderColor: plan.color }}>
                <h3 className="pricing-card-title">{plan.name}</h3>
                <p className="pricing-card-price">{plan.price}</p>
                <ul className="pricing-card-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button text="Assine Agora" style={{ backgroundColor: plan.color }} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
