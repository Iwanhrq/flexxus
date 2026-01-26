import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProdutoDetalhes.css';
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
  descricaoCompleta?: string;
  aplicacoes?: string[];
  sku?: string;
}

const PRODUTOS_MOCK: Produto[] = [
  {
    id: 1,
    nome: 'AC 082',
    descricao: 'Adesivo de contato para aplicações diversas',
    descricaoCompleta: 'Adesivo utilizado para colagem, fórmicas, couro, tecido, madeira, borracha, cortiças, sobre vários substratos como concreto, cerâmicas, chapa metálicas, papelão, e outras fibras (cola universal).',
    aplicacoes: ['Na linha eletro-eletrônica pode ser utilizado na fixação das guarnições', 'Colagem de fórmicas e laminados', 'Montagem de móveis e painéis'],
    imagem: imagemCompartilhada,
    categoria: 'Automotiva',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['ABS', 'PP', 'PVC'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-082',
    sku: '82'
  },
  {
    id: 2,
    nome: 'AC 1113',
    descricao: 'Adesivo especial para aplicações industriais',
    descricaoCompleta: 'Adesivo de alta performance desenvolvido especialmente para aplicações industriais que exigem forte aderência e resistência.',
    aplicacoes: ['Montagem de espumas em processos industriais', 'Colagem de tecidos técnicos', 'Aplicações em linha de produção'],
    imagem: imagemCompartilhada,
    categoria: 'Industrial',
    embalagem: 'Balde 15 kgs',
    materiais: ['Espuma de PU', 'Tecido'],
    tecnologia: 'Base água',
    link: '/produto/ac-1113',
    sku: '1113'
  },
  {
    id: 3,
    nome: 'AC 201',
    descricao: 'Adesivo para colagem de espumas',
    descricaoCompleta: 'Adesivo especialmente formulado para colagem de espumas e tecidos, proporcionando excelente aderência e flexibilidade.',
    aplicacoes: ['Indústria moveleira', 'Colchões e estofados', 'Isolamento acústico'],
    imagem: imagemAC201AC298,
    categoria: 'Industrial',
    embalagem: 'Galão 2,8 kgs',
    materiais: ['Espuma', 'Tecido'],
    tecnologia: 'Base água',
    link: '/produto/te-3000',
    sku: '201'
  },
  {
    id: 4,
    nome: 'AC 298',
    descricao: 'Adesivo de alta performance',
    descricaoCompleta: 'Adesivo de contato de alta performance, ideal para aplicações que exigem forte aderência e resistência a altas temperaturas.',
    aplicacoes: ['Montagem automotiva', 'Colagem de borrachas', 'Aplicações estruturais'],
    imagem: imagemAC201AC298,
    categoria: 'Automotiva',
    embalagem: 'Lata 13 kg',
    materiais: ['Borracha', 'Metálicos'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-298',
    sku: '298'
  },
  {
    id: 5,
    nome: 'AC 372',
    descricao: 'Adesivo resistente a altas temperaturas',
    descricaoCompleta: 'Adesivo especialmente desenvolvido para aplicações que exigem resistência a altas temperaturas, mantendo a aderência mesmo em condições extremas.',
    aplicacoes: ['Montagem de alto-falantes', 'Componentes eletrônicos', 'Aplicações em motores'],
    imagem: imagemCompartilhada,
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['ABS', 'Metálicos'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-372',
    sku: '372'
  },
  {
    id: 6,
    nome: 'AC 379',
    descricao: 'Adesivo para colagem de bordas',
    descricaoCompleta: 'Adesivo desenvolvido especialmente para aplicação de fitas de borda em móveis e painéis, proporcionando acabamento profissional.',
    aplicacoes: ['Colagem de bordas em móveis', 'Acabamento de painéis', 'Indústria moveleira'],
    imagem: imagemCompartilhada,
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['Celulose', 'Tecido'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-379',
    sku: '379'
  },
  {
    id: 7,
    nome: 'AC 385 X',
    descricao: 'Adesivo aditivado para plásticos',
    descricaoCompleta: 'Adesivo de contato aditivado, especialmente formulado para colagem de plásticos de difícil adesão como PP e PE.',
    aplicacoes: ['Colagem de para-choques', 'Montagem de painéis plásticos', 'Componentes automotivos'],
    imagem: imagemCompartilhada,
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['PP', 'ABS'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-385-x',
    sku: '385X'
  },
  {
    id: 8,
    nome: 'AC 560',
    descricao: 'Adesivo de secagem rápida',
    descricaoCompleta: 'Adesivo de contato com secagem rápida, ideal para aplicações que exigem alta produtividade e tempo reduzido de montagem.',
    aplicacoes: ['Montagem de cones de papel', 'Fixação de componentes eletrônicos', 'Linha de produção rápida'],
    imagem: imagemCompartilhada,
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: 'Lata 0,720 Kg',
    materiais: ['Celulose', 'Cone de papel'],
    tecnologia: 'Base solvente',
    link: '/produto/ac-560',
    sku: '560'
  },
  {
    id: 9,
    nome: 'ACN 205',
    descricao: 'Adesivo cianoacrilato de alta viscosidade',
    descricaoCompleta: 'Adesivo instantâneo de alta viscosidade, ideal para colagens rápidas e precisas em diversos materiais.',
    aplicacoes: ['Reparos eletrônicos', 'Montagem de precisão', 'Colagens instantâneas'],
    imagem: imagemACN205,
    categoria: 'Eletrônicos e Alto falantes',
    embalagem: '2,5ml',
    materiais: ['Metálicos', 'Plásticos'],
    tecnologia: 'Solvente Free',
    link: '/produto/te-3003',
    sku: '205'
  },
  {
    id: 10,
    nome: 'ACN 360',
    descricao: 'Adesivo cianoacrilato multifuncional',
    descricaoCompleta: 'Adesivo instantâneo de uso geral, com excelente aderência em diversos substratos.',
    aplicacoes: ['Manutenção industrial', 'Reparos gerais', 'Montagem de componentes'],
    imagem: imagemCompartilhada,
    categoria: 'Industrial',
    embalagem: '2,5ml',
    materiais: ['Metálicos', 'Borracha'],
    tecnologia: 'Solvente Free',
    link: '/produto/acn-360',
    sku: '360'
  },
  {
    id: 11,
    nome: 'ADESICOLA M5',
    descricao: 'Adesivo para colagem de espumas',
    descricaoCompleta: 'Adesivo base água desenvolvido para colagem de espumas de poliuretano, proporcionando aderência permanente e flexível.',
    aplicacoes: ['Indústria de colchões', 'Estofamentos', 'Isolamento térmico e acústico'],
    imagem: imagemCompartilhada,
    categoria: 'Industrial',
    embalagem: 'Balde 15 kgs',
    materiais: ['Espuma de PU'],
    tecnologia: 'Base água',
    link: '/produto/478',
    sku: 'M5'
  },
  {
    id: 12,
    nome: 'ALICATE PARA APLICAÇÃO DE FITA DUPLA FACE GLASING',
    descricao: 'Alicate para aplicação de fitas adesivas',
    descricaoCompleta: 'Ferramenta profissional para aplicação precisa de fitas adesivas dupla face, garantindo acabamento perfeito.',
    aplicacoes: ['Instalação de vidros automotivos', 'Aplicação de fitas estruturais', 'Montagem profissional'],
    imagem: imagemAlicate,
    categoria: 'Dupla face',
    embalagem: 'Unidade',
    materiais: ['Metal'],
    tecnologia: 'Acessório',
    link: '/produto/alicate-rolete',
    sku: 'ALC-001'
  },
  {
    id: 13,
    nome: 'CARPECOL',
    descricao: 'Cola para carpetes e revestimentos',
    descricaoCompleta: 'Adesivo especialmente desenvolvido para fixação de carpetes e revestimentos têxteis em diversos substratos.',
    aplicacoes: ['Instalação de carpetes', 'Revestimentos de pisos', 'Decoração de interiores'],
    imagem: 'https://via.placeholder.com/300x300/ff6b35/ffffff?text=CARPECOL',
    categoria: 'Imobiliaria',
    embalagem: 'Balde 3,6 Kgs',
    materiais: ['Carpete', 'Piso', 'Compensado'],
    tecnologia: 'Base água',
    link: '/produto/carpecol',
    sku: 'CRP-001'
  },
  {
    id: 14,
    nome: 'CONJUNTO EPOXI 700A / 701B',
    descricao: 'Sistema epóxi bicomponente para colagens estruturais',
    descricaoCompleta: 'Sistema epóxi bicomponente de alta resistência, ideal para colagens estruturais e reparos que exigem máxima performance.',
    aplicacoes: ['Colagens estruturais', 'Reparos em concreto', 'Fixação de metais'],
    imagem: imagemEpoxiGelFXFiltro,
    categoria: 'Industrial',
    embalagem: '0,4 kgs',
    materiais: ['Metálicos', 'Ceramica', 'Concreto'],
    tecnologia: 'Solvente Free',
    link: '/produto/te-7002-a-b',
    sku: '700AB'
  },
  {
    id: 15,
    nome: 'ENCARTELADOS FLEXXFIX',
    descricao: 'Adesivos instantâneos encartelados',
    descricaoCompleta: 'Linha completa de adesivos instantâneos encartelados para uso profissional e doméstico.',
    aplicacoes: ['Reparos gerais', 'Colagens instantâneas', 'Manutenção'],
    imagem: imagemFlexxfix,
    categoria: 'Industrial',
    embalagem: '3,5 kgs',
    materiais: ['Plásticos', 'Borracha', 'Couro'],
    tecnologia: 'Solvente Free',
    link: '/produto/flexxfix',
    sku: 'FLX-001'
  },
  {
    id: 16,
    nome: 'FILTRO SOLAR',
    descricao: 'Adesivo para aplicação de filtros solares',
    descricaoCompleta: 'Adesivo especialmente desenvolvido para aplicação de películas e filtros solares em vidros automotivos.',
    aplicacoes: ['Instalação de películas automotivas', 'Filtros solares', 'Blindagem de vidros'],
    imagem: imagemEpoxiGelFXFiltro,
    categoria: 'Automotiva',
    embalagem: '0,8 kgs',
    materiais: ['Vidro', 'Plásticos'],
    tecnologia: 'Base água',
    link: '/produto/te-8000',
    sku: 'FS-001'
  },
  {
    id: 17,
    nome: 'FITA DUPLA FACE FUME',
    descricao: 'Fita adesiva dupla face na cor fumê',
    descricaoCompleta: 'Fita adesiva dupla face de alta aderência na cor fumê, ideal para aplicações que exigem discrição visual.',
    aplicacoes: ['Fixação de emblemas', 'Colagem de molduras', 'Aplicações automotivas'],
    imagem: imagemFitaFume,
    categoria: 'Dupla face',
    embalagem: '0,9mm',
    materiais: ['Plásticos', 'Metálicos', 'Vidro'],
    tecnologia: 'Base acrílica',
    link: '/produto/fita-dupla-face-fume',
    sku: 'FDF-001'
  },
  {
    id: 18,
    nome: 'FITA DUPLA FACE GLASING',
    descricao: 'Fita estrutural para vidros automotivos',
    descricaoCompleta: 'Fita estrutural de alta performance para instalação de vidros automotivos, proporcionando segurança e vedação.',
    aplicacoes: ['Instalação de para-brisas', 'Montagem de vidros laterais', 'Reparos automotivos'],
    imagem: imagemFitasMultiTransGlasing,
    categoria: 'Dupla face',
    embalagem: '1,1mm',
    materiais: ['Vidro', 'Metálicos'],
    tecnologia: 'Base acrílica',
    link: '/produto/fita-dupla-face-glasing',
    sku: 'GLZ-001'
  },
  {
    id: 19,
    nome: 'FITA DUPLA FACE MULTICAMADAS',
    descricao: 'Fita de alta aderência multicamadas',
    descricaoCompleta: 'Fita dupla face multicamadas de alta aderência, ideal para aplicações que exigem forte fixação permanente.',
    aplicacoes: ['Montagem de painéis', 'Fixação permanente', 'Aplicações estruturais'],
    imagem: imagemFitasMultiTransGlasing,
    categoria: 'Dupla face',
    embalagem: '1,5mm',
    materiais: ['Plásticos', 'Metálicos', 'Compensado'],
    tecnologia: 'Base acrílica',
    link: '/produto/dupla-face-multicamadas',
    sku: 'MUL-001'
  },
  {
    id: 20,
    nome: 'FITA DUPLA FACE POLIESTER',
    descricao: 'Fita com base em poliéster',
    descricaoCompleta: 'Fita dupla face com base em poliéster, resistente a altas temperaturas e com excelente aderência.',
    aplicacoes: ['Aplicações eletrônicas', 'Fixação de componentes', 'Isolamento elétrico'],
    imagem: 'https://via.placeholder.com/300x300/ffb380/ffffff?text=POLIESTER',
    categoria: 'Dupla face',
    embalagem: '0,2mm',
    materiais: ['PET', 'Plásticos'],
    tecnologia: 'Base acrílica',
    link: '/produto/fita-dupla-face-poliester',
    sku: 'POL-001'
  },
  {
    id: 21,
    nome: 'FITA DUPLA FACE TRANSPARENTE',
    descricao: 'Fita adesiva transparente para uso geral',
    descricaoCompleta: 'Fita dupla face transparente de uso geral, ideal para aplicações onde a estética é importante.',
    aplicacoes: ['Fixação de displays', 'Colagem transparente', 'Aplicações decorativas'],
    imagem: imagemFitasMultiTransGlasing,
    categoria: 'Dupla face',
    embalagem: '0,5mm',
    materiais: ['Plásticos', 'Vidro', 'Papel'],
    tecnologia: 'Base acrílica',
    link: '/produto/dupla-face-transparente',
    sku: 'TRA-001'
  },
  {
    id: 22,
    nome: 'FX 809',
    descricao: 'Adesivo de contato universal',
    descricaoCompleta: 'Adesivo de contato universal de alta performance, ideal para diversas aplicações industriais e comerciais.',
    aplicacoes: ['Colagem de couro', 'Montagem de estofados', 'Aplicações gerais'],
    imagem: imagemEpoxiGelFXFiltro,
    categoria: 'Industrial',
    embalagem: 'Lata 14 kgs',
    materiais: ['Couro', 'Borracha', 'Madeira'],
    tecnologia: 'Base solvente',
    link: '/produto/809',
    sku: '809'
  },
  {
    id: 23,
    nome: 'GEL DE BORDA INCOLOR / PRETO',
    descricao: 'Gel para aplicação em bordas de móveis',
    descricaoCompleta: 'Gel especial para colagem de fitas de borda em móveis, disponível nas versões incolor e preto.',
    aplicacoes: ['Colagem de fitas de borda', 'Acabamento de móveis', 'Indústria moveleira'],
    imagem: imagemEpoxiGelFXFiltro,
    categoria: 'Imobiliaria',
    embalagem: '1,0 kgs',
    materiais: ['Madeira', 'Compensado', 'Formica'],
    tecnologia: 'Base solvente',
    link: '/produto/te-8001',
    sku: 'GEL-001'
  },
  {
    id: 24,
    nome: 'PRIMER 2825',
    descricao: 'Primer promotor de aderência',
    descricaoCompleta: 'Primer promotor de aderência para plásticos de baixa energia superficial, essencial para preparação de superfícies.',
    aplicacoes: ['Preparação de PP e PE', 'Aplicações automotivas', 'Melhoria de aderência'],
    imagem: imagemPrimer,
    categoria: 'Automotiva',
    embalagem: '4,5 kgs',
    materiais: ['PP', 'PE', 'Plásticos'],
    tecnologia: 'Base solvente',
    link: '/produto/primer',
    sku: '2825'
  }
];

interface ModalOrcamentoProps {
  isOpen: boolean;
  onClose: () => void;
  produto: Produto;
}

const ModalOrcamento: React.FC<ModalOrcamentoProps> = ({ isOpen, onClose, produto }) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    quantidade: '',
    mensagem: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Montar mensagem para WhatsApp
    const mensagem = `
*Solicitação de Orçamento*

*Produto:* ${produto.nome}
*SKU:* ${produto.sku || 'N/A'}

*Dados do Cliente:*
*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Quantidade:* ${formData.quantidade}

*Mensagem:*
${formData.mensagem || 'Sem mensagem adicional'}
    `.trim();

    // Número do WhatsApp (substitua pelo número real)
    const numeroWhatsApp = '5519998316550';
    const mensagemEncoded = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Limpar formulário e fechar modal
    setFormData({
      nome: '',
      empresa: '',
      email: '',
      telefone: '',
      quantidade: '',
      mensagem: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>Solicitar Orçamento</h2>
          <p className="modal-produto-nome">{produto.nome}</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="nome">Nome completo *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="empresa">Empresa *</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
              placeholder="Nome da empresa"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone *</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="quantidade">Quantidade estimada *</label>
            <input
              type="text"
              id="quantidade"
              name="quantidade"
              value={formData.quantidade}
              onChange={handleChange}
              required
              placeholder="Ex: 10 unidades, 50kg, etc"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem adicional (opcional)</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows={4}
              placeholder="Informações adicionais sobre sua necessidade..."
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-submit">
              Enviar Orçamento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProdutoDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'descricao' | 'info'>('descricao');
  const [modalAberto, setModalAberto] = useState(false);

  // Encontrar o produto pelo link ou ID
  const produto = PRODUTOS_MOCK.find(p => 
    p.link === `/produto/${id}` || p.id.toString() === id
  );

  // Produtos relacionados (mesma categoria, exceto o atual)
  const produtosRelacionados = produto 
    ? PRODUTOS_MOCK.filter(p => 
        p.categoria === produto.categoria && p.id !== produto.id
      ).slice(0, 4)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!produto) {
    return (
      <div className="produto-nao-encontrado">
        <h2>Produto não encontrado</h2>
        <button onClick={() => navigate('/produtos')} className="btn-voltar">
          Voltar para Produtos
        </button>
      </div>
    );
  }

  const handleFalarVendedor = () => {
    const mensagem = `Olá, gostaria de saber mais sobre o produto: ${produto.nome}`;
    const numeroWhatsApp = '5519998316550';
    const mensagemEncoded = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div className="produto-detalhes-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/produtos">Produtos</a>
          <span>/</span>
          <span>{produto.nome}</span>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="produto-detalhes-container">
        <div className="produto-detalhes-content">
          {/* Imagem do Produto */}
          <div className="produto-imagem-section">
            <div className="produto-imagem-principal">
              <img src={produto.imagem} alt={produto.nome} />
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="produto-info-section">
            <h1 className="produto-titulo">{produto.nome}</h1>
            
            {produto.sku && (
              <p className="produto-sku">SKU: {produto.sku}</p>
            )}

            <div className="produto-categorias">
              <span className="categoria-badge">{produto.categoria}</span>
              {produto.tecnologia && (
                <span className="categoria-badge secondary">{produto.tecnologia}</span>
              )}
            </div>

            <div className="produto-descricao-curta">
              {produto.descricao}
            </div>

            {/* Informações Rápidas */}
            <div className="produto-info-rapida">
              {produto.embalagem && (
                <div className="info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                  <div>
                    <strong>Embalagem</strong>
                    <p>{produto.embalagem}</p>
                  </div>
                </div>
              )}

              {produto.materiais && produto.materiais.length > 0 && (
                <div className="info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <div>
                    <strong>Materiais</strong>
                    <p>{produto.materiais.join(', ')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Ações */}
            <div className="produto-acoes">
              <button 
                className="btn-orcamento"
                onClick={() => setModalAberto(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                </svg>
                Solicitar Orçamento
              </button>

              <button 
                className="btn-whatsapp"
                onClick={handleFalarVendedor}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar com Vendedor
              </button>
            </div>
          </div>
        </div>

        {/* Tabs de Informações */}
        <div className="produto-tabs">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === 'descricao' ? 'active' : ''}`}
              onClick={() => setActiveTab('descricao')}
            >
              Descrição
            </button>
            <button
              className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              Informações Adicionais
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'descricao' && (
              <div className="tab-panel">
                <h3>Descrição</h3>
                <p>{produto.descricaoCompleta || produto.descricao}</p>
                
                {produto.aplicacoes && produto.aplicacoes.length > 0 && (
                  <div className="aplicacoes-section">
                    <h4>Aplicações</h4>
                    <ul>
                      {produto.aplicacoes.map((aplicacao, index) => (
                        <li key={index}>{aplicacao}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'info' && (
              <div className="tab-panel">
                <h3>Informações Adicionais</h3>
                <table className="info-table">
                  <tbody>
                    {produto.embalagem && (
                      <tr>
                        <td><strong>Embalagem</strong></td>
                        <td>{produto.embalagem}</td>
                      </tr>
                    )}
                    {produto.materiais && produto.materiais.length > 0 && (
                      <tr>
                        <td><strong>Materiais</strong></td>
                        <td>{produto.materiais.join(', ')}</td>
                      </tr>
                    )}
                    {produto.tecnologia && (
                      <tr>
                        <td><strong>Tecnologia</strong></td>
                        <td>{produto.tecnologia}</td>
                      </tr>
                    )}
                    {produto.categoria && (
                      <tr>
                        <td><strong>Categoria</strong></td>
                        <td>{produto.categoria}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Produtos Relacionados */}
        {produtosRelacionados.length > 0 && (
          <div className="produtos-relacionados">
            <h2>Produtos Relacionados</h2>
            <div className="produtos-relacionados-grid">
              {produtosRelacionados.map(produtoRel => (
                <article key={produtoRel.id} className="produto-card-mini">
                  <a href={produtoRel.link}>
                    <div className="produto-imagem-mini">
                      <img src={produtoRel.imagem} alt={produtoRel.nome} />
                    </div>
                    <div className="produto-info-mini">
                      <h3>{produtoRel.nome}</h3>
                      <span className="ver-produto">Ver Produto →</span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal de Orçamento */}
      <ModalOrcamento 
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        produto={produto}
      />
    </div>
  );
};

export default ProdutoDetalhes;