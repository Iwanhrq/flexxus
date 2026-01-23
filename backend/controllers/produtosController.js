import pool from '../config/database.js';

// GET /produtos - Listar apenas produtos ativos (para página pública)
export const listarProdutosAtivos = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM produtos WHERE ativo = true ORDER BY categoria, criado_em DESC'
    );
    
    // Organizar produtos por categoria
    const produtosPorCategoria = {
      categorias: [],
      embalagens: [],
      materiais: [],
      tecnologia: []
    };

    result.rows.forEach(produto => {
      produtosPorCategoria[produto.categoria].push(produto);
    });

    res.json({
      success: true,
      data: produtosPorCategoria,
      total: result.rows.length
    });
  } catch (error) {
    console.error('Erro ao listar produtos ativos:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar produtos'
    });
  }
};

// GET /produtos/admin - Listar todos os produtos (incluindo inativos, para admin)
export const listarTodosProdutos = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM produtos ORDER BY criado_em DESC'
    );

    res.json({
      success: true,
      data: result.rows,
      total: result.rows.length
    });
  } catch (error) {
    console.error('Erro ao listar todos os produtos:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar produtos'
    });
  }
};

// GET /produtos/:id - Buscar produto por ID
export const buscarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM produtos WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado'
      });
    }

    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar produto'
    });
  }
};

// POST /produtos - Criar novo produto (apenas admin)
export const criarProduto = async (req, res) => {
  try {
    const { nome, descricao, preco, imagem, categoria } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !descricao || !preco || !categoria) {
      return res.status(400).json({
        success: false,
        message: 'Nome, descrição, preço e categoria são obrigatórios'
      });
    }

    // Validar categoria
    const categoriasValidas = ['categorias', 'embalagens', 'materiais', 'tecnologia'];
    if (!categoriasValidas.includes(categoria)) {
      return res.status(400).json({
        success: false,
        message: 'Categoria inválida. Use: categorias, embalagens, materiais ou tecnologia'
      });
    }

    // Inserir produto no banco
    const result = await pool.query(
      `INSERT INTO produtos (nome, descricao, preco, imagem, categoria) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [nome, descricao, preco, imagem || null, categoria]
    );

    res.status(201).json({
      success: true,
      message: 'Produto criado com sucesso',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao criar produto'
    });
  }
};

// PUT /produtos/:id - Atualizar produto (apenas admin)
export const atualizarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, preco, imagem, categoria, ativo } = req.body;

    // Verificar se o produto existe
    const produtoExiste = await pool.query(
      'SELECT * FROM produtos WHERE id = $1',
      [id]
    );

    if (produtoExiste.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado'
      });
    }

    // Validar categoria se fornecida
    if (categoria) {
      const categoriasValidas = ['categorias', 'embalagens', 'materiais', 'tecnologia'];
      if (!categoriasValidas.includes(categoria)) {
        return res.status(400).json({
          success: false,
          message: 'Categoria inválida'
        });
      }
    }

    // Atualizar produto
    const result = await pool.query(
      `UPDATE produtos 
       SET nome = COALESCE($1, nome),
           descricao = COALESCE($2, descricao),
           preco = COALESCE($3, preco),
           imagem = COALESCE($4, imagem),
           categoria = COALESCE($5, categoria),
           ativo = COALESCE($6, ativo)
       WHERE id = $7
       RETURNING *`,
      [nome, descricao, preco, imagem, categoria, ativo, id]
    );

    res.json({
      success: true,
      message: 'Produto atualizado com sucesso',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao atualizar produto'
    });
  }
};

// PUT /produtos/:id/desativar - Desativar produto (remoção lógica, apenas admin)
export const desativarProduto = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar se o produto existe
    const produtoExiste = await pool.query(
      'SELECT * FROM produtos WHERE id = $1',
      [id]
    );

    if (produtoExiste.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado'
      });
    }

    // Desativar produto (remoção lógica)
    const result = await pool.query(
      'UPDATE produtos SET ativo = false WHERE id = $1 RETURNING *',
      [id]
    );

    res.json({
      success: true,
      message: 'Produto desativado com sucesso',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao desativar produto:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao desativar produto'
    });
  }
};

// PUT /produtos/:id/ativar - Reativar produto (apenas admin)
export const ativarProduto = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'UPDATE produtos SET ativo = true WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Produto não encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Produto reativado com sucesso',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao reativar produto:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao reativar produto'
    });
  }
};
