// src/components/ServicesSection.jsx
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
  text-align: center;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 3rem 1rem; /* Reduz padding lateral */
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: #222222;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #E44D26;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajusta o tamanho do título */
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Ajusta mais para celulares */
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: #222222; /* Preto mais específico */
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #FF7B00; /* Cor dos ícones - Laranja */
  margin-bottom: 1rem;
`;

function ServicesSection({ id }) {
  return (
    <SectionContainer id={id}>
      <SectionTitle>Nossos Serviços</SectionTitle>
      <ServicesGrid>
        <ServiceCard>
          <Icon>💪</Icon>
          <ServiceTitle>Musculação Personalizada</ServiceTitle>
          <ServiceDescription>
            Treinos elaborados sob medida para seus objetivos, com acompanhamento de profissionais experientes e equipamentos de última geração.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <Icon>🧘‍♀️</Icon>
          <ServiceTitle>Aulas de Grupo</ServiceTitle>
          <ServiceDescription>
            Experimente a energia contagiante de nossas aulas de Spinning, Yoga, Zumba, HIIT e muito mais. Divirta-se enquanto se exercita!
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <Icon>🤸‍♂️</Icon>
          <ServiceTitle>Treinamento Funcional</ServiceTitle>
          <ServiceDescription>
            Desenvolva força, flexibilidade e equilíbrio com exercícios que simulam movimentos do dia a dia, melhorando sua performance geral.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <Icon>🍎</Icon>
          <ServiceTitle>Acompanhamento Nutricional</ServiceTitle>
          <ServiceDescription>
            Obtenha planos alimentares personalizados e orientação de nutricionistas para complementar seu treino e otimizar seus resultados.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <Icon>🥊</Icon>
          <ServiceTitle>Artes Marciais</ServiceTitle>
          <ServiceDescription>
            Aprenda técnicas de defesa pessoal, melhore sua disciplina e condicione seu corpo com nossas aulas de Boxe e Muay Thai.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard>
          <Icon>🏊</Icon>
          <ServiceTitle>Natação Adulto/Infantil</ServiceTitle>
          <ServiceDescription>
            Piscinas climatizadas para aulas de natação para todas as idades, do iniciante ao avançado, com instrutores qualificados.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
    </SectionContainer>
  );
}

export default ServicesSection;