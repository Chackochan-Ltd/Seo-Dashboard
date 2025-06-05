// SEO Analytics Dashboard JavaScript

// Application data
const appData = {
  "seo_metrics": [
    {"metric": "Organic Traffic", "current": 15420, "target": 25000, "trend": "+12%", "category": "Traffic"},
    {"metric": "Keyword Rankings", "current": 245, "target": 400, "trend": "+8%", "category": "Rankings"},
    {"metric": "Domain Authority", "current": 42, "target": 55, "trend": "+3%", "category": "Authority"},
    {"metric": "Core Web Vitals", "current": 78, "target": 90, "trend": "+5%", "category": "Technical"},
    {"metric": "Conversion Rate", "current": 2.8, "target": 4.5, "trend": "+0.4%", "category": "Conversion"},
    {"metric": "Page Load Speed", "current": 2.8, "target": 2.0, "trend": "-0.2s", "category": "Technical"}
  ],
  "seo_tools": [
    {"name": "Google Search Console", "category": "Free Analytics", "cost": 0, "features": "Performance monitoring, indexing", "ai": false},
    {"name": "Semrush", "category": "Paid All-in-One", "cost": 140, "features": "Keyword research, competitor analysis", "ai": true},
    {"name": "Ahrefs", "category": "Paid All-in-One", "cost": 129, "features": "Backlink analysis, keyword tracking", "ai": true},
    {"name": "Surfer SEO", "category": "Content Optimization", "cost": 99, "features": "AI content optimization", "ai": true},
    {"name": "Moz Pro", "category": "Paid All-in-One", "cost": 99, "features": "Domain authority, keyword research", "ai": true},
    {"name": "Screaming Frog", "category": "Technical SEO", "cost": 22, "features": "Site crawling, technical audits", "ai": false},
    {"name": "Google Analytics", "category": "Free Analytics", "cost": 0, "features": "Traffic analytics, user behavior", "ai": false},
    {"name": "PageSpeed Insights", "category": "Performance", "cost": 0, "features": "Core Web Vitals testing", "ai": false},
    {"name": "Yoast SEO", "category": "WordPress Plugin", "cost": 0, "features": "On-page SEO optimization", "ai": true},
    {"name": "Schema Generator", "category": "Technical SEO", "cost": 0, "features": "Structured data creation", "ai": false},
    {"name": "Ubersuggest", "category": "Keyword Research", "cost": 29, "features": "Keyword suggestions, competition analysis", "ai": true},
    {"name": "Answer The Public", "category": "Keyword Research", "cost": 0, "features": "Question-based keyword research", "ai": false}
  ],
  "keywords": [
    {"keyword": "best SEO tools", "volume": 5400, "difficulty": 72, "rank": 15, "target": 5, "cpc": 8.90, "intent": "Commercial"},
    {"keyword": "SEO audit checklist", "volume": 2900, "difficulty": 58, "rank": 8, "target": 3, "cpc": 6.20, "intent": "Informational"},
    {"keyword": "local SEO optimization", "volume": 3300, "difficulty": 64, "rank": 12, "target": 5, "cpc": 7.40, "intent": "Commercial"},
    {"keyword": "voice search SEO", "volume": 1800, "difficulty": 43, "rank": 6, "target": 1, "cpc": 5.10, "intent": "Informational"},
    {"keyword": "technical SEO guide", "volume": 4200, "difficulty": 69, "rank": 23, "target": 8, "cpc": 9.30, "intent": "Informational"},
    {"keyword": "keyword research tools", "volume": 6700, "difficulty": 75, "rank": 18, "target": 10, "cpc": 11.20, "intent": "Commercial"},
    {"keyword": "SEO analytics dashboard", "volume": 880, "difficulty": 41, "rank": 4, "target": 1, "cpc": 4.80, "intent": "Commercial"},
    {"keyword": "schema markup tutorial", "volume": 1200, "difficulty": 38, "rank": 3, "target": 1, "cpc": 3.90, "intent": "Informational"},
    {"keyword": "E-A-T SEO strategy", "volume": 990, "difficulty": 47, "rank": 11, "target": 5, "cpc": 6.80, "intent": "Informational"},
    {"keyword": "Core Web Vitals optimization", "volume": 2100, "difficulty": 62, "rank": 14, "target": 7, "cpc": 7.60, "intent": "Informational"},
    {"keyword": "backlink building strategies", "volume": 3800, "difficulty": 71, "rank": 19, "target": 12, "cpc": 9.80, "intent": "Informational"},
    {"keyword": "mobile SEO best practices", "volume": 2400, "difficulty": 59, "rank": 9, "target": 5, "cpc": 6.90, "intent": "Informational"}
  ],
  "project_tasks": [
    {"phase": "Initial Audit", "task": "Website crawl analysis", "priority": "High", "hours": 8, "tools": "Screaming Frog", "completed": true},
    {"phase": "Initial Audit", "task": "Core Web Vitals assessment", "priority": "High", "hours": 4, "tools": "PageSpeed Insights", "completed": true},
    {"phase": "Initial Audit", "task": "Competitor analysis", "priority": "Medium", "hours": 6, "tools": "Semrush/Ahrefs", "completed": false},
    {"phase": "Keyword Research", "task": "Primary keyword research", "priority": "High", "hours": 6, "tools": "Google Keyword Planner", "completed": true},
    {"phase": "Keyword Research", "task": "Long-tail keyword identification", "priority": "Medium", "hours": 4, "tools": "Answer The Public", "completed": false},
    {"phase": "On-Page SEO", "task": "Title tag optimization", "priority": "High", "hours": 3, "tools": "Yoast SEO", "completed": false},
    {"phase": "On-Page SEO", "task": "Meta description optimization", "priority": "High", "hours": 2, "tools": "Yoast SEO", "completed": false},
    {"phase": "On-Page SEO", "task": "Header structure review", "priority": "Medium", "hours": 2, "tools": "Manual Review", "completed": false},
    {"phase": "Technical SEO", "task": "XML sitemap creation", "priority": "High", "hours": 4, "tools": "Google Search Console", "completed": true},
    {"phase": "Technical SEO", "task": "Schema markup implementation", "priority": "Medium", "hours": 6, "tools": "Schema Generator", "completed": false},
    {"phase": "Technical SEO", "task": "Mobile responsiveness check", "priority": "High", "hours": 2, "tools": "Google Mobile Test", "completed": true},
    {"phase": "Content Strategy", "task": "Content gap analysis", "priority": "Medium", "hours": 8, "tools": "Content Analysis Tools", "completed": false},
    {"phase": "Content Strategy", "task": "E-A-T content creation", "priority": "High", "hours": 12, "tools": "Manual Research", "completed": false},
    {"phase": "Link Building", "task": "Guest posting outreach", "priority": "Medium", "hours": 8, "tools": "Outreach Tools", "completed": false},
    {"phase": "Link Building", "task": "Internal linking strategy", "priority": "Medium", "hours": 4, "tools": "Manual Review", "completed": false},
    {"phase": "Analytics & Monitoring", "task": "Google Analytics setup", "priority": "High", "hours": 3, "tools": "Google Analytics", "completed": true},
    {"phase": "Analytics & Monitoring", "task": "Search Console configuration", "priority": "High", "hours": 2, "tools": "Google Search Console", "completed": true},
    {"phase": "Local SEO", "task": "Google My Business optimization", "priority": "High", "hours": 4, "tools": "Google My Business", "completed": false},
    {"phase": "Local SEO", "task": "Local citation building", "priority": "Medium", "hours": 6, "tools": "Citation Tools", "completed": false}
  ],
  "seo_trends": [
    {"trend": "AI Overviews Integration", "impact": "Very High", "difficulty": "High", "priority": 1, "adoption": 65},
    {"trend": "Voice Search Optimization", "impact": "High", "difficulty": "Medium", "priority": 2, "adoption": 78},
    {"trend": "Core Web Vitals Focus", "impact": "Very High", "difficulty": "Medium", "priority": 3, "adoption": 89},
    {"trend": "E-A-T Enhancement", "impact": "High", "difficulty": "High", "priority": 4, "adoption": 72},
    {"trend": "Local SEO Expansion", "impact": "Medium", "difficulty": "Low", "priority": 5, "adoption": 85},
    {"trend": "Schema Markup Implementation", "impact": "Medium", "difficulty": "Medium", "priority": 6, "adoption": 58},
    {"trend": "Mobile-First Indexing", "impact": "High", "difficulty": "Medium", "priority": 7, "adoption": 92},
    {"trend": "Video Content SEO", "impact": "Medium", "difficulty": "Low", "priority": 8, "adoption": 67},
    {"trend": "Answer Engine Optimization", "impact": "High", "difficulty": "High", "priority": 9, "adoption": 45},
    {"trend": "Brand Authority Building", "impact": "Medium", "difficulty": "High", "priority": 10, "adoption": 61},
    {"trend": "Technical SEO Automation", "impact": "High", "difficulty": "Medium", "priority": 11, "adoption": 74},
    {"trend": "User Experience Signals", "impact": "Very High", "difficulty": "Medium", "priority": 12, "adoption": 83}
  ]
};

// Global state
let currentTheme = 'light';
let selectedTools = [];
let sortState = { column: null, direction: 'asc' };

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  updateDateTime();
  setupEventListeners();
  renderMetricsCards();
  renderProjectPhases();
  renderKeywordTable();
  renderToolsTable();
  renderTrendsGrid();
  
  // Update time every minute
  setInterval(updateDateTime, 60000);
}

function updateDateTime() {
  const now = new Date();
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const timeOptions = { 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  
  document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', dateOptions);
  document.getElementById('lastUpdated').textContent = now.toLocaleTimeString('en-US', timeOptions);
}

function setupEventListeners() {
  // Tab navigation
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  
  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  
  // Filters
  document.getElementById('priorityFilter')?.addEventListener('change', filterTasks);
  document.getElementById('statusFilter')?.addEventListener('change', filterTasks);
  document.getElementById('categoryFilter')?.addEventListener('change', filterTools);
  document.getElementById('costFilter')?.addEventListener('change', filterTools);
  
  // Search
  document.getElementById('keywordSearch')?.addEventListener('input', searchKeywords);
  
  // Table sorting
  document.querySelectorAll('[data-sort]').forEach(header => {
    header.addEventListener('click', () => sortTable(header.dataset.sort));
  });
  
  // Export buttons
  document.getElementById('exportPDF')?.addEventListener('click', () => exportData('pdf'));
  document.getElementById('exportCSV')?.addEventListener('click', () => exportData('csv'));
  document.getElementById('exportJSON')?.addEventListener('click', () => exportData('json'));
  document.getElementById('printReport')?.addEventListener('click', () => window.print());
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

function renderMetricsCards() {
  const container = document.getElementById('metricsGrid');
  container.innerHTML = '';
  
  appData.seo_metrics.forEach(metric => {
    const progress = (metric.current / metric.target) * 100;
    const isPositive = !metric.trend.includes('-');
    
    const card = document.createElement('div');
    card.className = 'metric-card';
    card.innerHTML = `
      <div class="metric-card__header">
        <h3 class="metric-card__title">${metric.metric}</h3>
        <span class="metric-card__trend metric-card__trend--${isPositive ? 'positive' : 'negative'}">
          ${metric.trend}
        </span>
      </div>
      <div class="metric-card__value">${formatMetricValue(metric.current, metric.metric)}</div>
      <div class="metric-card__target">Target: ${formatMetricValue(metric.target, metric.metric)}</div>
      <div class="metric-progress">
        <div class="metric-progress__bar" style="width: ${Math.min(progress, 100)}%"></div>
      </div>
    `;
    container.appendChild(card);
  });
}

function formatMetricValue(value, metric) {
  if (metric === 'Organic Traffic' || metric === 'Keyword Rankings') {
    return value.toLocaleString();
  } else if (metric === 'Conversion Rate') {
    return value + '%';
  } else if (metric === 'Page Load Speed') {
    return value + 's';
  }
  return value;
}

function renderProjectPhases() {
  const container = document.getElementById('projectPhases');
  container.innerHTML = '';
  
  const phases = [...new Set(appData.project_tasks.map(task => task.phase))];
  
  phases.forEach(phaseName => {
    const phaseTasks = appData.project_tasks.filter(task => task.phase === phaseName);
    const completedTasks = phaseTasks.filter(task => task.completed).length;
    const progress = (completedTasks / phaseTasks.length) * 100;
    
    const phaseCard = document.createElement('div');
    phaseCard.className = 'phase-card';
    phaseCard.innerHTML = `
      <div class="phase-card__header">
        <h3 class="phase-card__title">${phaseName}</h3>
        <div class="phase-progress">
          <span>${completedTasks}/${phaseTasks.length}</span>
          <div class="progress-bar">
            <div class="progress-bar__fill" style="width: ${progress}%"></div>
          </div>
        </div>
      </div>
      <div class="phase-card__body">
        ${phaseTasks.map(task => createTaskHTML(task)).join('')}
      </div>
    `;
    container.appendChild(phaseCard);
  });
}

function createTaskHTML(task) {
  return `
    <div class="task-item" data-priority="${task.priority}" data-status="${task.completed ? 'completed' : 'pending'}">
      <div class="task-info">
        <div class="task-title">${task.task}</div>
        <div class="task-meta">
          <span class="task-priority task-priority--${task.priority.toLowerCase()}">${task.priority}</span>
          <span>${task.hours}h</span>
          <span>${task.tools}</span>
        </div>
      </div>
      <div class="task-status">
        <div class="status-indicator ${task.completed ? 'status-indicator--completed' : ''}" 
             onclick="toggleTaskStatus(this, '${task.phase}', '${task.task}')"></div>
      </div>
    </div>
  `;
}

function toggleTaskStatus(indicator, phase, taskName) {
  const task = appData.project_tasks.find(t => t.phase === phase && t.task === taskName);
  if (task) {
    task.completed = !task.completed;
    indicator.classList.toggle('status-indicator--completed');
    renderProjectPhases(); // Re-render to update progress
  }
}

function filterTasks() {
  const priorityFilter = document.getElementById('priorityFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;
  
  document.querySelectorAll('.task-item').forEach(item => {
    const priority = item.dataset.priority;
    const status = item.dataset.status;
    
    const priorityMatch = !priorityFilter || priority === priorityFilter;
    const statusMatch = !statusFilter || status === statusFilter;
    
    item.style.display = (priorityMatch && statusMatch) ? 'flex' : 'none';
  });
}

function renderKeywordTable() {
  const tbody = document.getElementById('keywordTableBody');
  tbody.innerHTML = '';
  
  appData.keywords.forEach(keyword => {
    const opportunity = calculateOpportunityScore(keyword);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${keyword.keyword}</td>
      <td>${keyword.volume.toLocaleString()}</td>
      <td>${keyword.difficulty}</td>
      <td>${keyword.rank}</td>
      <td>${keyword.target}</td>
      <td>$${keyword.cpc.toFixed(2)}</td>
      <td><span class="intent-tag intent-tag--${keyword.intent.toLowerCase()}">${keyword.intent}</span></td>
      <td><span class="opportunity-score opportunity-score--${getOpportunityClass(opportunity)}">${opportunity}</span></td>
    `;
    tbody.appendChild(row);
  });
}

function calculateOpportunityScore(keyword) {
  // Simple opportunity calculation: volume / difficulty * rank improvement potential
  const rankImprovement = keyword.rank - keyword.target;
  const score = Math.round((keyword.volume / keyword.difficulty) * (rankImprovement / 10));
  return Math.max(1, Math.min(100, score));
}

function getOpportunityClass(score) {
  if (score >= 70) return 'high';
  if (score >= 40) return 'medium';
  return 'low';
}

function searchKeywords() {
  const searchTerm = document.getElementById('keywordSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#keywordTableBody tr');
  
  rows.forEach(row => {
    const keyword = row.cells[0].textContent.toLowerCase();
    row.style.display = keyword.includes(searchTerm) ? '' : 'none';
  });
}

function sortTable(column) {
  if (sortState.column === column) {
    sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
  } else {
    sortState.column = column;
    sortState.direction = 'asc';
  }
  
  const sortedData = [...appData.keywords].sort((a, b) => {
    let aVal = a[column];
    let bVal = b[column];
    
    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    
    if (sortState.direction === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });
  
  // Re-render table with sorted data
  const tbody = document.getElementById('keywordTableBody');
  tbody.innerHTML = '';
  
  sortedData.forEach(keyword => {
    const opportunity = calculateOpportunityScore(keyword);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${keyword.keyword}</td>
      <td>${keyword.volume.toLocaleString()}</td>
      <td>${keyword.difficulty}</td>
      <td>${keyword.rank}</td>
      <td>${keyword.target}</td>
      <td>$${keyword.cpc.toFixed(2)}</td>
      <td><span class="intent-tag intent-tag--${keyword.intent.toLowerCase()}">${keyword.intent}</span></td>
      <td><span class="opportunity-score opportunity-score--${getOpportunityClass(opportunity)}">${opportunity}</span></td>
    `;
    tbody.appendChild(row);
  });
  
  // Update sort icons
  document.querySelectorAll('.sort-icon').forEach(icon => {
    icon.textContent = '↕';
  });
  const currentIcon = document.querySelector(`[data-sort="${column}"] .sort-icon`);
  currentIcon.textContent = sortState.direction === 'asc' ? '↑' : '↓';
}

function renderToolsTable() {
  const tbody = document.getElementById('toolsTableBody');
  tbody.innerHTML = '';
  
  appData.seo_tools.forEach((tool, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tool.name}</td>
      <td>${tool.category}</td>
      <td>${tool.cost === 0 ? 'Free' : '$' + tool.cost + '/mo'}</td>
      <td>${tool.features}</td>
      <td>${tool.ai ? '<span class="ai-badge">AI</span>' : '-'}</td>
      <td>
        <label class="tool-select">
          <input type="checkbox" onchange="toggleToolSelection(${index}, this.checked)">
          Select
        </label>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function toggleToolSelection(index, selected) {
  const tool = appData.seo_tools[index];
  if (selected) {
    selectedTools.push(tool);
  } else {
    selectedTools = selectedTools.filter(t => t.name !== tool.name);
  }
  updateBudgetTotal();
}

function updateBudgetTotal() {
  const total = selectedTools.reduce((sum, tool) => sum + tool.cost, 0);
  document.getElementById('budgetTotal').textContent = '$' + total;
}

function filterTools() {
  const categoryFilter = document.getElementById('categoryFilter').value;
  const costFilter = document.getElementById('costFilter').value;
  const rows = document.querySelectorAll('#toolsTableBody tr');
  
  rows.forEach((row, index) => {
    const tool = appData.seo_tools[index];
    const categoryMatch = !categoryFilter || tool.category === categoryFilter;
    
    let costMatch = true;
    if (costFilter) {
      switch (costFilter) {
        case 'free':
          costMatch = tool.cost === 0;
          break;
        case 'low':
          costMatch = tool.cost > 0 && tool.cost <= 50;
          break;
        case 'mid':
          costMatch = tool.cost > 50 && tool.cost <= 100;
          break;
        case 'high':
          costMatch = tool.cost > 100;
          break;
      }
    }
    
    row.style.display = (categoryMatch && costMatch) ? '' : 'none';
  });
}

function renderTrendsGrid() {
  const container = document.getElementById('trendsGrid');
  container.innerHTML = '';
  
  appData.seo_trends.forEach(trend => {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.innerHTML = `
      <div class="trend-card__header">
        <h3 class="trend-card__title">${trend.trend}</h3>
        <span class="trend-priority">#${trend.priority}</span>
      </div>
      <div class="trend-stats">
        <div class="trend-stat">
          <div class="trend-stat__label">Adoption Rate</div>
          <div class="trend-stat__value">${trend.adoption}%</div>
        </div>
        <div class="trend-stat">
          <div class="trend-stat__label">Impact Level</div>
          <div class="trend-stat__value impact-indicator impact-indicator--${trend.impact.toLowerCase().replace(' ', '-')}">${trend.impact}</div>
        </div>
      </div>
      <div class="adoption-bar">
        <div class="adoption-bar__fill" style="width: ${trend.adoption}%"></div>
      </div>
      <div style="margin-top: 12px;">
        <span style="font-size: 12px; color: var(--color-text-secondary);">
          Implementation: ${trend.difficulty}
        </span>
      </div>
    `;
    container.appendChild(card);
  });
}

function exportData(format) {
  const currentTab = document.querySelector('.tab-content.active').id;
  let data = {};
  let filename = 'seo-dashboard-export';
  
  switch (currentTab) {
    case 'tab-overview':
      data = { project_tasks: appData.project_tasks };
      filename = 'seo-project-tasks';
      break;
    case 'tab-keywords':
      data = { keywords: appData.keywords };
      filename = 'seo-keywords';
      break;
    case 'tab-tools':
      data = { seo_tools: appData.seo_tools, selected_tools: selectedTools };
      filename = 'seo-tools';
      break;
    case 'tab-trends':
      data = { seo_trends: appData.seo_trends };
      filename = 'seo-trends';
      break;
    default:
      data = appData;
      filename = 'seo-dashboard-complete';
  }
  
  if (format === 'json') {
    downloadJSON(data, filename);
  } else if (format === 'csv') {
    downloadCSV(data, filename);
  } else if (format === 'pdf') {
    alert('PDF export would require a PDF library. Using print instead.');
    window.print();
  }
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadCSV(data, filename) {
  let csv = '';
  const firstKey = Object.keys(data)[0];
  const items = data[firstKey];
  
  if (Array.isArray(items) && items.length > 0) {
    // Create headers
    const headers = Object.keys(items[0]);
    csv += headers.join(',') + '\n';
    
    // Create rows
    items.forEach(item => {
      const row = headers.map(header => {
        const value = item[header];
        return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
      });
      csv += row.join(',') + '\n';
    });
  }
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename + '.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}