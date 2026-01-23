import express from 'express';
import {
  listarProdutosAtivos,
  listarTodosProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  desativarProduto,
  ativarProduto
} from '../controllers/produtosController.js';
import { autenticarUsuario, verificarAdmin } from '../middleware/auth.js';

const router = express.Router();

// Rotas públicas (sem autenticação)
router.get('/', listarProdutosAtivos); // Listar apenas produtos ativos
router.get('/:id', buscarProduto); // Buscar produto específico

// Rotas protegidas (apenas admin)
router.get('/admin/todos', autenticarUsuario, verificarAdmin, listarTodosProdutos); // Listar todos os produtos
router.post('/', autenticarUsuario, verificarAdmin, criarProduto); // Criar produto
router.put('/:id', autenticarUsuario, verificarAdmin, atualizarProduto); // Atualizar produto
router.put('/:id/desativar', autenticarUsuario, verificarAdmin, desativarProduto); // Desativar produto
router.put('/:id/ativar', autenticarUsuario, verificarAdmin, ativarProduto); // Reativar produto

export default router;
