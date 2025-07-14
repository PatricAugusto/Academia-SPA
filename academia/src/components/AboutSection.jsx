// src/components/AboutSection.jsx
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

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
`;

const TextBlock = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #555;
`;

const HighlightText = styled.span`
  color: #E44D26; /* Cor de destaque para palavras-chave - Vermelho */
  font-weight: bold;
`;

function AboutSection({ id }) {
  return (
    <SectionContainer id={id}>
      <SectionTitle>Quem Somos</SectionTitle>
      <ContentWrapper>
        <TextBlock>
          Na <HighlightText>Academia Fitness</HighlightText>, acreditamos que a verdadeira força vai além dos músculos. É sobre <HighlightText>resiliência</HighlightText>, bem-estar integral e a busca contínua por uma versão melhor de si mesmo. Fundada em 2020, nossa missão é criar um ambiente onde todos se sintam motivados e apoiados em sua jornada de saúde.
        </TextBlock>
        <TextBlock>
          Oferecemos uma variedade de modalidades, desde <HighlightText>treinamento funcional</HighlightText> e musculação até aulas de grupo dinâmicas como <HighlightText>Spinning e Yoga</HighlightText>. Nossos instrutores são dedicados e certificados, prontos para guiar você com planos personalizados e o suporte necessário para alcançar seus objetivos, seja ganhar massa muscular, perder peso ou melhorar sua qualidade de vida.
        </TextBlock>
        <TextBlock>
          Venha descobrir a diferença de treinar em um lugar que se importa com seu progresso e sua saúde. Na Academia Fitness, você não é apenas um aluno, você faz parte de uma <HighlightText>comunidade vibrante</HighlightText> que celebra cada vitória.
        </TextBlock>
      </ContentWrapper>
    </SectionContainer>
  );
}

export default AboutSection;