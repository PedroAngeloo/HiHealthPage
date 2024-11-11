import React from "react";
import ClienteUm from "../assets/images/clienteUm.jpg";
import ClienteDois from "../assets/images/clienteDois.jpg";
import ClienteTres from "../assets/images/clienteTres.jpg";
import "../styles/testimonials.css";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section py-xl">
      <div className="container">
        <h2 className="testimonials-title">O que dizem sobre nós</h2>

        <div className="testimonial-carousel">
          <div className="testimonial-track">
            <div className="testimonial-card">
              <img
                src={ClienteUm}
                alt="Valencia"
                className="testimonial-image"
              />
              <p>
                "Gerenciar a saúde da minha família ficou muito mais simples com o Hi Health. É prático, intuitivo e confiável."
              </p>
              <h4>Valencia</h4>
            </div>
            <div className="testimonial-card">
              <img
                src={ClienteDois}
                alt="Rochet"
                className="testimonial-image"
              />
              <p>
                "Como médico, vejo o Hi Health como uma ferramenta essencial. Melhorou significativamente a comunicação com meus pacientes."
              </p>
              <h4>Rochet</h4>
            </div>
            <div className="testimonial-card">
              <img
                src={ClienteTres}
                alt="Borre"
                className="testimonial-image"
              />
              <p>
                "O Hi Health simplificou minha vida! Agendar consultas nunca foi tão fácil e rápido. Recomendo a todos!"
              </p>
              <h4>Borre</h4>
            </div>
            <div className="testimonial-card">
              <img
                src={ClienteUm}
                alt="Valencia"
                className="testimonial-image"
              />
              <p>
                "Gerenciar a saúde da minha família ficou muito mais simples com o Hi Health. É prático, intuitivo e confiável."
              </p>
              <h4>Valencia</h4>
            </div>
            <div className="testimonial-card">
              <img
                src={ClienteDois}
                alt="Rochet"
                className="testimonial-image"
              />
              <p>
                "Como médico, vejo o Hi Health como uma ferramenta essencial. Melhorou significativamente a comunicação com meus pacientes."
              </p>
              <h4>Rochet</h4>
            </div>
            <div className="testimonial-card">
              <img
                src={ClienteTres}
                alt="Borre"
                className="testimonial-image"
              />
              <p>
                "O Hi Health simplificou minha vida! Agendar consultas nunca foi tão fácil e rápido. Recomendo a todos!"
              </p>
              <h4>Borre</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
