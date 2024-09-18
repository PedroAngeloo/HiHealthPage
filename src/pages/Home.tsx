import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "../components/button";
import "../styles/header.css";
import "../styles/utility.css";
import rectangleOne from "../assets/images/rectangleOne.png";
import rectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import { FaBriefcase, FaCalendar, FaCheck, FaClock, FaEnvelope, FaHeart, FaLeaf, FaMapMarkerAlt, FaMobileAlt, FaPhone, FaUsers } from "react-icons/fa";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  useEffect(() => {
    const solutionBoxes = document.querySelectorAll('.solution-box');

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.8;

      solutionBoxes.forEach((box: any) => {
        if (box.offsetTop < scrollPosition && box.offsetTop + box.clientHeight > window.scrollY) {
          box.classList.add('visible');
        } else {
          box.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDescription = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setSelectedSolution(id);
    setShowMobileMenu(false);
  };


  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showMobileMenu]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setShowSolutions(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);


  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo BusDriver" width={180} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li><a href="#hero">Home</a></li>
              <li><a href="#solution">Soluções</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="#">Login</a>
              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className={`mobile-menu ${showMobileMenu ? 'fixed-mobile-menu' : ''}`}>
            {showMobileMenu && (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToDescription('hero'); setShowMobileMenu(false); }}>Home</a></li>
                    <li><a href="#solution" onClick={(e) => { e.preventDefault(); scrollToDescription('solution'); setShowMobileMenu(false); }}>Soluções</a></li>
                    <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToDescription('testimonials'); setShowMobileMenu(false); }}>Depoimentos</a></li>
                    <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToDescription('pricing'); setShowMobileMenu(false); }}>Preços</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToDescription('contact'); setShowMobileMenu(false); }}>Contato</a></li>
                    <li><a className="reverse-color" href="#">Login</a></li>
                  </ul>
                  <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            )}
            {!showMobileMenu && (
              <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      <section id="hero">
        <span className="desktop-only">
          <img src={rectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={rectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Bem-Vindo</p>
          <h1>
            Sua saúde, nossa missão. Agende sua consulta com facilidade no
            <div style={{ textAlign: 'center' }}>
              <h1>Hi Health.</h1>
            </div>
          </h1>
          <p>Priorize sua saúde conosco!</p>
          <div className="flex gap-1">
            <span><Button text="Cadastre-se" /></span>
            <span className="desktop-only"><Button text="Veja mais" secondary /></span>
          </div>
        </div>
      </section>

      <section id="solution" className={`solutions ${showSolutions ? 'show' : ''}`}>
        <div className="container">
          <h2 className="solutions-title">Soluções Inovadoras</h2>
          <p className="solutions-subtitle">Descubra como o Hi Health revoluciona o gerenciamento das suas consultas</p>
          <div className="solutions-grid">
            {[
              { icon: FaClock, title: "Agendamento Rápido", shortDesc: "Marque consultas em segundos", longDesc: "Nossa plataforma permite que você agende consultas em poucos cliques, economizando seu tempo e garantindo que você receba o atendimento que precisa quando precisa.", id: "agendamento" },
              { icon: FaCalendar, title: "Flexibilidade Total", shortDesc: "Cancele ou reagende sem complicações", longDesc: "Entendemos que imprevistos acontecem. Por isso, oferecemos a opção de cancelar ou reagendar suas consultas de forma fácil e rápida, sem burocracia.", id: "flexibilidade" },
              { icon: FaHeart, title: "Atendimento Personalizado", shortDesc: "Consultas adaptadas às suas necessidades", longDesc: "Cada paciente é único. Nossa plataforma permite que os médicos tenham acesso ao seu histórico e preferências, garantindo um atendimento verdadeiramente personalizado.", id: "atendimento" },
              { icon: FaMobileAlt, title: "App Intuitivo", shortDesc: "Gerencie tudo pelo seu smartphone", longDesc: "Nosso aplicativo móvel foi projetado pensando em você. Interface amigável, fácil de usar e com todas as funcionalidades na palma da sua mão.", id: "app" },
              { icon: FaUsers, title: "Suporte Dedicado", shortDesc: "Assistência sempre que precisar", longDesc: "Nossa equipe de suporte está sempre pronta para ajudar. Seja por chat, e-mail ou telefone, estamos aqui para garantir que sua experiência seja a melhor possível.", id: "suporte" },
              { icon: FaLeaf, title: "Histórico Completo", shortDesc: "Acompanhamento eficiente da sua saúde", longDesc: "Mantenha todos os seus registros médicos em um só lugar. Acompanhe sua evolução, visualize resultados de exames e tenha um panorama completo da sua saúde.", id: "historico" },
            ].map((item, index) => (
              <div key={index} className="solution-box">
                <item.icon className="solution-icon" />
                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-description">{item.shortDesc}</p>
                <p className="solution-card-longdesc">{item.longDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="contact-title">Entre em Contato</h2>
          <div className="contact-container">
            <div className="contact-info">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <strong>E-mail:</strong>
                  <p>contato@hihealth.com</p>
                </div>
              </div>
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <strong>Telefone:</strong>
                  <p>(11) 99999-9999</p>
                </div>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <strong>Cidade:</strong>
                  <p>São Paulo, SP</p>
                </div>
              </div>
              <div className="info-item">
                <FaBriefcase className="info-icon" />
                <div>
                  <strong>Trabalhe Conosco:</strong>
                  <p><a href="#">Veja nossas vagas</a></p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required placeholder="Seu nome completo" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required placeholder="seu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" required placeholder="Digite sua mensagem aqui..."></textarea>
              </div>
              <Button text="Enviar Mensagem" />
            </form>
          </div>
          <div className="solutions-cta">
            <Button text="Comece Agora" />
          </div>
        </div>
      </section>
    </>
  );
}
