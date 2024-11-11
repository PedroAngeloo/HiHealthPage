import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "../components/button";
import "../styles/header.css";
import "../styles/utility.css";
import rectangleOne from "../assets/images/rectangleOne.png";
import rectangleTwo from "../assets/images/rectangleTwo.png";
import { FaBriefcase, FaCalendar, FaCheck, FaClock, FaEnvelope, FaHeart, FaLeaf, FaMapMarkerAlt, FaMobileAlt, FaPhone, FaUsers } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/footer.css";
import { ContactForm } from "../components/ContactForm.tsx";
import "../styles/ContactForm.css";
import Pricing from "../components/Pricing.tsx";
import Testimonials from "../components/Testimonials.tsx";
import Solution from "../components/Solution.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          <img src={Logo} alt="Logo HiHealth" width={180} height={80} />

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
            <Hero />
      </section>


      <section id="solution">
            <Solution />
      </section>

      <section id="testimonials">
            <Testimonials />
      </section>

     <section id="pricing">
            <Pricing />
      </section>

 
      <section id="contact">
        <ContactForm />
      </section>


      <footer className="footer">
          
            
          <div className="footer-item">
          <img src={Logo} alt="Logo HiHealth" width={180} height={80} />
            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
            </div>

          </div>
          <div className="footer-item">
            <h4>Empresa</h4>
            <ul>
              <li>Sobre nós</li>
              <li>Faça parte do time</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-item">
            <h4>Funcionalidades</h4>
            <ul>
              <li>Marketing</li>
              <li>Análise de dados</li>
              <li>Boot discord</li>
            </ul>
          </div>

          <div className="footer-item">
            <h4>Recursos</h4>
            <ul>
              <li>IOS & Android</li>
              <li>Teste a Demo</li>
              <li>Clientes</li>
              <li>API</li>
            </ul>
          </div>
     </footer>    
        <div className="footer-bottom">
            <p>Feito com amor na aula de Programação Web💙 ©2024 Pedroca - Libre a todos.</p>
          </div>  
    </>
  );
}