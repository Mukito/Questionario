# Simulado de Conhecimentos Gerais - Com Sistema de Categorias

## 📋 Descrição

Versão atualizada do simulado interativo que agora inclui um sistema completo de categorização de perguntas, permitindo aos usuários escolher entre diferentes áreas de conhecimento.

## ✨ Novas Funcionalidades - Sistema de Categorias

### 🎯 Seleção de Categorias
- **Dropdown de categorias** com todas as opções disponíveis
- **Opção "Todas as Categorias"** para simulado misto
- **Categorias específicas** para focar em áreas de interesse
- **Interface intuitiva** para seleção antes de iniciar o simulado

### 📚 Categorias Disponíveis
1. **Geografia** - Perguntas sobre países, capitais, oceanos, etc.
2. **Arte** - Questões sobre artistas, obras famosas, movimentos artísticos
3. **Ciência** - Astronomia, química, física, biologia
4. **História** - Eventos históricos, datas importantes, personalidades
5. **Literatura** - Autores, obras clássicas, movimentos literários
6. **Esportes** - Competições, recordes, eventos esportivos

### 🔄 Funcionalidades do Sistema
- **Filtragem automática** de perguntas por categoria selecionada
- **Embaralhamento** das perguntas dentro da categoria
- **Limitação inteligente** a 5 perguntas por simulado
- **Exibição da categoria** em cada pergunta com badge colorido
- **Retorno à seleção** após finalizar o simulado

## 🎨 Melhorias na Interface

### Visual
- **Badge de categoria** em cada pergunta com gradiente colorido
- **Seletor estilizado** com design moderno
- **Botão "Iniciar Simulado"** destacado
- **Layout responsivo** mantido em todas as telas

### Experiência do Usuário
- **Fluxo intuitivo**: Selecionar categoria → Iniciar → Responder → Resultados → Nova seleção
- **Feedback visual** claro sobre a categoria atual
- **Navegação simplificada** entre diferentes tipos de simulado

## 🏗️ Estrutura Técnica Atualizada

### Arquivo de Perguntas (questions.json)
```json
{
  "category": "Geografia",
  "question": "Qual é a capital do Brasil?",
  "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
  "answer": "Brasília"
}
```

### Funcionalidades JavaScript
- **Carregamento dinâmico** de categorias únicas
- **Filtragem em tempo real** por categoria
- **Gerenciamento de estado** da categoria selecionada
- **Embaralhamento inteligente** das perguntas

### Estilos CSS
- **Componentes de categoria** com design moderno
- **Badges coloridos** para identificação visual
- **Dropdown estilizado** com hover effects
- **Responsividade** mantida em todos os dispositivos

## 🚀 Como Usar as Novas Funcionalidades

### Simulado por Categoria
1. **Faça login** no sistema
2. **Selecione uma categoria** no dropdown
3. **Clique em "Iniciar Simulado"**
4. **Responda as perguntas** da categoria escolhida
5. **Veja seus resultados** específicos da categoria
6. **Escolha nova categoria** para outro simulado

### Simulado Misto
1. **Mantenha "Todas as Categorias"** selecionado
2. **Inicie o simulado** normalmente
3. **Responda perguntas** de diferentes áreas
4. **Veja a categoria** de cada pergunta no badge

## 📊 Estatísticas do Sistema

### Base de Perguntas Expandida
- **8 perguntas** no total (anteriormente 5)
- **6 categorias** diferentes
- **Distribuição equilibrada** entre as áreas
- **Possibilidade de expansão** fácil

### Performance
- **Carregamento rápido** das categorias
- **Filtragem eficiente** das perguntas
- **Interface responsiva** mantida
- **Compatibilidade** com sistema de usuários

## 🔧 Instalação e Execução

### Mesmos Pré-requisitos
- Python 3.11+
- Navegador web moderno
- Todas as dependências anteriores

### Execução Atualizada
```bash
# Extrair o projeto atualizado
unzip simulado_com_categorias.zip
cd simulado_backend

# Ambiente virtual (se necessário)
python3 -m venv venv
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Executar servidor
python src/main.py

# Acessar: http://localhost:5000
```

## 📝 Estrutura de Arquivos Atualizada

```
simulado_backend/
├── src/
│   ├── static/
│   │   ├── questions.json      # ✨ ATUALIZADO: Agora com categorias
│   │   ├── index.html          # ✨ ATUALIZADO: Seletor de categorias
│   │   ├── script.js           # ✨ ATUALIZADO: Lógica de filtragem
│   │   ├── styles.css          # ✨ ATUALIZADO: Estilos das categorias
│   │   └── auth.html           # Mantido
│   ├── models/user.py          # Mantido
│   ├── routes/user.py          # Mantido
│   └── main.py                 # Mantido
└── requirements.txt            # Mantido
```

## 🎯 Melhorias Futuras Sugeridas

### Expansão de Categorias
- **Matemática** - Álgebra, geometria, cálculo
- **Tecnologia** - Programação, internet, dispositivos
- **Música** - Compositores, instrumentos, gêneros
- **Cinema** - Filmes, diretores, atores

### Funcionalidades Avançadas
- **Histórico por categoria** para cada usuário
- **Ranking separado** por área de conhecimento
- **Dificuldade progressiva** dentro das categorias
- **Estatísticas detalhadas** de performance por área

### Interface
- **Gráficos de performance** por categoria
- **Recomendações** de áreas para estudo
- **Badges de conquista** por categoria dominada
- **Modo competitivo** entre categorias

## 🐛 Solução de Problemas

### Categorias Não Carregam
```bash
# Verificar se questions.json está correto
cat src/static/questions.json | python -m json.tool
```

### Filtragem Não Funciona
1. Verificar console do navegador (F12)
2. Confirmar se JavaScript está habilitado
3. Recarregar a página completamente

### Perguntas Duplicadas
- O sistema embaralha automaticamente
- Cada categoria tem perguntas únicas
- Limite de 5 perguntas por simulado

## 📞 Suporte Técnico

### Logs Úteis
- **Console do navegador**: Erros JavaScript
- **Terminal Flask**: Erros do servidor
- **Network tab**: Problemas de carregamento

### Arquivos Importantes
- `questions.json`: Base de dados das perguntas
- `script.js`: Lógica de categorização
- `styles.css`: Estilos visuais

---

**🎉 Agora com 6 categorias diferentes para uma experiência de aprendizado mais rica e personalizada!**

**Desenvolvido com Flask, SQLAlchemy, HTML5, CSS3 e JavaScript**

