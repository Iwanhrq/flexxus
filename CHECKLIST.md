# ✅ CHECKLIST - Sistema de Produtos Flexxus

## 📋 Antes de Começar

- [ ] PostgreSQL instalado e rodando
- [ ] Node.js instalado (v16+)
- [ ] npm ou yarn disponível
- [ ] Editor de código (VS Code recomendado)
- [ ] Cliente de API (Postman/Insomnia) - opcional

---

## 🗄️ Configuração do Banco de Dados

- [ ] PostgreSQL iniciado
- [ ] Banco de dados `flexxus` criado
- [ ] Tabela `produtos` criada
- [ ] Tabela `usuarios` criada
- [ ] Produtos de exemplo inseridos
- [ ] Índices criados

**Comando:**
```bash
psql -U postgres
\i backend/database.sql
```

**Verificar:**
```sql
\c flexxus
SELECT COUNT(*) FROM produtos;  -- Deve retornar 8
```

---

## 🔧 Configuração do Backend

- [ ] Pasta `backend` existe
- [ ] Dependências instaladas (`npm install`)
- [ ] Arquivo `.env` criado (copiar de `env.example`)
- [ ] Variáveis de ambiente configuradas:
  - [ ] DB_HOST
  - [ ] DB_PORT
  - [ ] DB_USER
  - [ ] DB_PASSWORD
  - [ ] DB_NAME
  - [ ] JWT_SECRET
  - [ ] PORT

**Comandos:**
```bash
cd backend
npm install
copy env.example .env
# Editar .env com suas configurações
```

---

## 🎨 Configuração do Frontend

- [ ] Dependências instaladas (`npm install` na raiz)
- [ ] React Router DOM instalado
- [ ] Páginas criadas
- [ ] Contextos criados
- [ ] Rotas configuradas no App.tsx

**Comando:**
```bash
npm install
```

---

## 🚀 Execução

- [ ] Backend rodando na porta 3000
- [ ] Frontend rodando na porta 5173
- [ ] Sem erros no console do backend
- [ ] Sem erros no console do navegador

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Deve mostrar: "Servidor rodando na porta 3000"
```

**Terminal 2 - Frontend:**
```bash
npm run dev
# Deve mostrar: "Local: http://localhost:5173"
```

---

## 👤 Criar Usuário Admin

- [ ] Endpoint `/auth/register` testado
- [ ] Admin criado com sucesso
- [ ] Credenciais anotadas

**Via Postman/Insomnia:**
```http
POST http://localhost:3000/auth/register
{
  "email": "admin@flexxus.com",
  "password": "admin123"
}
```

**Ou via curl:**
```bash
curl -X POST http://localhost:3000/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"admin@flexxus.com\",\"password\":\"admin123\"}"
```

---

## 🧪 Testes da API

- [ ] Listar produtos públicos (`GET /produtos`)
- [ ] Login funcionando (`POST /auth/login`)
- [ ] Token JWT recebido
- [ ] Listar todos produtos admin (`GET /produtos/admin/todos`)
- [ ] Criar produto (`POST /produtos`)
- [ ] Atualizar produto (`PUT /produtos/:id`)
- [ ] Desativar produto (`PUT /produtos/:id/desativar`)
- [ ] Reativar produto (`PUT /produtos/:id/ativar`)

**Use o arquivo `EXEMPLOS-API.md` como referência**

---

## 🌐 Testes do Frontend

### Página Pública de Produtos
- [ ] Acessar `http://localhost:5173/produtos`
- [ ] Produtos aparecem organizados por categoria
- [ ] 4 categorias visíveis:
  - [ ] Categorias
  - [ ] Embalagens
  - [ ] Materiais
  - [ ] Tecnologia
- [ ] Cards exibem: nome, descrição, preço, imagem
- [ ] Design responsivo (testar mobile)

### Login
- [ ] Acessar `http://localhost:5173/login`
- [ ] Formulário aparece corretamente
- [ ] Login com credenciais corretas funciona
- [ ] Redireciona para `/admin/produtos`
- [ ] Login com credenciais erradas mostra erro

### Painel Administrativo
- [ ] Acessar `http://localhost:5173/admin/produtos`
- [ ] Redireciona para login se não autenticado
- [ ] Após login, painel aparece
- [ ] Lista todos os produtos
- [ ] Produtos inativos aparecem com opacidade
- [ ] Botão "Novo Produto" funciona
- [ ] Modal de criação abre
- [ ] Criar produto funciona
- [ ] Produto aparece na lista
- [ ] Botão "Editar" funciona
- [ ] Modal de edição abre com dados preenchidos
- [ ] Editar produto funciona
- [ ] Botão "Desativar" funciona
- [ ] Produto fica com status "Inativo"
- [ ] Botão "Ativar" aparece em produtos inativos
- [ ] Reativar produto funciona
- [ ] Botão "Sair" funciona (logout)

---

## 🔒 Testes de Segurança

- [ ] Acessar `/admin/produtos` sem login redireciona
- [ ] Token expirado é rejeitado
- [ ] Rotas admin sem token retornam 401
- [ ] Senhas são criptografadas no banco
- [ ] SQL injection não funciona
- [ ] CORS configurado corretamente

**Teste de segurança:**
```sql
-- Verificar que senhas estão hasheadas:
SELECT email, senha FROM usuarios;
-- Senha deve começar com $2b$ (bcrypt)
```

---

## 📱 Testes Responsivos

- [ ] Testar em desktop (1920x1080)
- [ ] Testar em tablet (768px)
- [ ] Testar em mobile (375px)
- [ ] Todos os elementos visíveis
- [ ] Sem scroll horizontal
- [ ] Botões clicáveis
- [ ] Formulários usáveis

---

## 🐛 Verificação de Erros Comuns

### Backend não conecta ao PostgreSQL
- [ ] PostgreSQL está rodando?
- [ ] Credenciais no `.env` estão corretas?
- [ ] Banco `flexxus` existe?

```bash
# Testar conexão:
psql -U postgres -d flexxus
```

### CORS Error no Frontend
- [ ] Backend está rodando?
- [ ] URL da API está correta (http://localhost:3000)?
- [ ] CORS está habilitado no backend?

### Token Inválido
- [ ] Token está sendo enviado no header?
- [ ] Formato: `Authorization: Bearer TOKEN`
- [ ] Token não expirou? (24h de validade)

### Produtos não aparecem
- [ ] Existem produtos ativos no banco?
- [ ] API `/produtos` retorna dados?
- [ ] Console do navegador mostra erros?

---

## 📊 Verificação Final

### Backend
- [ ] Server iniciado sem erros
- [ ] Conexão com PostgreSQL OK
- [ ] Todas as rotas respondem
- [ ] Logs aparecem no console

### Frontend
- [ ] Aplicação carrega sem erros
- [ ] Todas as páginas acessíveis
- [ ] Navegação funciona
- [ ] Estilos carregados corretamente

### Banco de Dados
- [ ] 8 produtos de exemplo existem
- [ ] Pelo menos 1 usuário admin existe
- [ ] Tabelas criadas corretamente
- [ ] Índices criados

---

## 🎯 Teste Completo (Fluxo de Usuário)

### Como Visitante
1. [ ] Acessar página inicial
2. [ ] Navegar para `/produtos`
3. [ ] Ver produtos organizados por categoria
4. [ ] Verificar que produtos inativos não aparecem

### Como Admin
1. [ ] Acessar `/login`
2. [ ] Fazer login com credenciais
3. [ ] Ser redirecionado para `/admin/produtos`
4. [ ] Ver lista completa de produtos
5. [ ] Criar novo produto
6. [ ] Verificar que aparece na lista admin
7. [ ] Verificar que aparece na página pública
8. [ ] Editar o produto criado
9. [ ] Desativar o produto
10. [ ] Verificar que não aparece mais na página pública
11. [ ] Verificar que ainda aparece na lista admin (inativo)
12. [ ] Reativar o produto
13. [ ] Verificar que voltou para a página pública
14. [ ] Fazer logout

---

## 📝 Documentação

- [ ] `INSTRUCOES.md` lido
- [ ] `INICIO-RAPIDO.md` lido
- [ ] `RESUMO-SISTEMA.md` consultado
- [ ] `EXEMPLOS-API.md` testado
- [ ] Este checklist completado

---

## ✅ Sistema Pronto!

Se todos os itens acima estão marcados, seu sistema está **100% funcional**! 🎉

---

## 🆘 Precisa de Ajuda?

Consulte os arquivos de documentação:
- **Problemas de instalação**: `INSTRUCOES.md`
- **Início rápido**: `INICIO-RAPIDO.md`
- **Testar API**: `EXEMPLOS-API.md`
- **Visão geral**: `RESUMO-SISTEMA.md`

---

**Data de conclusão:** _______/_______/_______

**Testado por:** _________________________________

**Status:** [ ] Aprovado  [ ] Pendências

**Observações:**
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________
