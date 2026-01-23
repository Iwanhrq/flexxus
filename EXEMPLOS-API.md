# 🧪 Exemplos de Requisições - API Flexxus

Use estes exemplos no Postman, Insomnia, Thunder Client (VS Code) ou curl.

---

## 🔐 Autenticação

### 1. Registrar Primeiro Admin
```http
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "email": "admin@flexxus.com",
  "password": "admin123"
}
```

**Resposta esperada:**
```json
{
  "success": true,
  "message": "Admin registrado com sucesso",
  "usuario": {
    "id": 1,
    "email": "admin@flexxus.com",
    "tipo": "admin"
  }
}
```

---

### 2. Login
```http
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "admin@flexxus.com",
  "password": "admin123"
}
```

**Resposta esperada:**
```json
{
  "success": true,
  "message": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": 1,
    "email": "admin@flexxus.com",
    "tipo": "admin"
  }
}
```

**⚠️ Copie o token retornado para usar nas próximas requisições!**

---

### 3. Verificar Token
```http
GET http://localhost:3000/auth/me
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 📦 Produtos - Rotas Públicas

### 4. Listar Produtos Ativos (Públicos)
```http
GET http://localhost:3000/produtos
```

**Resposta esperada:**
```json
{
  "success": true,
  "data": {
    "categorias": [...],
    "embalagens": [...],
    "materiais": [...],
    "tecnologia": [...]
  },
  "total": 8
}
```

---

### 5. Buscar Produto por ID
```http
GET http://localhost:3000/produtos/1
```

---

## 🔒 Produtos - Rotas Administrativas (Requer Token)

### 6. Listar TODOS os Produtos (Admin)
```http
GET http://localhost:3000/produtos/admin/todos
Authorization: Bearer SEU_TOKEN_AQUI
```

---

### 7. Criar Novo Produto
```http
POST http://localhost:3000/produtos
Content-Type: application/json
Authorization: Bearer SEU_TOKEN_AQUI

{
  "nome": "Embalagem Biodegradável Premium",
  "descricao": "Embalagem 100% biodegradável, ideal para alimentos orgânicos",
  "preco": 125.50,
  "imagem": "https://via.placeholder.com/300x200?text=Embalagem+Bio",
  "categoria": "embalagens"
}
```

**Resposta esperada:**
```json
{
  "success": true,
  "message": "Produto criado com sucesso",
  "data": {
    "id": 9,
    "nome": "Embalagem Biodegradável Premium",
    "descricao": "Embalagem 100% biodegradável...",
    "preco": 125.50,
    "imagem": "https://via.placeholder.com/300x200?text=Embalagem+Bio",
    "categoria": "embalagens",
    "ativo": true,
    "criado_em": "2026-01-22T..."
  }
}
```

---

### 8. Atualizar Produto
```http
PUT http://localhost:3000/produtos/9
Content-Type: application/json
Authorization: Bearer SEU_TOKEN_AQUI

{
  "nome": "Embalagem Biodegradável Premium Plus",
  "preco": 149.90
}
```

**Nota:** Você pode atualizar apenas os campos que quiser. Os outros permanecem inalterados.

---

### 9. Desativar Produto (Remoção Lógica)
```http
PUT http://localhost:3000/produtos/9/desativar
Authorization: Bearer SEU_TOKEN_AQUI
```

**Resposta esperada:**
```json
{
  "success": true,
  "message": "Produto desativado com sucesso",
  "data": {
    "id": 9,
    "ativo": false,
    ...
  }
}
```

---

### 10. Reativar Produto
```http
PUT http://localhost:3000/produtos/9/ativar
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 📋 Categorias Válidas

Ao criar ou atualizar um produto, use uma destas categorias:

- `categorias`
- `embalagens`
- `materiais`
- `tecnologia`

---

## 🧪 Teste Completo (Passo a Passo)

1. **Registrar admin** (requisição 1)
2. **Fazer login** (requisição 2) → Copiar o token
3. **Listar produtos públicos** (requisição 4) → Ver produtos ativos
4. **Listar todos produtos** (requisição 6) → Ver todos (incluindo inativos)
5. **Criar produto** (requisição 7) → Criar novo
6. **Atualizar produto** (requisição 8) → Editar
7. **Desativar produto** (requisição 9) → Remover logicamente
8. **Verificar lista pública** (requisição 4) → Produto não aparece mais
9. **Reativar produto** (requisição 10) → Trazer de volta
10. **Verificar lista pública** (requisição 4) → Produto aparece novamente

---

## 🐛 Possíveis Erros

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Token não fornecido"
}
```
**Solução:** Adicione o header `Authorization: Bearer SEU_TOKEN`

---

### 403 Forbidden
```json
{
  "success": false,
  "message": "Acesso negado. Apenas administradores podem acessar este recurso."
}
```
**Solução:** Faça login com um usuário admin

---

### 400 Bad Request
```json
{
  "success": false,
  "message": "Nome, descrição, preço e categoria são obrigatórios"
}
```
**Solução:** Preencha todos os campos obrigatórios

---

### 404 Not Found
```json
{
  "success": false,
  "message": "Produto não encontrado"
}
```
**Solução:** Verifique se o ID do produto existe

---

## 💡 Dicas

1. **Salve o token**: Após fazer login, salve o token em uma variável do Postman/Insomnia
2. **Environment variables**: Use variáveis de ambiente para `{{baseUrl}}` e `{{token}}`
3. **Collection**: Organize todas as requisições em uma collection
4. **Scripts**: Configure pre-request scripts para adicionar o token automaticamente

---

## 🔧 Configuração Postman (Exemplo)

### Variáveis de Ambiente:
```
baseUrl = http://localhost:3000
token = (será preenchido após login)
```

### Exemplo de uso:
```http
GET {{baseUrl}}/produtos/admin/todos
Authorization: Bearer {{token}}
```

### Script para salvar token após login:
```javascript
// Em "Tests" da requisição de login:
var jsonData = pm.response.json();
pm.environment.set("token", jsonData.token);
```

---

**🎉 Agora você pode testar toda a API!**
