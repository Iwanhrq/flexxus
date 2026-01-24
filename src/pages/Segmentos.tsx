import React from 'react';
import './Segmentos.css';

// Importar as imagens quando disponíveis
// import colchoesImg from '../assets/colchoes.jpg';
// import altFalantesImg from '../assets/alto-falantes.jpg';
// import automotivaImg from '../assets/automotiva.jpg';
// import fitasImg from '../assets/fitas.jpg';

interface Segment {
  id: string;
  title: string;
  description: string;
  details?: string[];
  image: string;
  link: string;
}

const Segments: React.FC = () => {
  const segments: Segment[] = [
    {
      id: 'colchoes',
      title: 'Produtos para Indústria de Colchões, Travesseiros e Estofados',
      description: 'Produtos especialmente desenvolvidos para o segmento de espumas de PU. Apresentam alto rendimento, eficiência e versatilidade em ampla gama de aplicações: fabricação de colchões de molas e espumas, fabricação de molas ensacadas (POCKET), estofados, cadeiras de escritórios, confecção de travesseiros e colagem de espumas técnicas.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      link: '/categoria-produto/industrial/'
    },
    {
      id: 'eletronicos',
      title: 'Produtos para Linha Eletrônicos e Alto Falantes',
      description: 'Soluções completas para a indústria de alto-falantes, oferecendo produtos de alta performance para cada etapa do processo de fabricação.',
      details: [
        'Acabamento/fixação da CORDOALHA para cones de Celulose: Adesivo AC-560',
        'Fixação de GUARNIÇÕES ABS/PP: AC-385-X preto, ou AC-082',
        'União BOBINA / CONE / CENTRAGEM: Ciano de alta viscosidade ou epóxi FX 700/701AB',
        'Fixação de BORDAS: processo por termo reativação com AC-379 ou AC-385-X',
        'Fixação do ANEL DE CENTRAGEM: AC-372 ou ACN-201',
        'Tratamento da SUPERFÍCIE DO CONE: Filtro Solar FX-800',
        'Tratamento de Bordas: FX-801 Gel incolor ou FX-808 Gel preto',
        'Produção de BOBINAS: Adesivo FX-809 para selagem final'
      ],
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80',
      link: '/categoria-produto/eletronicos-e-alto-falantes/'
    },
    {
      id: 'automotiva',
      title: 'Produtos para Indústria Automotiva',
      description: 'Produtos especialmente desenvolvidos para a utilização na fabricação de auto partes, oferecendo alta eficiência e versatilidade em ampla gama de aplicações: colagem de tapetes, carpetes, revestimentos, isolamentos acústicos, pisos e porta-malas, fabricação de assentos, revestimentos vácuos/prensa de painéis de instrumentos e painéis de porta, tetos moldados e pré-moldados, para-sol e retrovisores.',
      details: [
        'Aplicações em ônibus: Revestimentos internos, passageiros, bagageiros, maleiros, tetos e painéis'
      ],
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
      link: '/categoria-produto/automotiva/'
    },
    {
      id: 'fitas',
      title: 'Fitas Dupla Face',
      description: 'As fitas adesivas oferecem a capacidade de unir permanentemente os mais diversos tipos de materiais como plástico, vidro, aço, alumínio e superfícies com algum tipo de revestimento ou pintura. São cada vez mais utilizadas no cenário industrial devido aos seus benefícios e potencial de substituição de materiais como pregos, parafusos, rebites e soldas.',
      details: [
        'Redução de custos - mais baratas e fáceis de aplicar',
        'Maior praticidade na aplicação e preparação simples',
        'Rapidez na aplicação, montagem e acabamento',
        'Redução do peso da máquina, equipamento ou produto final'
      ],
      image: 'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=800&q=80',
      link: '/categoria-produto/dupla-face/'
    }
  ];

  const clients = [
    'Gevisa', 'Magneti Marelli', 'SerAuto', 'Knauf', 'Bepo', 'Igaratiba',
    'Fabbof', 'Marcon', 'Plenitude', 'Amaflex', 'MG16', 'Alcar Abrasivos',
    'Mogiflex', 'Johnson Controls', 'Saúde e Vida', 'Astra', 'Zerust',
    'Asvotec', 'Valeo'
  ];

  return (
    <div className="segments">
      {/* Hero Section */}
      <section className="segments-hero">
        <div className="segments-hero-overlay">
          <h1 className="segments-hero-title">Segmentos</h1>
          <p className="segments-hero-breadcrumb">Home / Segmentos</p>
        </div>
      </section>

      {/* Segments List */}
      <section className="segments-content">
        <div className="segments-container">
          {segments.map((segment, index) => (
            <div 
              key={segment.id} 
              className={`segment-card ${index % 2 === 1 ? 'segment-card-reverse' : ''}`}
            >
              <div className="segment-image">
                <img src={segment.image} alt={segment.title} />
              </div>
              <div className="segment-info">
                <h2 className="segment-title">{segment.title}</h2>
                <p className="segment-description">{segment.description}</p>
                
                {segment.details && segment.details.length > 0 && (
                  <ul className="segment-details">
                    {segment.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
                
                <a href={segment.link} className="segment-button">
                  Ver Produtos
                  <svg className="segment-button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="clients-container">
          <h2 className="clients-title">Nossos Clientes</h2>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-placeholder">
                  <span>{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Segments;