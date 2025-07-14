// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1A1A1A;
  color: white;
  padding: 2rem 2rem;
  text-align: center;
  font-size: 0.9rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem 1rem; /* Reduz padding em telas menores */
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    font-size: 0.8rem; /* Reduz o tamanho da fonte no footer para celulares */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 480px) {
    gap: 10px; /* Reduz o espaçamento entre ícones sociais */
  }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #FF7B00;
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {currentYear} Academia Fitness. Todos os direitos reservados.</p>
        <SocialLinks>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            📘
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            📸
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            🐦
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            💼
          </SocialIcon>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;