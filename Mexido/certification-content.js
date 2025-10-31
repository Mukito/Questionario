// Certification Content Data
const certificationContent = {
    itil4: {
        checklist: {
            title: 'Checklist de Revisão - ITIL 4',
            items: [
                {
                    category: 'Conceitos Fundamentais',
                    items: [
                        { id: 'itil4-1', text: 'Definição e propósito da ITIL 4', completed: false },
                        { id: 'itil4-2', text: 'Diferenças entre ITIL v3 e ITIL 4', completed: false },
                        { id: 'itil4-3', text: 'Conceito de cocriação de valor', completed: false },
                        { id: 'itil4-4', text: 'Utilidade vs Garantia', completed: false }
                    ]
                },
                {
                    category: 'Sistema de Valor de Serviço (SVS)',
                    items: [
                        { id: 'itil4-5', text: 'Componentes do SVS', completed: false },
                        { id: 'itil4-6', text: 'Oportunidade e Demanda', completed: false },
                        { id: 'itil4-7', text: 'Cadeia de Valor de Serviço', completed: false },
                        { id: 'itil4-8', text: 'Governança no SVS', completed: false }
                    ]
                },
                {
                    category: '7 Princípios Orientadores',
                    items: [
                        { id: 'itil4-9', text: 'Foque no valor', completed: false },
                        { id: 'itil4-10', text: 'Comece onde você está', completed: false },
                        { id: 'itil4-11', text: 'Progrida iterativamente com feedback', completed: false },
                        { id: 'itil4-12', text: 'Colabore e promova a visibilidade', completed: false },
                        { id: 'itil4-13', text: 'Pense e trabalhe holisticamente', completed: false },
                        { id: 'itil4-14', text: 'Mantenha-o simples e prático', completed: false },
                        { id: 'itil4-15', text: 'Aprimore e automatize', completed: false }
                    ]
                },
                {
                    category: '4 Dimensões da Gestão de Serviços',
                    items: [
                        { id: 'itil4-16', text: 'Organizações e Pessoas', completed: false },
                        { id: 'itil4-17', text: 'Informação e Tecnologia', completed: false },
                        { id: 'itil4-18', text: 'Parceiros e Fornecedores', completed: false },
                        { id: 'itil4-19', text: 'Fluxos de Valor e Processos', completed: false }
                    ]
                },
                {
                    category: 'Práticas de Gestão (34)',
                    items: [
                        { id: 'itil4-20', text: 'Práticas de Gestão Geral (14)', completed: false },
                        { id: 'itil4-21', text: 'Práticas de Gestão de Serviços (17)', completed: false },
                        { id: 'itil4-22', text: 'Práticas de Gestão Técnica (3)', completed: false },
                        { id: 'itil4-23', text: 'Melhoria Contínua', completed: false },
                        { id: 'itil4-24', text: 'Gestão de Incidentes', completed: false },
                        { id: 'itil4-25', text: 'Gestão de Problemas', completed: false }
                    ]
                }
            ]
        },
        examples: {
            title: 'Exemplos Práticos - ITIL 4',
            scenarios: [
                {
                    title: 'Implementação de Melhoria Contínua',
                    description: 'Uma empresa de TI identifica que seus incidentes estão aumentando.',
                    situation: 'A empresa XYZ tem observado um aumento de 30% nos incidentes de TI nos últimos 3 meses.',
                    application: 'Aplicando os princípios da ITIL 4:',
                    steps: [
                        '1. **Foque no valor**: Identifique como a redução de incidentes agrega valor ao negócio',
                        '2. **Comece onde você está**: Analise os processos atuais de gestão de incidentes',
                        '3. **Progrida iterativamente**: Implemente melhorias em pequenos ciclos',
                        '4. **Colabore**: Envolva todas as equipes (desenvolvimento, operações, negócio)',
                        '5. **Pense holisticamente**: Considere as 4 dimensões (pessoas, processos, tecnologia, parceiros)'
                    ],
                    outcome: 'Resultado esperado: Redução de 40% nos incidentes em 6 meses através de melhorias nos processos e treinamento da equipe.'
                },
                {
                    title: 'Gestão de Mudanças com ITIL 4',
                    description: 'Implementação de uma nova ferramenta de monitoramento.',
                    situation: 'A empresa precisa implementar uma nova ferramenta de monitoramento de infraestrutura.',
                    application: 'Usando a prática de Habilitação de Mudanças:',
                    steps: [
                        '1. **Avaliação de Risco**: Classificar a mudança (padrão, normal, emergencial)',
                        '2. **Autorização**: Obter aprovação do CAB (Change Advisory Board)',
                        '3. **Planejamento**: Definir cronograma considerando as 4 dimensões',
                        '4. **Implementação**: Executar com foco na criação de valor',
                        '5. **Revisão**: Avaliar o sucesso e lições aprendidas'
                    ],
                    outcome: 'Implementação bem-sucedida com mínimo impacto nos serviços e máximo valor para o negócio.'
                }
            ]
        }
    },
    pmp: {
        checklist: {
            title: 'Checklist de Revisão - PMP',
            items: [
                {
                    category: 'Domínio Pessoas (42%)',
                    items: [
                        { id: 'pmp-1', text: 'Liderar uma equipe', completed: false },
                        { id: 'pmp-2', text: 'Apoiar o desempenho da equipe', completed: false },
                        { id: 'pmp-3', text: 'Abordar e remover impedimentos', completed: false },
                        { id: 'pmp-4', text: 'Empoderar membros da equipe', completed: false },
                        { id: 'pmp-5', text: 'Garantir que os membros da equipe sejam treinados', completed: false },
                        { id: 'pmp-6', text: 'Construir uma equipe', completed: false },
                        { id: 'pmp-7', text: 'Abordar e remover impedimentos, obstáculos e bloqueadores', completed: false }
                    ]
                },
                {
                    category: 'Domínio Processo (50%)',
                    items: [
                        { id: 'pmp-8', text: 'Executar projeto com foco na entrega de valor', completed: false },
                        { id: 'pmp-9', text: 'Gerenciar comunicações', completed: false },
                        { id: 'pmp-10', text: 'Trabalhar com stakeholders', completed: false },
                        { id: 'pmp-11', text: 'Formar uma equipe', completed: false },
                        { id: 'pmp-12', text: 'Planejar e gerenciar orçamento e recursos', completed: false },
                        { id: 'pmp-13', text: 'Planejar e gerenciar cronograma', completed: false },
                        { id: 'pmp-14', text: 'Planejar e gerenciar qualidade', completed: false },
                        { id: 'pmp-15', text: 'Integrar atividades do projeto', completed: false },
                        { id: 'pmp-16', text: 'Gerenciar mudanças do projeto', completed: false },
                        { id: 'pmp-17', text: 'Planejar e gerenciar aquisições', completed: false }
                    ]
                },
                {
                    category: 'Domínio Ambiente de Negócios (8%)',
                    items: [
                        { id: 'pmp-18', text: 'Planejar e gerenciar conformidade do projeto', completed: false },
                        { id: 'pmp-19', text: 'Avaliar e entregar benefícios e valor do projeto', completed: false },
                        { id: 'pmp-20', text: 'Avaliar e abordar mudanças no ambiente externo', completed: false },
                        { id: 'pmp-21', text: 'Apoiar mudança organizacional', completed: false }
                    ]
                },
                {
                    category: 'Abordagens Ágeis e Híbridas',
                    items: [
                        { id: 'pmp-22', text: 'Princípios e valores ágeis', completed: false },
                        { id: 'pmp-23', text: 'Scrum, Kanban, Lean', completed: false },
                        { id: 'pmp-24', text: 'Abordagens híbridas', completed: false },
                        { id: 'pmp-25', text: 'Servant leadership', completed: false }
                    ]
                }
            ]
        },
        examples: {
            title: 'Exemplos Práticos - PMP',
            scenarios: [
                {
                    title: 'Gerenciamento de Stakeholders em Projeto Híbrido',
                    description: 'Projeto de desenvolvimento de software usando abordagem híbrida.',
                    situation: 'Você está gerenciando um projeto de desenvolvimento de um sistema ERP usando metodologia híbrida (Waterfall para planejamento geral e Scrum para desenvolvimento).',
                    application: 'Aplicando competências do domínio Pessoas e Processo:',
                    steps: [
                        '1. **Identificar Stakeholders**: Mapear todos os interessados (usuários finais, patrocinadores, equipe técnica)',
                        '2. **Analisar Engajamento**: Usar matriz de poder/interesse para classificar stakeholders',
                        '3. **Planejar Comunicação**: Definir frequência e formato de comunicação para cada grupo',
                        '4. **Executar Engajamento**: Reuniões regulares, demos, relatórios de progresso',
                        '5. **Monitorar e Controlar**: Ajustar estratégia conforme feedback e mudanças'
                    ],
                    outcome: 'Stakeholders engajados e alinhados, resultando em maior aceitação do produto final.'
                },
                {
                    title: 'Gestão de Mudanças em Ambiente Ágil',
                    description: 'Como gerenciar mudanças de escopo em um projeto ágil.',
                    situation: 'Durante uma Sprint, o Product Owner solicita uma mudança significativa no backlog que pode impactar o cronograma.',
                    application: 'Usando princípios ágeis e competências PMP:',
                    steps: [
                        '1. **Avaliar Impacto**: Analisar impacto no valor, cronograma e recursos',
                        '2. **Facilitar Discussão**: Reunir equipe e stakeholders para discutir opções',
                        '3. **Priorizar Valor**: Focar no que entrega maior valor ao cliente',
                        '4. **Adaptar Plano**: Ajustar backlog e comunicar mudanças',
                        '5. **Documentar Decisão**: Registrar rationale e impactos da mudança'
                    ],
                    outcome: 'Mudança implementada com transparência e foco no valor, mantendo equipe e stakeholders alinhados.'
                }
            ]
        }
    },
    scrum: {
        checklist: {
            title: 'Checklist de Revisão - Scrum Master',
            items: [
                {
                    category: 'Fundamentos do Scrum',
                    items: [
                        { id: 'scrum-1', text: 'Definição e propósito do Scrum', completed: false },
                        { id: 'scrum-2', text: 'Valores do Scrum (Compromisso, Coragem, Foco, Abertura, Respeito)', completed: false },
                        { id: 'scrum-3', text: 'Pilares do Scrum (Transparência, Inspeção, Adaptação)', completed: false },
                        { id: 'scrum-4', text: 'Empirismo e complexidade', completed: false }
                    ]
                },
                {
                    category: 'Papéis Scrum',
                    items: [
                        { id: 'scrum-5', text: 'Scrum Master: responsabilidades e accountabilities', completed: false },
                        { id: 'scrum-6', text: 'Product Owner: responsabilidades e accountabilities', completed: false },
                        { id: 'scrum-7', text: 'Developers: responsabilidades e accountabilities', completed: false },
                        { id: 'scrum-8', text: 'Scrum Team como um todo', completed: false }
                    ]
                },
                {
                    category: 'Eventos Scrum',
                    items: [
                        { id: 'scrum-9', text: 'Sprint: propósito, duração, características', completed: false },
                        { id: 'scrum-10', text: 'Sprint Planning: objetivo, timeboxing, participantes', completed: false },
                        { id: 'scrum-11', text: 'Daily Scrum: propósito, formato, facilitação', completed: false },
                        { id: 'scrum-12', text: 'Sprint Review: objetivo, stakeholders, demonstração', completed: false },
                        { id: 'scrum-13', text: 'Sprint Retrospective: melhoria contínua, técnicas', completed: false }
                    ]
                },
                {
                    category: 'Artefatos Scrum',
                    items: [
                        { id: 'scrum-14', text: 'Product Backlog: características, refinamento, ordenação', completed: false },
                        { id: 'scrum-15', text: 'Sprint Backlog: composição, propriedade, transparência', completed: false },
                        { id: 'scrum-16', text: 'Increment: definição, critérios, entrega', completed: false },
                        { id: 'scrum-17', text: 'Definition of Done: importância, criação, evolução', completed: false }
                    ]
                },
                {
                    category: 'Facilitação e Coaching',
                    items: [
                        { id: 'scrum-18', text: 'Técnicas de facilitação', completed: false },
                        { id: 'scrum-19', text: 'Coaching de equipe', completed: false },
                        { id: 'scrum-20', text: 'Resolução de conflitos', completed: false },
                        { id: 'scrum-21', text: 'Servant Leadership', completed: false },
                        { id: 'scrum-22', text: 'Remoção de impedimentos', completed: false }
                    ]
                }
            ]
        },
        examples: {
            title: 'Exemplos Práticos - Scrum Master',
            scenarios: [
                {
                    title: 'Facilitação de Sprint Retrospective',
                    description: 'Como conduzir uma retrospectiva eficaz quando a equipe está desmotivada.',
                    situation: 'Sua equipe Scrum completou uma Sprint difícil com vários impedimentos e não conseguiu atingir o Sprint Goal. O moral está baixo.',
                    application: 'Aplicando técnicas de facilitação e servant leadership:',
                    steps: [
                        '1. **Preparação**: Escolher técnica adequada (ex: Start-Stop-Continue, 4Ls)',
                        '2. **Criar Ambiente Seguro**: Estabelecer regras de respeito e abertura',
                        '3. **Facilitar Discussão**: Focar em fatos, não culpados',
                        '4. **Identificar Melhorias**: Priorizar 1-2 ações concretas para próxima Sprint',
                        '5. **Comprometimento**: Garantir que a equipe se comprometa com as ações'
                    ],
                    outcome: 'Equipe identifica melhorias concretas e recupera motivação para próxima Sprint.'
                },
                {
                    title: 'Remoção de Impedimentos Organizacionais',
                    description: 'Como lidar com impedimentos que estão fora do controle da equipe.',
                    situation: 'A equipe precisa de aprovação de segurança para acessar um ambiente de produção, mas o processo está travado há 2 semanas.',
                    application: 'Usando servant leadership e escalação apropriada:',
                    steps: [
                        '1. **Identificar Root Cause**: Entender exatamente onde está o bloqueio',
                        '2. **Mapear Stakeholders**: Identificar quem pode ajudar a resolver',
                        '3. **Escalar Apropriadamente**: Envolver management quando necessário',
                        '4. **Comunicar Transparentemente**: Manter equipe informada sobre progresso',
                        '5. **Buscar Alternativas**: Explorar workarounds temporários se possível'
                    ],
                    outcome: 'Impedimento removido através de escalação apropriada e comunicação eficaz.'
                },
                {
                    title: 'Coaching de Product Owner Inexperiente',
                    description: 'Como ajudar um PO novo a entender seu papel e responsabilidades.',
                    situation: 'Você tem um Product Owner recém-contratado que não tem experiência com Scrum e está microgerenciando a equipe de desenvolvimento.',
                    application: 'Aplicando coaching e mentoring:',
                    steps: [
                        '1. **Educação**: Explicar o papel e responsabilidades do PO',
                        '2. **Observação**: Acompanhar interações com a equipe',
                        '3. **Feedback Construtivo**: Dar feedback específico e acionável',
                        '4. **Modelagem**: Demonstrar comportamentos apropriados',
                        '5. **Suporte Contínuo**: Oferecer mentoring regular'
                    ],
                    outcome: 'PO desenvolve competências necessárias e melhora colaboração com a equipe.'
                }
            ]
        }
    }
};

// Function to render checklist content
function renderChecklist(certification) {
    const checklist = certificationContent[certification].checklist;
    
    let html = `
        <div class="checklist-container">
            <h3>${checklist.title}</h3>
            <div class="checklist-progress">
                <div class="progress-bar">
                    <div class="progress-fill" id="${certification}-checklist-progress"></div>
                </div>
                <span class="progress-text" id="${certification}-checklist-text">0% Completo</span>
            </div>
    `;
    
    checklist.items.forEach(category => {
        html += `
            <div class="checklist-category">
                <h4><i class="fas fa-folder"></i> ${category.category}</h4>
                <div class="checklist-items">
        `;
        
        category.items.forEach(item => {
            html += `
                <div class="checklist-item">
                    <label class="checkbox-container">
                        <input type="checkbox" id="${item.id}" ${item.completed ? 'checked' : ''} 
                               onchange="toggleChecklistItem('${certification}', '${item.id}')">
                        <span class="checkmark"></span>
                        <span class="item-text">${item.text}</span>
                    </label>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `
            <div class="checklist-actions">
                <button class="btn-secondary" onclick="resetChecklist('${certification}')">
                    <i class="fas fa-undo"></i> Resetar Checklist
                </button>
                <button class="btn-primary" onclick="exportChecklist('${certification}')">
                    <i class="fas fa-download"></i> Exportar Progresso
                </button>
            </div>
        </div>
    `;
    
    return html;
}

// Function to render examples content
function renderExamples(certification) {
    const examples = certificationContent[certification].examples;
    
    let html = `
        <div class="examples-container">
            <h3>${examples.title}</h3>
            <div class="examples-grid">
    `;
    
    examples.scenarios.forEach((scenario, index) => {
        html += `
            <div class="example-card">
                <div class="example-header">
                    <h4><i class="fas fa-lightbulb"></i> ${scenario.title}</h4>
                    <p class="example-description">${scenario.description}</p>
                </div>
                <div class="example-content">
                    <div class="example-section">
                        <h5><i class="fas fa-exclamation-circle"></i> Situação</h5>
                        <p>${scenario.situation}</p>
                    </div>
                    <div class="example-section">
                        <h5><i class="fas fa-cogs"></i> ${scenario.application}</h5>
                        <div class="example-steps">
                            ${scenario.steps.map(step => `<div class="step">${step}</div>`).join('')}
                        </div>
                    </div>
                    <div class="example-section outcome">
                        <h5><i class="fas fa-trophy"></i> Resultado</h5>
                        <p>${scenario.outcome}</p>
                    </div>
                </div>
                <div class="example-actions">
                    <button class="btn-outline" onclick="bookmarkExample('${certification}', ${index})">
                        <i class="fas fa-bookmark"></i> Favoritar
                    </button>
                    <button class="btn-outline" onclick="shareExample('${certification}', ${index})">
                        <i class="fas fa-share"></i> Compartilhar
                    </button>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Checklist functionality
function toggleChecklistItem(certification, itemId) {
    const checkbox = document.getElementById(itemId);
    const isChecked = checkbox.checked;
    
    // Update userData
    if (!userData.checklists) {
        userData.checklists = {};
    }
    if (!userData.checklists[certification]) {
        userData.checklists[certification] = {};
    }
    
    userData.checklists[certification][itemId] = isChecked;
    saveUserData();
    
    // Update progress
    updateChecklistProgress(certification);
    
    // Add to recent activity
    const itemText = checkbox.nextElementSibling.nextElementSibling.textContent;
    if (isChecked) {
        addRecentActivity(`✓ ${itemText} - ${certification.toUpperCase()}`, 'success');
    }
}

function updateChecklistProgress(certification) {
    const checklist = certificationContent[certification].checklist;
    let totalItems = 0;
    let completedItems = 0;
    
    checklist.items.forEach(category => {
        category.items.forEach(item => {
            totalItems++;
            if (userData.checklists && 
                userData.checklists[certification] && 
                userData.checklists[certification][item.id]) {
                completedItems++;
            }
        });
    });
    
    const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    const progressFill = document.getElementById(`${certification}-checklist-progress`);
    const progressText = document.getElementById(`${certification}-checklist-text`);
    
    if (progressFill && progressText) {
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% Completo (${completedItems}/${totalItems})`;
    }
    
    // Update overall progress
    userData.progress[certification].checklist = percentage;
    saveUserData();
    updateProgressBars();
}

function resetChecklist(certification) {
    if (confirm('Tem certeza que deseja resetar todo o progresso do checklist?')) {
        if (userData.checklists && userData.checklists[certification]) {
            userData.checklists[certification] = {};
        }
        
        // Uncheck all checkboxes
        const checkboxes = document.querySelectorAll(`input[id^="${certification}-"]`);
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        updateChecklistProgress(certification);
        addRecentActivity(`Checklist ${certification.toUpperCase()} resetado`, 'info');
    }
}

function exportChecklist(certification) {
    const checklist = certificationContent[certification].checklist;
    let exportData = `# ${checklist.title}\n\n`;
    
    checklist.items.forEach(category => {
        exportData += `## ${category.category}\n\n`;
        category.items.forEach(item => {
            const isCompleted = userData.checklists && 
                               userData.checklists[certification] && 
                               userData.checklists[certification][item.id];
            exportData += `- [${isCompleted ? 'x' : ' '}] ${item.text}\n`;
        });
        exportData += '\n';
    });
    
    // Create and download file
    const blob = new Blob([exportData], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `checklist-${certification}-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    addRecentActivity(`Checklist ${certification.toUpperCase()} exportado`, 'success');
}

// Examples functionality
function bookmarkExample(certification, exampleIndex) {
    if (!userData.bookmarks) {
        userData.bookmarks = [];
    }
    
    const example = certificationContent[certification].examples.scenarios[exampleIndex];
    const bookmark = {
        certification: certification,
        title: example.title,
        index: exampleIndex,
        date: new Date().toISOString()
    };
    
    // Check if already bookmarked
    const existingIndex = userData.bookmarks.findIndex(b => 
        b.certification === certification && b.index === exampleIndex
    );
    
    if (existingIndex === -1) {
        userData.bookmarks.push(bookmark);
        saveUserData();
        showNotification('Exemplo adicionado aos favoritos!', 'success');
        addRecentActivity(`Exemplo favoritado: ${example.title}`, 'success');
    } else {
        showNotification('Exemplo já está nos favoritos!', 'info');
    }
}

function shareExample(certification, exampleIndex) {
    const example = certificationContent[certification].examples.scenarios[exampleIndex];
    
    if (navigator.share) {
        navigator.share({
            title: `Exemplo ${certification.toUpperCase()}: ${example.title}`,
            text: example.description,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        const shareText = `Exemplo ${certification.toUpperCase()}: ${example.title}\n\n${example.description}\n\nVia CertPrep Platform`;
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Exemplo copiado para a área de transferência!', 'success');
        });
    }
}

// Load saved checklist state
function loadChecklistState(certification) {
    if (userData.checklists && userData.checklists[certification]) {
        Object.keys(userData.checklists[certification]).forEach(itemId => {
            const checkbox = document.getElementById(itemId);
            if (checkbox) {
                checkbox.checked = userData.checklists[certification][itemId];
            }
        });
        updateChecklistProgress(certification);
    }
}
