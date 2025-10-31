// Diary and Progress System

// Render Diary Content
function renderDiaryContent() {
    return `
        <div class="diary-container">
            <div class="diary-header">
                <h3><i class="fas fa-book-open"></i> Diário de Estudos</h3>
                <button class="btn-primary" onclick="showNewEntryForm()">
                    <i class="fas fa-plus"></i> Nova Entrada
                </button>
            </div>
            
            <div class="diary-stats">
                <div class="stats-overview">
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="fas fa-calendar-day"></i>
                        </div>
                        <div class="stat-info">
                            <div class="stat-value" id="total-study-days">0</div>
                            <div class="stat-label">Dias de Estudo</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="stat-info">
                            <div class="stat-value" id="total-hours">0h</div>
                            <div class="stat-label">Horas Totais</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="fas fa-fire"></i>
                        </div>
                        <div class="stat-info">
                            <div class="stat-value" id="current-streak">0</div>
                            <div class="stat-label">Sequência Atual</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="stat-info">
                            <div class="stat-value" id="avg-rating">0.0</div>
                            <div class="stat-label">Avaliação Média</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="diary-filters">
                <div class="filter-group">
                    <label>Filtrar por:</label>
                    <select id="certification-filter" onchange="filterDiaryEntries()">
                        <option value="all">Todas as Certificações</option>
                        <option value="itil4">ITIL 4</option>
                        <option value="pmp">PMP</option>
                        <option value="scrum">Scrum Master</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Período:</label>
                    <select id="period-filter" onchange="filterDiaryEntries()">
                        <option value="all">Todo o Período</option>
                        <option value="week">Última Semana</option>
                        <option value="month">Último Mês</option>
                        <option value="quarter">Últimos 3 Meses</option>
                    </select>
                </div>
            </div>
            
            <div class="progress-charts">
                <div class="chart-container">
                    <h4>Progresso por Certificação</h4>
                    <canvas id="certification-progress-chart" width="400" height="200"></canvas>
                </div>
                <div class="chart-container">
                    <h4>Horas de Estudo por Semana</h4>
                    <canvas id="weekly-hours-chart" width="400" height="200"></canvas>
                </div>
            </div>
            
            <div class="diary-entries" id="diary-entries-container">
                <!-- Entries will be loaded here -->
            </div>
            
            <div class="diary-insights">
                <h4><i class="fas fa-lightbulb"></i> Insights e Recomendações</h4>
                <div id="insights-container">
                    <!-- Insights will be generated here -->
                </div>
            </div>
        </div>
        
        <!-- New Entry Modal -->
        <div id="new-entry-modal" class="modal" style="display: none;">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>Nova Entrada no Diário</h4>
                    <span class="close" onclick="closeNewEntryForm()">&times;</span>
                </div>
                <div class="modal-body">
                    <form id="new-entry-form" onsubmit="saveNewEntry(event)">
                        <div class="form-group">
                            <label for="entry-date">Data:</label>
                            <input type="date" id="entry-date" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="entry-certification">Certificação:</label>
                            <select id="entry-certification" required>
                                <option value="">Selecione...</option>
                                <option value="itil4">ITIL 4</option>
                                <option value="pmp">PMP</option>
                                <option value="scrum">Scrum Master</option>
                                <option value="general">Geral</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="entry-duration">Tempo de Estudo (minutos):</label>
                            <input type="number" id="entry-duration" min="1" max="600" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="entry-topics">Tópicos Estudados:</label>
                            <textarea id="entry-topics" rows="3" placeholder="Ex: Conceitos fundamentais, Práticas de gestão..." required></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="entry-activities">Atividades Realizadas:</label>
                            <div class="checkbox-group">
                                <label><input type="checkbox" value="reading"> Leitura</label>
                                <label><input type="checkbox" value="practice"> Questões/Simulados</label>
                                <label><input type="checkbox" value="videos"> Vídeos</label>
                                <label><input type="checkbox" value="notes"> Anotações</label>
                                <label><input type="checkbox" value="review"> Revisão</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="entry-difficulty">Dificuldade Percebida:</label>
                            <div class="rating-group">
                                <input type="radio" name="difficulty" value="1" id="diff-1">
                                <label for="diff-1">1 - Muito Fácil</label>
                                <input type="radio" name="difficulty" value="2" id="diff-2">
                                <label for="diff-2">2 - Fácil</label>
                                <input type="radio" name="difficulty" value="3" id="diff-3" checked>
                                <label for="diff-3">3 - Médio</label>
                                <input type="radio" name="difficulty" value="4" id="diff-4">
                                <label for="diff-4">4 - Difícil</label>
                                <input type="radio" name="difficulty" value="5" id="diff-5">
                                <label for="diff-5">5 - Muito Difícil</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="entry-understanding">Nível de Compreensão:</label>
                            <div class="rating-group">
                                <input type="radio" name="understanding" value="1" id="und-1">
                                <label for="und-1">1 - Não Entendi</label>
                                <input type="radio" name="understanding" value="2" id="und-2">
                                <label for="und-2">2 - Entendi Pouco</label>
                                <input type="radio" name="understanding" value="3" id="und-3" checked>
                                <label for="und-3">3 - Entendi Bem</label>
                                <input type="radio" name="understanding" value="4" id="und-4">
                                <label for="und-4">4 - Entendi Muito Bem</label>
                                <input type="radio" name="understanding" value="5" id="und-5">
                                <label for="und-5">5 - Domino Completamente</label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="entry-notes">Observações e Reflexões:</label>
                            <textarea id="entry-notes" rows="4" placeholder="Como foi o estudo hoje? O que aprendeu? Quais dificuldades encontrou?"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="entry-next-steps">Próximos Passos:</label>
                            <textarea id="entry-next-steps" rows="2" placeholder="O que planeja estudar na próxima sessão?"></textarea>
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="btn-secondary" onclick="closeNewEntryForm()">Cancelar</button>
                            <button type="submit" class="btn-primary">Salvar Entrada</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

// Show New Entry Form
function showNewEntryForm() {
    const modal = document.getElementById('new-entry-modal');
    const dateInput = document.getElementById('entry-date');
    
    // Set today's date as default
    dateInput.value = new Date().toISOString().split('T')[0];
    
    modal.style.display = 'block';
}

// Close New Entry Form
function closeNewEntryForm() {
    const modal = document.getElementById('new-entry-modal');
    modal.style.display = 'none';
    
    // Reset form
    document.getElementById('new-entry-form').reset();
}

// Save New Entry
function saveNewEntry(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const activities = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                           .map(cb => cb.value);
    
    const entry = {
        id: Date.now().toString(),
        date: document.getElementById('entry-date').value,
        certification: document.getElementById('entry-certification').value,
        duration: parseInt(document.getElementById('entry-duration').value),
        topics: document.getElementById('entry-topics').value,
        activities: activities,
        difficulty: parseInt(document.querySelector('input[name="difficulty"]:checked').value),
        understanding: parseInt(document.querySelector('input[name="understanding"]:checked').value),
        notes: document.getElementById('entry-notes').value,
        nextSteps: document.getElementById('entry-next-steps').value,
        timestamp: new Date().toISOString()
    };
    
    // Save to userData
    if (!userData.diaryEntries) {
        userData.diaryEntries = [];
    }
    
    userData.diaryEntries.push(entry);
    saveUserData();
    
    // Update stats
    updateDiaryStats();
    
    // Reload entries
    loadDiaryEntries();
    
    // Generate insights
    generateInsights();
    
    // Close modal
    closeNewEntryForm();
    
    // Show success message
    showNotification('Entrada salva com sucesso!', 'success');
    
    // Add to recent activity
    addRecentActivity(`Estudo registrado: ${entry.certification.toUpperCase()} - ${entry.duration}min`, 'success');
}

// Load Diary Entries
function loadDiaryEntries() {
    const container = document.getElementById('diary-entries-container');
    
    if (!userData.diaryEntries || userData.diaryEntries.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book-open"></i>
                <h4>Nenhuma entrada encontrada</h4>
                <p>Comece registrando sua primeira sessão de estudos!</p>
            </div>
        `;
        return;
    }
    
    // Apply filters
    let filteredEntries = [...userData.diaryEntries];
    
    const certFilter = document.getElementById('certification-filter')?.value || 'all';
    const periodFilter = document.getElementById('period-filter')?.value || 'all';
    
    if (certFilter !== 'all') {
        filteredEntries = filteredEntries.filter(entry => entry.certification === certFilter);
    }
    
    if (periodFilter !== 'all') {
        const now = new Date();
        const filterDate = new Date();
        
        switch (periodFilter) {
            case 'week':
                filterDate.setDate(now.getDate() - 7);
                break;
            case 'month':
                filterDate.setMonth(now.getMonth() - 1);
                break;
            case 'quarter':
                filterDate.setMonth(now.getMonth() - 3);
                break;
        }
        
        filteredEntries = filteredEntries.filter(entry => new Date(entry.date) >= filterDate);
    }
    
    // Sort by date (newest first)
    filteredEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Render entries
    let html = '<div class="entries-list">';
    
    filteredEntries.forEach(entry => {
        const certificationName = {
            'itil4': 'ITIL 4',
            'pmp': 'PMP',
            'scrum': 'Scrum Master',
            'general': 'Geral'
        }[entry.certification] || entry.certification;
        
        const difficultyStars = '★'.repeat(entry.difficulty) + '☆'.repeat(5 - entry.difficulty);
        const understandingStars = '★'.repeat(entry.understanding) + '☆'.repeat(5 - entry.understanding);
        
        html += `
            <div class="diary-entry">
                <div class="entry-header">
                    <div class="entry-date">
                        <i class="fas fa-calendar"></i>
                        ${new Date(entry.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div class="entry-certification cert-${entry.certification}">
                        ${certificationName}
                    </div>
                    <div class="entry-duration">
                        <i class="fas fa-clock"></i>
                        ${entry.duration}min
                    </div>
                    <div class="entry-actions">
                        <button class="btn-icon" onclick="editDiaryEntry('${entry.id}')" title="Editar">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon" onclick="deleteDiaryEntry('${entry.id}')" title="Excluir">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                
                <div class="entry-content">
                    <div class="entry-topics">
                        <strong>Tópicos:</strong> ${entry.topics}
                    </div>
                    
                    <div class="entry-activities">
                        <strong>Atividades:</strong>
                        ${entry.activities.map(activity => {
                            const activityNames = {
                                'reading': 'Leitura',
                                'practice': 'Questões/Simulados',
                                'videos': 'Vídeos',
                                'notes': 'Anotações',
                                'review': 'Revisão'
                            };
                            return `<span class="activity-tag">${activityNames[activity] || activity}</span>`;
                        }).join('')}
                    </div>
                    
                    <div class="entry-ratings">
                        <div class="rating-item">
                            <span>Dificuldade:</span>
                            <span class="stars">${difficultyStars}</span>
                        </div>
                        <div class="rating-item">
                            <span>Compreensão:</span>
                            <span class="stars">${understandingStars}</span>
                        </div>
                    </div>
                    
                    ${entry.notes ? `
                        <div class="entry-notes">
                            <strong>Observações:</strong>
                            <p>${entry.notes}</p>
                        </div>
                    ` : ''}
                    
                    ${entry.nextSteps ? `
                        <div class="entry-next-steps">
                            <strong>Próximos Passos:</strong>
                            <p>${entry.nextSteps}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Filter Diary Entries
function filterDiaryEntries() {
    loadDiaryEntries();
}

// Update Diary Stats
function updateDiaryStats() {
    if (!userData.diaryEntries || userData.diaryEntries.length === 0) {
        return;
    }
    
    const entries = userData.diaryEntries;
    
    // Total study days
    const uniqueDates = [...new Set(entries.map(entry => entry.date))];
    const totalDays = uniqueDates.length;
    
    // Total hours
    const totalMinutes = entries.reduce((sum, entry) => sum + entry.duration, 0);
    const totalHours = Math.round(totalMinutes / 60 * 10) / 10;
    
    // Current streak
    const currentStreak = calculateStudyStreak();
    
    // Average rating (understanding)
    const avgRating = entries.reduce((sum, entry) => sum + entry.understanding, 0) / entries.length;
    
    // Update UI
    document.getElementById('total-study-days').textContent = totalDays;
    document.getElementById('total-hours').textContent = `${totalHours}h`;
    document.getElementById('current-streak').textContent = currentStreak;
    document.getElementById('avg-rating').textContent = avgRating.toFixed(1);
    
    // Update global stats
    userData.stats.totalStudyTime = totalMinutes;
    userData.stats.studyStreak = currentStreak;
    saveUserData();
    updateStats();
}

// Calculate Study Streak
function calculateStudyStreak() {
    if (!userData.diaryEntries || userData.diaryEntries.length === 0) {
        return 0;
    }
    
    const entries = userData.diaryEntries;
    const uniqueDates = [...new Set(entries.map(entry => entry.date))].sort();
    
    if (uniqueDates.length === 0) return 0;
    
    let streak = 0;
    const today = new Date().toISOString().split('T')[0];
    let currentDate = new Date(today);
    
    // Check if studied today or yesterday (to account for different time zones)
    const lastStudyDate = new Date(uniqueDates[uniqueDates.length - 1]);
    const daysDiff = Math.floor((new Date(today) - lastStudyDate) / (1000 * 60 * 60 * 24));
    
    if (daysDiff > 1) {
        return 0; // Streak broken
    }
    
    // Count consecutive days backwards
    for (let i = uniqueDates.length - 1; i >= 0; i--) {
        const studyDate = uniqueDates[i];
        const expectedDate = currentDate.toISOString().split('T')[0];
        
        if (studyDate === expectedDate) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break;
        }
    }
    
    return streak;
}

// Generate Insights
function generateInsights() {
    const container = document.getElementById('insights-container');
    
    if (!userData.diaryEntries || userData.diaryEntries.length === 0) {
        container.innerHTML = '<p>Registre algumas sessões de estudo para ver insights personalizados.</p>';
        return;
    }
    
    const entries = userData.diaryEntries;
    const insights = [];
    
    // Study frequency insight
    const daysStudied = [...new Set(entries.map(entry => entry.date))].length;
    const totalDays = Math.ceil((new Date() - new Date(entries[0].date)) / (1000 * 60 * 60 * 24)) || 1;
    const frequency = (daysStudied / totalDays * 100).toFixed(1);
    
    insights.push({
        icon: 'fas fa-calendar-check',
        title: 'Frequência de Estudos',
        content: `Você estudou em ${frequency}% dos dias desde o primeiro registro. ${frequency > 70 ? 'Excelente consistência!' : frequency > 40 ? 'Boa frequência, mas pode melhorar.' : 'Tente ser mais consistente nos estudos.'}`
    });
    
    // Certification focus insight
    const certStats = {};
    entries.forEach(entry => {
        certStats[entry.certification] = (certStats[entry.certification] || 0) + entry.duration;
    });
    
    const mostStudied = Object.keys(certStats).reduce((a, b) => certStats[a] > certStats[b] ? a : b);
    const certNames = { 'itil4': 'ITIL 4', 'pmp': 'PMP', 'scrum': 'Scrum Master', 'general': 'Geral' };
    
    insights.push({
        icon: 'fas fa-chart-pie',
        title: 'Foco de Estudos',
        content: `Você tem dedicado mais tempo ao ${certNames[mostStudied] || mostStudied} (${Math.round(certStats[mostStudied] / 60)}h). ${Object.keys(certStats).length > 1 ? 'Considere balancear o tempo entre as certificações.' : 'Foco é importante, mas não esqueça das outras certificações.'}`
    });
    
    // Difficulty vs Understanding insight
    const avgDifficulty = entries.reduce((sum, entry) => sum + entry.difficulty, 0) / entries.length;
    const avgUnderstanding = entries.reduce((sum, entry) => sum + entry.understanding, 0) / entries.length;
    
    if (avgDifficulty > avgUnderstanding + 0.5) {
        insights.push({
            icon: 'fas fa-exclamation-triangle',
            title: 'Desafio vs Compreensão',
            content: 'Você está enfrentando tópicos difíceis, mas sua compreensão pode melhorar. Considere revisar conceitos básicos ou buscar materiais complementares.'
        });
    } else if (avgUnderstanding > avgDifficulty + 0.5) {
        insights.push({
            icon: 'fas fa-thumbs-up',
            title: 'Boa Compreensão',
            content: 'Você está compreendendo bem os tópicos estudados! Considere aumentar o nível de dificuldade ou explorar tópicos mais avançados.'
        });
    }
    
    // Study time insight
    const avgDuration = entries.reduce((sum, entry) => sum + entry.duration, 0) / entries.length;
    
    if (avgDuration < 30) {
        insights.push({
            icon: 'fas fa-clock',
            title: 'Duração das Sessões',
            content: 'Suas sessões de estudo são relativamente curtas. Considere sessões mais longas para aprofundar o aprendizado.'
        });
    } else if (avgDuration > 120) {
        insights.push({
            icon: 'fas fa-battery-quarter',
            title: 'Sessões Longas',
            content: 'Suas sessões são longas! Certifique-se de fazer pausas regulares para manter a concentração e evitar fadiga mental.'
        });
    }
    
    // Render insights
    let html = '';
    insights.forEach(insight => {
        html += `
            <div class="insight-item">
                <div class="insight-icon">
                    <i class="${insight.icon}"></i>
                </div>
                <div class="insight-content">
                    <h5>${insight.title}</h5>
                    <p>${insight.content}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Delete Diary Entry
function deleteDiaryEntry(entryId) {
    if (confirm('Tem certeza que deseja excluir esta entrada?')) {
        userData.diaryEntries = userData.diaryEntries.filter(entry => entry.id !== entryId);
        saveUserData();
        loadDiaryEntries();
        updateDiaryStats();
        generateInsights();
        showNotification('Entrada excluída com sucesso!', 'success');
    }
}

// Edit Diary Entry (simplified - just delete and recreate)
function editDiaryEntry(entryId) {
    const entry = userData.diaryEntries.find(e => e.id === entryId);
    if (!entry) return;
    
    // Fill form with existing data
    document.getElementById('entry-date').value = entry.date;
    document.getElementById('entry-certification').value = entry.certification;
    document.getElementById('entry-duration').value = entry.duration;
    document.getElementById('entry-topics').value = entry.topics;
    document.getElementById('entry-notes').value = entry.notes || '';
    document.getElementById('entry-next-steps').value = entry.nextSteps || '';
    
    // Set checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = entry.activities.includes(cb.value);
    });
    
    // Set radio buttons
    document.querySelector(`input[name="difficulty"][value="${entry.difficulty}"]`).checked = true;
    document.querySelector(`input[name="understanding"][value="${entry.understanding}"]`).checked = true;
    
    // Delete original entry
    userData.diaryEntries = userData.diaryEntries.filter(e => e.id !== entryId);
    
    // Show form
    showNewEntryForm();
}

// Initialize Diary
function initializeDiary() {
    updateDiaryStats();
    loadDiaryEntries();
    generateInsights();
    
    // Create simple charts (placeholder)
    createProgressCharts();
}

// Create Progress Charts (simplified version)
function createProgressCharts() {
    // This would create actual charts using Chart.js
    // For now, we'll create placeholder content
    
    const certChart = document.getElementById('certification-progress-chart');
    const weeklyChart = document.getElementById('weekly-hours-chart');
    
    if (certChart) {
        const ctx = certChart.getContext('2d');
        ctx.fillStyle = '#667eea';
        ctx.fillRect(0, 0, 400, 200);
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Gráfico de Progresso', 200, 100);
        ctx.fillText('(Será implementado com Chart.js)', 200, 120);
    }
    
    if (weeklyChart) {
        const ctx = weeklyChart.getContext('2d');
        ctx.fillStyle = '#28a745';
        ctx.fillRect(0, 0, 400, 200);
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Horas Semanais', 200, 100);
        ctx.fillText('(Será implementado com Chart.js)', 200, 120);
    }
}
