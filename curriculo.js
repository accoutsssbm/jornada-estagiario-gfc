/* =====================================================================
   TRILHA GFC — Conteúdo da trilha de aprendizagem
   Fontes: PDCA_GFC.pptx · Plano de Imersão GFC · Estratégia de Atuação GFC
           (Rev. 0) · Manual de Atualizações GFC · Treinamento GFC (jun/24)
   Para editar prazos, notas mínimas ou questões, altere este arquivo.
   Tipos de questão:
     mc      -> múltipla escolha, corrigida automaticamente (correta = índice)
     aberta  -> dissertativa, corrigida pela instrutora (esperado = gabarito)
     pratica -> tarefa feita no sistema/rotina real, com evidência
   ===================================================================== */
window.CURRICULO = {
  versao: "1.0 — set/2026",
  niveis: ["Observou", "Executou com apoio", "Executou sozinha"],

  pdca: {
    P: { nome: "Planejar", texto: "Objetivo, prazo e nota mínima definidos para o módulo." },
    D: { nome: "Executar", texto: "Estudo do material e prática na rotina: fazendo junto, depois sozinha." },
    C: { nome: "Checar", texto: "Teste de habilidade e avaliação da instrutora com feedback." },
    A: { nome: "Agir", texto: "Aprovada, avança. Abaixo da nota, recicla com novo prazo." }
  },

  fases: [
    { n: 1, nome: "Contextualização", semanas: "Semanas 1 e 2",
      objetivo: "Construir o mapa mental do GFC: entender o porquê de cada processo antes de executar qualquer um deles.",
      criterio: "Explicar com as próprias palavras o fluxo mensal completo do GFC e a estrutura de atendimento de 3 sites (1 complexo e 2 unificados)." },
    { n: 2, nome: "Ciclo mensal acompanhado", semanas: "Semanas 3 a 6",
      objetivo: "Acompanhar um fechamento mensal completo, observando e executando com apoio a base cadastral e os horímetros.",
      criterio: "Documentar o passo a passo dos cadastros, estados e horímetros e executar uma atualização de horímetros com apoio." },
    { n: 3, nome: "Execução assistida", semanas: "Semanas 7 a 10",
      objetivo: "Executar os processos do escopo nos sites de estrutura unificada, com revisão integral da Engenharia antes de qualquer envio.",
      criterio: "Fechar o mês dos sites designados sem retrabalho relevante e com a comunicação fluindo nos canais corretos." },
    { n: 4, nome: "Autonomia e entregas analíticas", semanas: "Semanas 11 e 12",
      objetivo: "Consolidar a autonomia operacional e introduzir a camada analítica que sustenta o plano de troca.",
      criterio: "Ciclo mensal executado com autonomia e plano de desenvolvimento dos próximos 90 dias definido." }
  ],

  modulos: [
    /* ======================= FASE 1 ======================= */
    {
      id: "M01", fase: 1, dias: 3, notaMin: 7, processo: "Estratégia",
      titulo: "Por que o GFC existe",
      ref: "Estratégia de Atuação — Introdução, Objetivo e Estratégia",
      modo: "Leitura e discussão",
      objetivo: "Entender o problema de negócio que o GFC resolve, o que é monitorado e por que esses ativos foram escolhidos.",
      porque: [
        "A mineração vive de custo por tonelada e de disponibilidade física. Um caminhão fora de estrada parado sem aviso gera penalidade operacional e financeira para o cliente e para a Sotreq.",
        "O foco é o trem de força (Grupo 1): motor diesel, transmissão, conversor de torque, diferencial e comandos finais. São os conjuntos de maior valor e maior severidade de aplicação.",
        "Sem controle preventivo, o componente roda até quebrar: falha catastrófica, parada não programada e reforma emergencial muito mais cara do que uma intervenção planejada.",
        "A escolha dos ativos não nasce no dealer: a Caterpillar projeta os equipamentos para múltiplas vidas, com ciclos programados de reforma. O GFC é o desdobramento operacional dessa estratégia."
      ],
      influencia: [
        "Disponibilidade física das frotas e o resultado dos contratos MARC, em que a Sotreq garante performance.",
        "O estoque de parque reserva: componente certo, no mês certo, para a reforma não parar por falta de peça.",
        "As previsões de fábrica da Caterpillar, alimentadas pelo Forecast Comercial."
      ],
      passos: [
        "Leia a Introdução e o Objetivo da Estratégia de Atuação GFC.",
        "Liste os seis pilares do GFC (horímetro e vida útil, condição das frotas, rastreabilidade, relacionamento com CSPs, forecast, indicadores).",
        "Entenda as três frentes que se retroalimentam: colaboração CSP × Engenharia, rotina de indicadores e particularidades de cada site.",
        "Diferencie as modalidades MARC, Full Service e Rentável e como elas mudam a profundidade do controle.",
        "Relacione as frotas controladas em cada site (797, 794, 793D, D11, 994K, 24, 777, 990, 395)."
      ],
      atencao: ["Quanto maior a responsabilidade contratual da Sotreq (MARC), mais crítica é a acurácia do monitoramento de vida útil."],
      checklist: ["Li a Introdução e o Objetivo", "Sei citar os 5 componentes do Grupo 1", "Sei explicar MARC, Full Service e Rentável", "Sei quais frotas cada site controla", "Discuti minhas dúvidas com a instrutora"],
      questoes: [
        { id: "M01q1", tipo: "mc", peso: 1, enunciado: "Quais componentes formam o Grupo 1 (trem de força) monitorado pelo GFC?",
          opcoes: ["Motor diesel, transmissão, conversor de torque, diferencial e comandos finais", "Motor diesel, cabine, pneus, caçamba e sistema hidráulico", "Material rodante, lâmina, ripper e cabine", "Motor diesel, alternador, bateria e radiador"], correta: 0,
          explicacao: "O Grupo 1 é o trem de força: motor, transmissão, conversor, diferencial e comandos finais." },
        { id: "M01q2", tipo: "mc", peso: 1, enunciado: "Em qual modalidade a Sotreq responde pela manutenção E pelo resultado operacional (disponibilidade, MTBF, MTTR), com garantia contratual?",
          opcoes: ["Full Service", "Rentável", "MARC", "Em todas as modalidades"], correta: 2,
          explicacao: "No MARC a Sotreq controla a manutenção e garante os indicadores. No Full Service só a manutenção; no Rentável, só a mão de obra." },
        { id: "M01q3", tipo: "mc", peso: 1, enunciado: "De onde nasce a definição de quais ativos o GFC monitora?",
          opcoes: ["Da preferência de cada cliente", "Da estratégia da Caterpillar para o ciclo de vida dos produtos, com múltiplas vidas e reformas programadas", "Da decisão do CSP de cada site", "Apenas do custo de aquisição do equipamento"], correta: 1,
          explicacao: "A CAT projeta os equipamentos para múltiplas vidas; a Sotreq, como dealer, desdobra essa diretriz na atuação do GFC." },
        { id: "M01q4", tipo: "aberta", peso: 3, enunciado: "Explique com suas palavras por que uma reforma planejada é melhor do que uma intervenção emergencial. Cite pelo menos dois impactos para o cliente e para a Sotreq.",
          esperado: "Reforma emergencial custa substancialmente mais; parada não programada derruba disponibilidade e gera penalidade; falha catastrófica pode comprometer o casco (perde a próxima vida); a planejada permite ter parque reserva, programar a oficina/CRC e alimentar a previsão de fábrica CAT." },
        { id: "M01q5", tipo: "aberta", peso: 3, enunciado: "Quais são as três frentes de atuação do GFC e como uma alimenta a outra?",
          esperado: "Colaboração CSP × Engenharia (CSP traz viabilidade comercial/operacional, Engenharia a evidência técnica); rotina de gestão dos indicadores (relatórios, painéis, alinhamentos); particularidades de cada site (régua comercial, maturidade da frota, forma de operar). Os indicadores mostram onde agir, a colaboração decide a ação e as particularidades ajustam como executar." }
      ]
    },
    {
      id: "M02", fase: 1, dias: 3, notaMin: 7, processo: "P10 · P11",
      titulo: "Papéis, sites e canais de comunicação",
      ref: "Estratégia de Atuação — Matriz de Responsabilidades e Particularidades por Site",
      modo: "Leitura e mapeamento",
      objetivo: "Saber quem faz o quê em cada site e qual canal usar em cada tipo de tratativa.",
      porque: [
        "Cada decisão de reforma nasce do diálogo: o CSP traz a viabilidade comercial e operacional, a Engenharia traz a evidência técnica.",
        "O Consultor de Performance fornece o histórico de trocas e justifica sobrevidas; o CSP movimenta o estoque, garante os horímetros e gere o Forecast com o cliente; o Planejamento Central transforma o Forecast em previsão de fábrica.",
        "Cobrar a pessoa errada ou no canal errado atrasa o fechamento do mês — e tudo precisa ser consolidado dentro do mês de competência."
      ],
      influencia: [
        "A velocidade do fechamento mensal de cada site.",
        "A formalidade das cobranças: o que vai por e-mail fica registrado e pode ser cobrado depois.",
        "O relacionamento com CSPs e Consultores de Performance, que são a ponte com o cliente."
      ],
      passos: [
        "Leia a Matriz de Responsabilidades: Analista GFC/Engenharia, Consultor de Performance, CSP e Planejamento Central/CAT.",
        "Grave a regra de canal: e-mail para solicitações formais (histórico de trocas, cobrança de forecast, alertas de 135%); Teams para tratativas ágeis (saldo de estoque e movimentações imediatas).",
        "Estude a estrutura de Carajás (maior site: um Consultor de Performance por tipo de frota e dois CSPs).",
        "Estude S11D (794AC no MARC, parte dos D11 Fusion no Rentável) e Salobo (dois Consultores de Performance e três CSPs).",
        "Estude os sites de estrutura unificada: Sossego, Onça Puma, Paragominas, MRN, Brazauro, Alcoa e Serra Leste (um Consultor de Performance e um CSP)."
      ],
      atencao: ["Todas as movimentações, auditorias e tratativas precisam ser processadas e consolidadas dentro do mês de competência corrente."],
      checklist: ["Sei a responsabilidade de cada função", "Sei quando usar e-mail e quando usar Teams", "Mapeei Carajás", "Mapeei 2 sites unificados", "Tenho a tabela de responsáveis por site salva"],
      questoes: [
        { id: "M02q1", tipo: "mc", peso: 1, enunciado: "Quem fornece o histórico consolidado das substituições físicas executadas em campo?",
          opcoes: ["O CSP", "O Consultor de Performance", "O Planejamento Central", "O cliente, diretamente para o GFC"], correta: 1,
          explicacao: "O Consultor de Performance fornece o histórico e valida os relatórios operacionais." },
        { id: "M02q2", tipo: "mc", peso: 1, enunciado: "Qual canal se usa para solicitar formalmente o histórico de trocas do mês?",
          opcoes: ["Teams", "E-mail", "Ligação telefônica", "Qualquer um, desde que seja rápido"], correta: 1,
          explicacao: "Solicitações formais de histórico e alertas vão por e-mail. Teams é para tratativas ágeis de estoque." },
        { id: "M02q3", tipo: "mc", peso: 1, enunciado: "Houve uma troca com componente NOVO. Quem regulariza o saldo desse componente no estoque sistêmico do GFC?",
          opcoes: ["O CSP", "O Consultor de Performance", "O Analista de GFC", "A Caterpillar"], correta: 0,
          explicacao: "O CSP faz as movimentações de estoque: saldo para novos e abertura do ciclo de reforma para reformados." },
        { id: "M02q4", tipo: "mc", peso: 1, enunciado: "Em S11D, sob qual modalidade operam os caminhões elétricos 794AC?",
          opcoes: ["Rentável", "Full Service", "MARC", "Nenhuma — são frota própria do cliente"], correta: 2,
          explicacao: "Os 794AC de S11D estão no MARC; parte dos D11 Fusion estão no Rentável." },
        { id: "M02q5", tipo: "aberta", peso: 4, enunciado: "Descreva a estrutura de atendimento de Carajás e de dois sites unificados (ex.: Sossego e Onça Puma): quem são os Consultores de Performance e CSPs e como isso muda a forma de você cobrar as informações no fechamento.",
          esperado: "Carajás: um CP por tipo de frota (elétricos, mecânicos, infraestrutura) e dois CSPs (um para caminhões elétricos e mecânicos, outro para infraestrutura) — a cobrança precisa ser segmentada por frota e pessoa. Sossego e Onça Puma: um CP e um CSP para tudo — cobrança única, mas concentrada em uma pessoa. Os nomes devem bater com a tabela de responsáveis da Estratégia de Atuação." }
      ]
    },
    {
      id: "M03", fase: 1, dias: 4, notaMin: 7, processo: "Plataforma",
      titulo: "Plataforma SotreqLink em modo leitura",
      ref: "Treinamento GFC (jun/24) — Acesso, Painéis e Relatórios",
      modo: "Navegação acompanhada",
      objetivo: "Navegar no GFC com segurança, sem alterar dados, e entender o que cada tela e cada estado significa.",
      porque: [
        "Toda a rotina acontece dentro da plataforma. Entender os estados e os campos antes de editar evita os erros que mais custam: datas e estados errados.",
        "Os estados do equipamento e do componente determinam o que o sistema permite fazer e como ele estima horas.",
        "Vida atual, horímetro, TTSN/TSO e % da vida útil são a linguagem de todas as outras rotinas."
      ],
      influencia: [
        "A leitura correta dos dados que você vai auditar a partir da Fase 2.",
        "A sua capacidade de encontrar sozinha a origem de uma divergência."
      ],
      passos: [
        "Acesse sotreqlnkinterno.sotreq.com.br com matrícula e senha de rede.",
        "No menu Gestão de Componentes, conheça: Painel de Equipamentos, Painel de Componentes, Gerenciar Relatórios de Instalação, Importar Horímetros, Importar Vidas Úteis, Forecast de Reforma, Histórico de Envio de Alertas, BI e Relatórios.",
        "Nos Detalhes do equipamento, explore Dados Gerais, Horímetros, Componentes, Dados de Monitoramento (SOS) e Histórico.",
        "Aprenda os estados do equipamento: Aguardando Configuração, Disponível, Aguardando Manutenção Planejada, Aguardando Manutenção por Falha, Em Manutenção Planejada, Em Manutenção por Falha, Hibernado e Descartado.",
        "Entenda vida atual (componente novo está na 1ª vida; cada reforma geral soma uma), vida útil estimada (Centerline CAT ou vida do site), TTSN (horas desde novo) e TSO (horas desde a última reforma).",
        "Conheça os relatórios para download: Forecast de Equipamentos, Forecast Técnico e Comercial de Componentes, Equipamentos, Componentes, Vida Útil por Equipamento, Atualizações de Horímetros e Reformas."
      ],
      atencao: ["Nesta fase o acesso é só leitura. Não salve nenhuma alteração sem a instrutora ao lado.", "Adicionar, Instalar e Remover componentes só ficam habilitados com o equipamento em Aguardando Configuração ou Em Manutenção. Trocar funciona em qualquer estado."],
      checklist: ["Acessei a plataforma", "Naveguei nos dois painéis", "Sei os 8 estados do equipamento", "Sei o que é vida atual, TTSN e TSO", "Baixei um relatório de equipamentos"],
      questoes: [
        { id: "M03q1", tipo: "mc", peso: 1, enunciado: "Quais operações só ficam habilitadas com o equipamento em Aguardando Configuração ou Em Manutenção?",
          opcoes: ["Adicionar, Instalar e Remover componentes", "Trocar componente", "Alterar local do equipamento", "Emitir relatório de equipamentos"], correta: 0,
          explicacao: "Trocar funciona em qualquer estado; Adicionar, Instalar e Remover exigem Aguardando Configuração ou Em Manutenção." },
        { id: "M03q2", tipo: "mc", peso: 1, enunciado: "Um componente na 3ª vida é um componente que:",
          opcoes: ["Tem três anos de uso", "Já passou por duas reformas gerais", "Já foi instalado em três equipamentos", "Teve três falhas registradas"], correta: 1,
          explicacao: "Novo = 1ª vida. Cada reforma geral soma uma vida." },
        { id: "M03q3", tipo: "mc", peso: 1, enunciado: "O que representa o TSO de um componente?",
          opcoes: ["Horas desde que o componente era novo", "Horas desde a última reforma geral (overhaul)", "Horas que faltam para vencer a vida útil", "Horímetro do equipamento onde ele está instalado"], correta: 1,
          explicacao: "TSO = Time Since Overhaul. TTSN = Total Time Since New." },
        { id: "M03q4", tipo: "pratica", peso: 3, enunciado: "Em modo leitura, localize um equipamento do site indicado pela instrutora. Registre: nº de série, nº de frota, estado, ROM e, para dois componentes, a vida atual, o horímetro e o % da vida útil. Diga se algum deles está perto da janela de forecast.",
          esperado: "Dados coerentes com a plataforma; % da vida útil = horímetro ÷ vida útil estimada; identificar se algum componente está a 180 dias ou menos do vencimento." }
      ]
    },

    /* ======================= FASE 2 ======================= */
    {
      id: "M04", fase: 2, dias: 4, notaMin: 8, processo: "Base cadastral",
      titulo: "Cadastro de componentes",
      ref: "Manual de Atualizações GFC — p. 1",
      modo: "Observar → executar com apoio",
      objetivo: "Cadastrar um componente com todos os campos corretos e entender o que cada campo alimenta.",
      porque: [
        "O cadastro é o ponto de partida da rastreabilidade: sem ele, o componente não tem vida útil, não entra no forecast e não aparece no RMC.",
        "Horímetro e data de leitura definem o % da vida útil. Um erro aqui se propaga para forecast, alerta de 135% e plano de troca.",
        "O indicador Vida Útil (15 pontos) depende de TTSN/TSO bem parametrizados e sem conflito de histórico."
      ],
      influencia: [
        "Indicador Vida Útil de Componentes (15 pts).",
        "Quando o componente entra na janela de 180 dias do Forecast.",
        "O histórico que depois alimenta o modelo de confiabilidade (Weibull)."
      ],
      passos: [
        "Em Gestão de Componentes, acesse Painel de Componentes.",
        "No canto inferior direito, clique em Adicionar.",
        "Preencha Tipo de Componente, Número de Série, Cliente (site onde o equipamento opera) e Responsável (consultor do site).",
        "Vida Atual: componente novo está na 1ª vida.",
        "Data de Entrega: data em que o componente foi entregue ao site. Horímetro: novo = 0. Data de Leitura: se for novo, a mesma data de entrega.",
        "Local: nome do site. Modelos Associados: clique em + e digite o código da frota que vai receber o componente.",
        "Estado: Estoque. Se escolher Instalado, preencha Equipamento (nº de série), Data de Instalação e Posição (LD ou LE para comando final; UN para os demais).",
        "Confira todas as datas e clique em Salvar."
      ],
      atencao: ["Após inserir qualquer data, confira os valores. Datas divergentes causam grande impacto negativo em operações futuras no sistema.", "Para instalar no ato do cadastro, o equipamento não pode estar Disponível ou Hibernado nem ter um componente semelhante já instalado."],
      checklist: ["Acompanhei um cadastro real", "Sei preencher cada campo", "Sei a regra de posição LD/LE/UN", "Cadastrei um componente com apoio"],
      questoes: [
        { id: "M04q1", tipo: "mc", peso: 1, enunciado: "No cadastro de um componente NOVO, quais valores vão em Horímetro e em Data de Leitura do Horímetro?",
          opcoes: ["0 e a data de entrega do componente", "0 e a data de hoje", "O horímetro do equipamento e a data de instalação", "Deixar em branco para o CSP preencher"], correta: 0,
          explicacao: "Componente novo: horímetro 0 e data de leitura igual à data de entrega." },
        { id: "M04q2", tipo: "mc", peso: 1, enunciado: "Que posição se informa para um comando final do lado direito?",
          opcoes: ["UN", "LD", "LE", "D1"], correta: 1,
          explicacao: "Comando final: LD (direito) ou LE (esquerdo). Demais componentes: UN." },
        { id: "M04q3", tipo: "mc", peso: 1, enunciado: "Para instalar o componente no ato do cadastro, o equipamento NÃO pode estar:",
          opcoes: ["Em Manutenção Planejada", "Aguardando Configuração", "Disponível ou Hibernado", "Não há restrição"], correta: 2,
          explicacao: "Instalação no cadastro exige que o equipamento não esteja Disponível ou Hibernado e não tenha componente semelhante instalado." },
        { id: "M04q4", tipo: "mc", peso: 1, enunciado: "Qual o estado padrão de um componente reserva recém-cadastrado?",
          opcoes: ["Instalado", "Estoque", "Em Manutenção Planejada", "Disponível"], correta: 1,
          explicacao: "Componente reserva entra como Estoque." },
        { id: "M04q5", tipo: "aberta", peso: 4, enunciado: "A data de entrega de um componente foi lançada com um ano de diferença. Descreva os efeitos em cadeia que esse erro pode gerar no GFC.",
          esperado: "Horímetro estimado e % da vida útil distorcidos; componente entra (ou deixa de entrar) na janela de 180 dias; forecast e alerta de 135% falsos ou perdidos; indicador de Vida Útil cai; RMC mostra vencido/a vencer errado; plano de troca e estoque de parque reserva mal dimensionados; histórico ruim contamina o Weibull." }
      ]
    },
    {
      id: "M05", fase: 2, dias: 5, notaMin: 7, processo: "Base cadastral",
      titulo: "Cadastro e configuração de equipamentos",
      ref: "Manual de Atualizações GFC — p. 2 e 3",
      modo: "Observar → executar com apoio",
      objetivo: "Cadastrar um equipamento, instalar os componentes obrigatórios e fazer a configuração inicial.",
      porque: [
        "Equipamento fora do GFC é invisível: outras áreas (Performance, Desenvolvimento e Projetos) dependem dele cadastrado para criar os próprios controles.",
        "O ROM informado na configuração é a base do horímetro estimado entre uma leitura e outra.",
        "Um equipamento parado em Aguardando Configuração não entra corretamente nos indicadores nem no RMC."
      ],
      influencia: [
        "Indicador Estado e Horímetro (35 pts) e ROM de Equipamentos (20 pts).",
        "Todos os controles que outras áreas constroem em cima do GFC."
      ],
      passos: [
        "Em Gestão de Componentes, acesse Painel de Equipamentos e clique em Adicionar.",
        "Preencha Número de Série, Número de Frota, Cliente, Responsável, Fabricante, Família, Modelo e Data de Entrega. Salve.",
        "Busque o equipamento pelo nº de série e abra os Detalhes (lupa).",
        "Se os componentes já estão cadastrados, clique em Instalar; se não, em Adicionar (cadastro do módulo anterior).",
        "Na tela Instalar: informe a Data de Instalação, marque Escolher e selecione a Posição. Clique em Instalar.",
        "Com todos os componentes instalados, clique em Configurar Equipamento.",
        "Preencha Vida Atual, Local, Data de Configuração, Estado Atual, ROM, Responsável, Data de Leitura do Horímetro (novo = data de configuração) e Horímetro (novo = 0). Clique em OK."
      ],
      atencao: ["Confira todas as datas antes de salvar: instalação, configuração e leitura precisam ser coerentes entre si.", "Apenas administradores podem incluir novos modelos e famílias."],
      checklist: ["Acompanhei um cadastro de equipamento", "Sei instalar componentes", "Sei preencher a configuração inicial", "Refiz o exercício da 24M"],
      questoes: [
        { id: "M05q1", tipo: "mc", peso: 1, enunciado: "Depois de instalar todos os componentes do equipamento novo, qual o próximo passo?",
          opcoes: ["Registrar reforma", "Configurar Equipamento", "Importar horímetros", "Lançar o Forecast Comercial"], correta: 1,
          explicacao: "Com os componentes instalados, clica-se em Configurar Equipamento." },
        { id: "M05q2", tipo: "mc", peso: 1, enunciado: "O que é o ROM informado na configuração?",
          opcoes: ["Regime (ritmo) operacional mensal, em horas por mês", "Registro de Ordem de Manutenção", "Relatório Operacional de Máquinas", "Rotina Obrigatória Mensal"], correta: 0,
          explicacao: "ROM = horas que o equipamento trabalha por mês; base do horímetro estimado." },
        { id: "M05q3", tipo: "mc", peso: 1, enunciado: "Na configuração de um equipamento NOVO, qual data vai em Data de Leitura do Horímetro?",
          opcoes: ["A data de entrega do primeiro componente", "A data de configuração", "O último dia do mês", "A data do próximo fechamento"], correta: 1,
          explicacao: "Equipamento novo: data de leitura = data de configuração, horímetro = 0." },
        { id: "M05q4", tipo: "pratica", peso: 3, enunciado: "Exercício do treinamento: cadastrar uma motoniveladora 24M entregue em 20/07/2023, Mina Conceição, ROM 500 h, data de configuração e de instalação dos componentes 20/07/2023, deixando-a Disponível. Descreva a sequência que você seguiu e os valores de cada campo da configuração (ou anexe as telas do ambiente de treino).",
          esperado: "Cadastro do equipamento → Detalhes → Adicionar/Instalar os componentes com data 20/07/2023 → Configurar: vida 1, local Mina Conceição, data de configuração 20/07/2023, estado Disponível, ROM 500, data de leitura 20/07/2023, horímetro 0." },
        { id: "M05q5", tipo: "aberta", peso: 2, enunciado: "Por que outras áreas da Sotreq dependem de o equipamento estar corretamente inserido no GFC?",
          esperado: "Performance, Desenvolvimento e Projetos criam seus controles e ações a partir da base do GFC; sem o equipamento cadastrado e configurado, ele não aparece para ninguém — nem nos indicadores, nem no RMC, nem no forecast." }
      ]
    },
    {
      id: "M06", fase: 2, dias: 3, notaMin: 7, processo: "P2 · Estado",
      titulo: "Atualização do estado dos equipamentos",
      ref: "Manual de Atualizações GFC — p. 4",
      modo: "Executar com apoio",
      objetivo: "Confrontar o estado dos equipamentos no GFC com a realidade do cliente e corrigir as divergências.",
      porque: [
        "O estado define como o sistema estima horas: um equipamento Disponível acumula horas pelo ROM; um Hibernado não deveria acumular.",
        "Estado incoerente com a variação de horas trabalhadas gera não conformidade (X vermelho) no indicador de maior peso.",
        "Estado errado faz componente parecer vencido — ou parecer novo — sem estar."
      ],
      influencia: [
        "Indicador Estado e Horímetro: 35 dos 100 pontos do site.",
        "Os números de ativos e hibernados que aparecem no RMC."
      ],
      passos: [
        "Emita o relatório com todos os equipamentos do site e confronte com os dados informados pelo cliente.",
        "Para cada divergência: Painel de Equipamentos → nº de série → Buscar → Detalhes.",
        "No canto superior direito, clique em Alterar Estado.",
        "Escolha o novo estado e a data de alteração.",
        "Preencha o Regime Operacional Mensal somente se o novo estado for Disponível. Salve."
      ],
      atencao: ["Confira a data de alteração: ela muda o horímetro estimado desde aquele dia."],
      checklist: ["Emiti o relatório de equipamentos de um site", "Confrontei com o cliente", "Alterei um estado com apoio"],
      questoes: [
        { id: "M06q1", tipo: "mc", peso: 1, enunciado: "Quando o campo Regime Operacional Mensal deve ser preenchido na alteração de estado?",
          opcoes: ["Sempre", "Somente quando o novo estado for Disponível", "Somente para Hibernado", "Nunca, o sistema calcula sozinho"], correta: 1,
          explicacao: "O ROM só é informado quando o equipamento volta para Disponível." },
        { id: "M06q2", tipo: "mc", peso: 1, enunciado: "Quantos pontos vale o indicador Estado e Horímetro?",
          opcoes: ["15", "20", "35", "50"], correta: 2,
          explicacao: "Estado e Horímetro 35, ROM 20, Vida Útil 15, Atualização do Forecast 15, Aderência do Forecast 15." },
        { id: "M06q3", tipo: "mc", peso: 1, enunciado: "O que se faz ANTES de alterar os estados de um site?",
          opcoes: ["Importar os horímetros", "Emitir o relatório de equipamentos e confrontar com os dados do cliente", "Lançar o forecast", "Pedir o histórico de trocas"], correta: 1,
          explicacao: "Primeiro confronta-se GFC × cliente para saber quais estados não estão de acordo com a realidade." },
        { id: "M06q4", tipo: "aberta", peso: 4, enunciado: "Um equipamento consta como Disponível no GFC, mas o cliente informa que está hibernado há dois meses. O que acontece com as projeções e com os indicadores se ninguém corrigir?",
          esperado: "O sistema continua somando horas estimadas pelo ROM; os componentes envelhecem artificialmente e podem aparecer vencidos, entrar no forecast ou disparar 135% sem motivo; a leitura real não bate com a estimada (não conformidade em Estado e Horímetro); RMC mostra ativo que não está operando; ROM também fica inconsistente." }
      ]
    },
    {
      id: "M07", fase: 2, dias: 8, notaMin: 8, processo: "P2 · Horímetros",
      titulo: "Atualização de horímetros",
      ref: "Manual de Atualizações GFC — p. 5 e 6 · Estratégia — Atualização de Horímetros",
      modo: "Observar → executar com apoio",
      objetivo: "Extrair, conferir e importar os horímetros de um site dentro do prazo do fechamento.",
      porque: [
        "O horímetro é a premissa de tudo o que vem depois: vida útil, forecast comercial, controle de 135% e calibração do ROM.",
        "A Engenharia solicita os horímetros aos CSPs com no máximo uma semana de antecedência do fechamento; o CSP garante a inserção até cinco dias antes do fim do mês.",
        "Leitura mal tratada (máquina parada com horas novas, horímetro que volta) vira não conformidade e distorce a curva de desgaste."
      ],
      influencia: [
        "Indicador Estado e Horímetro (35 pts) e ROM de Equipamentos (20 pts).",
        "A confiabilidade de todas as projeções do mês."
      ],
      passos: [
        "Parte 1 — Relatório: Gestão de Componentes → Relatórios → Relatório de Equipamentos → filtro → Avançado → Responsável = consultor do site → baixar.",
        "Confronte os horímetros do GFC com os informados pelo cliente e trate as divergências.",
        "Regras: equipamento descartado, em manutenção ou hibernado → repetir o último dado do GFC. Aguardando configuração → usar o horímetro informado pelo cliente.",
        "Parte 2 — Arquivo: uma coluna com o identificador (nº de série ou nº de frota) e outra com o horímetro. Sem formatação, sem fórmulas, sem vínculos e sem casas decimais.",
        "Em Importar Horímetros, preencha Cliente, Data de Leitura, tipo de identificador, letra da coluna do identificador e letra da coluna do horímetro. Selecione o arquivo e clique em Importar Horímetro.",
        "Revise a lista de observações (ex.: horímetro abaixo do esperado). Se a análise confirmar, clique em Utilizar; se não, Descartar. Salve.",
        "Baixe a planilha de resultados e verifique a aba Com Erro."
      ],
      atencao: ["Horímetro com fórmula, vínculo ou casa decimal faz a importação falhar.", "Nunca clique em Utilizar em massa sem ter analisado cada divergência."],
      checklist: ["Emiti o relatório por responsável", "Conheço as 4 regras de repetição", "Montei um arquivo de importação válido", "Importei um site com apoio", "Analisei a aba Com Erro"],
      questoes: [
        { id: "M07q1", tipo: "mc", peso: 1, enunciado: "Equipamento hibernado: qual horímetro vai para a importação?",
          opcoes: ["O informado pelo cliente", "Repetir o último dado do GFC", "Zero", "O horímetro estimado pelo ROM"], correta: 1,
          explicacao: "Descartados, em manutenção e hibernados repetem o último dado do GFC." },
        { id: "M07q2", tipo: "mc", peso: 1, enunciado: "Equipamento em Aguardando Configuração: qual horímetro considerar?",
          opcoes: ["Repetir o último dado do GFC", "O informado pelo cliente", "Zero", "Não importar"], correta: 1,
          explicacao: "Aguardando configuração é a exceção: usa-se o horímetro informado pelo cliente." },
        { id: "M07q3", tipo: "mc", peso: 1, enunciado: "Qual destes itens faz a importação falhar?",
          opcoes: ["Coluna A com os números de série", "Horímetro vindo de uma fórmula (PROCV) ligada a outra base", "Uma única data de leitura para todos os equipamentos", "Identificar os equipamentos pelo nº de frota"], correta: 1,
          explicacao: "Os dados precisam estar sem formatação, sem fórmulas ou vínculos e sem casas decimais." },
        { id: "M07q4", tipo: "mc", peso: 1, enunciado: "Até quando o CSP deve garantir a inserção dos horímetros na plataforma?",
          opcoes: ["Até o dia 15", "Até cinco dias antes do fechamento do mês", "Até o último dia do mês", "Na primeira semana do mês seguinte"], correta: 1,
          explicacao: "A Engenharia pede com até uma semana de antecedência; o CSP insere até cinco dias antes do fechamento." },
        { id: "M07q5", tipo: "aberta", peso: 3, enunciado: "O importador aponta 'horímetro abaixo do esperado' para uma máquina. Como você decide entre Utilizar e Descartar?",
          esperado: "Horímetro normalmente não regride nem fica muito abaixo da estimativa. Verificar o estado real (manutenção/hibernado), troca de painel/ECM, erro de digitação ou de identificador, e confirmar com CSP/Consultor de Performance. Só Utilizar quando a análise confirmar que o valor é real; senão Descartar e cobrar a correção." },
        { id: "M07q6", tipo: "pratica", peso: 3, enunciado: "Execute com apoio a atualização de horímetros de um site. Informe: site, nº de máquinas, divergências tratadas (e como), quantas linhas foram para Utilizar/Descartar e o que apareceu na aba Com Erro.",
          esperado: "Resumo coerente, regras de repetição aplicadas, divergências justificadas, aba Com Erro analisada e zerada ou com tratativa definida." }
      ]
    },

    /* ======================= FASE 3 ======================= */
    {
      id: "M08", fase: 3, dias: 5, notaMin: 8, processo: "P1 · Trocas",
      titulo: "Conciliação de trocas e tracking de componentes",
      ref: "Manual de Atualizações GFC — p. 7 e 8 · Estratégia — Coleta e Conciliação de Trocas",
      modo: "Executar com revisão integral",
      objetivo: "Conduzir a conciliação de trocas do mês e registrar a troca no sistema.",
      porque: [
        "Até o dia 15, a Engenharia pede por e-mail aos Consultores de Performance o histórico de substituições do mês. Sem isso, o sistema continua achando que o componente antigo está rodando.",
        "Troca com componente novo: o CSP regulariza o saldo. Com reformado: o CSP abre o ciclo de reforma. Só então o Analista dá a baixa e registra a troca.",
        "Uma troca não conciliada gera um componente fantasma acumulando horas e um componente real sem rastreio."
      ],
      influencia: [
        "Indicadores Vida Útil (15 pts) e Aderência do Forecast (15 pts).",
        "O RMC (vencidos que já foram trocados) e o plano de troca.",
        "A qualidade do histórico de falhas usado no Weibull."
      ],
      passos: [
        "Até o dia 15: envie o e-mail formal de solicitação do histórico de trocas a cada Consultor de Performance.",
        "Audite o que voltou: equipamento, posição, nº de série que saiu e que entrou, data e horímetro.",
        "Acione o CSP pelo Teams: componente novo → regularizar saldo; reformado → abrir ciclo de reforma.",
        "Confira os pré-requisitos: componente a instalar com reforma registrada (se reformado), em Estoque, no site do equipamento e com o consultor responsável pelo site.",
        "Painel de Equipamentos → nº de série → Detalhes. Na coluna Trocar, clique na seta da linha do componente removido.",
        "Marque o novo componente em Escolher e clique em Trocar.",
        "Destino do componente removido: data da troca, local de destino, horímetro do componente (o sistema sugere pelo ROM — confirme ou corrija) e estado após remoção (Aguardando/Em Manutenção Planejada ou por Falha). Confirme.",
        "Se a reforma for no concorrente (GADAS): Painel de Componentes → nº de série do removido → Editar → Cliente = site onde são feitas as reformas e o Responsável desse site. Salve."
      ],
      atencao: ["Data da troca e horímetro do removido definem a vida consumida daquele componente. Confira antes de confirmar."],
      checklist: ["Enviei a solicitação do dia 15 (revisada)", "Auditei o histórico recebido", "Acionei o CSP no canal certo", "Fiz um tracking com apoio", "Conheço o fluxo GADAS"],
      questoes: [
        { id: "M08q1", tipo: "mc", peso: 1, enunciado: "Até qual dia do mês a Engenharia solicita formalmente o histórico de trocas?",
          opcoes: ["Dia 5", "Dia 10", "Dia 15", "Último dia útil"], correta: 2,
          explicacao: "Impreterivelmente até o dia 15 de cada mês." },
        { id: "M08q2", tipo: "mc", peso: 1, enunciado: "Qual destes NÃO é pré-requisito para o tracking do componente a ser instalado?",
          opcoes: ["Estar no estado Estoque", "Estar no site onde o equipamento opera", "Estar com o consultor responsável pelo site", "Ter o Forecast Comercial confirmado"], correta: 3,
          explicacao: "Os pré-requisitos são: reforma registrada (se reformado), Estoque, no site e com o consultor do site." },
        { id: "M08q3", tipo: "mc", peso: 1, enunciado: "O componente removido vai para reforma programada. Qual estado após a remoção?",
          opcoes: ["Estoque", "Aguardando (ou Em) Manutenção Planejada", "Descartado", "Instalado"], correta: 1,
          explicacao: "Indo para reforma: Aguardando/Em Manutenção, planejada ou por falha." },
        { id: "M08q4", tipo: "mc", peso: 1, enunciado: "O Consultor de Performance informa uma troca com componente REFORMADO. O que o CSP precisa fazer?",
          opcoes: ["Regularizar o saldo como componente novo", "Registrar e oficializar a abertura do ciclo de reforma na plataforma", "Excluir o componente antigo", "Nada, o analista resolve tudo"], correta: 1,
          explicacao: "Reformado → CSP abre o ciclo de reforma; novo → CSP regulariza o saldo." },
        { id: "M08q5", tipo: "aberta", peso: 3, enunciado: "O que acontece nos indicadores, no RMC e no plano de troca se uma troca feita em campo não for conciliada dentro do mês?",
          esperado: "O componente retirado segue como instalado e acumulando horas: aparece vencido ou em 135% sem estar; o novo fica sem rastreio; forecast lançado para componente que já saiu; Aderência do Forecast e Vida Útil caem; RMC e plano de troca pedem reforma/estoque errados; retrabalho no mês seguinte e histórico ruim para o Weibull." },
        { id: "M08q6", tipo: "pratica", peso: 3, enunciado: "Conduza a conciliação de trocas de um site designado: cole o texto do e-mail de solicitação, liste as trocas auditadas e os acionamentos feitos ao CSP.",
          esperado: "E-mail formal, claro, com prazo; trocas auditadas com nº de série, posição, data e horímetro; acionamentos no Teams separando novo × reformado; baixa registrada." }
      ]
    },
    {
      id: "M09", fase: 3, dias: 4, notaMin: 8, processo: "Reforma",
      titulo: "Registro de reforma",
      ref: "Manual de Atualizações GFC — p. 9 a 11 · Treinamento — Registro de Reforma",
      modo: "Executar com revisão integral",
      objetivo: "Registrar a reforma de um componente com os dados certos e devolvê-lo ao estoque pronto para instalar.",
      porque: [
        "É o registro de reforma que fecha o ciclo: soma a vida, zera o horímetro (reforma geral) e libera o componente para o tracking.",
        "Custo e datas registrados viram histórico de custo de reforma por componente e por site.",
        "Reforma marcada errada faz o componente parecer novo e sumir do radar do forecast."
      ],
      influencia: [
        "Pré-requisito do tracking (o componente reformado só pode ser instalado com a reforma registrada).",
        "Indicador Vida Útil (15 pts) e a leitura de vida no RMC.",
        "Dados de vida por ciclo usados no Weibull."
      ],
      passos: [
        "Antes: busque os dados da reforma com o cliente. O componente precisa estar em Aguardando/Em Manutenção (planejada ou por falha) e no site onde os reparos são feitos.",
        "Se ele estiver em Estoque: Editar → Cliente = site da reforma e Responsável; depois Detalhes → Alterar Estado para manutenção, com a data em que foi para reforma.",
        "Detalhes → Registrar Reforma: Data Início, Data Fim, Custo, Último Horímetro, Empresa Responsável, Reforma Completa e Descrição. Salve.",
        "Reforma feita pela Sotreq: início = abertura da OS; fim = faturamento da OS; custo = peças + serviços + impostos; empresa = CRC; descrição = nº da OS, OM e observações.",
        "Reforma no concorrente sem custo conhecido: R$ 1,00.",
        "Alterar Estado → Estoque, com a data de conclusão da reforma.",
        "GADAS: Alterar Local para o site onde será instalado; depois Editar → Cliente e Responsável desse site.",
        "No módulo Forecast de Reforma, apague a data do Forecast Comercial do componente reformado."
      ],
      atencao: ["Marque Reforma Completa somente em reforma geral: ela zera o horímetro e soma uma vida."],
      checklist: ["Consultei uma OS real", "Registrei uma reforma com apoio", "Voltei o componente para Estoque", "Limpei o Forecast Comercial"],
      questoes: [
        { id: "M09q1", tipo: "mc", peso: 1, enunciado: "Reforma feita no concorrente, sem acesso ao custo. O que vai no campo Custo?",
          opcoes: ["Deixar em branco", "R$ 0,00", "R$ 1,00", "A média das reformas Sotreq"], correta: 2,
          explicacao: "Concorrente ou custo desconhecido: R$ 1,00." },
        { id: "M09q2", tipo: "mc", peso: 1, enunciado: "O que acontece ao marcar Reforma Completa?",
          opcoes: ["Nada muda no componente", "O horímetro do componente é zerado e ele ganha mais uma vida", "O componente é descartado", "O forecast é confirmado automaticamente"], correta: 1,
          explicacao: "Reforma completa = reforma geral: zera o horímetro e acrescenta uma vida." },
        { id: "M09q3", tipo: "mc", peso: 1, enunciado: "Reforma feita pela Sotreq: qual data vai em Data Fim?",
          opcoes: ["Abertura da OS", "Faturamento da OS", "Instalação no equipamento", "Data de hoje"], correta: 1,
          explicacao: "Início = abertura da OS; fim = faturamento da OS." },
        { id: "M09q4", tipo: "mc", peso: 1, enunciado: "Depois de registrar a reforma, para qual estado vai o componente?",
          opcoes: ["Instalado", "Estoque, com a data de conclusão da reforma", "Em Manutenção Planejada", "Descartado"], correta: 1,
          explicacao: "Alterar Estado → Estoque, data de alteração = conclusão da reforma." },
        { id: "M09q5", tipo: "aberta", peso: 4, enunciado: "Por que é um erro marcar Reforma Completa em um reparo parcial? Explique o impacto na vida útil, no forecast e nos dados de confiabilidade.",
          esperado: "O horímetro zera sem o componente ter sido renovado: o % da vida útil fica subestimado, ele sai da janela de 180 dias e pode falhar sem planejamento nem estoque; a contagem de vidas fica errada; o histórico passa a registrar um ciclo curto falso, contaminando a curva de Weibull e a estimativa de vida." }
      ]
    },
    {
      id: "M10", fase: 3, dias: 5, notaMin: 8, processo: "P3 · Forecast",
      titulo: "Forecast de reforma (janela de 180 dias)",
      ref: "Manual de Atualizações GFC — p. 12 · Estratégia — Gestão do Forecast Comercial",
      modo: "Executar com revisão integral",
      objetivo: "Conduzir a cobrança do forecast dos sites designados e registrar corretamente as previsões.",
      porque: [
        "Quando um componente atinge 180 dias do vencimento por vida útil estimada, o CSP é cobrado por e-mail para confirmar com o cliente a previsão real de parada.",
        "É o Forecast que o Planejamento Central usa para processar a demanda de reforma e enviar as previsões de fábrica à Caterpillar. Sem ele, o componente roda sem estratégia de suprimento.",
        "Se a troca não acontece na janela prevista, a projeção precisa ser repactuada, com nova data e aviso à oficina responsável."
      ],
      influencia: [
        "Atualização do Forecast (15 pts) e Aderência do Forecast (15 pts).",
        "A disponibilidade de componente reformado quando a máquina parar.",
        "A carga de trabalho planejada do CRC."
      ],
      passos: [
        "Em Gestão de Componentes, acesse Forecast de Reforma.",
        "Filtre por Cliente, Componente e Modelo do Equipamento. Aumente o Período de Visualização (em dias) para ver mais componentes. Clique em Buscar.",
        "A tela mostra os componentes vencidos e os que vencem no período. Clique em % da Vida Útil para ordenar pelos mais consumidos.",
        "Forecast Comercial: data prevista da reforma, conforme o CSP alinhou com o cliente.",
        "Responsável pela Reforma: onde a reforma será feita (CRC ou concorrente).",
        "Reforma Confirmada: SIM quando a reforma estiver prevista para o CRC.",
        "Use Notas para registrar decisões (antecipar, postergar, justificativas). Salve.",
        "Envie ao CSP a cobrança formal por e-mail com a lista de componentes na janela sem forecast."
      ],
      atencao: ["Tenha em mãos as previsões de reforma emitidas pelo cliente antes de lançar. Confira as datas: elas vão para a CAT."],
      checklist: ["Filtrei e ordenei a tela de Forecast", "Sei o significado de cada coluna", "Redigi uma cobrança de forecast", "Acompanhei uma repactuação"],
      questoes: [
        { id: "M10q1", tipo: "mc", peso: 1, enunciado: "Qual é a janela preventiva que dispara o Forecast Comercial?",
          opcoes: ["90 dias antes do vencimento", "135 dias", "180 dias antes do vencimento", "365 dias"], correta: 2,
          explicacao: "O forecast é disparado aos 180 dias do vencimento por vida útil estimada." },
        { id: "M10q2", tipo: "mc", peso: 1, enunciado: "Quando se marca Reforma Confirmada = SIM?",
          opcoes: ["Sempre que houver data de forecast", "Quando a reforma estiver prevista para o CRC", "Quando for no concorrente", "Quando o componente já venceu"], correta: 1,
          explicacao: "SIM para reforma prevista no CRC." },
        { id: "M10q3", tipo: "mc", peso: 1, enunciado: "Quem processa a demanda futura a partir do Forecast Comercial e envia as previsões de fábrica?",
          opcoes: ["O Consultor de Performance", "O Planejamento Central (Central Planning), para a Caterpillar", "O cliente", "A oficina do concorrente"], correta: 1,
          explicacao: "O Central Planning processa a demanda e emite as previsões de fábrica para a CAT." },
        { id: "M10q4", tipo: "mc", peso: 1, enunciado: "A troca não ocorreu na janela prevista. O que fazer?",
          opcoes: ["Apagar o forecast", "Repactuar a projeção com nova data-limite e informar a oficina responsável", "Esperar o componente chegar a 135%", "Descartar o componente"], correta: 1,
          explicacao: "Entra em reavaliação compulsória: nova data na plataforma e aviso formal à oficina." },
        { id: "M10q5", tipo: "aberta", peso: 3, enunciado: "Diferencie Atualização do Forecast de Aderência do Forecast e dê um exemplo de ação sua que melhora cada um.",
          esperado: "Atualização: taxa de componentes na janela de 180 dias (ou vencidos) com data de forecast preenchida corretamente pelo CSP — melhora com cobrança formal e acompanhamento antes do fechamento. Aderência: planejado × realizado — melhora com repactuação quando a data muda, notas atualizadas e conciliação de trocas em dia." },
        { id: "M10q6", tipo: "pratica", peso: 3, enunciado: "Redija a cobrança de forecast de um site designado ao CSP (cole o texto), listando os componentes na janela sem forecast. A instrutora revisa antes do envio.",
          esperado: "E-mail formal, objetivo, com lista (equipamento, componente, posição, % vida, vencimento estimado), prazo antes do fechamento e pedido de notas quando houver antecipação/postergação." }
      ]
    },
    {
      id: "M11", fase: 3, dias: 3, notaMin: 7, processo: "P4 · P5",
      titulo: "Controle crítico de 135% e calibração do ROM",
      ref: "Estratégia de Atuação — Controle Crítico de Vida Útil e Calibração do ROM",
      modo: "Observar → participar",
      objetivo: "Entender e apoiar os dois controles técnicos que protegem a qualidade das projeções.",
      porque: [
        "Componente em 135% da vida útil sem baixa é um risco: ou está rodando além do limite seguro, ou o sistema está errado. Nos dois casos precisa de ação no mês.",
        "O ROM desatualizado distorce o horímetro estimado entre leituras e, com ele, o % da vida útil e o forecast.",
        "A calibração do ROM só é feita depois de consolidar trocas e horímetros — ela é o último ajuste antes dos indicadores."
      ],
      influencia: [
        "Indicador ROM de Equipamentos (20 pts) e Vida Útil (15 pts).",
        "Risco de falha em campo e o momento certo da reforma."
      ],
      passos: [
        "135%: identifique os componentes acima de 135% sem baixa.",
        "Avalie o cenário com o Consultor de Performance e registre a justificativa operacional.",
        "Se o componente segue rodando além do limite, envie o alerta formal por e-mail para o Consultor de Performance fazer o ajuste e a calibração no GFC dentro do mês.",
        "ROM: com trocas e horímetros consolidados, calcule o ritmo médio de utilização dos últimos quatro meses de cada ativo.",
        "Compare com o realizado e identifique os equipamentos fora do padrão estatístico do site.",
        "Atualize o ROM individualmente, um a um, no GFC."
      ],
      atencao: ["O ajuste do ROM é individual por ativo: não aplique um valor médio para a frota inteira."],
      checklist: ["Acompanhei um caso de 135%", "Entendo a média móvel de 4 meses", "Participei da calibração de ROM de um site"],
      questoes: [
        { id: "M11q1", tipo: "mc", peso: 1, enunciado: "Qual período a calibração do ROM usa para calcular o ritmo médio?",
          opcoes: ["O último mês", "Os últimos 4 meses", "Os últimos 12 meses", "Desde a entrega do equipamento"], correta: 1,
          explicacao: "Média dos últimos quatro meses de operação, confrontada com o mês atual." },
        { id: "M11q2", tipo: "mc", peso: 1, enunciado: "Um componente atingiu 135% sem baixa. Qual a conduta?",
          opcoes: ["Trocar imediatamente, sem consultar ninguém", "Avaliar com o Consultor de Performance e, se seguir rodando, emitir alerta formal por e-mail para ajuste no mês", "Excluir o componente do sistema", "Aguardar o RMC do próximo mês"], correta: 1,
          explicacao: "Protocolo de auditoria: justificativa com o CP e alerta formal para ajuste e calibração dentro do mês." },
        { id: "M11q3", tipo: "mc", peso: 1, enunciado: "Em que momento do ciclo se faz a auditoria do ROM?",
          opcoes: ["Antes do dia 15", "Depois de consolidar trocas e horímetros", "No primeiro dia útil do mês", "Uma vez por ano"], correta: 1,
          explicacao: "O ROM é auditado após a consolidação de todas as trocas e leituras." },
        { id: "M11q4", tipo: "aberta", peso: 4, enunciado: "Um equipamento está cadastrado com ROM de 500 h/mês, mas nos últimos quatro meses rodou em média 380 h. Explique como isso distorce o horímetro estimado, o % de vida útil e o forecast — e o que acontece no caso inverso.",
          esperado: "ROM alto superestima as horas entre leituras: componentes parecem mais velhos, entram antes na janela de 180 dias, forecast e reforma são antecipados (desperdício de vida, estoque mal dimensionado). ROM baixo faz o inverso: subestima horas, componente passa do vencimento sem forecast, risco de falha e de 135%." }
      ]
    },
    {
      id: "M12", fase: 3, dias: 3, notaMin: 7, processo: "P6 · Indicadores",
      titulo: "Indicadores de conformidade",
      ref: "Estratégia de Atuação — Acompanhamento de KPI e Metas",
      modo: "Executar com apoio",
      objetivo: "Apurar e interpretar a pontuação de conformidade de um site, ligando cada ponto perdido ao processo que o causou.",
      porque: [
        "Os indicadores transformam a rotina em pontuação objetiva e mostram onde agir no mês seguinte.",
        "Cada indicador é o espelho de um processo: se o número caiu, algum passo do ciclo falhou."
      ],
      influencia: [
        "A nota do site e as ações de correção priorizadas.",
        "A leitura que a liderança e os CSPs fazem da qualidade da gestão."
      ],
      passos: [
        "Estado e Horímetro — 35 pts: status de campo × variação de horas; incoerência = X vermelho.",
        "ROM de Equipamentos — 20 pts: aderência do mês à média móvel de 4 meses.",
        "Vida Útil — 15 pts: TTSN/TSO de subconjuntos (conversor, motor, transmissão) parametrizados e sem conflito de histórico.",
        "Atualização do Forecast — 15 pts: componentes na janela de 180 dias (ou vencidos) com forecast preenchido.",
        "Aderência do Forecast — 15 pts: trocas planejadas × realizadas.",
        "Compare a pontuação do site mês a mês e aponte o processo responsável por cada variação."
      ],
      atencao: ["O indicador mostra o sintoma; a causa quase sempre está em trocas, horímetros, estados ou forecast não tratados no mês."],
      checklist: ["Sei o peso de cada indicador", "Apurei a pontuação de um site", "Expliquei a variação de um mês para outro"],
      questoes: [
        { id: "M12q1", tipo: "mc", peso: 1, enunciado: "Qual a soma dos pesos dos cinco indicadores?",
          opcoes: ["75", "85", "100", "120"], correta: 2,
          explicacao: "35 + 20 + 15 + 15 + 15 = 100." },
        { id: "M12q2", tipo: "mc", peso: 1, enunciado: "Qual indicador mede a fidelidade entre as trocas planejadas e as realizadas?",
          opcoes: ["Atualização do Forecast", "Aderência do Forecast", "Vida Útil", "ROM"], correta: 1,
          explicacao: "Aderência = planejado × realizado." },
        { id: "M12q3", tipo: "mc", peso: 1, enunciado: "Variação de horas trabalhadas incoerente com o status do equipamento gera X vermelho em qual indicador?",
          opcoes: ["Estado e Horímetro", "Vida Útil", "Aderência do Forecast", "Atualização do Forecast"], correta: 0,
          explicacao: "Estado × HT é a regra de consistência de Estado e Horímetro." },
        { id: "M12q4", tipo: "aberta", peso: 4, enunciado: "A pontuação de um site caiu de 92 para 71 pontos no mês. Descreva como você investigaria a causa usando os cinco indicadores e quais processos do ciclo verificaria primeiro.",
          esperado: "Abrir a pontuação por indicador; começar pelos de maior peso (Estado e Horímetro 35, ROM 20). Estado/HT → revisar estados e importação de horímetros; ROM → calibração; Vida Útil → trocas não conciliadas, reformas mal registradas; Atualização do Forecast → cobrança ao CSP; Aderência → trocas não realizadas/repactuação. Listar os equipamentos com X, a causa e o responsável." }
      ]
    },

    /* ======================= FASE 4 ======================= */
    {
      id: "M13", fase: 4, dias: 4, notaMin: 7, processo: "P7 · RMC",
      titulo: "Report Mensal de Componentes (RMC)",
      ref: "Estratégia de Atuação — Plano de Comunicação e Indicadores do RMC",
      modo: "Executar e apresentar",
      objetivo: "Gerar e interpretar o RMC de um site e transformar os números em prioridades de ação.",
      porque: [
        "O RMC é a fotografia mensal do trem de força por modelo em cada site: equipamentos ativos, hibernados, componentes vencidos, a vencer e dentro do esperado.",
        "Vencido pede ação imediata; a vencer pede planejamento de reforma. O esforço não é uniforme: precisa ser priorizado por frota.",
        "Exemplo de junho/2026 em Carajás: o 794AC tinha 20 ativos, 14 componentes vencidos e 12 a vencer; o 797F, por ser a maior frota, concentrava 64 vencidos."
      ],
      influencia: [
        "A priorização da reforma no mês seguinte e a negociação comercial do CSP.",
        "A imagem que o cliente tem da gestão da frota."
      ],
      passos: [
        "Garanta que trocas, horímetros, estados, forecast e ROM do mês estão consolidados.",
        "Gere o RMC por modelo de equipamento do site.",
        "Leia: ativos, hibernados, vencidos (ação imediata), a vencer (planejar reforma) e dentro do esperado.",
        "Compare os modelos do site e aponte qual frota concentra o esforço.",
        "Escreva as ações: quem precisa ser acionado, para quais componentes e até quando."
      ],
      atencao: ["RMC gerado antes de fechar trocas e horímetros vai mostrar vencidos que não existem."],
      checklist: ["Li um RMC real", "Gerei o RMC de um site", "Apresentei a leitura para a instrutora"],
      questoes: [
        { id: "M13q1", tipo: "mc", peso: 1, enunciado: "No RMC, um componente vencido exige:",
          opcoes: ["Nada, é informativo", "Planejar a reforma nos próximos 180 dias", "Ação imediata", "Descarte automático"], correta: 2,
          explicacao: "Vencido = ação imediata. A vencer = planejar reforma." },
        { id: "M13q2", tipo: "mc", peso: 1, enunciado: "Como o RMC é emitido?",
          opcoes: ["Anualmente, para toda a regional", "Mensalmente, por modelo de equipamento em cada site", "Semanalmente, por componente", "Somente quando o cliente pede"], correta: 1,
          explicacao: "Mensal, por modelo, em cada site." },
        { id: "M13q3", tipo: "aberta", peso: 3, enunciado: "No exemplo de Carajás (jun/2026), o 794AC tinha 14 vencidos e o 797F tinha 64. Isso significa necessariamente que o 797F está em pior situação? Justifique e diga o que mais você olharia.",
          esperado: "Não necessariamente: o 797F é a maior frota, então o número absoluto é maior. É preciso relativizar (vencidos por equipamento ativo ou por total de componentes), olhar a distância do vencimento, tipo de componente, estoque de parque reserva e capacidade de reforma para priorizar." },
        { id: "M13q4", tipo: "pratica", peso: 4, enunciado: "Gere o RMC de um site de ponta a ponta e apresente a leitura: vencidos, a vencer, frota prioritária e ações propostas (cole o link ou o resumo).",
          esperado: "RMC gerado com dados consolidados; leitura correta dos grupos; priorização justificada; ações com responsável e prazo." }
      ]
    },
    {
      id: "M14", fase: 4, dias: 3, notaMin: 7, processo: "P8 · P9",
      titulo: "Plano de troca, parque reserva e Weibull",
      ref: "Estratégia de Atuação — Plano de troca e Modelo de confiabilidade",
      modo: "Conceitual",
      objetivo: "Entender como o plano de troca e o modelo de confiabilidade transformam o RMC em decisão.",
      porque: [
        "O plano de troca projeta, mês a mês, quando cada componente deve sair e quando o reformado precisa voltar ao estoque, apontando o estoque mínimo de parque reserva por tipo de componente.",
        "O plano é tão bom quanto a estimativa de vida que o alimenta. O Weibull estima a probabilidade de falha a partir do histórico real e o otimizador organiza as janelas de troca equilibrando risco e estoque.",
        "Isso reduz tanto a reforma cedo demais (desperdício de vida) quanto a tarde demais (risco de falha)."
      ],
      influencia: [
        "A qualidade dos dados que você lança todo mês é a matéria-prima do modelo: troca mal registrada vira falha falsa na curva.",
        "O dimensionamento do parque reserva e a assertividade do forecast."
      ],
      passos: [
        "Veja o Mapa de Vencimento e Planejamento de Troca de um modelo (ex.: 794AC Carajás).",
        "Identifique o mês de remoção de cada componente e o mês em que o reformado precisa voltar.",
        "Entenda como o estoque mínimo de parque reserva é apontado por mês.",
        "Estude a diferença entre vida útil média fixa e curva de risco (Weibull).",
        "Veja como o resultado do otimizador alimenta o forecast."
      ],
      atencao: ["Este módulo é conceitual: o objetivo é entender, não operar a ferramenta."],
      checklist: ["Li um plano de troca", "Sei o que é estoque mínimo de parque reserva", "Sei explicar Weibull em linguagem simples"],
      questoes: [
        { id: "M14q1", tipo: "mc", peso: 1, enunciado: "Além das remoções mês a mês, o plano de troca aponta:",
          opcoes: ["O custo de cada reforma", "O estoque mínimo de parque reserva por tipo de componente", "A escala dos mecânicos", "O ROM de cada equipamento"], correta: 1,
          explicacao: "O plano indica o estoque mínimo necessário para a reforma não parar por falta de peça." },
        { id: "M14q2", tipo: "mc", peso: 1, enunciado: "O que o modelo de Weibull muda no plano de troca?",
          opcoes: ["Passa a considerar a curva de risco real de cada componente, a partir do histórico de falhas, no lugar de uma vida média fixa", "Elimina a necessidade de horímetros", "Define o preço da reforma", "Substitui o CSP no forecast"], correta: 0,
          explicacao: "A curva de risco aumenta a assertividade do forecast." },
        { id: "M14q3", tipo: "mc", peso: 1, enunciado: "Reformar cedo demais e tarde demais geram, respectivamente:",
          opcoes: ["Risco de falha e desperdício de vida", "Desperdício de vida útil e risco de falha", "Ganho de disponibilidade e economia", "Nenhum impacto relevante"], correta: 1,
          explicacao: "Cedo = vida desperdiçada; tarde = risco de falha." },
        { id: "M14q4", tipo: "aberta", peso: 4, enunciado: "Explique, como se fosse para um CSP, a diferença entre vida útil média fixa e curva de risco — e por que os dados que você lança todo mês (trocas, horímetros, reformas) determinam a qualidade desse modelo.",
          esperado: "Vida média trata todo componente igual e troca numa hora fixa; a curva de risco mostra como a probabilidade de falha cresce com as horas, usando o histórico real. O modelo aprende com trocas, horímetros e reformas: dados errados geram vidas falsas e uma curva distorcida, levando a forecast e estoque errados." }
      ]
    },
    {
      id: "M15", fase: 4, dias: 3, notaMin: 8, processo: "Ciclo completo",
      titulo: "Ciclo mensal com autonomia",
      ref: "Plano de Imersão — Fase 4 e Avaliação final",
      modo: "Executar sozinha, revisão por amostragem",
      objetivo: "Executar o ciclo mensal completo dos sites designados e definir o plano dos próximos 90 dias.",
      porque: [
        "É a prova de que a rotina se sustenta: dados certos, no prazo, nos canais certos, sem retrabalho relevante.",
        "O plano de 90 dias define o próximo passo: expandir sites e/ou aprofundar a parte analítica."
      ],
      influencia: [
        "A pontuação dos sites sob sua responsabilidade.",
        "A capacidade da equipe de GFC de atender mais sites com a mesma qualidade."
      ],
      passos: [
        "Dia 15: conciliação de trocas.",
        "Até 5 dias antes do fechamento: estados e horímetros.",
        "Forecast da janela de 180 dias e controle de 135%.",
        "Calibração do ROM.",
        "Apuração dos indicadores.",
        "Emissão e leitura do RMC.",
        "Registro do que precisou ser validado ou corrigido."
      ],
      atencao: ["A revisão agora é por amostragem: a responsabilidade pela conferência é sua."],
      checklist: ["Fechei o mês dos sites designados", "Registrei as correções necessárias", "Escrevi o plano de 90 dias"],
      questoes: [
        { id: "M15q1", tipo: "mc", peso: 1, enunciado: "Qual a ordem correta do ciclo mensal?",
          opcoes: ["RMC → horímetros → trocas → ROM → indicadores", "Conciliação de trocas → estados e horímetros → forecast e 135% → calibração do ROM → indicadores → RMC", "Forecast → RMC → trocas → horímetros", "Indicadores → ROM → horímetros → trocas → RMC"], correta: 1,
          explicacao: "Os dados base vêm primeiro; as análises e relatórios, depois." },
        { id: "M15q2", tipo: "aberta", peso: 3, enunciado: "Descreva o fluxo mensal completo do GFC com suas palavras, do dia 15 ao RMC: quem faz o quê, em que canal, e o que cada etapa protege.",
          esperado: "Trocas (Eng pede por e-mail ao CP até dia 15, CSP movimenta via Teams, Eng dá baixa) → horímetros (Eng pede até 1 semana antes, CSP insere até 5 dias antes) → estados → forecast 180 dias (CSP com cliente, e-mail) → 135% (Eng + CP, alerta por e-mail) → ROM (média 4 meses) → indicadores (100 pts) → RMC. Cada etapa protege a seguinte." },
        { id: "M15q3", tipo: "pratica", peso: 4, enunciado: "Feche o ciclo mensal dos sites designados. Anexe o checklist do fechamento (o que foi feito, pendências, correções apontadas na revisão por amostragem).",
          esperado: "Ciclo completo no prazo, sem retrabalho relevante, pendências com tratativa e comunicação nos canais certos." },
        { id: "M15q4", tipo: "aberta", peso: 2, enunciado: "Proponha seu plano de desenvolvimento para os próximos 90 dias: quais sites quer assumir, que processo quer aprofundar e como vai medir sua evolução.",
          esperado: "Plano concreto, com sites, processos (ex.: P4, P5, P8, P9), metas e forma de acompanhamento." }
      ]
    }
  ]
};
