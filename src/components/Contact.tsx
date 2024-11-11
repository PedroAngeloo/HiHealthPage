import React from "react";
import "../styles/contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact py-xl">
      <div className="container">
        <h2 className="contact-title">Entre em contato conosco</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
