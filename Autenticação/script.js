class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.isQuizCompleted = false;
        
        this.initializeElements();
        this.loadQuestions();
        this.bindEvents();
    }
    
    initializeElements() {
        // Elementos da interface
        this.questionText = document.getElementById('question-text');
        this.optionElements = [
            document.getElementById('option-0'),
            document.getElementById('option-1'),
            document.getElementById('option-2'),
            document.getElementById('option-3')
        ];
        this.labelElements = [
            document.getElementById('label-0'),
            document.getElementById('label-1'),
            document.getElementById('label-2'),
            document.getElementById('label-3')
        ];
        this.radioElements = [
            document.getElementById('answer-0'),
            document.getElementById('answer-1'),
            document.getElementById('answer-2'),
            document.getElementById('answer-3')
        ];
        
        this.nextBtn = document.getElementById('next-btn');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.progressBar = document.getElementById('progress');
        
        this.quizContainer = document.getElementById('quiz-container');
        this.resultsContainer = document.getElementById('results-container');
        this.restartBtn = document.getElementById('restart-btn');
        
        // Elementos dos resultados
        this.scorePercentage = document.getElementById('score-percentage');
        this.correctAnswersSpan = document.getElementById('correct-answers');
        this.totalQuestionsResult = document.getElementById('total-questions-result');
        this.reviewList = document.getElementById('review-list');
    }
    
    async loadQuestions() {
        try {
            const response = await fetch('questions.json');
            this.questions = await response.json();
            this.totalQuestionsSpan.textContent = this.questions.length;
            this.totalQuestionsResult.textContent = this.questions.length;
            this.displayCurrentQuestion();
        } catch (error) {
            console.error('Erro ao carregar perguntas:', error);
            this.questionText.textContent = 'Erro ao carregar as perguntas. Verifique se o arquivo questions.json está disponível.';
        }
    }
    
    bindEvents() {
        // Event listeners para as opções
        this.radioElements.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                this.selectOption(index);
            });
        });
        
        // Event listeners para os labels (para melhor UX)
        this.optionElements.forEach((option, index) => {
            option.addEventListener('click', () => {
                this.radioElements[index].checked = true;
                this.selectOption(index);
            });
        });
        
        // Event listener para o botão próxima
        this.nextBtn.addEventListener('click', () => {
            this.handleNextQuestion();
        });
        
        // Event listener para o botão reiniciar
        this.restartBtn.addEventListener('click', () => {
            this.restartQuiz();
        });
    }
    
    displayCurrentQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
            return;
        }
        
        const currentQuestion = this.questions[this.currentQuestionIndex];
        
        // Atualizar texto da pergunta
        this.questionText.textContent = currentQuestion.question;
        
        // Atualizar opções
        currentQuestion.options.forEach((option, index) => {
            this.labelElements[index].textContent = option;
            this.radioElements[index].checked = false;
        });
        
        // Limpar seleções anteriores
        this.optionElements.forEach(option => {
            option.classList.remove('selected');
        });
        
        // Atualizar contador de perguntas
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        
        // Atualizar barra de progresso
        const progressPercentage = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = progressPercentage + '%';
        
        // Desabilitar botão próxima
        this.nextBtn.disabled = true;
    }
    
    selectOption(optionIndex) {
        // Remover seleção anterior
        this.optionElements.forEach(option => {
            option.classList.remove('selected');
        });
        
        // Adicionar seleção atual
        this.optionElements[optionIndex].classList.add('selected');
        
        // Habilitar botão próxima
        this.nextBtn.disabled = false;
        
        // Atualizar texto do botão se for a última pergunta
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextBtn.textContent = 'Finalizar';
        }
    }
    
    handleNextQuestion() {
        // Capturar resposta do usuário
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!selectedOption) return;
        
        const userAnswerIndex = parseInt(selectedOption.value);
        const userAnswer = this.questions[this.currentQuestionIndex].options[userAnswerIndex];
        const correctAnswer = this.questions[this.currentQuestionIndex].answer;
        
        // Armazenar resposta do usuário
        this.userAnswers.push({
            question: this.questions[this.currentQuestionIndex].question,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            isCorrect: userAnswer === correctAnswer
        });
        
        // Calcular pontuação
        if (userAnswer === correctAnswer) {
            this.score++;
        }
        
        // Avançar para próxima pergunta
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayCurrentQuestion();
        } else {
            this.showResults();
        }
    }
    
    showResults() {
        // Esconder container do quiz
        this.quizContainer.classList.add('hidden');
        
        // Mostrar container dos resultados
        this.resultsContainer.classList.remove('hidden');
        
        // Calcular e exibir pontuação
        const percentage = Math.round((this.score / this.questions.length) * 100);
        this.scorePercentage.textContent = percentage + '%';
        this.correctAnswersSpan.textContent = this.score;
        
        // Gerar revisão das respostas
        this.generateReview();
        
        this.isQuizCompleted = true;
    }
    
    generateReview() {
        this.reviewList.innerHTML = '';
        
        this.userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
            
            reviewItem.innerHTML = `
                <div class="review-question">${index + 1}. ${answer.question}</div>
                <div class="review-answer user-answer">Sua resposta: ${answer.userAnswer}</div>
                <div class="review-answer correct">Resposta correta: ${answer.correctAnswer}</div>
                ${answer.isCorrect ? 
                    '<div class="review-answer correct">✓ Correto!</div>' : 
                    '<div class="review-answer incorrect">✗ Incorreto</div>'
                }
            `;
            
            this.reviewList.appendChild(reviewItem);
        });
    }
    
    restartQuiz() {
        // Resetar variáveis
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.isQuizCompleted = false;
        
        // Resetar interface
        this.nextBtn.textContent = 'Próxima';
        this.nextBtn.disabled = true;
        
        // Mostrar container do quiz
        this.quizContainer.classList.remove('hidden');
        
        // Esconder container dos resultados
        this.resultsContainer.classList.add('hidden');
        
        // Exibir primeira pergunta
        this.displayCurrentQuestion();
    }
}

// Inicializar o quiz quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new Quiz();
});

