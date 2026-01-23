# 🚀 Setup do Backend Flexxus

## Pré-requisitos

1. **Node.js** instalado (versão 16 ou superior)
2. **PostgreSQL** instalado e rodando
3. **npm** ou **yarn** instalado

## Passo a Passo

### 1. Instalar Dependências

```bash
cd backend
npm install
```

### 2. Configurar Banco de Dados

#### 2.1. Criar o banco de dados

**Se o banco ainda não existe:**

Abra o PostgreSQL e execute:

```bash
psql -U postgres
```

Depois execute o script SQL:

```sql
CREATE DATABASE flexxus;
\q
```

**Se o banco já existe (como no seu caso):**

Conecte ao banco flexxus e execute o script de tabelas:

```bash
psql -U postgres -d flexxus -f create-tables.sql
```

Ou manualmente:

```bash
psql -U postgres
```

```sql
\c flexxus;
\i create-tables.sql
```

#### 2.2. Configurar variáveis de ambiente

Edite o arquivo `.env` e configure:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=SUA_SENHA_DO_POSTGRES
DB_NAME=flexxus

PORT=3000
JWT_SECRET=segredo123  # Altere para um segredo mais seguro em produção
```

### 3. Criar Usuário Admin Inicial

Após iniciar o servidor, faça uma requisição POST para criar o primeiro admin:

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@flexxus.com", "password": "senha123"}'
```

Ou use o Postman/Insomnia:
- **URL**: `http://localhost:3000/auth/register`
- **Method**: POST
- **Body** (JSON):
```json
{
  "email": "admin@flexxus.com",
  "password": "senha123"
}
```

### 4. Iniciar o Servidor

#### Modo Desenvolvimento (com auto-reload):
```bash
npm run dev
```

#### Modo Produção:
```bash
npm start
```

O servidor estará rodando em: `http://localhost:3000`

## Testando a API

### Verificar se está funcionando:
```bash
curl http://localhost:3000/
```

### Fazer login:
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@flexxus.com", "password": "senha123"}'
```

### Listar produtos (público):
```bash
curl http://localhost:3000/produtos
```

## Endpoints Disponíveis

### Autenticação
- `POST /auth/login` - Fazer login
- `POST /auth/register` - Registrar admin (apenas setup inicial)
- `GET /auth/me` - Verificar token (requer autenticação)

### Produtos (Público)
- `GET /produtos` - Listar produtos ativos
- `GET /produtos/:id` - Buscar produto específico

### Produtos (Admin - requer autenticação)
- `GET /produtos/admin/todos` - Listar todos os produtos
- `POST /produtos` - Criar produto
- `PUT /produtos/:id` - Atualizar produto
- `PUT /produtos/:id/desativar` - Desativar produto
- `PUT /produtos/:id/ativar` - Ativar produto

## Troubleshooting

### Erro: "Cannot find module"
- Execute `npm install` novamente

### Erro: "Connection refused" ou "ECONNREFUSED"
- Verifique se o PostgreSQL está rodando
- Verifique as credenciais no arquivo `.env`

### Erro: "relation does not exist"
- Execute o script `database.sql` para criar as tabelas

### Erro: "Token não fornecido"
- Faça login primeiro para obter o token
- Use o token no header: `Authorization: Bearer <seu_token>`
