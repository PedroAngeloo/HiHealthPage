import { useState } from "react";
import { sendEmail } from "../services/emailService";
import "../styles/contact.css";

export const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const emailContent = `
Novo contato recebido:

E-mail do remetente: ${email}
Mensagem: 
${description}

Agradecemos pelo seu contato! Nossa equipe da HiHealth irá analisar sua mensagem e entrar em contato em breve.

Atenciosamente,
Equipe HiHealth
`;


        try {
            await sendEmail({
                toMail: email,
                content: emailContent,
            });
            setStatus("success");
            setEmail("");
            setDescription("");
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="contact-section">
            <div className="contact-info">
                <h2>Entre em contato</h2>
                <p>
                    Entre em contato conosco, estamos dispostos a tirar todas as suas dúvidas e facilitar seus agendamentos!
                </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Digite seu e-mail:
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

                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Digite sua mensagem:
                    </label>
                    <textarea
                        id="description"
                        className="form-input"
                        placeholder="Escreva sua mensagem aqui..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                <i className="icon-check"></i> Toc Toc, só pra avisar que o email já foi enviado!
            </p>
        )}

        {status === "error" && (
            <p className="error-message">
                <i className="icon-error"></i> Deu ruim aqui. Estamos lutando para arrumar o mais rapido possivel.
            </p>
        )}
    </form>
</div>

    );
};