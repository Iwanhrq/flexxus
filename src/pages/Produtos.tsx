import React, { useState, useMemo } from 'react';
import './Produtos.css';
import imagemCompartilhada from '../assets/AC_082; AC_1113; AC_372; AC_379; AC_385_X; AC_560; ACN_360; ADESICOLA M5.webp';
import imagemAC201AC298 from '../assets/AC_201; AC_298.webp';
import imagemACN205 from '../assets/ACN_205.webp';
import imagemAlicate from '../assets/ALICATE PARA APLICAÇÃO DE FITA DUPLA FACE GLASING.webp';
import imagemEpoxiGelFXFiltro from '../assets/CONJUNTO EPOXI 700A _ 701B; GEL DE BORDA INCOLOR _ PRETO; FX 809; FILTRO SOLAR.webp';
import imagemFlexxfix from '../assets/ENCARTELADOS FLEXXFIX.webp';
import imagemFitaFume from '../assets/FITA DUPLA FACE FUME.webp';
import imagemFitasMultiTransGlasing from '../assets/FITA DUPLA FACE MULTICAMADAS; FITA DUPLA CAMADA TRANSPARENTE; FITA DUPLA FACE GLASING.webp';
import imagemPrimer from '../assets/PRIMER 2825.webp';

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
    imagem: imagemCompartilhada,
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
    imagem: imagemCompartilhada,
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
    imagem: imagemAC201AC298,
    categoria: 'Industrial',
    embalagem: 'Galão 2,8 kgs',
    materiais: ['Espuma', 'Tecido'],
    tecnologia: 'Base água',
    link: '/produto/te-3000'
  },
  {
    id: 4,
    nome: 'AC 298',
    descricao: 'Adesivo de alta performance',
    imagem: imagemAC201AC298,
    categoria: 'Automotiva',
    embalagem: 'Lata 13 kg',
    materiais: ['Borracha', 'Metálicos'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-298'
  },
  {
    id: 5,
    nome: 'AC 372',
    descricao: 'Adesivo resistente a altas temperaturas',
    imagem: imagemCompartilhada,
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['ABS', 'Metálicos'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-372'
  },
  {
    id: 6,
    nome: 'AC 379',
    descricao: 'Adesivo para colagem de bordas',
    imagem: imagemCompartilhada,
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
    imagem: imagemCompartilhada,
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
    imagem: imagemCompartilhada,
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['Celulose', 'Cone de papel'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-560'
  },
  {
    id: 9,
    nome: 'ACN 205',
    descricao: 'Adesivo cianoacrilato de alta viscosidade',
    imagem: imagemACN205,
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: '2,5ml',
    materiais: ['Metálicos', 'Plásticos'],
    tecnologia: 'Solvente Free',
    link: '/produto/te-3003'
  },
  {
    id: 10,
    nome: 'ACN 360',
    descricao: 'Adesivo cianoacrilato multifuncional',
    imagem: imagemCompartilhada,
    categoria: 'Industrial',
    embalagem: '2,5ml',
    materiais: ['Metálicos', 'Borracha'],
    tecnologia: 'Solvente Free',
    link: '/produto/acn-360'
  },
  {
    id: 11,
    nome: 'ADESICOLA M5',
    descricao: 'Adesivo para colagem de espumas',
    imagem: imagemCompartilhada,
    categoria: 'Industrial',
    embalagem: 'Balde 15 kgs',
    materiais: ['Espuma de PU'],
    tecnologia: 'Base água',
    link: '/produto/478'
  },
  {
    id: 12,
    nome: 'ALICATE PARA APLICAÇÃO DE FITA DUPLA FACE GLASING',
    descricao: 'Alicate para aplicação de fitas adesivas',
    imagem: imagemAlicate,
    categoria: 'Dupla face',
    embalagem: 'Unidade',
    materiais: ['Metal'],
    tecnologia: 'Acessório',
    link: '/produto/alicate-rolete'
  },
  {
    id: 13,
    nome: 'CARPECOL',
    descricao: 'Cola para carpetes e revestimentos',
    imagem: 'https://via.placeholder.com/300x300/ff6b35/ffffff?text=CARPECOL',
    categoria: 'Imobiliaria',
    embalagem: 'Balde 3,6 Kgs',
    materiais: ['Carpete', 'Piso', 'Compensado'],
    tecnologia: 'Base água',
    link: '/produto/carpecol'
  },
  {
    id: 14,
    nome: 'CONJUNTO EPOXI 700A / 701B',
    descricao: 'Sistema epóxi bicomponente para colagens estruturais',
    imagem: imagemEpoxiGelFXFiltro,
    categoria: 'Industrial',
    embalagem: '0,4 kgs',
    materiais: ['Metálicos', 'Ceramica', 'Concreto'],
    tecnologia: 'Solvente Free',
    link: '/produto/te-7002-a-b'
  },
  {
    id: 15,
    nome: 'ENCARTELADOS FLEXXFIX',
    descricao: 'Adesivos instantâneos encartelados',
    imagem: imagemFlexxfix,
    categoria: 'Industrial',
    embalagem: '3,5 kgs',
    materiais: ['Plásticos', 'Borracha', 'Couro'],
    tecnologia: 'Solvente Free',
    link: '/produto/flexxfix'
  },
  {
    id: 16,
    nome: 'FILTRO SOLAR',
    descricao: 'Adesivo para aplicação de filtros solares',
    imagem: imagemEpoxiGelFXFiltro,
    categoria: 'Automotiva',
    embalagem: '0,8 kgs',
    materiais: ['Vidro', 'Plásticos'],
    tecnologia: 'Base água',
    link: '/produto/te-8000'
  },
  {
    id: 17,
    nome: 'FITA DUPLA FACE FUME',
    descricao: 'Fita adesiva dupla face na cor fumê',
    imagem: imagemFitaFume,
    categoria: 'Dupla face',
    embalagem: '0,9mm',
    materiais: ['Plásticos', 'Metálicos', 'Vidro'],
    tecnologia: 'Base acrílica',
    link: '/produto/fita-dupla-face-fume'
  },
  {
    id: 18,
    nome: 'FITA DUPLA FACE GLASING',
    descricao: 'Fita estrutural para vidros automotivos',
    imagem: imagemFitasMultiTransGlasing,
    categoria: 'Dupla face',
    embalagem: '1,1mm',
    materiais: ['Vidro', 'Metálicos'],
    tecnologia: 'Base acrílica',
    link: '/produto/fita-dupla-face-glasing'
  },
  {
    id: 19,
    nome: 'FITA DUPLA FACE MULTICAMADAS',
    descricao: 'Fita de alta aderência multicamadas',
    imagem: imagemFitasMultiTransGlasing,
    categoria: 'Dupla face',
    embalagem: '1,5mm',
    materiais: ['Plásticos', 'Metálicos', 'Compensado'],
    tecnologia: 'Base acrílica',
    link: '/produto/dupla-face-multicamadas'
  },
  {
    id: 20,
    nome: 'FITA DUPLA FACE POLIESTER',
    descricao: 'Fita com base em poliéster',
    imagem: 'https://via.placeholder.com/300x300/ffb380/ffffff?text=POLIESTER',
    categoria: 'Dupla face',
    embalagem: '0,2mm',
    materiais: ['PET', 'Plásticos'],
    tecnologia: 'Base acrílica',
    link: '/produto/fita-dupla-face-poliester'
  },
  {
    id: 21,
    nome: 'FITA DUPLA FACE TRANSPARENTE',
    descricao: 'Fita adesiva transparente para uso geral',
    imagem: imagemFitasMultiTransGlasing,
    categoria: 'Dupla face',
    embalagem: '0,5mm',
    materiais: ['Plásticos', 'Vidro', 'Papel'],
    tecnologia: 'Base acrílica',
    link: '/produto/dupla-face-transparente'
  },
  {
    id: 22,
    nome: 'FX 809',
    descricao: 'Adesivo de contato universal',
    imagem: imagemEpoxiGelFXFiltro,
    categoria: 'Industrial',
    embalagem: 'Lata 14 kgs',
    materiais: ['Couro', 'Borracha', 'Madeira'],
    tecnologia: 'Base solvente',
    link: '/produto/809'
  },
  {
    id: 23,
    nome: 'GEL DE BORDA INCOLOR / PRETO',
    descricao: 'Gel para aplicação em bordas de móveis',
    imagem: imagemEpoxiGelFXFiltro,
    categoria: 'Imobiliaria',
    embalagem: '1,0 kgs',
    materiais: ['Madeira', 'Compensado', 'Formica'],
    tecnologia: 'Base solvente',
    link: '/produto/te-8001'
  },
  {
    id: 24,
    nome: 'PRIMER 2825',
    descricao: 'Primer promotor de aderência',
    imagem: imagemPrimer,
    categoria: 'Automotiva',
    embalagem: '4,5 kgs',
    materiais: ['PP', 'PE', 'Plásticos'],
    tecnologia: 'Base solvente',
    link: '/produto/primer'
  }
];

const Produtos: React.FC = () => {
  const [busca, setBusca] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('');
  const [embalagemFiltro, setEmbalagemFiltro] = useState<string>('');
  const [materialFiltro, setMaterialFiltro] = useState<string>('');
  const [tecnologiaFiltro, setTecnologiaFiltro] = useState<string>('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  // Extrair opções únicas para filtros
  const categorias = useMemo(() => {
    return Array.from(new Set(PRODUTOS_MOCK.map(p => p.categoria))).sort();
  }, []);

  const embalagens = useMemo(() => {
    return Array.from(new Set(PRODUTOS_MOCK.map(p => p.embalagem).filter(Boolean))).sort();
  }, []);

  const materiais = useMemo(() => {
    const allMateriais = PRODUTOS_MOCK.flatMap(p => p.materiais || []);
    return Array.from(new Set(allMateriais)).sort();
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
      const matchEmbalagem = !embalagemFiltro || produto.embalagem === embalagemFiltro;
      const matchMaterial = !materialFiltro || (produto.materiais?.includes(materialFiltro) ?? false);
      const matchTecnologia = !tecnologiaFiltro || produto.tecnologia === tecnologiaFiltro;
      
      return matchBusca && matchCategoria && matchEmbalagem && matchMaterial && matchTecnologia;
    });
  }, [busca, categoriaFiltro, embalagemFiltro, materialFiltro, tecnologiaFiltro]);

  const limparFiltros = () => {
    setCategoriaFiltro('');
    setEmbalagemFiltro('');
    setMaterialFiltro('');
    setTecnologiaFiltro('');
    setBusca('');
  };

  const filtrosAtivos = categoriaFiltro || embalagemFiltro || materialFiltro || tecnologiaFiltro;

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

              {/* Filtro de Embalagem */}
              <div className="filter-group">
                <h4>Embalagem</h4>
                <div className="filter-options">
                  {embalagens.map(emb => (
                    <label key={emb} className="filter-option">
                      <input
                        type="radio"
                        name="embalagem"
                        checked={embalagemFiltro === emb}
                        onChange={() => setEmbalagemFiltro(emb || '')}
                      />
                      <span>{emb}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro de Materiais */}
              <div className="filter-group">
                <h4>Materiais</h4>
                <div className="filter-options">
                  {materiais.map(mat => (
                    <label key={mat} className="filter-option">
                      <input
                        type="radio"
                        name="material"
                        checked={materialFiltro === mat}
                        onChange={() => setMaterialFiltro(mat)}
                      />
                      <span>{mat}</span>
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
            Alguns dos critérios que podem ser utilizados para avaliar a qualidade dos adesivos incluem a sua força de adesão, a sua resistência à tração, a sua capacidade de resistir a mudanças de temperatura e umidade, a sua durabilidade e a sua capacidade de ser removido sem deixar resíduos ou danificar a superfície.
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