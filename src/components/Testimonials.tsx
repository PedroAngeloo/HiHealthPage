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
            {[ClienteUm, ClienteDois, ClienteTres].map((client, index) => (
              <div key={index} className="testimonial-card">
                <img src={client} alt={`Cliente ${index}`} className="testimonial-image" />
                <p>
                  "Gerenciar a saúde da minha família ficou muito mais simples com o Hi Health. É prático, intuitivo e confiável."
                </p>
                <h4>Cliente {index + 1}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
