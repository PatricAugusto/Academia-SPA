// src/components/Header.jsx
import React, { useState } from 'react'; // Importa useState para gerenciar o estado do menu
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1A1A1A;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  cursor: pointer;
  span {
    color: #E44D26;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const HamburgerIcon = styled.div`
  display: none; /* Escondido por padrão em telas grandes */
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.3s linear;
    transform-origin: 1px; /* Ponto de origem para a rotação */

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Estilos para a animação do X */
  ${props => props.open && `
    span:nth-child(1) {
      transform: rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
      transform: translateX(-100%);
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
  `}

  @media (max-width: 768px) {
    display: flex; /* Visível em telas menores que 768px */
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      display: ${props => (props.open ? 'flex' : 'none')}; /* Mostra/Esconde com base na prop 'open' */
      flex-direction: column;
      position: absolute; /* Posiciona o menu fora do fluxo normal */
      top: 60px; /* Abaixo do cabeçalho */
      left: 0;
      width: 100%;
      background-color: #222222; /* Fundo do menu aberto */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      padding: 1rem 0;
      animation: fadeIn 0.3s ease-in-out; /* Animação simples de fade */

      li {
        padding: 0.5rem 2rem; /* Aumenta a área clicável dos itens */
        text-align: center;
        width: 100%;
        &:hover {
          background-color: #333333; /* Fundo no hover dos itens do menu */
        }
      }
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #FF7B00;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar se o menu está aberto

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // Fecha o menu após clicar em um link
    }
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => handleScroll('home')}>
        Academia <span>Fitness</span>
      </Logo>
      <HamburgerIcon open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
      <Nav open={isOpen}> {/* Passa o estado 'isOpen' como prop para Nav */}
        <ul>
          <li><NavLink href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</NavLink></li>
          <li><NavLink href="#sobre" onClick={(e) => { e.preventDefault(); handleScroll('sobre'); }}>Sobre</NavLink></li>
          <li><NavLink href="#servicos" onClick={(e) => { e.preventDefault(); handleScroll('servicos'); }}>Serviços</NavLink></li>
          <li><NavLink href="#planos" onClick={(e) => { e.preventDefault(); handleScroll('planos'); }}>Planos</NavLink></li>
          <li><NavLink href="#contato" onClick={(e) => { e.preventDefault(); handleScroll('contato'); }}>Contato</NavLink></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;