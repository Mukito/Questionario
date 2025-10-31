// Questions Database
const questionsDatabase = {
    itil4: [
        {
            id: 'itil4-q1',
            question: 'Qual é o principal foco da ITIL 4?',
            options: [
                'Processos rígidos e padronizados',
                'Cocriação de valor para todas as partes interessadas',
                'Redução de custos de TI',
                'Automação de todos os processos'
            ],
            correct: 1,
            explanation: 'A ITIL 4 se concentra na cocriação de valor para todas as partes interessadas, incluindo usuários finais, TI, organizações, parceiros e fornecedores.',
            category: 'Conceitos Fundamentais',
            difficulty: 'Básico'
        },
        {
            id: 'itil4-q2',
            question: 'Quantas práticas de gestão a ITIL 4 define?',
            options: ['26', '34', '40', '42'],
            correct: 1,
            explanation: 'A ITIL 4 define 34 práticas de gestão, divididas em três categorias: Gestão Geral (14), Gestão de Serviços (17) e Gestão Técnica (3).',
            category: 'Práticas de Gestão',
            difficulty: 'Básico'
        },
        {
            id: 'itil4-q3',
            question: 'Quais são os pilares do Sistema de Valor de Serviço (SVS)?',
            options: [
                'Pessoas, Processos, Tecnologia',
                'Princípios Orientadores, Governança, Cadeia de Valor, Práticas, Melhoria Contínua',
                'Planejamento, Execução, Monitoramento',
                'Entrada, Processamento, Saída'
            ],
            correct: 1,
            explanation: 'O SVS é composto por: Princípios Orientadores, Governança, Cadeia de Valor de Serviço, Práticas e Melhoria Contínua.',
            category: 'Sistema de Valor de Serviço',
            difficulty: 'Intermediário'
        },
        {
            id: 'itil4-q4',
            question: 'Qual princípio orientador enfatiza a importância de começar com a situação atual?',
            options: [
                'Foque no valor',
                'Comece onde você está',
                'Progrida iterativamente com feedback',
                'Mantenha-o simples e prático'
            ],
            correct: 1,
            explanation: 'O princípio "Comece onde você está" enfatiza a importância de avaliar a situação atual antes de fazer mudanças.',
            category: 'Princípios Orientadores',
            difficulty: 'Básico'
        },
        {
            id: 'itil4-q5',
            question: 'Qual das seguintes NÃO é uma das 4 dimensões da gestão de serviços?',
            options: [
                'Organizações e pessoas',
                'Informação e tecnologia',
                'Custos e benefícios',
                'Parceiros e fornecedores'
            ],
            correct: 2,
            explanation: 'As 4 dimensões são: Organizações e pessoas, Informação e tecnologia, Parceiros e fornecedores, e Fluxos de valor e processos.',
            category: '4 Dimensões',
            difficulty: 'Intermediário'
        }
    ],
    pmp: [
        {
            id: 'pmp-q1',
            question: 'Qual porcentagem do exame PMP é dedicada ao domínio "Pessoas"?',
            options: ['35%', '42%', '50%', '58%'],
            correct: 1,
            explanation: 'O domínio "Pessoas" representa 42% das questões do exame PMP, sendo o segundo maior domínio.',
            category: 'Estrutura do Exame',
            difficulty: 'Básico'
        },
        {
            id: 'pmp-q2',
            question: 'Qual é a distribuição entre questões preditivas e ágeis no exame PMP atual?',
            options: ['70% preditivas, 30% ágeis', '60% preditivas, 40% ágeis', '50% preditivas, 50% ágeis', '40% preditivas, 60% ágeis'],
            correct: 2,
            explanation: 'O exame PMP atual tem 50% de questões sobre abordagens preditivas e 50% sobre abordagens ágeis e híbridas.',
            category: 'Abordagens de Projeto',
            difficulty: 'Básico'
        },
        {
            id: 'pmp-q3',
            question: 'Qual domínio do PMP inclui a tarefa "Planejar e gerenciar conformidade do projeto"?',
            options: ['Pessoas', 'Processo', 'Ambiente de Negócios', 'Qualidade'],
            correct: 2,
            explanation: 'A tarefa "Planejar e gerenciar conformidade do projeto" pertence ao domínio "Ambiente de Negócios".',
            category: 'Domínios PMP',
            difficulty: 'Intermediário'
        },
        {
            id: 'pmp-q4',
            question: 'Quantas tarefas estão definidas no domínio "Processo"?',
            options: ['14', '17', '21', '25'],
            correct: 1,
            explanation: 'O domínio "Processo" contém 17 tarefas, sendo o domínio com maior número de tarefas.',
            category: 'Domínios PMP',
            difficulty: 'Básico'
        },
        {
            id: 'pmp-q5',
            question: 'Qual é o foco principal das questões do exame PMP?',
            options: [
                'Memorização do PMBOK Guide',
                'Aplicação prática em situações reais',
                'Conhecimento teórico de processos',
                'Fórmulas matemáticas'
            ],
            correct: 1,
            explanation: 'O exame PMP foca na aplicação prática dos conhecimentos em situações reais de gerenciamento de projetos.',
            category: 'Natureza do Exame',
            difficulty: 'Intermediário'
        }
    ],
    scrum: [
        {
            id: 'scrum-q1',
            question: 'Qual é a duração máxima recomendada para uma Sprint?',
            options: ['2 semanas', '4 semanas', '6 semanas', '8 semanas'],
            correct: 1,
            explanation: 'A duração máxima recomendada para uma Sprint é de 4 semanas (1 mês), embora Sprints mais curtas sejam preferíveis.',
            category: 'Eventos Scrum',
            difficulty: 'Básico'
        },
        {
            id: 'scrum-q2',
            question: 'Quantos valores o Scrum define?',
            options: ['3', '5', '7', '12'],
            correct: 1,
            explanation: 'O Scrum define 5 valores: Compromisso, Coragem, Foco, Abertura e Respeito.',
            category: 'Valores Scrum',
            difficulty: 'Básico'
        },
        {
            id: 'scrum-q3',
            question: 'Qual é a principal responsabilidade do Scrum Master?',
            options: [
                'Gerenciar a equipe de desenvolvimento',
                'Definir os requisitos do produto',
                'Facilitar o processo Scrum e remover impedimentos',
                'Aprovar as entregas do produto'
            ],
            correct: 2,
            explanation: 'A principal responsabilidade do Scrum Master é facilitar o processo Scrum e ajudar a remover impedimentos que bloqueiam a equipe.',
            category: 'Papéis Scrum',
            difficulty: 'Básico'
        },
        {
            id: 'scrum-q4',
            question: 'Qual evento Scrum é usado para inspecionar o Increment e adaptar o Product Backlog?',
            options: ['Sprint Planning', 'Daily Scrum', 'Sprint Review', 'Sprint Retrospective'],
            correct: 2,
            explanation: 'A Sprint Review é usada para inspecionar o Increment criado durante a Sprint e adaptar o Product Backlog se necessário.',
            category: 'Eventos Scrum',
            difficulty: 'Intermediário'
        },
        {
            id: 'scrum-q5',
            question: 'Qual dos seguintes NÃO é um artefato Scrum?',
            options: ['Product Backlog', 'Sprint Backlog', 'Increment', 'Burndown Chart'],
            correct: 3,
            explanation: 'O Burndown Chart não é um artefato oficial do Scrum. Os artefatos são: Product Backlog, Sprint Backlog e Increment.',
            category: 'Artefatos Scrum',
            difficulty: 'Intermediário'
        }
    ]
};

// Quiz State Management
let currentQuiz = {
    certification: null,
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    startTime: null,
    endTime: null,
    score: 0
};

// Render Practice Section
function renderPracticeSection(certification) {
    return `
        <div class="practice-container">
            <h3><i class="fas fa-question-circle"></i> Simulados e Questões - ${certification.toUpperCase()}</h3>
            
            <div class="practice-options">
                <div class="practice-mode-card">
                    <div class="mode-icon">
                        <i class="fas fa-play-circle"></i>
                    </div>
                    <h4>Modo Prática</h4>
                    <p>Responda questões individuais com feedback imediato</p>
                    <button class="btn-primary" onclick="startPracticeMode('${certification}')">
                        Iniciar Prática
                    </button>
                </div>
                
                <div class="practice-mode-card">
                    <div class="mode-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h4>Simulado Completo</h4>
                    <p>Teste completo com tempo limitado</p>
                    <button class="btn-primary" onclick="startFullSimulation('${certification}')">
                        Iniciar Simulado
                    </button>
                </div>
                
                <div class="practice-mode-card">
                    <div class="mode-icon">
                        <i class="fas fa-filter"></i>
                    </div>
                    <h4>Prática por Categoria</h4>
                    <p>Foque em tópicos específicos</p>
                    <button class="btn-primary" onclick="showCategorySelection('${certification}')">
                        Escolher Categoria
                    </button>
                </div>
            </div>
            
            <div class="practice-stats">
                <h4><i class="fas fa-chart-bar"></i> Suas Estatísticas</h4>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value" id="${certification}-questions-answered">0</div>
                        <div class="stat-label">Questões Respondidas</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="${certification}-accuracy">0%</div>
                        <div class="stat-label">Taxa de Acerto</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="${certification}-avg-time">0s</div>
                        <div class="stat-label">Tempo Médio</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value" id="${certification}-weak-areas">-</div>
                        <div class="stat-label">Área Mais Fraca</div>
                    </div>
                </div>
            </div>
            
            <div class="recent-performance">
                <h4><i class="fas fa-history"></i> Desempenho Recente</h4>
                <div class="performance-chart">
                    <canvas id="${certification}-performance-chart" width="400" height="200"></canvas>
                </div>
            </div>
        </div>
    `;
}

// Start Practice Mode
function startPracticeMode(certification) {
    const questions = questionsDatabase[certification];
    if (!questions || questions.length === 0) {
        showNotification('Nenhuma questão disponível para esta certificação.', 'warning');
        return;
    }
    
    // Shuffle questions
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    
    currentQuiz = {
        certification: certification,
        questions: shuffledQuestions,
        currentQuestionIndex: 0,
        answers: [],
        startTime: new Date(),
        endTime: null,
        score: 0,
        mode: 'practice'
    };
    
    showQuestionInterface();
}

// Start Full Simulation
function startFullSimulation(certification) {
    const questions = questionsDatabase[certification];
    if (!questions || questions.length === 0) {
        showNotification('Nenhuma questão disponível para esta certificação.', 'warning');
        return;
    }
    
    // Use all questions for simulation
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    
    currentQuiz = {
        certification: certification,
        questions: shuffledQuestions,
        currentQuestionIndex: 0,
        answers: [],
        startTime: new Date(),
        endTime: null,
        score: 0,
        mode: 'simulation',
        timeLimit: shuffledQuestions.length * 90 // 90 seconds per question
    };
    
    showQuestionInterface();
}

// Show Category Selection
function showCategorySelection(certification) {
    const questions = questionsDatabase[certification];
    const categories = [...new Set(questions.map(q => q.category))];
    
    let html = `
        <div class="category-selection">
            <h4>Escolha uma Categoria</h4>
            <div class="categories-grid">
    `;
    
    categories.forEach(category => {
        const categoryQuestions = questions.filter(q => q.category === category);
        html += `
            <div class="category-card" onclick="startCategoryPractice('${certification}', '${category}')">
                <h5>${category}</h5>
                <p>${categoryQuestions.length} questões</p>
            </div>
        `;
    });
    
    html += `
            </div>
            <button class="btn-secondary" onclick="loadCertificationContent('${certification}', 'practice')">
                <i class="fas fa-arrow-left"></i> Voltar
            </button>
        </div>
    `;
    
    const contentContainer = document.querySelector(`#${certification} .certification-content`);
    contentContainer.innerHTML = html;
}

// Start Category Practice
function startCategoryPractice(certification, category) {
    const questions = questionsDatabase[certification].filter(q => q.category === category);
    
    currentQuiz = {
        certification: certification,
        questions: questions,
        currentQuestionIndex: 0,
        answers: [],
        startTime: new Date(),
        endTime: null,
        score: 0,
        mode: 'category',
        category: category
    };
    
    showQuestionInterface();
}

// Show Question Interface
function showQuestionInterface() {
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const progress = ((currentQuiz.currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    
    let html = `
        <div class="question-interface">
            <div class="question-header">
                <div class="question-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="progress-text">
                        Questão ${currentQuiz.currentQuestionIndex + 1} de ${currentQuiz.questions.length}
                    </span>
                </div>
                ${currentQuiz.mode === 'simulation' ? `
                    <div class="timer" id="quiz-timer">
                        <i class="fas fa-clock"></i>
                        <span id="time-remaining">${formatTime(currentQuiz.timeLimit)}</span>
                    </div>
                ` : ''}
            </div>
            
            <div class="question-content">
                <div class="question-meta">
                    <span class="category-tag">${question.category}</span>
                    <span class="difficulty-tag difficulty-${question.difficulty.toLowerCase()}">${question.difficulty}</span>
                </div>
                
                <h4 class="question-text">${question.question}</h4>
                
                <div class="options-container">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <div class="option" onclick="selectOption(${index})">
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            </div>
        `;
    });
    
    html += `
                </div>
                
                <div class="question-actions">
                    ${currentQuiz.currentQuestionIndex > 0 ? `
                        <button class="btn-secondary" onclick="previousQuestion()">
                            <i class="fas fa-arrow-left"></i> Anterior
                        </button>
                    ` : ''}
                    
                    <button class="btn-primary" id="next-btn" onclick="nextQuestion()" disabled>
                        ${currentQuiz.currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finalizar' : 'Próxima'}
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const contentContainer = document.querySelector(`#${currentQuiz.certification} .certification-content`);
    contentContainer.innerHTML = html;
    
    // Start timer for simulation mode
    if (currentQuiz.mode === 'simulation') {
        startQuizTimer();
    }
}

// Select Option
function selectOption(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const selectedOption = document.querySelectorAll('.option')[optionIndex];
    selectedOption.classList.add('selected');
    
    // Store answer
    currentQuiz.answers[currentQuiz.currentQuestionIndex] = optionIndex;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

// Next Question
function nextQuestion() {
    const currentAnswer = currentQuiz.answers[currentQuiz.currentQuestionIndex];
    if (currentAnswer === undefined) {
        showNotification('Por favor, selecione uma resposta.', 'warning');
        return;
    }
    
    // Check if it's the last question
    if (currentQuiz.currentQuestionIndex === currentQuiz.questions.length - 1) {
        finishQuiz();
        return;
    }
    
    // Move to next question
    currentQuiz.currentQuestionIndex++;
    showQuestionInterface();
}

// Previous Question
function previousQuestion() {
    if (currentQuiz.currentQuestionIndex > 0) {
        currentQuiz.currentQuestionIndex--;
        showQuestionInterface();
    }
}

// Finish Quiz
function finishQuiz() {
    currentQuiz.endTime = new Date();
    
    // Calculate score
    let correctAnswers = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (currentQuiz.answers[index] === question.correct) {
            correctAnswers++;
        }
    });
    
    currentQuiz.score = Math.round((correctAnswers / currentQuiz.questions.length) * 100);
    
    // Save results
    saveQuizResults();
    
    // Show results
    showQuizResults();
}

// Show Quiz Results
function showQuizResults() {
    const duration = Math.round((currentQuiz.endTime - currentQuiz.startTime) / 1000);
    const avgTimePerQuestion = Math.round(duration / currentQuiz.questions.length);
    
    let html = `
        <div class="quiz-results">
            <div class="results-header">
                <div class="score-circle">
                    <div class="score-value">${currentQuiz.score}%</div>
                    <div class="score-label">Pontuação</div>
                </div>
                <div class="results-summary">
                    <h3>Resultado do ${currentQuiz.mode === 'simulation' ? 'Simulado' : 'Teste'}</h3>
                    <div class="summary-stats">
                        <div class="summary-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${currentQuiz.answers.filter((answer, index) => answer === currentQuiz.questions[index].correct).length} corretas</span>
                        </div>
                        <div class="summary-item">
                            <i class="fas fa-times-circle"></i>
                            <span>${currentQuiz.questions.length - currentQuiz.answers.filter((answer, index) => answer === currentQuiz.questions[index].correct).length} incorretas</span>
                        </div>
                        <div class="summary-item">
                            <i class="fas fa-clock"></i>
                            <span>${formatTime(duration)}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="results-analysis">
                <h4>Análise Detalhada</h4>
                <div class="questions-review">
    `;
    
    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = currentQuiz.answers[index];
        const isCorrect = userAnswer === question.correct;
        
        html += `
            <div class="question-review ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="review-header">
                    <span class="question-number">Q${index + 1}</span>
                    <span class="result-icon">
                        <i class="fas fa-${isCorrect ? 'check' : 'times'}"></i>
                    </span>
                    <span class="category">${question.category}</span>
                </div>
                <div class="review-content">
                    <p class="question-text">${question.question}</p>
                    <div class="answer-comparison">
                        <div class="user-answer">
                            <strong>Sua resposta:</strong> ${question.options[userAnswer] || 'Não respondida'}
                        </div>
                        ${!isCorrect ? `
                            <div class="correct-answer">
                                <strong>Resposta correta:</strong> ${question.options[question.correct]}
                            </div>
                        ` : ''}
                    </div>
                    <div class="explanation">
                        <strong>Explicação:</strong> ${question.explanation}
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
                </div>
            </div>
            
            <div class="results-actions">
                <button class="btn-secondary" onclick="loadCertificationContent('${currentQuiz.certification}', 'practice')">
                    <i class="fas fa-arrow-left"></i> Voltar à Prática
                </button>
                <button class="btn-primary" onclick="startPracticeMode('${currentQuiz.certification}')">
                    <i class="fas fa-redo"></i> Tentar Novamente
                </button>
                <button class="btn-outline" onclick="exportQuizResults()">
                    <i class="fas fa-download"></i> Exportar Resultados
                </button>
            </div>
        </div>
    `;
    
    const contentContainer = document.querySelector(`#${currentQuiz.certification} .certification-content`);
    contentContainer.innerHTML = html;
}

// Save Quiz Results
function saveQuizResults() {
    if (!userData.quizResults) {
        userData.quizResults = {};
    }
    if (!userData.quizResults[currentQuiz.certification]) {
        userData.quizResults[currentQuiz.certification] = [];
    }
    
    const result = {
        date: new Date().toISOString(),
        mode: currentQuiz.mode,
        category: currentQuiz.category || 'Todas',
        score: currentQuiz.score,
        questionsTotal: currentQuiz.questions.length,
        questionsCorrect: currentQuiz.answers.filter((answer, index) => answer === currentQuiz.questions[index].correct).length,
        duration: Math.round((currentQuiz.endTime - currentQuiz.startTime) / 1000),
        answers: currentQuiz.answers,
        questions: currentQuiz.questions.map(q => q.id)
    };
    
    userData.quizResults[currentQuiz.certification].push(result);
    
    // Update stats
    updateQuizStats(currentQuiz.certification);
    
    saveUserData();
    
    // Add to recent activity
    addRecentActivity(
        `${currentQuiz.mode === 'simulation' ? 'Simulado' : 'Prática'} ${currentQuiz.certification.toUpperCase()}: ${currentQuiz.score}%`,
        currentQuiz.score >= 70 ? 'success' : 'warning'
    );
}

// Update Quiz Stats
function updateQuizStats(certification) {
    const results = userData.quizResults[certification] || [];
    
    if (results.length === 0) return;
    
    const totalQuestions = results.reduce((sum, result) => sum + result.questionsTotal, 0);
    const totalCorrect = results.reduce((sum, result) => sum + result.questionsCorrect, 0);
    const totalDuration = results.reduce((sum, result) => sum + result.duration, 0);
    
    const accuracy = Math.round((totalCorrect / totalQuestions) * 100);
    const avgTime = Math.round(totalDuration / totalQuestions);
    
    // Find weakest category
    const categoryStats = {};
    results.forEach(result => {
        if (!categoryStats[result.category]) {
            categoryStats[result.category] = { correct: 0, total: 0 };
        }
        categoryStats[result.category].correct += result.questionsCorrect;
        categoryStats[result.category].total += result.questionsTotal;
    });
    
    let weakestCategory = 'N/A';
    let lowestAccuracy = 100;
    
    Object.keys(categoryStats).forEach(category => {
        const categoryAccuracy = (categoryStats[category].correct / categoryStats[category].total) * 100;
        if (categoryAccuracy < lowestAccuracy) {
            lowestAccuracy = categoryAccuracy;
            weakestCategory = category;
        }
    });
    
    // Update UI
    const questionsAnsweredEl = document.getElementById(`${certification}-questions-answered`);
    const accuracyEl = document.getElementById(`${certification}-accuracy`);
    const avgTimeEl = document.getElementById(`${certification}-avg-time`);
    const weakAreasEl = document.getElementById(`${certification}-weak-areas`);
    
    if (questionsAnsweredEl) questionsAnsweredEl.textContent = totalQuestions;
    if (accuracyEl) accuracyEl.textContent = `${accuracy}%`;
    if (avgTimeEl) avgTimeEl.textContent = `${avgTime}s`;
    if (weakAreasEl) weakAreasEl.textContent = weakestCategory;
    
    // Update overall progress
    userData.progress[certification].practice = Math.min(100, Math.round(results.length * 10)); // 10% per quiz completed
    updateProgressBars();
}

// Quiz Timer
let quizTimer;

function startQuizTimer() {
    let timeRemaining = currentQuiz.timeLimit;
    
    quizTimer = setInterval(() => {
        timeRemaining--;
        
        const timerEl = document.getElementById('time-remaining');
        if (timerEl) {
            timerEl.textContent = formatTime(timeRemaining);
            
            // Change color when time is running out
            if (timeRemaining < 60) {
                timerEl.style.color = '#dc3545';
            } else if (timeRemaining < 300) {
                timerEl.style.color = '#ffc107';
            }
        }
        
        if (timeRemaining <= 0) {
            clearInterval(quizTimer);
            finishQuiz();
        }
    }, 1000);
}

// Export Quiz Results
function exportQuizResults() {
    const result = userData.quizResults[currentQuiz.certification].slice(-1)[0]; // Get latest result
    
    let exportData = `# Resultado do Quiz - ${currentQuiz.certification.toUpperCase()}\n\n`;
    exportData += `**Data:** ${new Date(result.date).toLocaleDateString('pt-BR')}\n`;
    exportData += `**Modo:** ${result.mode}\n`;
    exportData += `**Categoria:** ${result.category}\n`;
    exportData += `**Pontuação:** ${result.score}%\n`;
    exportData += `**Questões:** ${result.questionsCorrect}/${result.questionsTotal}\n`;
    exportData += `**Duração:** ${formatTime(result.duration)}\n\n`;
    
    exportData += `## Questões Detalhadas\n\n`;
    
    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = currentQuiz.answers[index];
        const isCorrect = userAnswer === question.correct;
        
        exportData += `### Questão ${index + 1} ${isCorrect ? '✓' : '✗'}\n`;
        exportData += `**Categoria:** ${question.category}\n`;
        exportData += `**Dificuldade:** ${question.difficulty}\n\n`;
        exportData += `${question.question}\n\n`;
        
        question.options.forEach((option, optIndex) => {
            const marker = optIndex === question.correct ? '✓' : 
                          optIndex === userAnswer ? '✗' : ' ';
            exportData += `${marker} ${String.fromCharCode(65 + optIndex)}. ${option}\n`;
        });
        
        exportData += `\n**Explicação:** ${question.explanation}\n\n---\n\n`;
    });
    
    // Create and download file
    const blob = new Blob([exportData], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-result-${currentQuiz.certification}-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Resultados exportados com sucesso!', 'success');
}

// Utility Functions
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Load quiz stats on page load
function loadQuizStats(certification) {
    if (userData.quizResults && userData.quizResults[certification]) {
        updateQuizStats(certification);
    }
}
