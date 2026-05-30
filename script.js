const courses = [
  { university: 'UEPG', name: 'Administração', year: 2025, candidates: 940, vacancies: 40, note: 47.8, salary: 'R$ 4.500' },
  { university: 'UEPG', name: 'Agronomia', year: 2025, candidates: 1020, vacancies: 30, note: 52.1, salary: 'R$ 5.200' },
  { university: 'UEPG', name: 'Arquitetura e Urbanismo', year: 2025, candidates: 1160, vacancies: 35, note: 54.4, salary: 'R$ 4.800' },
  { university: 'UEPG', name: 'Biomedicina', year: 2025, candidates: 1180, vacancies: 36, note: 56.3, salary: 'R$ 5.300' },
  { university: 'UEPG', name: 'Ciências Biológicas', year: 2025, candidates: 580, vacancies: 40, note: 41.0, salary: 'R$ 3.500' },
  { university: 'UEPG', name: 'Ciências Contábeis', year: 2025, candidates: 820, vacancies: 35, note: 45.3, salary: 'R$ 4.200' },
  { university: 'UEPG', name: 'Ciência da Computação', year: 2025, candidates: 2200, vacancies: 45, note: 72.5, salary: 'R$ 7.800' },
  { university: 'UEPG', name: 'Educação Física', year: 2025, candidates: 980, vacancies: 30, note: 43.9, salary: 'R$ 4.100' },
  { university: 'UEPG', name: 'Enfermagem', year: 2025, candidates: 1420, vacancies: 50, note: 60.4, salary: 'R$ 5.700' },
  { university: 'UEPG', name: 'Engenharia Civil', year: 2025, candidates: 1680, vacancies: 40, note: 65.0, salary: 'R$ 7.100' },
  { university: 'UEPG', name: 'Engenharia de Alimentos', year: 2025, candidates: 940, vacancies: 35, note: 52.7, salary: 'R$ 5.900' },
  { university: 'UEPG', name: 'Engenharia de Computação', year: 2025, candidates: 1320, vacancies: 36, note: 62.8, salary: 'R$ 7.400' },
  { university: 'UEPG', name: 'Engenharia de Produção', year: 2025, candidates: 820, vacancies: 28, note: 49.1, salary: 'R$ 6.300' },
  { university: 'UEPG', name: 'Engenharia Elétrica', year: 2025, candidates: 1540, vacancies: 36, note: 64.2, salary: 'R$ 7.600' },
  { university: 'UEPG', name: 'Engenharia Química', year: 2025, candidates: 1080, vacancies: 32, note: 56.8, salary: 'R$ 6.100' },
  { university: 'UEPG', name: 'Estatística', year: 2025, candidates: 620, vacancies: 25, note: 44.5, salary: 'R$ 4.900' },
  { university: 'UEPG', name: 'Fisioterapia', year: 2025, candidates: 1260, vacancies: 40, note: 59.0, salary: 'R$ 5.800' },
  { university: 'UEPG', name: 'Geografia', year: 2025, candidates: 470, vacancies: 30, note: 38.7, salary: 'R$ 3.600' },
  { university: 'UEPG', name: 'História', year: 2025, candidates: 520, vacancies: 30, note: 39.3, salary: 'R$ 3.700' },
  { university: 'UEPG', name: 'Jornalismo', year: 2025, candidates: 760, vacancies: 30, note: 47.2, salary: 'R$ 4.600' },
  { university: 'UEPG', name: 'Letras Português', year: 2025, candidates: 490, vacancies: 30, note: 39.9, salary: 'R$ 3.900' },
  { university: 'UEPG', name: 'Letras Inglês', year: 2025, candidates: 430, vacancies: 30, note: 37.5, salary: 'R$ 4.000' },
  { university: 'UEPG', name: 'Matemática', year: 2025, candidates: 860, vacancies: 30, note: 46.8, salary: 'R$ 4.700' },
  { university: 'UEPG', name: 'Medicina Veterinária', year: 2025, candidates: 1980, vacancies: 36, note: 75.3, salary: 'R$ 6.900' },
  { university: 'UEPG', name: 'Música', year: 2025, candidates: 350, vacancies: 20, note: 34.0, salary: 'R$ 3.800' },
  { university: 'UEPG', name: 'Nutrição', year: 2025, candidates: 900, vacancies: 36, note: 50.9, salary: 'R$ 5.400' },
  { university: 'UEPG', name: 'Odontologia', year: 2025, candidates: 1720, vacancies: 40, note: 69.2, salary: 'R$ 7.000' },
  { university: 'UEPG', name: 'Pedagogia', year: 2025, candidates: 1120, vacancies: 40, note: 48.7, salary: 'R$ 4.100' },
  { university: 'UEPG', name: 'Psicologia', year: 2025, candidates: 1840, vacancies: 50, note: 68.4, salary: 'R$ 5.900' },
  { university: 'UEPG', name: 'Química', year: 2025, candidates: 680, vacancies: 30, note: 44.0, salary: 'R$ 4.800' },
  { university: 'UEPG', name: 'Relações Internacionais', year: 2025, candidates: 950, vacancies: 35, note: 53.5, salary: 'R$ 5.600' },
  { university: 'UEPG', name: 'Serviço Social', year: 2025, candidates: 1120, vacancies: 40, note: 49.8, salary: 'R$ 4.300' },
  { university: 'UEPG', name: 'Sistemas de Informação', year: 2025, candidates: 1340, vacancies: 40, note: 61.1, salary: 'R$ 7.200' },
  { university: 'UEPG', name: 'Teatro', year: 2025, candidates: 310, vacancies: 20, note: 33.5, salary: 'R$ 3.700' },
  { university: 'UEPG', name: 'Zootecnia', year: 2025, candidates: 780, vacancies: 30, note: 45.6, salary: 'R$ 4.800' },
  { university: 'UEPG', name: 'Design de Moda', year: 2025, candidates: 660, vacancies: 30, note: 42.7, salary: 'R$ 4.300' },
  { university: 'UEPG', name: 'Turismo', year: 2025, candidates: 520, vacancies: 30, note: 38.8, salary: 'R$ 3.900' },
  { university: 'UEPG', name: 'Logística', year: 2025, candidates: 760, vacancies: 30, note: 44.9, salary: 'R$ 4.600' },
  { university: 'UEPG', name: 'Letras Espanhol', year: 2025, candidates: 410, vacancies: 30, note: 36.8, salary: 'R$ 3.900' },
  { university: 'UEPG', name: 'Pedagogia Inclusiva', year: 2025, candidates: 520, vacancies: 28, note: 40.7, salary: 'R$ 4.000' },
  { university: 'UTFPR', name: 'Administração', year: 2025, candidates: 1650, vacancies: 50, note: 58.9, salary: 'R$ 5.600' },
  { university: 'UTFPR', name: 'Agronomia', year: 2025, candidates: 1380, vacancies: 45, note: 56.6, salary: 'R$ 5.900' },
  { university: 'UTFPR', name: 'Arquitetura e Urbanismo', year: 2025, candidates: 1520, vacancies: 40, note: 61.0, salary: 'R$ 6.000' },
  { university: 'UTFPR', name: 'Automação Industrial', year: 2025, candidates: 1680, vacancies: 38, note: 62.4, salary: 'R$ 7.300' },
  { university: 'UTFPR', name: 'Bioquímica', year: 2025, candidates: 740, vacancies: 30, note: 49.1, salary: 'R$ 4.900' },
  { university: 'UTFPR', name: 'Ciência da Computação', year: 2025, candidates: 2540, vacancies: 50, note: 76.1, salary: 'R$ 8.200' },
  { university: 'UTFPR', name: 'Ciências Biológicas', year: 2025, candidates: 710, vacancies: 35, note: 47.2, salary: 'R$ 4.200' },
  { university: 'UTFPR', name: 'Engenharia Ambiental', year: 2025, candidates: 1020, vacancies: 40, note: 57.9, salary: 'R$ 6.200' },
  { university: 'UTFPR', name: 'Engenharia de Alimentos', year: 2025, candidates: 1120, vacancies: 34, note: 58.7, salary: 'R$ 6.100' },
  { university: 'UTFPR', name: 'Engenharia Civil', year: 2025, candidates: 1780, vacancies: 45, note: 68.0, salary: 'R$ 7.500' },
  { university: 'UTFPR', name: 'Engenharia de Controle e Automação', year: 2025, candidates: 1550, vacancies: 35, note: 66.3, salary: 'R$ 7.900' },
  { university: 'UTFPR', name: 'Engenharia de Materiais', year: 2025, candidates: 930, vacancies: 30, note: 54.5, salary: 'R$ 6.700' },
  { university: 'UTFPR', name: 'Engenharia Elétrica', year: 2025, candidates: 1720, vacancies: 40, note: 69.2, salary: 'R$ 7.800' },
  { university: 'UTFPR', name: 'Engenharia Eletrônica', year: 2025, candidates: 1640, vacancies: 38, note: 67.1, salary: 'R$ 7.700' },
  { university: 'UTFPR', name: 'Engenharia de Energias Renováveis', year: 2025, candidates: 880, vacancies: 28, note: 55.3, salary: 'R$ 6.600' },
  { university: 'UTFPR', name: 'Engenharia de Produção', year: 2025, candidates: 1490, vacancies: 42, note: 63.5, salary: 'R$ 7.100' },
  { university: 'UTFPR', name: 'Engenharia de Software', year: 2025, candidates: 1950, vacancies: 42, note: 71.6, salary: 'R$ 8.400' },
  { university: 'UTFPR', name: 'Engenharia Mecânica', year: 2025, candidates: 1480, vacancies: 40, note: 64.7, salary: 'R$ 7.700' },
  { university: 'UTFPR', name: 'Engenharia Química', year: 2025, candidates: 1250, vacancies: 34, note: 60.3, salary: 'R$ 6.900' },
  { university: 'UTFPR', name: 'Engenharia de Telecomunicações', year: 2025, candidates: 1320, vacancies: 32, note: 61.4, salary: 'R$ 7.200' },
  { university: 'UTFPR', name: 'Engenharia Ambiental Urbana', year: 2025, candidates: 790, vacancies: 30, note: 51.8, salary: 'R$ 6.300' },
  { university: 'UTFPR', name: 'Farmácia', year: 2025, candidates: 1030, vacancies: 35, note: 58.2, salary: 'R$ 5.900' },
  { university: 'UTFPR', name: 'Física', year: 2025, candidates: 420, vacancies: 25, note: 42.0, salary: 'R$ 4.400' },
  { university: 'UTFPR', name: 'Geologia', year: 2025, candidates: 410, vacancies: 20, note: 40.6, salary: 'R$ 4.700' },
  { university: 'UTFPR', name: 'Gestão da Tecnologia da Informação', year: 2025, candidates: 970, vacancies: 34, note: 50.1, salary: 'R$ 5.700' },
  { university: 'UTFPR', name: 'Gestão Ambiental', year: 2025, candidates: 770, vacancies: 30, note: 47.9, salary: 'R$ 5.200' },
  { university: 'UTFPR', name: 'Gestão Comercial', year: 2025, candidates: 620, vacancies: 28, note: 43.2, salary: 'R$ 4.700' },
  { university: 'UTFPR', name: 'Logística', year: 2025, candidates: 890, vacancies: 30, note: 49.5, salary: 'R$ 5.000' },
  { university: 'UTFPR', name: 'Matemática', year: 2025, candidates: 710, vacancies: 30, note: 46.0, salary: 'R$ 4.800' },
  { university: 'UTFPR', name: 'Mecatrônica', year: 2025, candidates: 1240, vacancies: 33, note: 60.8, salary: 'R$ 7.400' },
  { university: 'UTFPR', name: 'Meio Ambiente', year: 2025, candidates: 840, vacancies: 28, note: 52.0, salary: 'R$ 5.500' },
  { university: 'UTFPR', name: 'Nutrição', year: 2025, candidates: 910, vacancies: 35, note: 52.3, salary: 'R$ 5.500' },
  { university: 'UTFPR', name: 'Química', year: 2025, candidates: 720, vacancies: 30, note: 47.0, salary: 'R$ 5.000' },
  { university: 'UTFPR', name: 'Redes de Computadores', year: 2025, candidates: 1180, vacancies: 34, note: 59.9, salary: 'R$ 6.800' },
  { university: 'UTFPR', name: 'Sistemas para Internet', year: 2025, candidates: 1460, vacancies: 38, note: 66.4, salary: 'R$ 7.200' },
  { university: 'UTFPR', name: 'Sistemas de Informação', year: 2025, candidates: 1790, vacancies: 44, note: 72.0, salary: 'R$ 8.100' },
  { university: 'UTFPR', name: 'Tecnologia em Alimentos', year: 2025, candidates: 820, vacancies: 28, note: 50.7, salary: 'R$ 5.600' },
  { university: 'UTFPR', name: 'Tecnologia em Design de Moda', year: 2025, candidates: 610, vacancies: 24, note: 43.8, salary: 'R$ 4.400' },
  { university: 'UTFPR', name: 'Tecnologia em Gestão Pública', year: 2025, candidates: 540, vacancies: 24, note: 42.3, salary: 'R$ 4.800' },
  { university: 'UTFPR', name: 'Tecnologia em Mecânica', year: 2025, candidates: 1060, vacancies: 32, note: 55.0, salary: 'R$ 6.400' }
];

const chartData = {
  years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  categories: [
    { name: 'Negros', values: [4.7, 5.0, 5.3, 5.5, 5.8, 6.2, 6.5, 6.8, 7.0, 7.2], color: '#0d6efd' },
    { name: 'Negros Pública', values: [3.8, 4.0, 4.2, 4.4, 4.6, 4.9, 5.1, 5.3, 5.6, 5.8], color: '#198754' },
    { name: 'PCD', values: [2.2, 2.4, 2.5, 2.6, 2.8, 2.9, 3.1, 3.2, 3.4, 3.5], color: '#dc3545' },
    { name: 'Pública', values: [6.5, 6.8, 7.2, 7.5, 7.9, 8.1, 8.3, 8.6, 8.9, 9.1], color: '#ffc107' },
    { name: 'Universal', values: [7.3, 7.6, 8.1, 8.5, 8.9, 9.2, 9.5, 9.8, 10.0, 10.3], color: '#6f42c1' }
  ]
};

const analysisQuestions = [
  { title: 'Qual curso apresentou maior concorrência?', answer: 'O curso com maior concorrência média em 2025 é Ciência da Computação da UTFPR, seguido por Sistemas de Informação.' },
  { title: 'Qual curso apresentou menor concorrência?', answer: 'O curso com menor concorrência média em 2025 é Teatro da UEPG, com cerca de 15,5 candidatos por vaga na análise simulada.' },
  { title: 'Qual curso apresentou maior crescimento?', answer: 'O crescimento mais forte foi observado em Engenharia de Software e Ciência da Computação, refletindo maior demanda tecnológica.' },
  { title: 'Houve queda de concorrência em algum curso?', answer: 'No conjunto de dados simulados, a concorrência mais baixa por vaga no PCD mostra variação, mas não queda acentuada de um curso específico.' },
  { title: 'Qual curso foi mais estável?', answer: 'Cursos como Letras e Pedagogia mostram estabilidade relativa, com valores de concorrência mais constantes ao longo dos anos.' },
  { title: 'Qual ano teve maior concorrência média?', answer: 'O ano de 2025 apresenta a maior média de concorrência no gráfico, especialmente para as categorias Universal e Pública.' },
  { title: 'Existe relação entre concorrência e nota mínima?', answer: 'Sim. Cursos com maior concorrência tendem a ter nota mínima mais alta, como Computação e Engenharia.' },
  { title: 'Quais outras conclusões (insights) podem ser obtidas?', answer: 'Observa-se maior demanda em áreas de tecnologia e saúde, e cursos com reserva de vagas ampliam a concorrência por candidatos gerais.' }
];

function $(id) {
  return document.getElementById(id);
}

function getQueryParams() {
  const params = {};
  window.location.search.substring(1).split('&').forEach(pair => {
    if (!pair) return;
    const [key, value] = pair.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
  });
  return params;
}

function isCoursePage() {
  return window.location.pathname.includes('course.html');
}

function renderCourseSummary(course) {
  const summary = $('selectedCourseSummary');
  if (!summary) return;
  summary.innerHTML = `
    <div class="metric-pill">Universidade: ${course.university}</div>
    <div class="metric-pill">Concorrência: ${(course.candidates / course.vacancies).toFixed(1)} por vaga</div>
    <div class="metric-pill">Nota mínima: ${course.note}</div>
    <div class="metric-pill">Salário médio: ${course.salary}</div>
  `;
}

function setCourseTab(tab) {
  window.currentCourseTab = tab;
  document.querySelectorAll('.course-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  renderCourseList($('searchInput').value, tab);
}

function renderLegend(categories = chartData.categories) {
  const legend = $('chartLegend');
  if (!legend) return;
  legend.innerHTML = '';
  categories.forEach(category => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-swatch" style="background:${category.color}"></span> ${category.name}`;
    legend.appendChild(item);
  });
}

function renderCourseList(filterText, currentTab = window.currentCourseTab || 'ALL') {
  const container = $('courseList');
  container.innerHTML = '';

  const pageUniversity = window.UNIVERSITY || 'UEPG';
  const filtered = courses.filter(course => {
    const matchText = course.name.toLowerCase().includes((filterText || '').toLowerCase());
    const matchUni = course.university === pageUniversity;
    const ratio = course.candidates / course.vacancies;
    const matchTab = currentTab === 'ALL'
      || (currentTab === 'HIGH' && ratio >= 30)
      || (currentTab === 'LOW' && ratio <= 20);
    return matchText && matchUni && matchTab;
  });

  if (!filtered.length) {
    container.innerHTML = '<p class="text-muted">Nenhum curso encontrado.</p>';
    return;
  }

  filtered.slice(0, 30).forEach(course => {
    const item = document.createElement('a');
    item.className = 'course-item';
    item.href = `course.html?university=${encodeURIComponent(course.university)}&name=${encodeURIComponent(course.name)}`;
    item.target = '_blank';
    item.innerHTML = `<strong>${course.name}</strong><div class="small text-muted">${course.university}</div>`;
    container.appendChild(item);
  });
}

function generateCourseHistory(course) {
  const baseline = course.candidates / course.vacancies;
  const trend = (baseline / 30) * 0.5;
  const yearSteps = chartData.years.map((year, index) => baseline * (0.85 + trend * index / 10));
  const categories = [
    { name: 'Negros', values: yearSteps.map((value, i) => Math.max(2.2, value * 0.6 + i * 0.09)), color: '#0d6efd' },
    { name: 'Negros Pública', values: yearSteps.map((value, i) => Math.max(2.0, value * 0.5 + i * 0.07)), color: '#198754' },
    { name: 'PCD', values: yearSteps.map((value, i) => Math.max(1.2, value * 0.25 + i * 0.03)), color: '#dc3545' },
    { name: 'Pública', values: yearSteps.map((value, i) => Math.max(4.0, value * 0.9 + i * 0.1)), color: '#ffc107' },
    { name: 'Universal', values: yearSteps.map((value, i) => Math.max(5.0, value * 1.1 + i * 0.12)), color: '#6f42c1' }
  ];

  return { years: chartData.years, categories };
}

function renderCourseMetrics(course) {
  const container = $('selectedCourseMetrics');
  container.innerHTML = '';
  const metrics = [
    { label: 'Concorrência', value: `${(course.candidates / course.vacancies).toFixed(1)} / vaga` },
    { label: 'Nota mínima', value: course.note },
    { label: 'Salário médio', value: course.salary },
    { label: 'Ano base', value: course.year }
  ];

  metrics.forEach(metric => {
    const span = document.createElement('span');
    span.className = 'metric-pill';
    span.textContent = `${metric.label}: ${metric.value}`;
    container.appendChild(span);
  });
}

function renderSelectedCourse(course) {
  window.selectedCourseName = course.name;
  renderCourseList($('searchInput').value, window.currentCourseTab);

  const selectedName = $('selectedCourseName');
  if (selectedName) selectedName.textContent = course.name;
  const selectedDesc = $('selectedCourseDescription');
  if (selectedDesc) selectedDesc.textContent = `${course.university} • ${course.name}`;

  renderCourseMetrics(course);
  renderSelectedCourseTable(course);

  const history = generateCourseHistory(course);
  renderLegend(history.categories);
  drawLineChart(history);
}

function renderSelectedCourseTable(course) {
  const tbody = $('dataTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${course.year}</td>
    <td>${course.name}</td>
    <td>${course.candidates}</td>
    <td>${course.vacancies}</td>
    <td>${(course.candidates / course.vacancies).toFixed(1)}</td>
    <td>${course.note}</td>
    <td>${course.salary}</td>
  `;
  tbody.appendChild(row);
}

function renderCounts() {
  const uepgCount = courses.filter(course => course.university === 'UEPG').length;
  const utfprCount = courses.filter(course => course.university === 'UTFPR').length;
  $('uepgCount').textContent = uepgCount;
  $('utfprCount').textContent = utfprCount;
}

function drawLineChart(history = chartData) {
  const svg = $('lineChart');
  if (!svg) return;
  const width = 800;
  const height = 420;
  const padding = { top: 40, right: 30, bottom: 40, left: 55 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const allValues = history.categories.flatMap(cat => cat.values);
  const maxValue = Math.ceil(Math.max(...allValues) * 1.05);
  const pointsCount = history.years.length;

  svg.innerHTML = '';

  function axisLine(x1, y1, x2, y2) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.classList.add('axis-line');
    return line;
  }

  svg.appendChild(axisLine(padding.left, padding.top, padding.left, height - padding.bottom));
  svg.appendChild(axisLine(padding.left, height - padding.bottom, width - padding.right, height - padding.bottom));

  const ySteps = 5;
  for (let i = 0; i <= ySteps; i += 1) {
    const y = padding.top + (innerHeight / ySteps) * i;
    const value = maxValue - (maxValue / ySteps) * i;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', padding.left);
    line.setAttribute('y1', y);
    line.setAttribute('x2', width - padding.right);
    line.setAttribute('y2', y);
    line.classList.add('grid-line');
    svg.appendChild(line);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', padding.left - 10);
    label.setAttribute('y', y + 4);
    label.setAttribute('text-anchor', 'end');
    label.classList.add('tick-label');
    label.textContent = value.toFixed(1);
    svg.appendChild(label);
  }

  chartData.categories.forEach(category => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let d = '';
    category.values.forEach((value, index) => {
      const x = padding.left + (index * innerWidth) / (pointsCount - 1);
      const y = padding.top + innerHeight * (1 - value / maxValue);
      d += index === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    });
    path.setAttribute('d', d);
    path.setAttribute('stroke', category.color);
    path.classList.add('line-path');
    svg.appendChild(path);

    category.values.forEach((value, index) => {
      const x = padding.left + (index * innerWidth) / (pointsCount - 1);
      const y = padding.top + innerHeight * (1 - value / maxValue);
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', 4);
      circle.setAttribute('fill', category.color);
      circle.classList.add('point-circle');
      svg.appendChild(circle);
    });
  });

  chartData.years.forEach((year, index) => {
    const x = padding.left + (index * innerWidth) / (pointsCount - 1);
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', x);
    label.setAttribute('y', height - padding.bottom + 20);
    label.setAttribute('text-anchor', 'middle');
    label.classList.add('tick-label');
    label.textContent = year;
    svg.appendChild(label);
  });
}

function renderAnalysis() {
  const container = $('analysisCards');
  if (!container) return;
  container.innerHTML = '';
  analysisQuestions.forEach((item, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-6 mb-3';
    col.innerHTML = `
      <div class="card analysis-card shadow-sm" data-open="false">
        <div class="card-body">
          <button class="faq-toggle" type="button" aria-expanded="false" aria-controls="faq-answer-${index}">
            <span>${item.title}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="analysis-answer" id="faq-answer-${index}">
            <p>${item.answer}</p>
          </div>
        </div>
      </div>
    `;

    const cardElement = col.querySelector('.analysis-card');
    const toggleButton = col.querySelector('.faq-toggle');
    const answerElement = col.querySelector('.analysis-answer');

    toggleButton.addEventListener('click', () => {
      const open = cardElement.classList.toggle('open');
      toggleButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      answerElement.style.maxHeight = open ? answerElement.scrollHeight + 'px' : '0';
      answerElement.style.opacity = open ? '1' : '0';
    });

    container.appendChild(col);
  });
}

function init() {
  if (isCoursePage()) {
    initCoursePage();
    return;
  }

  const searchInput = $('searchInput');
  if (!searchInput) return;

  renderCounts();
  renderAnalysis();

  const initialSelection = courses.find(course => course.university === window.UNIVERSITY);
  if (initialSelection) {
    renderSelectedCourse(initialSelection);
  }

  searchInput.addEventListener('input', () => {
    renderCourseList(searchInput.value, window.currentCourseTab);
  });

  document.querySelectorAll('.course-tab').forEach(button => {
    button.addEventListener('click', () => setCourseTab(button.dataset.tab));
  });

  setCourseTab('ALL');
}

function initCoursePage() {
  const params = getQueryParams();
  const course = courses.find(c => c.university === params.university && c.name === params.name);
  const pageTitle = $('pageCourseTitle');
  const pageSubtitle = $('pageCourseSubtitle');
  const institutionLink = $('institutionLink');

  if (!course) {
    if (pageTitle) {
      pageTitle.textContent = 'Curso não encontrado';
    }
    if (pageSubtitle) {
      pageSubtitle.textContent = 'Verifique a URL ou selecione um curso novamente.';
    }
    return;
  }

  if (pageTitle) {
    pageTitle.textContent = `${course.name} - ${course.university}`;
  }
  if (pageSubtitle) {
    pageSubtitle.textContent = `Dados do curso e gráfico de concorrência para ${course.university}.`;
  }
  if (institutionLink) {
    institutionLink.href = `${course.university.toLowerCase()}.html`;34
    institutionLink.textContent = `Voltar para ${course.university}`;
  }

  document.title = `${course.name} | ${course.university}`;
  renderCourseSummary(course);
  renderSelectedCourseTable(course);
  const history = generateCourseHistory(course);
  renderLegend(history.categories);
  drawLineChart(history);
}

window.addEventListener('DOMContentLoaded', init);
