# Simulado de Conhecimentos Gerais - Com Sistema de Usuários

## 📋 Descrição

Protótipo de simulado interativo com sistema completo de autenticação de usuários, desenvolvido com Flask (backend) e HTML/CSS/JavaScript (frontend).

## ✨ Funcionalidades Implementadas

### Sistema de Autenticação
- **Registro de usuários** com validação de dados
- **Login seguro** com hash de senhas
- **Logout** com limpeza de sessão
- **Proteção de rotas** - acesso restrito ao simulado apenas para usuários autenticados
- **Redirecionamento automático** para login quando não autenticado

### Simulado Interativo
- 5 perguntas de conhecimentos gerais
- Sistema de múltipla escolha (4 opções por pergunta)
- Barra de progresso e contador de perguntas
- Feedback visual para seleções
- Resultado final com pontuação percentual
- Revisão detalhada das respostas
- Função para refazer o simulado

### Interface do Usuário
- Design responsivo e moderno
- Exibição do nome do usuário logado
- Botão de logout sempre visível
- Transições suaves entre páginas
- Mensagens de erro e sucesso

## 🏗️ Arquitetura

### Backend (Flask)
- **Modelo de dados**: SQLite com SQLAlchemy
- **Autenticação**: Sessions do Flask com hash de senhas (Werkzeug)
- **API REST**: Endpoints para registro, login, logout e verificação de usuário
- **Segurança**: Validação de dados e proteção contra acesso não autorizado

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Design moderno com gradientes e animações
- **JavaScript**: Lógica de autenticação e simulado
- **AJAX**: Comunicação assíncrona com o backend

### Banco de Dados
```sql
Tabela: user
- id (INTEGER, PRIMARY KEY)
- username (STRING, UNIQUE, NOT NULL)
- email (STRING, UNIQUE, NOT NULL)
- password_hash (STRING, NOT NULL)
```

## 🚀 Como Executar

### Pré-requisitos
- Python 3.11+
- Navegador web moderno

### Instalação e Execução

1. **Extrair o projeto**:
   ```bash
   unzip simulado_com_usuarios.zip
   cd simulado_backend
   ```

2. **Criar ambiente virtual**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Linux/Mac
   # ou
   venv\Scripts\activate     # Windows
   ```

3. **Instalar dependências**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Executar o servidor**:
   ```bash
   python src/main.py
   ```

5. **Acessar a aplicação**:
   - Abra o navegador em: `http://localhost:5000`
   - Você será redirecionado para a página de login

## 📱 Como Usar

### Primeiro Acesso
1. Acesse `http://localhost:5000`
2. Clique na aba "Registrar"
3. Preencha: usuário, email e senha
4. Clique em "REGISTRAR"
5. Após o registro, faça login com suas credenciais

### Fazendo o Simulado
1. Após o login, você verá seu nome no cabeçalho
2. Responda as 5 perguntas selecionando uma opção
3. Clique em "Próxima" para avançar
4. Ao final, veja seu resultado e revisão das respostas
5. Use "Refazer Simulado" para tentar novamente

### Logout
- Clique no botão "Sair" no cabeçalho a qualquer momento

## 🔒 Segurança Implementada

- **Hash de senhas**: Senhas são criptografadas com Werkzeug
- **Validação de entrada**: Verificação de dados obrigatórios
- **Proteção de rotas**: Acesso restrito apenas para usuários autenticados
- **Sessões seguras**: Gerenciamento de estado de login
- **Prevenção de duplicatas**: Usuários e emails únicos

## 🛠️ Estrutura de Arquivos

```
simulado_backend/
├── src/
│   ├── main.py              # Aplicação principal Flask
│   ├── models/
│   │   └── user.py          # Modelo de usuário
│   ├── routes/
│   │   └── user.py          # Rotas de autenticação
│   ├── static/              # Arquivos frontend
│   │   ├── index.html       # Página principal do simulado
│   │   ├── auth.html        # Página de login/registro
│   │   ├── styles.css       # Estilos CSS
│   │   ├── script.js        # Lógica JavaScript
│   │   └── questions.json   # Base de perguntas
│   └── database/
│       └── app.db           # Banco de dados SQLite
├── requirements.txt         # Dependências Python
└── README_SISTEMA_USUARIOS.md
```

## 🔧 Endpoints da API

### Autenticação
- `POST /api/register` - Registrar novo usuário
- `POST /api/login` - Fazer login
- `POST /api/logout` - Fazer logout
- `GET /api/me` - Obter dados do usuário logado

### Administração (Debug)
- `GET /api/users` - Listar todos os usuários
- `DELETE /api/users/<id>` - Deletar usuário

## 🎯 Melhorias Futuras

- Recuperação de senha por email
- Perfis de usuário com histórico de simulados
- Diferentes níveis de dificuldade
- Sistema de ranking
- Mais categorias de perguntas
- Dashboard administrativo
- Autenticação com redes sociais

## 🐛 Solução de Problemas

### Erro de Banco de Dados
Se houver erro relacionado ao banco:
```bash
rm src/database/app.db
python src/main.py  # Recria o banco automaticamente
```

### Porta em Uso
Se a porta 5000 estiver ocupada, modifique em `src/main.py`:
```python
app.run(host='0.0.0.0', port=5001, debug=True)
```

### Problemas de Dependências
```bash
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todas as dependências estão instaladas
2. Confirme que o servidor Flask está rodando
3. Verifique o console do navegador para erros JavaScript
4. Consulte os logs do Flask no terminal

---

**Desenvolvido com Flask, SQLAlchemy, HTML5, CSS3 e JavaScript**
