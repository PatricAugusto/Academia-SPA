// src/components/TestimonialsSection.jsx
import React from 'react';
import styled from 'styled-components';

import avatarAna from '../assets/ana.jpg';
import avatarJoao from '../assets/joao.jpg';
import avatarMariana from '../assets/mariana.jpg';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f0f2f5; /* Fundo suave para contrastar */
  text-align: center;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #222222; /* Preto mais específico */
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 90px;
    height: 4px;
    background-color: #E44D26; /* Linha de destaque - Vermelho */
    margin: 10px auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Grid responsivo para cards */
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const TestimonialCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra mais destacada */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Para empurrar o nome para baixo */
  min-height: 250px; /* Altura mínima para cards mais uniformes */
`;

const Quote = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  font-style: italic; /* Depoimentos costumam ser itálicos */
  margin-bottom: 1.5rem;
`;

const AuthorInfo = styled.div`
  margin-top: auto; /* Empurra para o final do card */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorName = styled.p`
  font-weight: bold;
  color: #222222; /* Preto mais específico */
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%; /* Transforma em círculo */
  object-fit: cover;
  border: 3px solid #FF7B00; /* Borda colorida */
`;


function TestimonialsSection({ id }) { // Certifique-se de que o id é passado como prop
  const testimonialsData = [
    {
      quote: "Nunca pensei que me apaixonaria por treinar! A Academia Fitness mudou minha vida e me ajudou a alcançar resultados que eu não imaginava.",
      author: "Ana Clara S.",
      role: "Membro há 2 anos",
      avatar: avatarAna // 2. Use a variável importada aqui
    },
    {
      quote: "Os profissionais são incríveis e o ambiente é muito acolhedor. Recomendo para quem busca saúde e bem-estar em um só lugar.",
      author: "João Paulo G.",
      role: "Membro há 1 ano",
      avatar: avatarJoao // 2. Use a variável importada aqui
    },
    {
      quote: "As aulas de grupo são super dinâmicas e divertidas! Sinto-me sempre motivada a dar o meu melhor. A melhor academia que já frequentei.",
      author: "Mariana R.",
      role: "Membro há 6 meses",
      avatar: avatarMariana // 2. Use a variável importada aqui
    },
  ];

  return (
    <SectionContainer id={id}> {/* Passe o id para o SectionContainer */}
      <SectionTitle>O Que Nossos Membros Dizem</SectionTitle>
      <TestimonialsGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Quote>"{testimonial.quote}"</Quote>
            <AuthorInfo>
              <Avatar src={testimonial.avatar} alt={testimonial.author} />
              <AuthorName>{testimonial.author}</AuthorName>
              <AuthorRole>{testimonial.role}</AuthorRole>
            </AuthorInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </SectionContainer>
  );
}

export default TestimonialsSection;