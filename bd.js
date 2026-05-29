const cursosUEPG = [
    { id: 1, nome: "Medicina", campus: "Ponta Grossa" },
    { id: 2, nome: "Direito", campus: "Ponta Grossa" },
    { id: 3, nome: "Engenharia Civil", campus: "Ponta Grossa" },
    { id: 4, nome: "Enfermagem", campus: "Ponta Grossa" },
    { id: 5, nome: "Odontologia", campus: "Ponta Grossa" },
    { id: 6, nome: "Agronomia", campus: "Ponta Grossa" }
  ];
  
  const cursosUTFPR = [
    { id: 1, nome: "Engenharia de Computação", campus: "Curitiba" },
    { id: 2, nome: "Engenharia Mecânica", campus: "Curitiba" },
    { id: 3, nome: "Administração", campus: "Curitiba" },
    { id: 4, nome: "Engenharia Elétrica", campus: "Curitiba" },
    { id: 5, nome: "Arquitetura e Urbanismo", campus: "Curitiba" },
    { id: 6, nome: "Ciência da Computação", campus: "Ponta Grossa" }
  ];
  
  // Dados fictícios plausíveis (2016-2025)
  const dadosCursos = {
    "Medicina": {
      anos: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      universal: [120, 135, 148, 160, 95, 170, 185, 190, 205, 198],
      publica: [45, 52, 58, 65, 40, 70, 75, 82, 88, 85],
      negros: [18, 22, 25, 28, 15, 32, 35, 38, 42, 40],
      negrosPublica: [8, 10, 12, 14, 7, 16, 18, 20, 22, 21],
      pcd: [3, 4, 5, 6, 4, 7, 8, 9, 10, 9],
      tabela: [
        {ano:2025, cand:850, vagas:40, nota:780, salario:18500},
        {ano:2024, cand:820, vagas:40, nota:775, salario:18200}
      ]
    },
    // Adicione mais cursos com estrutura similar...
    "Engenharia de Computação": {
      anos: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      universal: [25, 32, 45, 55, 38, 62, 70, 75, 82, 78],
      publica: [12, 15, 18, 22, 16, 25, 28, 30, 32, 31],
      negros: [5, 7, 9, 11, 8, 13, 15, 16, 18, 17],
      negrosPublica: [2, 3, 4, 5, 4, 6, 7, 8, 9, 8],
      pcd: [1, 2, 2, 3, 2, 3, 4, 4, 5, 5],
      tabela: [
        {ano:2025, cand:320, vagas:50, nota:720, salario:8500},
        {ano:2024, cand:310, vagas:50, nota:715, salario:8200}
      ]
    }
    // ... (você pode expandir)
  };