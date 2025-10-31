// Global Variables
let currentSection = 'dashboard';
let currentCertification = null;
let currentSubsection = 'concepts';
let userData = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadUserData();
    setupEventListeners();
    updateProgressBars();
    updateStats();
    loadRecentActivity();
    showSection('dashboard');
}

// Local Storage Functions
function loadUserData() {
    const savedData = localStorage.getItem('certPrepUserData');
    if (savedData) {
        userData = JSON.parse(savedData);
    } else {
        userData = {
            progress: {
                itil4: { concepts: 0, checklist: 0, practice: 0, examples: 0 },
                pmp: { concepts: 0, checklist: 0, practice: 0, examples: 0 },
                scrum: { concepts: 0, checklist: 0, practice: 0, examples: 0 }
            },
            stats: {
                totalStudyTime: 0,
                studyStreak: 0,
                questionsAnswered: 0,
                correctAnswers: 0,
                lastStudyDate: null
            },
            diary: [],
            studyPlan: {},
            preferences: {}
        };
    }
}

function saveUserData() {
    localStorage.setItem('certPrepUserData', JSON.stringify(userData));
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    mobileToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleActionClick(action);
        });
    });

    // Certification navigation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cert-nav-btn')) {
            const subsection = e.target.getAttribute('data-subsection');
            const certification = getCurrentCertification();
            showCertificationSubsection(certification, subsection);
        }
    });
}

// Navigation Functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in');
    }

    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    currentSection = sectionId;

    // Load section content
    loadSectionContent(sectionId);
}

function getCurrentCertification() {
    if (currentSection === 'itil4') return 'itil4';
    if (currentSection === 'pmp') return 'pmp';
    if (currentSection === 'scrum') return 'scrum';
    return null;
}

function showCertificationSubsection(certification, subsection) {
    // Update navigation buttons
    const section = document.getElementById(certification);
    const navButtons = section.querySelectorAll('.cert-nav-btn');
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = section.querySelector(`[data-subsection="${subsection}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    currentSubsection = subsection;
    loadCertificationContent(certification, subsection);
}

// Content Loading Functions
function loadSectionContent(sectionId) {
    switch(sectionId) {
        case 'dashboard':
            // Dashboard content is already loaded
            break;
        case 'itil4':
        case 'pmp':
        case 'scrum':
            loadCertificationContent(sectionId, 'concepts');
            break;
        case 'diary':
            loadDiaryContent();
            break;
        case 'strategies':
            loadStrategiesContent();
            break;
        case 'connections':
            loadConnectionsContent();
            break;
        case 'plan':
            loadPlanContent();
            break;
    }
}

function loadCertificationContent(certification, subsection) {
    const contentContainer = document.querySelector(`#${certification} .certification-content`);
    
    // Show loading state
    contentContainer.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    
    // Simulate loading delay
    setTimeout(() => {
        let content = '';
        
        switch(subsection) {
            case 'concepts':
                content = getCertificationConcepts(certification);
                break;
            case 'checklist':
                content = getCertificationChecklist(certification);
                break;
            case 'practice':
                content = getCertificationPractice(certification);
                break;
            case 'examples':
                content = getCertificationExamples(certification);
                break;
        }
        
        contentContainer.innerHTML = content;
        contentContainer.classList.add('fade-in');
        
        // Setup subsection event listeners
        setupSubsectionEventListeners(certification, subsection);
    }, 500);
}

// Content Generation Functions
function getCertificationConcepts(certification) {
    const concepts = {
        itil4: {
            title: 'Conceitos Fundamentais da ITIL 4',
            content: `
                <div class="concepts-grid">
                    <div class="concept-card">
                        <h4><i class="fas fa-bullseye"></i> Foco no Valor</h4>
                        <p>A ITIL 4 se concentra na cocriação de valor para todas as partes interessadas, incluindo usuários finais, TI, organizações, parceiros e fornecedores.</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-cube"></i> As 4 Dimensões</h4>
                        <p><strong>1. Organizações e Pessoas:</strong> Estrutura organizacional, cultura e competências.<br>
                        <strong>2. Informação e Tecnologia:</strong> Sistemas, dados e tecnologias de suporte.<br>
                        <strong>3. Parceiros e Fornecedores:</strong> Relacionamentos externos e terceirização.<br>
                        <strong>4. Fluxos de Valor e Processos:</strong> Atividades e workflows para criação de valor.</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-cogs"></i> Sistema de Valor de Serviço (SVS)</h4>
                        <p>Modelo que descreve como todos os componentes e atividades da organização trabalham juntos para facilitar a criação de valor.</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-compass"></i> 7 Princípios Orientadores</h4>
                        <p>1. Foque no valor<br>2. Comece onde você está<br>3. Progrida iterativamente com feedback<br>4. Colabore e promova a visibilidade<br>5. Pense e trabalhe holisticamente<br>6. Mantenha-o simples e prático<br>7. Aprimore e automatize</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-tools"></i> 34 Práticas de Gestão</h4>
                        <p><strong>Gestão Geral (14):</strong> Arquitetura, Melhoria Contínua, Segurança da Informação, etc.<br>
                        <strong>Gestão de Serviços (17):</strong> Disponibilidade, Incidentes, Problemas, etc.<br>
                        <strong>Gestão Técnica (3):</strong> Implantação, Infraestrutura, Desenvolvimento de Software.</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-balance-scale"></i> Utilidade e Garantia</h4>
                        <p><strong>Utilidade:</strong> "O que o serviço faz" - funcionalidade para atender necessidades específicas.<br>
                        <strong>Garantia:</strong> "Como o serviço funciona" - níveis de desempenho, disponibilidade e segurança.</p>
                    </div>
                </div>
                <div class="progress-tracker">
                    <button class="btn-primary" onclick="markConceptsComplete('itil4')">
                        <i class="fas fa-check"></i> Marcar como Concluído
                    </button>
                </div>
            `
        },
        pmp: {
            title: 'Conceitos Fundamentais do PMP',
            content: `
                <div class="concepts-grid">
                    <div class="concept-card">
                        <h4><i class="fas fa-users"></i> Domínio Pessoas (42%)</h4>
                        <p><strong>14 Tarefas</strong> relacionadas à liderança de equipe, gestão de stakeholders, desenvolvimento de equipe e comunicação eficaz.</p>
                        <ul>
                            <li>Liderar uma equipe</li>
                            <li>Apoiar o desempenho da equipe</li>
                            <li>Abordar e remover impedimentos</li>
                            <li>Empoderar membros da equipe</li>
                        </ul>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-cogs"></i> Domínio Processo (50%)</h4>
                        <p><strong>17 Tarefas</strong> relacionadas ao gerenciamento técnico do projeto, incluindo planejamento, execução, monitoramento e controle.</p>
                        <ul>
                            <li>Executar o projeto com foco na entrega de valor</li>
                            <li>Gerenciar comunicações</li>
                            <li>Avaliar e gerenciar riscos</li>
                            <li>Engajar stakeholders</li>
                        </ul>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-building"></i> Domínio Ambiente de Negócios (8%)</h4>
                        <p><strong>4 Tarefas</strong> relacionadas ao contexto organizacional, conformidade, entrega de valor e mudança organizacional.</p>
                        <ul>
                            <li>Planejar e gerenciar conformidade do projeto</li>
                            <li>Avaliar e entregar benefícios e valor do projeto</li>
                            <li>Avaliar e abordar mudanças no ambiente externo</li>
                            <li>Apoiar mudança organizacional</li>
                        </ul>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-sync-alt"></i> Abordagem Híbrida</h4>
                        <p><strong>50% Preditiva + 50% Ágil/Híbrida</strong><br>
                        O exame PMP atual exige conhecimento tanto de metodologias tradicionais (Waterfall) quanto ágeis (Scrum, Kanban) e híbridas.</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-clipboard-list"></i> Habilitadores</h4>
                        <p>Exemplos específicos do trabalho realizado dentro de cada tarefa, incluindo técnicas, ferramentas e conhecimentos necessários.</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-chart-line"></i> Foco na Entrega de Valor</h4>
                        <p>Ênfase na criação e entrega de valor para o negócio e stakeholders, não apenas na conclusão de tarefas e atividades.</p>
                    </div>
                </div>
                <div class="progress-tracker">
                    <button class="btn-primary" onclick="markConceptsComplete('pmp')">
                        <i class="fas fa-check"></i> Marcar como Concluído
                    </button>
                </div>
            `
        },
        scrum: {
            title: 'Conceitos Fundamentais do Scrum Master',
            content: `
                <div class="concepts-grid">
                    <div class="concept-card">
                        <h4><i class="fas fa-user-tie"></i> Papel do Scrum Master</h4>
                        <p>Facilitador do Scrum que garante que o framework seja seguido. Atua como coach, mentor e líder servidor para a equipe Scrum.</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-tasks"></i> Responsabilidades Principais</h4>
                        <p><strong>Facilitação:</strong> Daily Standups, Sprint Planning, Sprint Reviews, Retrospectivas<br>
                        <strong>Coaching:</strong> Orientar a equipe nos princípios ágeis e Scrum<br>
                        <strong>Remoção de Impedimentos:</strong> Eliminar obstáculos que impedem o progresso da equipe</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-calendar-alt"></i> Eventos Scrum</h4>
                        <p><strong>Sprint:</strong> Iteração de 1-4 semanas<br>
                        <strong>Sprint Planning:</strong> Planejamento do trabalho da Sprint<br>
                        <strong>Daily Scrum:</strong> Reunião diária de 15 minutos<br>
                        <strong>Sprint Review:</strong> Demonstração do trabalho concluído<br>
                        <strong>Sprint Retrospective:</strong> Reflexão sobre melhorias</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-box"></i> Artefatos Scrum</h4>
                        <p><strong>Product Backlog:</strong> Lista priorizada de funcionalidades<br>
                        <strong>Sprint Backlog:</strong> Itens selecionados para a Sprint atual<br>
                        <strong>Increment:</strong> Produto potencialmente entregável ao final da Sprint</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-heart"></i> Valores Scrum</h4>
                        <p><strong>Compromisso:</strong> Dedicação aos objetivos da equipe<br>
                        <strong>Coragem:</strong> Para fazer a coisa certa e trabalhar em problemas difíceis<br>
                        <strong>Foco:</strong> No trabalho da Sprint e objetivos da equipe<br>
                        <strong>Abertura:</strong> Sobre o trabalho e desafios<br>
                        <strong>Respeito:</strong> Pelos membros da equipe</p>
                    </div>
                    <div class="concept-card">
                        <h4><i class="fas fa-brain"></i> Habilidades Essenciais</h4>
                        <p><strong>Liderança Servidora:</strong> Liderar servindo à equipe<br>
                        <strong>Facilitação:</strong> Conduzir reuniões eficazes<br>
                        <strong>Coaching:</strong> Desenvolver a equipe<br>
                        <strong>Resolução de Conflitos:</strong> Mediar desacordos<br>
                        <strong>Comunicação:</strong> Clara e transparente</p>
                    </div>
                </div>
                <div class="progress-tracker">
                    <button class="btn-primary" onclick="markConceptsComplete('scrum')">
                        <i class="fas fa-check"></i> Marcar como Concluído
                    </button>
                </div>
            `
        }
    };

    const cert = concepts[certification];
    return `
        <div class="certification-concepts">
            <h3>${cert.title}</h3>
            ${cert.content}
        </div>
        <style>
            .concepts-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
                margin-bottom: 2rem;
            }
            .concept-card {
                background: #f8f9fa;
                padding: 1.5rem;
                border-radius: 10px;
                border-left: 4px solid #667eea;
                transition: transform 0.3s ease;
            }
            .concept-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }
            .concept-card h4 {
                color: #2c3e50;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .concept-card ul {
                margin-top: 1rem;
                padding-left: 1.5rem;
            }
            .concept-card li {
                margin-bottom: 0.5rem;
            }
            .progress-tracker {
                text-align: center;
                margin-top: 2rem;
            }
            .btn-primary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 25px;
                font-size: 1.1rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
            }
        </style>
    `;
}

function getCertificationChecklist(certification) {
    return renderChecklist(certification);
}

function getCertificationPractice(certification) {
    return renderPracticeSection(certification);
}

function getCertificationExamples(certification) {
    return renderExamples(certification);
}

function loadDiaryContent() {
    const diaryContainer = document.querySelector('#diary .diary-content');
    diaryContainer.innerHTML = renderDiaryContent();
    
    // Initialize diary after content is loaded
    setTimeout(() => {
        initializeDiary();
    }, 100);
}

function loadStrategiesContent() {
    const strategiesContainer = document.querySelector('#strategies .strategies-content');
    strategiesContainer.innerHTML = renderStrategiesContent();
    
    // Initialize strategies after content is loaded
    setTimeout(() => {
        initializeStrategies();
    }, 100);
}

function loadConnectionsContent() {
    const connectionsContainer = document.querySelector('#connections .connections-content');
    connectionsContainer.innerHTML = renderConnectionsContent();
    
    // Initialize connections after content is loaded
    setTimeout(() => {
        initializeConnections();
    }, 100);
}

function loadPlanContent() {
    const planContainer = document.querySelector('#plan .plan-content');
    planContainer.innerHTML = renderStudyPlanContent();
    
    // Initialize study plan after content is loaded
    setTimeout(() => {
        initializeStudyPlan();
    }, 100);
}

// Event Handlers
function handleActionClick(action) {
    switch(action) {
        case 'study':
            showSection('itil4'); // Default to ITIL 4, could be made dynamic
            break;
        case 'practice':
            // Navigate to practice section of current or default certification
            break;
        case 'analyze':
            showSection('diary');
            break;
        case 'adjust':
            showSection('strategies');
            break;
        case 'connect':
            showSection('connections');
            break;
    }
}

function setupSubsectionEventListeners(certification, subsection) {
    // Setup any specific event listeners for the loaded content
    if (subsection === 'checklist') {
        // Load saved checklist state
        setTimeout(() => {
            loadChecklistState(certification);
        }, 100);
    } else if (subsection === 'practice') {
        // Load quiz stats
        setTimeout(() => {
            loadQuizStats(certification);
        }, 100);
    }
}

function markConceptsComplete(certification) {
    userData.progress[certification].concepts = 100;
    saveUserData();
    updateProgressBars();
    
    // Add to recent activity
    addRecentActivity(`Conceitos de ${certification.toUpperCase()} concluídos!`, 'success');
    
    // Show success message
    showNotification('Conceitos marcados como concluídos!', 'success');
}

// Progress and Stats Functions
function updateProgressBars() {
    Object.keys(userData.progress).forEach(cert => {
        const progress = userData.progress[cert];
        const avgProgress = (progress.concepts + progress.checklist + progress.practice + progress.examples) / 4;
        
        const progressFill = document.querySelector(`.progress-card.${cert} .progress-fill`);
        const progressText = document.querySelector(`.progress-card.${cert} .progress-text`);
        
        if (progressFill && progressText) {
            progressFill.style.width = `${avgProgress}%`;
            progressText.textContent = `${Math.round(avgProgress)}% Completo`;
        }
    });
}

function updateStats() {
    const stats = userData.stats;
    
    document.getElementById('total-study-time').textContent = `${Math.floor(stats.totalStudyTime / 60)}h`;
    document.getElementById('study-streak').textContent = stats.studyStreak;
    document.getElementById('questions-answered').textContent = stats.questionsAnswered;
    
    const averageScore = stats.questionsAnswered > 0 ? 
        Math.round((stats.correctAnswers / stats.questionsAnswered) * 100) : 0;
    document.getElementById('average-score').textContent = `${averageScore}%`;
}

function loadRecentActivity() {
    const activityList = document.getElementById('recent-activity-list');
    
    // Keep the welcome message if no activities
    if (userData.diary.length === 0) {
        return;
    }
    
    // Load recent activities from diary
    const recentActivities = userData.diary.slice(-5).reverse();
    
    activityList.innerHTML = recentActivities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas fa-${activity.icon || 'book'}"></i>
            </div>
            <div class="activity-content">
                <p>${activity.title}</p>
                <small>${activity.date}</small>
            </div>
        </div>
    `).join('');
}

function addRecentActivity(title, type = 'info') {
    const iconMap = {
        'success': 'check-circle',
        'info': 'info-circle',
        'warning': 'exclamation-triangle',
        'error': 'times-circle'
    };
    
    const activity = {
        title: title,
        date: new Date().toLocaleDateString('pt-BR'),
        icon: iconMap[type] || 'info-circle',
        type: type
    };
    
    userData.diary.push(activity);
    saveUserData();
    loadRecentActivity();
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#28a745' : '#007bff',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '5px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        zIndex: '9999',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        animation: 'slideIn 0.3s ease-out'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utility Functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
}

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
}

// Initialize tooltips and other UI enhancements
function initializeUIEnhancements() {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading states for buttons
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Call UI enhancements after DOM is loaded
document.addEventListener('DOMContentLoaded', initializeUIEnhancements);
