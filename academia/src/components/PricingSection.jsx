// src/components/PricingSection.jsx
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PlanCard = styled.div`
  background-color: #fefefe;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  ${props => props.featured && `
    background: linear-gradient(to bottom right, #E44D26, #FF7B00); /* Gradiente Vermelho-Laranja */
    color: white;
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);

    ${PlanTitle}, ${Price}, ${PricePer}, ${PlanFeature}, ${BenefitList}, ${CallToActionButton} {
      color: white;
    }

    ${CallToActionButton} {
      background-color: #222222; /* Botão preto no card destacado */
      &:hover {
        background-color: #1A1A1A;
      }
    }
  `}
`;

const PlanTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #222222; /* Preto mais específico */
`;

const Price = styled.p`
  font-size: 3.5rem;
  font-weight: bold;
  color: #E44D26; /* Cor do preço - Vermelho */
  margin-bottom: 0.5rem;
`;

const PricePer = styled.p`
  font-size: 1.1rem;
  color: #777;
  margin-bottom: 2rem;
`;

const BenefitList = styled.ul`
  text-align: left;
  margin-bottom: 2.5rem;
  flex-grow: 1;
`;

const PlanFeature = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  
  &:last-child {
    margin-bottom: 0;
  }

  span {
    color: #FF7B00; /* Cor laranja para o ícone de check */
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const CallToActionButton = styled.button`
  background-color: #E44D26; /* Cor de destaque para o botão - Vermelho */
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: auto;

  &:hover {
    background-color: #D43F25; /* Tom mais escuro de vermelho no hover */
    transform: translateY(-2px);
  }
`;

function PricingSection({ id }) {
  const plansData = [
    {
      title: "Plano Bronze",
      price: "R$ 79",
      per: "/mês",
      features: [
        "Acesso Musculação",
        "Área de Cardio",
        "Acesso à Wi-Fi",
        "Armário Rotativo",
      ],
      featured: false,
    },
    {
      title: "Plano Prata",
      price: "R$ 99",
      per: "/mês",
      features: [
        "Tudo do Bronze",
        "Aulas de Grupo (2x semana)",
        "Avaliação Física Trimestral",
        "Estacionamento Gratuito",
      ],
      featured: true, // Este será o plano em destaque
    },
    {
      title: "Plano Ouro",
      price: "R$ 149",
      per: "/mês",
      features: [
        "Tudo do Prata",
        "Aulas de Grupo (ilimitado)",
        "Acesso à Piscina",
        "Personal Trainer (1x mês)",
        "Desconto em Suplementos",
      ],
      featured: false,
    },
  ];

  return (
    <SectionContainer id={id}>
      <SectionTitle>Nossos Planos Flexíveis</SectionTitle>
      <PricingGrid>
        {plansData.map((plan, index) => (
          <PlanCard key={index} featured={plan.featured}>
            <div>
              <PlanTitle>{plan.title}</PlanTitle>
              <Price>{plan.price}</Price>
              <PricePer>{plan.per}</PricePer>
            </div>
            <BenefitList>
              {plan.features.map((feature, idx) => (
                <PlanFeature key={idx}>
                  <span>&#10003;</span> {feature}
                </PlanFeature>
              ))}
            </BenefitList>
            <CallToActionButton>Assinar Agora</CallToActionButton>
          </PlanCard>
        ))}
      </PricingGrid>
    </SectionContainer>
  );
}

export default PricingSection;