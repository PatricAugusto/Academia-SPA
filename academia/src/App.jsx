// src/App.jsx
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer'; // Importa o novo componente Footer

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Home />
      </main>
      <Footer /> {/* Adiciona o Rodapé aqui, fora da tag <main> */}
    </>
  );
}

export default App;