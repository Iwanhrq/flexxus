import React, { useState, useEffect } from 'react';
import './Produtos.css';

// Tipos
interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
  ativo: boolean;
}

interface ProdutosPorCategoria {
  categorias: Produto[];
  embalagens: Produto[];
  materiais: Produto[];
  tecnologia: Produto[];
}

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutosPorCategoria>({
    categorias: [],
    embalagens: [],
    materiais: [],
    tecnologia: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Buscar produtos da API
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3000/produtos');
        const data = await response.json();

        if (data.success) {
          setProdutos(data.data);
        } else {
          setError('Erro ao carregar produtos');
        }
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Erro ao carregar produtos. Verifique se o servidor está rodando.');
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  // Renderizar card de produto
  const renderProduto = (produto: Produto) => (
    <div key={produto.id} className="produto-card">
      <div className="produto-imagem">
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      <div className="produto-info">
        <h3 className="produto-nome">{produto.nome}</h3>
        <p className="produto-descricao">{produto.descricao}</p>
        <p className="produto-preco">
          R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );

  // Renderizar categoria
  const renderCategoria = (titulo: string, key: keyof ProdutosPorCategoria) => {
    if (produtos[key].length === 0) return null;

    return (
      <section className="categoria-section">
        <h2 className="categoria-titulo">{titulo}</h2>
        <div className="produtos-grid">
          {produtos[key].map(renderProduto)}
        </div>
      </section>
    );
  };

  if (loading) {
    return (
      <div className="produtos-container">
        <div className="loading">Carregando produtos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="produtos-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="produtos-container">
      <header className="produtos-header">
        <h1>Nossos Produtos</h1>
        <p>Conheça nossas soluções organizadas por categoria</p>
      </header>

      {renderCategoria('Categorias', 'categorias')}
      {renderCategoria('Embalagens', 'embalagens')}
      {renderCategoria('Materiais', 'materiais')}
      {renderCategoria('Tecnologia', 'tecnologia')}
    </div>
  );
};

export default Produtos;
