import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './AdminProdutos.css';

// Tipos
interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
  ativo: boolean;
  criado_em: string;
}

const AdminProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editando, setEditando] = useState(false);
  const [produtoAtual, setProdutoAtual] = useState<Partial<Produto>>({});
  const { token, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  // Verificar se é admin
  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    }
  }, [isAdmin, navigate]);

  // Buscar produtos
  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await fetch('http://localhost:3000/produtos/admin/todos', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setProdutos(data.data);
      } else {
        setError('Erro ao carregar produtos');
      }
    } catch (err) {
      console.error('Erro ao buscar produtos:', err);
      setError('Erro ao carregar produtos');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editando
        ? `http://localhost:3000/produtos/${produtoAtual.id}`
        : 'http://localhost:3000/produtos';

      const method = editando ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(produtoAtual),
      });

      const data = await response.json();

      if (data.success) {
        setShowModal(false);
        setProdutoAtual({});
        setEditando(false);
        fetchProdutos();
      } else {
        alert(data.message || 'Erro ao salvar produto');
      }
    } catch (err) {
      console.error('Erro ao salvar produto:', err);
      alert('Erro ao salvar produto');
    }
  };

  const handleDesativar = async (id: number) => {
    if (!confirm('Deseja realmente desativar este produto?')) return;

    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}/desativar`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        fetchProdutos();
      } else {
        alert(data.message || 'Erro ao desativar produto');
      }
    } catch (err) {
      console.error('Erro ao desativar produto:', err);
      alert('Erro ao desativar produto');
    }
  };

  const handleAtivar = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}/ativar`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        fetchProdutos();
      } else {
        alert(data.message || 'Erro ao ativar produto');
      }
    } catch (err) {
      console.error('Erro ao ativar produto:', err);
      alert('Erro ao ativar produto');
    }
  };

  const abrirModal = (produto?: Produto) => {
    if (produto) {
      setProdutoAtual(produto);
      setEditando(true);
    } else {
      setProdutoAtual({
        nome: '',
        descricao: '',
        preco: 0,
        imagem: '',
        categoria: 'categorias',
        ativo: true,
      });
      setEditando(false);
    }
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
    setProdutoAtual({});
    setEditando(false);
  };

  if (loading) {
    return <div className="admin-container"><div className="loading">Carregando...</div></div>;
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div>
          <h1>Gerenciar Produtos</h1>
          <p>Painel administrativo</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary" onClick={() => abrirModal()}>
            + Novo Produto
          </button>
          <button className="btn-logout" onClick={logout}>
            Sair
          </button>
        </div>
      </header>

      {error && <div className="error-message">{error}</div>}

      <div className="produtos-table-container">
        <table className="produtos-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className={!produto.ativo ? 'inativo' : ''}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                <td>
                  <span className={`status ${produto.ativo ? 'ativo' : 'inativo'}`}>
                    {produto.ativo ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
                <td className="acoes">
                  <button className="btn-edit" onClick={() => abrirModal(produto)}>
                    Editar
                  </button>
                  {produto.ativo ? (
                    <button className="btn-delete" onClick={() => handleDesativar(produto.id)}>
                      Desativar
                    </button>
                  ) : (
                    <button className="btn-activate" onClick={() => handleAtivar(produto.id)}>
                      Ativar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editando ? 'Editar Produto' : 'Novo Produto'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  value={produtoAtual.nome || ''}
                  onChange={(e) => setProdutoAtual({ ...produtoAtual, nome: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Descrição</label>
                <textarea
                  value={produtoAtual.descricao || ''}
                  onChange={(e) => setProdutoAtual({ ...produtoAtual, descricao: e.target.value })}
                  required
                  rows={4}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preço</label>
                  <input
                    type="number"
                    step="0.01"
                    value={produtoAtual.preco || ''}
                    onChange={(e) => setProdutoAtual({ ...produtoAtual, preco: parseFloat(e.target.value) })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Categoria</label>
                  <select
                    value={produtoAtual.categoria || 'categorias'}
                    onChange={(e) => setProdutoAtual({ ...produtoAtual, categoria: e.target.value })}
                    required
                  >
                    <option value="categorias">Categorias</option>
                    <option value="embalagens">Embalagens</option>
                    <option value="materiais">Materiais</option>
                    <option value="tecnologia">Tecnologia</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>URL da Imagem</label>
                <input
                  type="url"
                  value={produtoAtual.imagem || ''}
                  onChange={(e) => setProdutoAtual({ ...produtoAtual, imagem: e.target.value })}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={fecharModal}>
                  Cancelar
                </button>
                <button type="submit" className="btn-save">
                  {editando ? 'Atualizar' : 'Criar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProdutos;
