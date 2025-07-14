// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';

const HeroSection = styled.section`
  background: linear-gradient(to right, #E44D26, #FF7B00);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem; /* Reduz padding em telas menores */
    min-height: 50vh; /* Pode ser menor em telas pequenas */
  }
`;

const HeroTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Ajusta o tamanho do título em tablets */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Ajusta o tamanho do título em celulares */
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Ajusta o tamanho do subtítulo */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Ajusta o tamanho do subtítulo */
  }
`;

const CallToActionButton = styled.button`
  background-color: #222222;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #1A1A1A;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem; /* Reduz padding do botão */
    font-size: 1rem; /* Reduz tamanho da fonte do botão */
  }
`;

function Home() {
  return (
    <>
      {/* Adicionando id="home" na HeroSection */}
      <HeroSection id="home">
        <HeroTitle>Transforme seu Corpo e sua Mente</HeroTitle>
        <HeroSubtitle>
          Na Academia Fitness, oferecemos os melhores programas de treino e suporte para você alcançar seus objetivos de saúde e bem-estar. Venha fazer parte da nossa comunidade!
        </HeroSubtitle>
        <CallToActionButton>Explore Nossos Planos</CallToActionButton>
      </HeroSection>

      {/* AboutSection já tem um SectionContainer, adicione o id a ele */}
      <AboutSection id="sobre" />

      {/* ServicesSection já tem um SectionContainer, adicione o id a ele */}
      <ServicesSection id="servicos" />

      {/* TestimonialsSection já tem um SectionContainer, adicione o id a ele */}
      <TestimonialsSection id="depoimentos" />

      {/* PricingSection já tem um SectionContainer, adicione o id a ele */}
      <PricingSection id="planos" />

      {/* ContactSection já tem um SectionContainer, adicione o id a ele */}
      <ContactSection id="contato" />
    </>
  );
}

export default Home;