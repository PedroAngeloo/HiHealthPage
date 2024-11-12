import { useState } from "react";
import { sendEmail } from "../services/emailService";
import "../styles/contact.css";

export const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const welcomeMessage = `
   Salve Salve colega
Ta salvo aqui teu email qualquer coisa dou um grito e te chamo aqui, TMJ!!

Atenciosamente,
A equipe HiHealth
    `;

        try {
            await sendEmail({
                toMail: email,
                content: welcomeMessage,
            });
            setStatus("success");
            setEmail("");
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="contact-section">
    <div className="contact-info">
        <h2>Entre em contato</h2>
        <p>
            Quer trabalhar conosco? Passe seu e-mail para que possamos entrar em contato em breve.
        </p>
    </div>

    <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
            <label htmlFor="email" className="form-label">
                Digite seu e-mail para ficar salvo aqui:
            </label>
            <input
                type="email"
                id="email"
                className="form-input"
                placeholder="exemplo@teste.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>

        <button 
            type="submit" 
            className={`submit-button ${status === "loading" ? "button-loading" : ""}`} 
            disabled={status === "loading"}
        >
            {status === "loading" ? (
                <>
                    <span className="spinner"></span> Enviando...
                </>
            ) : (
                "Enviar"
            )}
        </button>

        {status === "success" && (
            <p className="success-message">
                <i className="icon-check"></i> Verifique seu e-mail para ver se chegou!
            </p>
        )}

        {status === "error" && (
            <p className="error-message">
                <i className="icon-error"></i> Falha ao enviar e-mail. Por favor, tente novamente.
            </p>
        )}
    </form>
</div>

    );
};
