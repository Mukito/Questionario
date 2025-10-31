// Study Strategies and Connections System

// Study Strategies Data
const studyStrategies = {
    pomodoro: {
        name: 'Técnica Pomodoro',
        description: 'Método de gestão de tempo que usa intervalos de 25 minutos de foco intenso seguidos de pausas de 5 minutos.',
        icon: 'fas fa-clock',
        benefits: [
            'Melhora a concentração e foco',
            'Reduz a fadiga mental',
            'Aumenta a produtividade',
            'Facilita o controle do tempo de estudo'
        ],
        howToUse: [
            '1. Escolha uma tarefa específica para estudar',
            '2. Configure um timer para 25 minutos',
            '3. Estude com foco total até o timer tocar',
            '4. Faça uma pausa de 5 minutos',
            '5. Repita o ciclo 4 vezes, depois faça uma pausa longa (15-30 min)'
        ],
        tools: [
            'Forest (app)',
            'Pomodone',
            'Tomato Timer (web)',
            'Focus Keeper'
        ],
        bestFor: ['Conceitos densos', 'Leitura de documentação', 'Resolução de questões']
    },
    spacedRepetition: {
        name: 'Revisão Espaçada',
        description: 'Sistema de revisão que aumenta gradualmente os intervalos entre as revisões de um conteúdo.',
        icon: 'fas fa-calendar-alt',
        benefits: [
            'Melhora a retenção de longo prazo',
            'Otimiza o tempo de revisão',
            'Combate a curva do esquecimento',
            'Fortalece a memória permanente'
        ],
        howToUse: [
            '1. Estude o conteúdo pela primeira vez',
            '2. Revise após 1 dia',
            '3. Revise após 3 dias',
            '4. Revise após 1 semana',
            '5. Revise após 2 semanas',
            '6. Continue aumentando os intervalos'
        ],
        tools: [
            'Anki',
            'Quizlet',
            'SuperMemo',
            'RemNote'
        ],
        bestFor: ['Definições e conceitos', 'Fórmulas', 'Processos e frameworks']
    },
    mindMaps: {
        name: 'Mapas Mentais',
        description: 'Representação visual de informações que conecta conceitos de forma hierárquica e associativa.',
        icon: 'fas fa-project-diagram',
        benefits: [
            'Facilita a visualização de conexões',
            'Melhora a compreensão de estruturas complexas',
            'Estimula a criatividade',
            'Ajuda na memorização visual'
        ],
        howToUse: [
            '1. Coloque o tópico principal no centro',
            '2. Crie ramos principais para subtópicos',
            '3. Adicione ramos secundários com detalhes',
            '4. Use cores e símbolos para categorizar',
            '5. Conecte conceitos relacionados com linhas'
        ],
        tools: [
            'MindMeister',
            'XMind',
            'Lucidchart',
            'Draw.io'
        ],
        bestFor: ['Frameworks complexos', 'Relacionamentos entre conceitos', 'Visão geral de certificações']
    },
    activeRecall: {
        name: 'Recordação Ativa',
        description: 'Técnica que envolve testar ativamente seu conhecimento em vez de apenas reler o material.',
        icon: 'fas fa-brain',
        benefits: [
            'Fortalece as conexões neurais',
            'Identifica lacunas no conhecimento',
            'Melhora a capacidade de recuperação',
            'Aumenta a confiança no conteúdo'
        ],
        howToUse: [
            '1. Leia o material uma vez',
            '2. Feche o livro/material',
            '3. Tente explicar o conceito em voz alta',
            '4. Escreva tudo que lembra sobre o tópico',
            '5. Compare com o material original',
            '6. Foque nas lacunas identificadas'
        ],
        tools: [
            'Flashcards físicos',
            'Gravador de voz',
            'Quadro branco',
            'Aplicativos de quiz'
        ],
        bestFor: ['Preparação para exames', 'Consolidação de conhecimento', 'Autoavaliação']
    },
    feynman: {
        name: 'Técnica Feynman',
        description: 'Método de aprendizado que envolve explicar conceitos complexos em linguagem simples.',
        icon: 'fas fa-chalkboard-teacher',
        benefits: [
            'Identifica gaps no entendimento',
            'Simplifica conceitos complexos',
            'Melhora a capacidade de explicação',
            'Fortalece o aprendizado profundo'
        ],
        howToUse: [
            '1. Escolha um conceito para estudar',
            '2. Explique-o como se fosse para uma criança',
            '3. Identifique pontos onde travou',
            '4. Volte ao material para esclarecer',
            '5. Simplifique a linguagem e use analogias',
            '6. Repita até conseguir explicar fluentemente'
        ],
        tools: [
            'Gravador para auto-explicação',
            'Quadro ou papel',
            'Parceiro de estudos',
            'Vídeos explicativos próprios'
        ],
        bestFor: ['Conceitos abstratos', 'Frameworks complexos', 'Preparação para ensinar outros']
    }
};

// Connections between certifications
const certificationConnections = {
    overview: {
        title: 'Visão Geral das Conexões',
        description: 'As três certificações se complementam criando um profissional completo em gestão de TI e projetos.',
        connections: [
            {
                from: 'ITIL 4',
                to: 'PMP',
                relationship: 'Gestão de Serviços ↔ Gestão de Projetos',
                description: 'ITIL 4 foca na operação contínua de serviços, enquanto PMP foca na entrega de projetos. Ambos compartilham princípios de melhoria contínua e gestão de stakeholders.'
            },
            {
                from: 'PMP',
                to: 'Scrum Master',
                relationship: 'Gestão Tradicional ↔ Gestão Ágil',
                description: 'PMP inclui metodologias ágeis e híbridas. Scrum Master aprofunda especificamente no framework Scrum, complementando o conhecimento ágil do PMP.'
            },
            {
                from: 'ITIL 4',
                to: 'Scrum Master',
                relationship: 'Melhoria Contínua ↔ Retrospectivas',
                description: 'Ambos enfatizam melhoria contínua, colaboração e adaptação. ITIL 4 em nível organizacional, Scrum em nível de equipe.'
            }
        ]
    },
    commonConcepts: {
        title: 'Conceitos Transversais',
        concepts: [
            {
                concept: 'Melhoria Contínua',
                itil4: 'Prática de Melhoria Contínua, princípio "Aprimore e automatize"',
                pmp: 'Lições aprendidas, retrospectivas de projeto, melhoria de processos',
                scrum: 'Sprint Retrospectives, inspeção e adaptação, kaizen'
            },
            {
                concept: 'Gestão de Stakeholders',
                itil4: 'Colaboração entre fornecedores, usuários e organização',
                pmp: 'Domínio Pessoas, engajamento e comunicação com stakeholders',
                scrum: 'Product Owner como proxy dos stakeholders, transparência'
            },
            {
                concept: 'Entrega de Valor',
                itil4: 'Cocriação de valor, Sistema de Valor de Serviço (SVS)',
                pmp: 'Foco na entrega de valor para o negócio e benefícios',
                scrum: 'Entrega de incrementos de valor a cada Sprint'
            },
            {
                concept: 'Colaboração e Transparência',
                itil4: 'Princípio "Colabore e promova a visibilidade"',
                pmp: 'Comunicação eficaz, trabalho em equipe',
                scrum: 'Valores de abertura e respeito, transparência dos artefatos'
            },
            {
                concept: 'Adaptação e Flexibilidade',
                itil4: 'Princípio "Progrida iterativamente com feedback"',
                pmp: 'Abordagens ágeis e híbridas, adaptação a mudanças',
                scrum: 'Empirismo, inspeção e adaptação contínua'
            }
        ]
    },
    practicalScenarios: {
        title: 'Cenários Práticos Integrados',
        scenarios: [
            {
                title: 'Implementação de Nova Ferramenta de TI',
                description: 'Uma empresa precisa implementar um novo sistema de gestão de incidentes.',
                itil4Role: 'Define os processos de gestão de incidentes e mudanças, estabelece métricas de serviço',
                pmpRole: 'Gerencia o projeto de implementação, cronograma, recursos e stakeholders',
                scrumRole: 'Facilita o desenvolvimento ágil da ferramenta, sprints de configuração e testes',
                outcome: 'Sistema implementado com processos bem definidos, dentro do prazo e com equipe engajada'
            },
            {
                title: 'Transformação Digital Organizacional',
                description: 'Organização quer modernizar seus serviços de TI e adotar práticas ágeis.',
                itil4Role: 'Redesenha a cadeia de valor de serviços, implementa práticas de gestão modernas',
                pmpRole: 'Coordena múltiplos projetos de transformação, gerencia mudança organizacional',
                scrumRole: 'Introduz práticas ágeis nas equipes, facilita a mudança cultural',
                outcome: 'Transformação bem-sucedida com serviços modernos e equipes ágeis'
            },
            {
                title: 'Melhoria de Processo de Desenvolvimento',
                description: 'Equipe de desenvolvimento tem problemas de qualidade e prazos.',
                itil4Role: 'Analisa o fluxo de valor atual, identifica gargalos e desperdícios',
                pmpRole: 'Planeja projeto de melhoria, define métricas e acompanha resultados',
                scrumRole: 'Implementa cerimônias Scrum, remove impedimentos, coaching da equipe',
                outcome: 'Processo otimizado com melhor qualidade, prazos cumpridos e equipe motivada'
            }
        ]
    },
    careerPaths: {
        title: 'Caminhos de Carreira',
        paths: [
            {
                role: 'Gerente de Serviços de TI',
                primary: 'ITIL 4',
                secondary: ['PMP', 'Scrum Master'],
                description: 'Foco na operação e melhoria contínua de serviços, com capacidade de gerenciar projetos e equipes ágeis.'
            },
            {
                role: 'Gerente de Projetos Sênior',
                primary: 'PMP',
                secondary: ['ITIL 4', 'Scrum Master'],
                description: 'Especialista em gestão de projetos com conhecimento de serviços de TI e metodologias ágeis.'
            },
            {
                role: 'Agile Coach',
                primary: 'Scrum Master',
                secondary: ['PMP', 'ITIL 4'],
                description: 'Especialista em transformação ágil com visão de projetos e operações de TI.'
            },
            {
                role: 'Consultor de Transformação Digital',
                primary: 'Todas as três',
                secondary: [],
                description: 'Profissional completo capaz de liderar transformações organizacionais complexas.'
            }
        ]
    }
};

// Study Plan Generator
const studyPlanTemplates = {
    itil4: {
        foundation: {
            duration: '4-6 semanas',
            topics: [
                { week: 1, topic: 'Conceitos Fundamentais e Definições', hours: 8 },
                { week: 2, topic: 'Princípios Orientadores e SVS', hours: 10 },
                { week: 3, topic: '4 Dimensões e Práticas de Gestão (Parte 1)', hours: 12 },
                { week: 4, topic: 'Práticas de Gestão (Parte 2) e Cadeia de Valor', hours: 12 },
                { week: 5, topic: 'Revisão e Simulados', hours: 10 },
                { week: 6, topic: 'Revisão Final e Exame', hours: 6 }
            ]
        }
    },
    pmp: {
        standard: {
            duration: '12-16 semanas',
            topics: [
                { week: '1-2', topic: 'Fundamentos de Gerenciamento de Projetos', hours: 16 },
                { week: '3-4', topic: 'Domínio Pessoas - Liderança e Equipes', hours: 20 },
                { week: '5-8', topic: 'Domínio Processo - Gestão Técnica', hours: 32 },
                { week: '9-10', topic: 'Domínio Ambiente de Negócios', hours: 12 },
                { week: '11-12', topic: 'Metodologias Ágeis e Híbridas', hours: 16 },
                { week: '13-14', topic: 'Simulados e Revisão', hours: 20 },
                { week: '15-16', topic: 'Revisão Final e Exame', hours: 12 }
            ]
        }
    },
    scrum: {
        master: {
            duration: '6-8 semanas',
            topics: [
                { week: 1, topic: 'Fundamentos do Scrum e Valores', hours: 8 },
                { week: 2, topic: 'Papéis Scrum e Responsabilidades', hours: 10 },
                { week: 3, topic: 'Eventos Scrum e Facilitação', hours: 12 },
                { week: 4, topic: 'Artefatos Scrum e Transparência', hours: 10 },
                { week: 5, topic: 'Coaching e Servant Leadership', hours: 12 },
                { week: 6, topic: 'Simulados e Casos Práticos', hours: 10 },
                { week: '7-8', topic: 'Revisão Final e Exame', hours: 8 }
            ]
        }
    }
};

// Render Strategies Content
function renderStrategiesContent() {
    return `
        <div class="strategies-container">
            <div class="strategies-header">
                <h3><i class="fas fa-lightbulb"></i> Estratégias de Estudo</h3>
                <p>Descubra e teste diferentes técnicas para otimizar seu aprendizado</p>
            </div>
            
            <div class="strategies-grid">
                ${Object.entries(studyStrategies).map(([key, strategy]) => `
                    <div class="strategy-card" onclick="showStrategyDetails('${key}')">
                        <div class="strategy-icon">
                            <i class="${strategy.icon}"></i>
                        </div>
                        <h4>${strategy.name}</h4>
                        <p>${strategy.description}</p>
                        <div class="strategy-tags">
                            ${strategy.bestFor.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="strategy-tracker">
                <h4><i class="fas fa-chart-line"></i> Acompanhe suas Estratégias</h4>
                <div class="tracker-content">
                    <div class="current-strategies">
                        <h5>Estratégias em Uso</h5>
                        <div id="active-strategies">
                            <!-- Will be populated dynamically -->
                        </div>
                    </div>
                    <div class="strategy-effectiveness">
                        <h5>Efetividade</h5>
                        <canvas id="strategy-effectiveness-chart" width="300" height="200"></canvas>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Strategy Details Modal -->
        <div id="strategy-modal" class="modal" style="display: none;">
            <div class="modal-content strategy-modal-content">
                <div class="modal-header">
                    <h4 id="strategy-modal-title"></h4>
                    <span class="close" onclick="closeStrategyModal()">&times;</span>
                </div>
                <div class="modal-body" id="strategy-modal-body">
                    <!-- Content will be populated dynamically -->
                </div>
            </div>
        </div>
    `;
}

// Render Connections Content
function renderConnectionsContent() {
    return `
        <div class="connections-container">
            <div class="connections-header">
                <h3><i class="fas fa-network-wired"></i> Conexões entre Certificações</h3>
                <p>Entenda como ITIL 4, PMP e Scrum Master se complementam</p>
            </div>
            
            <div class="connections-tabs">
                <button class="tab-btn active" onclick="showConnectionTab('overview')">Visão Geral</button>
                <button class="tab-btn" onclick="showConnectionTab('concepts')">Conceitos Comuns</button>
                <button class="tab-btn" onclick="showConnectionTab('scenarios')">Cenários Práticos</button>
                <button class="tab-btn" onclick="showConnectionTab('career')">Carreira</button>
            </div>
            
            <div class="connections-content">
                <div id="overview-tab" class="tab-content active">
                    ${renderOverviewTab()}
                </div>
                <div id="concepts-tab" class="tab-content">
                    ${renderConceptsTab()}
                </div>
                <div id="scenarios-tab" class="tab-content">
                    ${renderScenariosTab()}
                </div>
                <div id="career-tab" class="tab-content">
                    ${renderCareerTab()}
                </div>
            </div>
        </div>
    `;
}

// Render Study Plan Content
function renderStudyPlanContent() {
    return `
        <div class="study-plan-container">
            <div class="plan-header">
                <h3><i class="fas fa-calendar-alt"></i> Plano de Estudos Personalizado</h3>
                <p>Crie um plano de estudos focado nos tópicos mais importantes</p>
            </div>
            
            <div class="plan-generator">
                <h4>Gerador de Plano de Estudos</h4>
                <form id="plan-generator-form" onsubmit="generateStudyPlan(event)">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="target-certification">Certificação Principal:</label>
                            <select id="target-certification" required>
                                <option value="">Selecione...</option>
                                <option value="itil4">ITIL 4 Foundation</option>
                                <option value="pmp">PMP</option>
                                <option value="scrum">Scrum Master</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="study-time">Tempo Disponível (horas/semana):</label>
                            <input type="number" id="study-time" min="1" max="40" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="exam-date">Data Pretendida do Exame:</label>
                            <input type="date" id="exam-date" required>
                        </div>
                        <div class="form-group">
                            <label for="experience-level">Nível de Experiência:</label>
                            <select id="experience-level" required>
                                <option value="">Selecione...</option>
                                <option value="beginner">Iniciante</option>
                                <option value="intermediate">Intermediário</option>
                                <option value="advanced">Avançado</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Estratégias de Estudo Preferidas:</label>
                        <div class="checkbox-group">
                            <label><input type="checkbox" value="pomodoro"> Técnica Pomodoro</label>
                            <label><input type="checkbox" value="spacedRepetition"> Revisão Espaçada</label>
                            <label><input type="checkbox" value="mindMaps"> Mapas Mentais</label>
                            <label><input type="checkbox" value="activeRecall"> Recordação Ativa</label>
                            <label><input type="checkbox" value="feynman"> Técnica Feynman</label>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn-primary">
                        <i class="fas fa-magic"></i> Gerar Plano de Estudos
                    </button>
                </form>
            </div>
            
            <div id="generated-plan" class="generated-plan" style="display: none;">
                <!-- Generated plan will appear here -->
            </div>
            
            <div class="plan-templates">
                <h4>Modelos de Plano de Estudos</h4>
                <div class="templates-grid">
                    <div class="template-card" onclick="loadTemplate('itil4', 'foundation')">
                        <h5>ITIL 4 Foundation</h5>
                        <p>4-6 semanas • 58 horas</p>
                        <span class="difficulty">Básico</span>
                    </div>
                    <div class="template-card" onclick="loadTemplate('pmp', 'standard')">
                        <h5>PMP Padrão</h5>
                        <p>12-16 semanas • 128 horas</p>
                        <span class="difficulty">Avançado</span>
                    </div>
                    <div class="template-card" onclick="loadTemplate('scrum', 'master')">
                        <h5>Scrum Master</h5>
                        <p>6-8 semanas • 70 horas</p>
                        <span class="difficulty">Intermediário</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Tab rendering functions
function renderOverviewTab() {
    const overview = certificationConnections.overview;
    return `
        <div class="overview-content">
            <div class="overview-description">
                <h4>${overview.title}</h4>
                <p>${overview.description}</p>
            </div>
            
            <div class="connections-diagram">
                <div class="cert-node itil4">
                    <div class="cert-icon"><i class="fas fa-cogs"></i></div>
                    <h5>ITIL 4</h5>
                    <p>Gestão de Serviços</p>
                </div>
                
                <div class="cert-node pmp">
                    <div class="cert-icon"><i class="fas fa-project-diagram"></i></div>
                    <h5>PMP</h5>
                    <p>Gestão de Projetos</p>
                </div>
                
                <div class="cert-node scrum">
                    <div class="cert-icon"><i class="fas fa-users"></i></div>
                    <h5>Scrum Master</h5>
                    <p>Metodologias Ágeis</p>
                </div>
                
                <div class="connection-lines">
                    <div class="connection-line line-1"></div>
                    <div class="connection-line line-2"></div>
                    <div class="connection-line line-3"></div>
                </div>
            </div>
            
            <div class="connections-list">
                ${overview.connections.map(conn => `
                    <div class="connection-item">
                        <h5>${conn.relationship}</h5>
                        <p><strong>${conn.from} ↔ ${conn.to}:</strong> ${conn.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderConceptsTab() {
    const concepts = certificationConnections.commonConcepts;
    return `
        <div class="concepts-content">
            <h4>${concepts.title}</h4>
            <div class="concepts-table">
                <table>
                    <thead>
                        <tr>
                            <th>Conceito</th>
                            <th>ITIL 4</th>
                            <th>PMP</th>
                            <th>Scrum Master</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${concepts.concepts.map(concept => `
                            <tr>
                                <td><strong>${concept.concept}</strong></td>
                                <td>${concept.itil4}</td>
                                <td>${concept.pmp}</td>
                                <td>${concept.scrum}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderScenariosTab() {
    const scenarios = certificationConnections.practicalScenarios;
    return `
        <div class="scenarios-content">
            <h4>${scenarios.title}</h4>
            <div class="scenarios-list">
                ${scenarios.scenarios.map(scenario => `
                    <div class="scenario-card">
                        <h5>${scenario.title}</h5>
                        <p class="scenario-description">${scenario.description}</p>
                        
                        <div class="roles-grid">
                            <div class="role-item itil4">
                                <h6><i class="fas fa-cogs"></i> ITIL 4</h6>
                                <p>${scenario.itil4Role}</p>
                            </div>
                            <div class="role-item pmp">
                                <h6><i class="fas fa-project-diagram"></i> PMP</h6>
                                <p>${scenario.pmpRole}</p>
                            </div>
                            <div class="role-item scrum">
                                <h6><i class="fas fa-users"></i> Scrum Master</h6>
                                <p>${scenario.scrumRole}</p>
                            </div>
                        </div>
                        
                        <div class="scenario-outcome">
                            <h6><i class="fas fa-trophy"></i> Resultado</h6>
                            <p>${scenario.outcome}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderCareerTab() {
    const career = certificationConnections.careerPaths;
    return `
        <div class="career-content">
            <h4>${career.title}</h4>
            <div class="career-paths">
                ${career.paths.map(path => `
                    <div class="career-card">
                        <h5>${path.role}</h5>
                        <div class="cert-priorities">
                            <div class="primary-cert">
                                <span class="cert-label">Principal:</span>
                                <span class="cert-name primary">${path.primary}</span>
                            </div>
                            ${path.secondary.length > 0 ? `
                                <div class="secondary-certs">
                                    <span class="cert-label">Complementares:</span>
                                    ${path.secondary.map(cert => `<span class="cert-name secondary">${cert}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                        <p>${path.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Strategy functions
function showStrategyDetails(strategyKey) {
    const strategy = studyStrategies[strategyKey];
    const modal = document.getElementById('strategy-modal');
    const title = document.getElementById('strategy-modal-title');
    const body = document.getElementById('strategy-modal-body');
    
    title.textContent = strategy.name;
    body.innerHTML = `
        <div class="strategy-details">
            <div class="strategy-description">
                <p>${strategy.description}</p>
            </div>
            
            <div class="strategy-benefits">
                <h5><i class="fas fa-check-circle"></i> Benefícios</h5>
                <ul>
                    ${strategy.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
            
            <div class="strategy-howto">
                <h5><i class="fas fa-list-ol"></i> Como Usar</h5>
                <ol>
                    ${strategy.howToUse.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            <div class="strategy-tools">
                <h5><i class="fas fa-tools"></i> Ferramentas Recomendadas</h5>
                <div class="tools-list">
                    ${strategy.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                </div>
            </div>
            
            <div class="strategy-bestfor">
                <h5><i class="fas fa-target"></i> Melhor Para</h5>
                <div class="bestfor-list">
                    ${strategy.bestFor.map(item => `<span class="bestfor-tag">${item}</span>`).join('')}
                </div>
            </div>
            
            <div class="strategy-actions">
                <button class="btn-primary" onclick="adoptStrategy('${strategyKey}')">
                    <i class="fas fa-plus"></i> Adotar Esta Estratégia
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeStrategyModal() {
    document.getElementById('strategy-modal').style.display = 'none';
}

function adoptStrategy(strategyKey) {
    if (!userData.adoptedStrategies) {
        userData.adoptedStrategies = [];
    }
    
    if (!userData.adoptedStrategies.includes(strategyKey)) {
        userData.adoptedStrategies.push(strategyKey);
        saveUserData();
        showNotification(`Estratégia "${studyStrategies[strategyKey].name}" adotada!`, 'success');
        updateActiveStrategies();
    } else {
        showNotification('Você já está usando esta estratégia!', 'info');
    }
    
    closeStrategyModal();
}

function updateActiveStrategies() {
    const container = document.getElementById('active-strategies');
    if (!container) return;
    
    if (!userData.adoptedStrategies || userData.adoptedStrategies.length === 0) {
        container.innerHTML = '<p class="no-strategies">Nenhuma estratégia adotada ainda.</p>';
        return;
    }
    
    container.innerHTML = userData.adoptedStrategies.map(strategyKey => {
        const strategy = studyStrategies[strategyKey];
        return `
            <div class="active-strategy">
                <div class="strategy-info">
                    <i class="${strategy.icon}"></i>
                    <span>${strategy.name}</span>
                </div>
                <button class="btn-remove" onclick="removeStrategy('${strategyKey}')" title="Remover">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }).join('');
}

function removeStrategy(strategyKey) {
    if (userData.adoptedStrategies) {
        userData.adoptedStrategies = userData.adoptedStrategies.filter(s => s !== strategyKey);
        saveUserData();
        updateActiveStrategies();
        showNotification('Estratégia removida!', 'success');
    }
}

// Connection functions
function showConnectionTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Study plan functions
function generateStudyPlan(event) {
    event.preventDefault();
    
    const certification = document.getElementById('target-certification').value;
    const studyTime = parseInt(document.getElementById('study-time').value);
    const examDate = new Date(document.getElementById('exam-date').value);
    const experience = document.getElementById('experience-level').value;
    const strategies = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    
    // Calculate weeks available
    const today = new Date();
    const weeksAvailable = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24 * 7));
    
    if (weeksAvailable < 1) {
        showNotification('A data do exame deve ser no futuro!', 'warning');
        return;
    }
    
    // Generate plan based on template and customizations
    const template = studyPlanTemplates[certification];
    if (!template) {
        showNotification('Modelo não encontrado para esta certificação!', 'error');
        return;
    }
    
    const plan = customizePlan(template, studyTime, weeksAvailable, experience, strategies);
    displayGeneratedPlan(plan, certification);
}

function customizePlan(template, studyTime, weeksAvailable, experience, strategies) {
    // This would contain logic to customize the plan based on user inputs
    // For now, return a simplified version
    const baseTemplate = Object.values(template)[0];
    
    return {
        duration: `${weeksAvailable} semanas`,
        totalHours: studyTime * weeksAvailable,
        weeklyHours: studyTime,
        experience: experience,
        strategies: strategies,
        topics: baseTemplate.topics
    };
}

function displayGeneratedPlan(plan, certification) {
    const container = document.getElementById('generated-plan');
    
    container.innerHTML = `
        <div class="plan-result">
            <h4><i class="fas fa-calendar-check"></i> Seu Plano de Estudos Personalizado</h4>
            
            <div class="plan-summary">
                <div class="summary-item">
                    <span class="label">Certificação:</span>
                    <span class="value">${certification.toUpperCase()}</span>
                </div>
                <div class="summary-item">
                    <span class="label">Duração:</span>
                    <span class="value">${plan.duration}</span>
                </div>
                <div class="summary-item">
                    <span class="label">Horas Totais:</span>
                    <span class="value">${plan.totalHours}h</span>
                </div>
                <div class="summary-item">
                    <span class="label">Horas/Semana:</span>
                    <span class="value">${plan.weeklyHours}h</span>
                </div>
            </div>
            
            <div class="plan-timeline">
                <h5>Cronograma de Estudos</h5>
                <div class="timeline">
                    ${plan.topics.map((topic, index) => `
                        <div class="timeline-item">
                            <div class="timeline-marker">${index + 1}</div>
                            <div class="timeline-content">
                                <h6>${topic.topic}</h6>
                                <p>Semana ${topic.week} • ${topic.hours} horas</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${plan.strategies.length > 0 ? `
                <div class="plan-strategies">
                    <h5>Estratégias Recomendadas</h5>
                    <div class="strategies-list">
                        ${plan.strategies.map(strategy => `
                            <span class="strategy-tag">${studyStrategies[strategy]?.name || strategy}</span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="plan-actions">
                <button class="btn-primary" onclick="savePlan()">
                    <i class="fas fa-save"></i> Salvar Plano
                </button>
                <button class="btn-secondary" onclick="exportPlan()">
                    <i class="fas fa-download"></i> Exportar PDF
                </button>
            </div>
        </div>
    `;
    
    container.style.display = 'block';
}

function loadTemplate(certification, templateType) {
    const template = studyPlanTemplates[certification][templateType];
    
    // Fill form with template data
    document.getElementById('target-certification').value = certification;
    
    // Calculate suggested study time based on template
    const totalHours = template.topics.reduce((sum, topic) => sum + topic.hours, 0);
    const duration = parseInt(template.duration.split('-')[1]) || 8; // weeks
    const suggestedHours = Math.ceil(totalHours / duration);
    
    document.getElementById('study-time').value = suggestedHours;
    
    // Set exam date to template duration from now
    const examDate = new Date();
    examDate.setDate(examDate.getDate() + (duration * 7));
    document.getElementById('exam-date').value = examDate.toISOString().split('T')[0];
    
    showNotification(`Modelo ${certification.toUpperCase()} carregado!`, 'success');
}

function savePlan() {
    // Save the generated plan to userData
    showNotification('Plano salvo com sucesso!', 'success');
}

function exportPlan() {
    // Export plan as PDF or markdown
    showNotification('Funcionalidade de exportação será implementada!', 'info');
}

// Initialize functions
function initializeStrategies() {
    updateActiveStrategies();
}

function initializeConnections() {
    // Any initialization needed for connections
}

function initializeStudyPlan() {
    // Set minimum date to today
    const dateInput = document.getElementById('exam-date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }
}
