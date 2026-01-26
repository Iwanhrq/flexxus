import React from 'react';
import './Institucional.css';

const Institucional: React.FC = () => {
  const clientes = [
    { nome: 'Gevisa', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Gevisa' },
    { nome: 'Magneti Marelli', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Magneti+Marelli' },
    { nome: 'SerAuto', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=SerAuto' },
    { nome: 'Knauf', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Knauf' },
    { nome: 'Bepo', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Bepo' },
    { nome: 'Igaratiba', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Igaratiba' },
    { nome: 'Fabbof', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Fabbof' },
    { nome: 'Marcon', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Marcon' },
    { nome: 'Plenitude', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Plenitude' },
    { nome: 'Amaflex', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Amaflex' },
    { nome: 'MG16', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=MG16' },
    { nome: 'Alcar Abrasivos', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Alcar' },
    { nome: 'Mogiflex', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Mogiflex' },
    { nome: 'Johnson Controls', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Johnson' },
    { nome: 'Saúde e vida', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Saude' },
    { nome: 'Astra', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Astra' },
    { nome: 'Zerust', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Zerust' },
    { nome: 'Asvotec', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Asvotec' },
    { nome: 'Valeo', logo: 'https://via.placeholder.com/150x80/ffffff/666666?text=Valeo' }
  ];

  return (
    <div className="institucional-page">
      {/* Hero Section */}
      <section className="institucional-hero">
        <div className="institucional-hero-overlay">
          <h1 className="institucional-hero-title">Institucional</h1>
          <p className="institucional-hero-breadcrumb">Home / Institucional</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="institucional-main">
        <div className="institucional-container">
          {/* Sobre a Flexxus */}
          <section className="institucional-section about-section">
            <h2 className="institucional-section-title">A Flexxus</h2>
            <div className="institucional-content">
              <p>
                Fundada em Monte Mor em setembro de 2003 a <strong>FLEXXUS ADESIVOS</strong> conta 
                com um seleto time de profissionais com mais de 30 anos de experiência no desenvolvimento 
                de adesivos e selantes.
              </p>
              <p>
                Nossa unidade fabril de 1300 m² de área conta com equipamentos modernos e laboratório 
                capacitado e amplo estoque para pronto atendimento dos nossos principais itens.
              </p>
              <p>
                Nestes quase 20 anos de existência a <strong>FLEXXUS</strong> atribui o seu sucesso 
                a dedicação de nossa equipe que não mede esforços para atender prontamente e satisfazer 
                todas as necessidades de nossos clientes.
              </p>
              <blockquote className="institucional-quote">
                "A perfeita união do seu produto sela a nossa parceria."
              </blockquote>
            </div>
          </section>

          {/* Missão, Visão e Valores */}
          <div className="institucional-cards">
            <div className="institucional-card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Missão</h3>
              <p>
                Produzir adesivos de alta performance unindo a qualidade de nossos produtos aos 
                produtos de nossos clientes tornando-os mutuamente confiáveis.
              </p>
            </div>

            <div className="institucional-card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3>Visão</h3>
              <p>
                Se desenvolver como a melhor produtora de adesivos alinhando a nossos produtos a 
                mais alta qualidade e excelência de seus resultados proporcionando a nossos clientes 
                a total confiança de suas aplicações nos diversos segmentos atendidos.
              </p>
            </div>

            <div className="institucional-card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Valores</h3>
              <p>
                Respeito e comprometimento com nossos colaboradores, clientes, fornecedores e meio ambiente. 
                Ética e responsabilidade em todos os processos e ações.
              </p>
            </div>
          </div>

          {/* Diferenciais */}
          <section className="institucional-section">
            <h2 className="institucional-section-title">Nossos Diferenciais</h2>
            <div className="diferenciais-grid">
              <div className="diferencial-item">
                <div className="diferencial-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h4>30+ Anos de Experiência</h4>
                <p>Equipe com vasta expertise no desenvolvimento de adesivos</p>
              </div>

              <div className="diferencial-item">
                <div className="diferencial-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h4>1.300 m² de Área</h4>
                <p>Unidade fabril moderna e bem equipada</p>
              </div>

              <div className="diferencial-item">
                <div className="diferencial-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h4>Laboratório Capacitado</h4>
                <p>Tecnologia e equipamentos de ponta para desenvolvimento</p>
              </div>

              <div className="diferencial-item">
                <div className="diferencial-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <h4>Amplo Estoque</h4>
                <p>Pronto atendimento dos principais itens</p>
              </div>
            </div>
          </section>

          {/* Nossos Clientes */}
          <section className="institucional-section clientes-section">
            <h2 className="institucional-section-title">Nossos Clientes</h2>
            <p className="clientes-subtitle">
              Empresas que confiam na qualidade e excelência dos nossos produtos
            </p>
            <div className="clientes-grid">
              {clientes.map((cliente, index) => (
                <div key={index} className="cliente-card">
                  <img src={cliente.logo} alt={cliente.nome} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Institucional;