import React, { useState, useMemo } from 'react';
import './Produtos.css';

interface Produto {
  id: number;
  nome: string;
  descricao?: string;
  imagem: string;
  categoria: string;
  embalagem?: string;
  materiais?: string[];
  tecnologia?: string;
  link: string;
}

const PRODUTOS_MOCK: Produto[] = [
  {
    id: 1,
    nome: 'AC 082',
    descricao: 'Adesivo de contato para aplicações diversas',
    imagem: 'https://via.placeholder.com/300x300/ff6b35/ffffff?text=AC+082',
    categoria: 'Automotiva',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['ABS', 'PP', 'PVC'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-082'
  },
  {
    id: 2,
    nome: 'AC 1113',
    descricao: 'Adesivo especial para aplicações industriais',
    imagem: 'https://via.placeholder.com/300x300/ff8c42/ffffff?text=AC+1113',
    categoria: 'Industrial',
    embalagem: 'Balde 15 kgs',
    materiais: ['Espuma de PU', 'Tecido'],
    tecnologia: 'Base água',
    link: '/produto/ac-1113'
  },
  {
    id: 3,
    nome: 'AC 201',
    descricao: 'Adesivo para colagem de espumas',
    imagem: 'https://via.placeholder.com/300x300/ffa366/ffffff?text=AC+201',
    categoria: 'Industrial',
    embalagem: 'Galão 2,8 kgs',
    materiais: ['Espuma', 'Tecido'],
    tecnologia: 'Base água',
    link: '/produto/ac-201'
  },
  {
    id: 4,
    nome: 'AC 298',
    descricao: 'Adesivo de alta performance',
    imagem: 'https://via.placeholder.com/300x300/ffb380/ffffff?text=AC+298',
    categoria: 'Automotiva',
    embalagem: 'Lata 13 kg',
    materiais: ['Borracha', 'Metal'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-298'
  },
  {
    id: 5,
    nome: 'AC 372',
    descricao: 'Adesivo resistente a altas temperaturas',
    imagem: 'https://via.placeholder.com/300x300/ff6b35/ffffff?text=AC+372',
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['ABS', 'Metal'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-372'
  },
  {
    id: 6,
    nome: 'AC 379',
    descricao: 'Adesivo para colagem de bordas',
    imagem: 'https://via.placeholder.com/300x300/ff8c42/ffffff?text=AC+379',
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['Celulose', 'Tecido'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-379'
  },
  {
    id: 7,
    nome: 'AC 385 X',
    descricao: 'Adesivo aditivado para plásticos',
    imagem: 'https://via.placeholder.com/300x300/ffa366/ffffff?text=AC+385+X',
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['PP', 'ABS'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-385-x'
  },
  {
    id: 8,
    nome: 'AC 560',
    descricao: 'Adesivo de secagem rápida',
    imagem: 'https://via.placeholder.com/300x300/ffb380/ffffff?text=AC+560',
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['Celulose'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-560'
  },
  {
    id: 9,
    nome: 'ACN 205',
    descricao: 'Adesivo cianoacrilato de alta viscosidade',
    imagem: 'https://via.placeholder.com/300x300/ff6b35/ffffff?text=ACN+205',
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: '2,5ml',
    materiais: ['Metal', 'Plásticos'],
    tecnologia: 'Solvente Free',
    link: '/produto/acn-205'
  },
  {
    id: 10,
    nome: 'ACN 360',
    descricao: 'Adesivo cianoacrilato multifuncional',
    imagem: 'https://via.placeholder.com/300x300/ff8c42/ffffff?text=ACN+360',
    categoria: 'Industrial',
    embalagem: '2,5ml',
    materiais: ['Metal', 'Borracha'],
    tecnologia: 'Solvente Free',
    link: '/produto/acn-360'
  },
  {
    id: 11,
    nome: 'ADESICOLA M5',
    descricao: 'Adesivo para colagem de espumas',
    imagem: 'https://via.placeholder.com/300x300/ffa366/ffffff?text=ADESICOLA+M5',
    categoria: 'Industrial',
    embalagem: 'Balde 15 kgs',
    materiais: ['Espuma de PU'],
    tecnologia: 'Base água',
    link: '/produto/adesicola-m5'
  },
  {
    id: 12,
    nome: 'Fita Dupla Face',
    descricao: 'Fita adesiva dupla face de alta aderência',
    imagem: 'https://via.placeholder.com/300x300/ffb380/ffffff?text=Fita',
    categoria: 'Dupla face',
    embalagem: '0,5mm',
    materiais: ['Plásticos', 'Metal', 'Vidro'],
    tecnologia: 'Base acrílica',
    link: '/produto/fita-dupla-face'
  }
];

const Produtos: React.FC = () => {
  const [busca, setBusca] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('');
  const [tecnologiaFiltro, setTecnologiaFiltro] = useState<string>('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  // Extrair categorias e tecnologias únicas
  const categorias = useMemo(() => {
    return Array.from(new Set(PRODUTOS_MOCK.map(p => p.categoria))).sort();
  }, []);

  const tecnologias = useMemo(() => {
    return Array.from(new Set(PRODUTOS_MOCK.map(p => p.tecnologia).filter(Boolean))).sort();
  }, []);

  // Filtrar produtos
  const produtosFiltrados = useMemo(() => {
    return PRODUTOS_MOCK.filter(produto => {
      const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
                        (produto.descricao?.toLowerCase().includes(busca.toLowerCase()) ?? false);
      const matchCategoria = !categoriaFiltro || produto.categoria === categoriaFiltro;
      const matchTecnologia = !tecnologiaFiltro || produto.tecnologia === tecnologiaFiltro;
      
      return matchBusca && matchCategoria && matchTecnologia;
    });
  }, [busca, categoriaFiltro, tecnologiaFiltro]);

  const limparFiltros = () => {
    setCategoriaFiltro('');
    setTecnologiaFiltro('');
    setBusca('');
  };

  const filtrosAtivos = categoriaFiltro || tecnologiaFiltro;

  return (
    <div className="produtos-page">
      {/* Hero Section */}
      <section className="produtos-hero">
        <div className="produtos-hero-overlay">
          <h1 className="produtos-hero-title">Produtos</h1>
          <p className="produtos-hero-breadcrumb">Home / Produtos</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="produtos-main">
        <div className="produtos-container">
          {/* Busca e Filtros Mobile Toggle */}
          <div className="produtos-controls">
            <div className="produtos-search">
              <svg className="produtos-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="produtos-search-input"
              />
            </div>
            <button 
              className="produtos-filter-toggle"
              onClick={() => setMostrarFiltros(!mostrarFiltros)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6"/>
                <line x1="4" y1="12" x2="20" y2="12"/>
                <line x1="4" y1="18" x2="20" y2="18"/>
              </svg>
              Filtros
              {filtrosAtivos && <span className="filter-badge" />}
            </button>
          </div>

          <div className="produtos-layout">
            {/* Sidebar de Filtros */}
            <aside className={`produtos-sidebar ${mostrarFiltros ? 'show' : ''}`}>
              <div className="sidebar-header">
                <h3>Filtros</h3>
                <button 
                  className="sidebar-close"
                  onClick={() => setMostrarFiltros(false)}
                >
                  ×
                </button>
              </div>

              {filtrosAtivos && (
                <button className="limpar-filtros" onClick={limparFiltros}>
                  Limpar filtros
                </button>
              )}

              {/* Filtro de Categoria */}
              <div className="filter-group">
                <h4>Categorias</h4>
                <div className="filter-options">
                  {categorias.map(cat => (
                    <label key={cat} className="filter-option">
                      <input
                        type="radio"
                        name="categoria"
                        checked={categoriaFiltro === cat}
                        onChange={() => setCategoriaFiltro(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro de Tecnologia */}
              <div className="filter-group">
                <h4>Tecnologia</h4>
                <div className="filter-options">
                  {tecnologias.map(tec => (
                    <label key={tec} className="filter-option">
                      <input
                        type="radio"
                        name="tecnologia"
                        checked={tecnologiaFiltro === tec}
                        onChange={() => setTecnologiaFiltro(tec || '')}
                      />
                      <span>{tec}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Grid de Produtos */}
            <main className="produtos-content">
              <div className="produtos-info">
                <p className="produtos-count">
                  {produtosFiltrados.length} {produtosFiltrados.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                </p>
              </div>

              {produtosFiltrados.length > 0 ? (
                <div className="produtos-grid">
                  {produtosFiltrados.map(produto => (
                    <article key={produto.id} className="produto-card">
                      <a href={produto.link} className="produto-link">
                        <div className="produto-image">
                          <img src={produto.imagem} alt={produto.nome} />
                          <div className="produto-overlay">
                            <span className="produto-view">Ver Produto</span>
                          </div>
                        </div>
                        <div className="produto-info">
                          <h3 className="produto-nome">{produto.nome}</h3>
                          {produto.descricao && (
                            <p className="produto-descricao">{produto.descricao}</p>
                          )}
                          <div className="produto-tags">
                            <span className="produto-tag">{produto.categoria}</span>
                            {produto.tecnologia && (
                              <span className="produto-tag secondary">{produto.tecnologia}</span>
                            )}
                          </div>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="produtos-empty">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  <h3>Nenhum produto encontrado</h3>
                  <p>Tente ajustar seus filtros ou busca</p>
                  {filtrosAtivos && (
                    <button className="btn-limpar" onClick={limparFiltros}>
                      Limpar filtros
                    </button>
                  )}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="produtos-about">
        <div className="produtos-about-container">
          <h2>Sobre Nossos Produtos</h2>
          <p>
            A qualidade de produtos adesivos e colantes refere-se à capacidade do produto de aderir firmemente a uma superfície e manter essa aderência ao longo do tempo. A qualidade do adesivo é determinada por vários fatores, incluindo a sua composição química, as propriedades físicas e mecânicas do adesivo, a forma como é aplicado e as condições ambientais em que é utilizado.
          </p>
          <p>
            A escolha do adesivo certo para uma aplicação específica é fundamental para garantir um bom desempenho e resultados satisfatórios.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Produtos;