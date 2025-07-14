// src/components/ContactSection.jsx
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

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #FF7B00; /* Borda laranja ao focar */
    box-shadow: 0 0 0 3px rgba(255, 123, 0, 0.3); /* Sombra laranja suave ao focar */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  min-height: 120px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #FF7B00; /* Borda laranja ao focar */
    box-shadow: 0 0 0 3px rgba(255, 123, 0, 0.3); /* Sombra laranja suave ao focar */
  }
`;

const SubmitButton = styled.button`
  background-color: #E44D26; /* Botão de submit - Vermelho */
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: auto;
  margin-top: 1rem;

  &:hover {
    background-color: #D43F25; /* Tom mais escuro de vermelho no hover */
    transform: translateY(-2px);
  }
`;

function ContactSection({ id }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Mensagem enviada! Em breve entraremos em contato.');
  };

  return (
    <SectionContainer id={id}>
      <SectionTitle>Fale Conosco</SectionTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome Completo</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Sua Mensagem</Label>
          <TextArea id="message" name="message" rows="5" required></TextArea>
        </FormGroup>
        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </ContactForm>
    </SectionContainer>
  );
}

export default ContactSection;