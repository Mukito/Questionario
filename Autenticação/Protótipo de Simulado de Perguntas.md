# Protótipo de Simulado de Perguntas

Este é um protótipo de simulado de perguntas interativo desenvolvido com HTML, CSS e JavaScript puro.

## Características do Simulado

- **Formato**: Múltipla escolha com 4 opções por pergunta
- **Quantidade**: 5 perguntas por simulado
- **Tema**: Conhecimentos Gerais
- **Pontuação**: 1 ponto por acerto, sem penalidade por erro
- **Feedback**: Resultado completo ao final com revisão das respostas

## Funcionalidades

✅ **Interface Responsiva**: Adaptada para desktop e mobile
✅ **Barra de Progresso**: Mostra o progresso durante o simulado
✅ **Contador de Perguntas**: Indica a pergunta atual (ex: "3 de 5")
✅ **Seleção Visual**: Destaque da opção selecionada
✅ **Navegação Intuitiva**: Botão habilitado apenas após seleção
✅ **Resultado Detalhado**: Pontuação percentual e revisão completa
✅ **Função Reiniciar**: Permite refazer o simulado

## Arquivos do Projeto

- `index.html` - Estrutura HTML da aplicação
- `styles.css` - Estilos CSS responsivos
- `script.js` - Lógica JavaScript do simulado
- `questions.json` - Base de dados das perguntas
- `README.md` - Esta documentação

## Como Executar

### Opção 1: Servidor HTTP Local (Recomendado)
```bash
# No diretório do projeto, execute:
python3 -m http.server 8000

# Acesse no navegador:
http://localhost:8000
```

### Opção 2: Abrir Diretamente
Abra o arquivo `index.html` diretamente no navegador (pode haver limitações com CORS para carregar o JSON).

## Personalização

### Adicionar Novas Perguntas
Edite o arquivo `questions.json` seguindo o formato:
```json
{
  "question": "Sua pergunta aqui?",
  "options": [
    "Opção A",
    "Opção B", 
    "Opção C",
    "Opção D"
  ],
  "answer": "Resposta correta"
}
```

### Modificar Estilos
- Cores: Edite as variáveis CSS no início do arquivo `styles.css`
- Layout: Modifique as classes CSS conforme necessário
- Responsividade: Ajuste as media queries no final do CSS

### Alterar Lógica
- Número de perguntas: Modifique a quantidade no arquivo `questions.json`
- Sistema de pontuação: Edite a função `handleNextQuestion()` no `script.js`
- Feedback: Customize a função `generateReview()` no `script.js`

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes e animações
- **JavaScript ES6+**: Lógica orientada a objetos
- **JSON**: Armazenamento das perguntas

## Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móveis (iOS/Android)

## Próximos Passos (Sugestões)

- [ ] Adicionar mais categorias de perguntas
- [ ] Implementar sistema de usuários
- [ ] Salvar histórico de resultados
- [ ] Adicionar timer por pergunta
- [ ] Criar modo de dificuldade progressiva
- [ ] Implementar ranking de pontuações

