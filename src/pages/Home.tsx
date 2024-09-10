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
import { FaCalendar, FaClock, FaHeart, FaLeaf, FaMobileAlt, FaUsers } from "react-icons/fa";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  
  const scrollToDescription = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedSolution(id);
  };
  

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

  return (
    <>
      <header className="container py-sm ">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo BusDriver" width={180} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
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
          Sua saúde, nossa missão. Agende sua consulta com facilidade no Hi'Health.
          </h1>
          <p>
          Priorize sua saúde conosco!
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section id="solution" className={`solutions ${showSolutions ? 'show' : ''}`}>
  <div className="container">
    <h2 className="solutions-title">Soluções Inovadoras</h2>
    <p className="solutions-subtitle">Descubra como o Hi Health revoluciona o gerenciamento das suas consultas</p>
    
    <div className="solutions-content">
      {[
        { icon: FaClock, title: "Agendamento Rápido", shortDesc: "Marque consultas em segundos", longDesc: "Nossa plataforma permite que você agende consultas em poucos cliques, economizando seu tempo e garantindo que você receba o atendimento que precisa quando precisa.", id: "agendamento" },
        { icon: FaCalendar, title: "Flexibilidade Total", shortDesc: "Cancele ou reagende sem complicações", longDesc: "Entendemos que imprevistos acontecem. Por isso, oferecemos a opção de cancelar ou reagendar suas consultas de forma fácil e rápida, sem burocracia.", id: "flexibilidade" },
        { icon: FaHeart, title: "Atendimento Personalizado", shortDesc: "Consultas adaptadas às suas necessidades", longDesc: "Cada paciente é único. Nossa plataforma permite que os médicos tenham acesso ao seu histórico e preferências, garantindo um atendimento verdadeiramente personalizado.", id: "atendimento" },
        { icon: FaMobileAlt, title: "App Intuitivo", shortDesc: "Gerencie tudo pelo seu smartphone", longDesc: "Nosso aplicativo móvel foi projetado pensando em você. Interface amigável, fácil de usar e com todas as funcionalidades na palma da sua mão.", id: "app" },
        { icon: FaUsers, title: "Suporte Dedicado", shortDesc: "Assistência sempre que precisar", longDesc: "Nossa equipe de suporte está sempre pronta para ajudar. Seja por chat, e-mail ou telefone, estamos aqui para garantir que sua experiência seja a melhor possível.", id: "suporte" },
        { icon: FaLeaf, title: "Histórico Completo", shortDesc: "Acompanhamento eficiente da sua saúde", longDesc: "Mantenha todos os seus registros médicos em um só lugar. Acompanhe sua evolução, visualize resultados de exames e tenha um panorama completo da sua saúde.", id: "historico" },
      ].map((item, index) => (
        <div key={index} className="solution-pair">
          <div className="solution-card" onClick={() => scrollToDescription(item.id)}>
            <item.icon className="solution-icon" />
            <h3 className="solution-card-title">{item.title}</h3>
            <p className="solution-card-description">{item.shortDesc}</p>
          </div>
          <div 
  id={item.id} 
  className={`solution-description ${selectedSolution === item.id ? 'highlighted' : ''}`}
>
  <h3>{item.title}</h3>
  <p>{item.longDesc}</p>
</div>

        </div>
      ))}
    </div>

    <div className="solutions-cta">
      <Button text="Comece Agora" />
    </div>
  </div>
</section>





    </>
  );
}