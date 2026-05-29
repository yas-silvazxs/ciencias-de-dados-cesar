function criarCard(curso, universidade) {
    const div = document.createElement('div');
    div.className = 'col-md-6 col-lg-4';
    div.innerHTML = `
      <div class="card h-100">
        <div class="card-header bg-light">
          <h5>${curso.nome}</h5>
          <small class="text-muted">${universidade} - ${curso.campus}</small>
        </div>
        <div class="card-body">
          <div class="chart-container">
            <canvas id="chart-${universidade}-${curso.id}"></canvas>
          </div>
          <table class="table table-sm mini-table">
            <thead><tr><th>Ano</th><th>Cand.</th><th>Vagas</th><th>C/V</th><th>Nota</th><th>Salário Médio</th></tr></thead>
            <tbody id="tb-${universidade}-${curso.id}"></tbody>
          </table>
        </div>
      </div>
    `;
    return div;
  }
  
  function criarGrafico(canvasId, dados, nomeCurso) {
    const ctx = document.getElementById(canvasId);
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dados.anos,
        datasets: [
          { label: 'Universal', data: dados.universal, borderColor: '#0d6efd', tension: 0.3 },
          { label: 'Pública', data: dados.publica, borderColor: '#198754', tension: 0.3 },
          { label: 'Negros', data: dados.negros, borderColor: '#fd7e14', tension: 0.3 },
          { label: 'Negros Pública', data: dados.negrosPublica, borderColor: '#6f42c1', tension: 0.3 },
          { label: 'PCD', data: dados.pcd, borderColor: '#dc3545', tension: 0.3 }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: `Concorrência - ${nomeCurso}` },
          legend: { position: 'top' }
        },
        scales: {
          y: { title: { display: true, text: 'Candidatos por Vaga' } },
          x: { title: { display: true, text: 'Ano' } }
        }
      }
    });
  }
  
  // Popular páginas
  window.onload = () => {
    // UEPG
    const containerUepg = document.getElementById('cursosUepg');
    cursosUEPG.forEach(curso => {
      containerUepg.appendChild(criarCard(curso, 'UEPG'));
      setTimeout(() => {
        const dados = dadosCursos[curso.nome] || dadosCursos["Medicina"];
        criarGrafico(`chart-UEPG-${curso.id}`, dados, curso.nome);
        // Preencher tabela...
      }, 100);
    });
  
    // UTFPR (similar)
    const containerUtfpr = document.getElementById('cursosUtfpr');
    cursosUTFPR.forEach(curso => {
      containerUtfpr.appendChild(criarCard(curso, 'UTFPR'));
      setTimeout(() => {
        const dados = dadosCursos[curso.nome] || dadosCursos["Engenharia de Computação"];
        criarGrafico(`chart-UTFPR-${curso.id}`, dados, curso.nome);
      }, 100);
    });
  
    // Filtro de busca
    document.getElementById('searchUepg').addEventListener('input', (e) => {
      // Implementar filtro simples...
    });
  };