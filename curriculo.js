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
  versao: "3.0 — out/2026",
  niveis: ["Observou", "Executou com apoio", "Executou sozinha"],

  pdca: {
    P: { nome: "Planejar", texto: "Objetivo, prazo e nota mínima definidos para o módulo." },
    D: { nome: "Executar", texto: "Estudo do material e prática na rotina: fazendo junto, depois sozinha." },
    C: { nome: "Checar", texto: "Teste de habilidade. Abaixo da nota mínima, volta para reciclagem." },
    A: { nome: "Agir / Padronizar", texto: "Transformar o aprendizado em Instrução Técnica, apresentar e consolidar o módulo." }
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
      id: "M01", fase: 1, horasEstudo: 4, horasIT: 2, itTitulo: "IT — Fluxo e propósito do GFC", notaMin: 7, processo: "Estratégia",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destes conjuntos NÃO faz parte do Grupo 1 (trem de força) monitorado pelo GFC?", "opcoes": ["Conversor de torque", "Diferencial", "Bomba hidráulica de implementos", "Comandos finais"], "correta": 2, "explicacao": "Grupo 1 = motor diesel, transmissão, conversor de torque, diferencial e comandos finais.", "id": "M01q1", "b": 4, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um contrato em que a Sotreq executa toda a manutenção da frota, mas os indicadores de disponibilidade e MTBF ficam sob gestão do cliente, é da modalidade:", "opcoes": ["Full Service", "MARC", "Rentável", "Locação com operador"], "correta": 0, "explicacao": "Full Service: controle total das manutenções, sem garantia contratual de performance.", "id": "M01q2", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Na modalidade Rentável, a Sotreq é responsável por:", "opcoes": ["Executar a manutenção e garantir a disponibilidade", "Executar a manutenção, sem garantia de performance", "Gerir apenas o estoque de componentes", "Fornecer apenas a mão de obra especializada"], "correta": 3, "explicacao": "No Rentável, o cliente faz a gestão da manutenção e dos resultados; a Sotreq entra com a mão de obra.", "id": "M01q3", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Segundo a Estratégia de Atuação, em qual situação a acurácia do monitoramento de vida útil é MAIS crítica?", "opcoes": ["Em contratos Rentável, porque o cliente decide sozinho", "Em contratos MARC, porque a Sotreq responde pela manutenção e pelo resultado operacional", "Em sites com frota pequena", "Em frotas recém-entregues, na 1ª vida"], "correta": 1, "explicacao": "Quanto maior a responsabilidade contratual da Sotreq, mais crítico o monitoramento.", "id": "M01q4", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "A definição de quais ativos o GFC monitora nasce:", "opcoes": ["Do pedido de cada cliente no início do contrato", "Da estratégia da Caterpillar para o ciclo de vida dos produtos, com múltiplas vidas e reformas programadas", "Da escolha do CSP de cada site", "Do valor de compra de cada equipamento"], "correta": 1, "explicacao": "A CAT projeta os equipamentos para múltiplas vidas; a Sotreq desdobra essa diretriz como dealer.", "id": "M01q5", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Áreas como Performance, Desenvolvimento e Projetos dependem de os equipamentos estarem inseridos no GFC para criar seus próprios controles. Isso está ligado a qual pilar do GFC?", "opcoes": ["Gestão de Relacionamento Comercial", "Indicadores de Conformidade", "Planejamento de Reformas e Suprimentos", "Rastreabilidade de Equipamentos e Componentes"], "correta": 3, "explicacao": "A rastreabilidade mantém a base que registra onde cada componente está e por quais reformas passou.", "id": "M01q6", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "O pilar Planejamento de Reformas e Suprimentos (Forecast Comercial) alimenta diretamente:", "opcoes": ["O Planejamento Central e as previsões de fábrica da Caterpillar, além de apontar o estoque mínimo de parque reserva", "Apenas o RMC do site", "O cálculo do ROM de cada equipamento", "A nota de Estado e Horímetro"], "correta": 0, "explicacao": "O forecast antecipa a demanda de reforma pela janela de 180 dias.", "id": "M01q7", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Pelo pilar de Monitoramento das Condições Atuais das Frotas, as distorções entre o campo e o sistema devem ser tratadas:", "opcoes": ["Até o dia 15 do mês seguinte", "No fechamento trimestral", "Dentro do mês de competência", "Quando o cliente solicitar"], "correta": 2, "explicacao": "Tudo precisa ser identificado e tratado dentro do mês de competência.", "id": "M01q8", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual site da Regional Norte tem como única frota monitorada o modelo D11?", "opcoes": ["MRN", "Tocantinzinho", "Hydro Paragominas", "Alcoa"], "correta": 3, "explicacao": "Alcoa: D11. MRN: D11 e 395. Tocantinzinho: 777 e 395. Paragominas: 777, D11, 990 e 395.", "id": "M01q9", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quais modelos o GFC monitora em Tocantinzinho (Brazauro)?", "opcoes": ["D11 e 395", "777 e 395", "797, 794 e D11", "777, D11 e 990"], "correta": 1, "explicacao": "Tocantinzinho: frota de transporte e suporte, 777 e 395.", "id": "M01q10", "b": 1, "e": "C"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Explique por que uma reforma planejada é melhor do que uma intervenção emergencial. Cite pelo menos três impactos concretos, para o cliente e para a Sotreq.", "esperado": "Reforma emergencial custa substancialmente mais; parada não programada derruba disponibilidade e gera penalidade; falha catastrófica pode comprometer o casco e a próxima vida; a planejada permite parque reserva, programação do CRC e previsão de fábrica CAT.", "id": "M01q11", "b": 4, "e": "C"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Quais são as três frentes de atuação do GFC e como uma alimenta a outra? Dê um exemplo prático de cada.", "esperado": "Colaboração CSP × Engenharia; rotina de gestão dos indicadores; particularidades de cada site. Indicadores mostram onde agir, a colaboração decide a ação, as particularidades ajustam a forma de executar em cada contrato.", "id": "M01q12", "b": 4, "e": "C"}
      ]
    },
    {
      id: "M02", fase: 1, horasEstudo: 4, horasIT: 2, itTitulo: "IT — Matriz de responsabilidades e canais por site", notaMin: 7, processo: "P10 · P11",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Quem fornece à Engenharia o histórico consolidado das substituições físicas executadas em campo?", "opcoes": ["Consultor de Performance", "CSP", "Planejamento Central", "O próprio cliente, direto na plataforma"], "correta": 0, "explicacao": "O Consultor de Performance fornece o histórico e valida os relatórios operacionais.", "id": "M02q1", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Depois de auditar o histórico de trocas, a Engenharia aciona os CSPs para as movimentações de estoque. Qual canal se usa nesse acionamento?", "opcoes": ["E-mail formal", "Comentário no GFC", "Microsoft Teams", "Ligação telefônica"], "correta": 2, "explicacao": "Solicitação formal do histórico = e-mail. Acionamento ágil do CSP para saldos e movimentações = Teams.", "id": "M02q2", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quem tem a responsabilidade de garantir a inserção e atualização dos horímetros até cinco dias antes do fechamento do mês?", "opcoes": ["Consultor de Performance", "Analista de GFC", "CSP", "Planejamento Central"], "correta": 2, "explicacao": "A Engenharia extrai e solicita; o CSP garante a inserção.", "id": "M02q3", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quem justifica as sobrevidas de componentes que passam de 135%?", "opcoes": ["Consultor de Performance", "CSP", "Planejamento Central", "Cliente"], "correta": 0, "explicacao": "O CP justifica as sobrevidas e faz o ajuste e a calibração no GFC quando alertado.", "id": "M02q4", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destas atribuições NÃO é do Analista de GFC / Engenharia?", "opcoes": ["Auditar os dados de troca recebidos", "Executar a auditoria e calibração do ROM", "Apurar os indicadores de conformidade", "Gerir o Forecast Comercial junto ao cliente"], "correta": 3, "explicacao": "Gerir o Forecast com o cliente é do CSP.", "id": "M02q5", "b": 4, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Em S11D, parte dos tratores D11 Fusion da infraestrutura está enquadrada em qual modalidade?", "opcoes": ["MARC", "Rentável", "Full Service", "Fora do escopo do GFC"], "correta": 1, "explicacao": "794AC no MARC; parte dos D11 Fusion no Rentável.", "id": "M02q6", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Em S11D, o CSP que atende os caminhões elétricos 794AC também atende:", "opcoes": ["Toda a frota de tratores", "As carregadeiras de grande porte 994K", "As escavadeiras 395", "As motoniveladoras 24"], "correta": 1, "explicacao": "Um CSP atende 794AC + 994K; outro atende o restante da infraestrutura.", "id": "M02q7", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quantos CSPs dividem a regularização de saldos em Carajás e como?", "opcoes": ["Um para todo o site", "Três: elétricos, esteira e pneus", "Um por tipo de equipamento, cinco no total", "Dois: um para caminhões elétricos e mecânicos, outro para toda a infraestrutura"], "correta": 3, "explicacao": "Carajás: 2 CSPs. Salobo é que tem 3 (elétricos, infra de esteira, infra de pneus).", "id": "M02q8", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Em Salobo, os CSPs são divididos em:", "opcoes": ["Caminhões elétricos, infraestrutura de esteira e infraestrutura de pneus", "Caminhões elétricos e caminhões mecânicos", "Um único CSP para todo o site", "Caminhões e carregadeiras"], "correta": 0, "explicacao": "Salobo tem três frentes de CSP.", "id": "M02q9", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destes sites segue o modelo unificado (um Consultor de Performance e um CSP para tudo)?", "opcoes": ["Carajás", "Salobo", "Sossego", "S11D"], "correta": 2, "explicacao": "Sossego, Onça Puma, Paragominas, MRN, Brazauro, Alcoa e Serra Leste são unificados.", "id": "M02q10", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual o papel do Planejamento Central (Central Planning) no fluxo do GFC?", "opcoes": ["Validar o histórico de trocas", "Inserir os horímetros", "Calibrar o ROM dos equipamentos", "Processar a demanda futura de reformas a partir do Forecast e emitir as previsões de fábrica à Caterpillar"], "correta": 3, "explicacao": "Central Planning transforma o forecast em demanda e previsão de fábrica.", "id": "M02q11", "b": 1, "e": "R"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Descreva a estrutura de atendimento de Carajás e de dois sites unificados (ex.: Sossego e Onça Puma): quantos Consultores de Performance e CSPs, como se dividem e como isso muda a forma de você cobrar as informações no fechamento.", "esperado": "Carajás: um CP por tipo de frota (elétricos, mecânicos, infraestrutura) e dois CSPs (caminhões elétricos+mecânicos / infraestrutura) — cobrança segmentada por frota e pessoa. Sossego e Onça Puma: um CP e um CSP — cobrança única, concentrada em uma pessoa. Nomes conforme a tabela da Estratégia.", "id": "M02q12", "b": 4, "e": "C"}
      ]
    },
    {
      id: "M03", fase: 1, horasEstudo: 6, horasIT: 2, itTitulo: "IT — Navegação e estados na plataforma SotreqLink", notaMin: 7, processo: "Plataforma",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Quais operações só ficam habilitadas com o equipamento em Aguardando Configuração ou Em Manutenção?", "opcoes": ["Trocar componente", "Adicionar, Instalar e Remover componentes", "Alterar local", "Emitir relatório de equipamentos"], "correta": 1, "explicacao": "Trocar funciona em qualquer estado; as outras três exigem Aguardando Configuração ou Em Manutenção.", "id": "M03q1", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um componente na 3ª vida:", "opcoes": ["Já passou por duas reformas gerais", "Tem três anos de operação", "Já foi instalado em três equipamentos", "Teve três falhas registradas"], "correta": 0, "explicacao": "Novo = 1ª vida; cada reforma geral soma uma.", "id": "M03q2", "b": 3, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "O que representa o TSO?", "opcoes": ["Horas totais desde novo", "Horas restantes até o vencimento", "Horas desde a última reforma geral (overhaul)", "Horímetro do equipamento"], "correta": 2, "explicacao": "TSO = Time Since Overhaul; TTSN = Total Time Since New.", "id": "M03q3", "b": 2, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Na configuração de modelos CAT, a vida útil estimada dos componentes pode ter como referência:", "opcoes": ["Somente a vida informada pelo cliente", "Somente a média da frota", "Centerline CAT ou a vida do site", "O ROM do equipamento"], "correta": 2, "explicacao": "Tipos, quantidades e vida útil estimada: Centerline CAT ou vida do site.", "id": "M03q4", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "A Configuração de Vida Útil por Site permite cadastrar vidas úteis estimadas para:", "opcoes": ["A 1ª, a 2ª e a 3ª vida de um componente", "Somente a 1ª vida", "Cada número de série individualmente", "Cada CSP do site"], "correta": 0, "explicacao": "A vida útil do site é cadastrada por vida (1ª, 2ª e 3ª).", "id": "M03q5", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Onde você encontra os dados de SOS (análise de óleo) de um equipamento no GFC?", "opcoes": ["Forecast de Reforma", "Importar Horímetros", "Gerenciar Relatórios de Instalação", "Detalhes do equipamento → Dados de Monitoramento"], "correta": 3, "explicacao": "Dados de Monitoramento mostra o SOS e o registro no SOS Manager.", "id": "M03q6", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Você quer saber quem mudou a data de forecast de um componente e quando. Onde olha?", "opcoes": ["Relatório de Equipamentos", "Detalhes do componente → Histórico → Alterações Forecast", "Painel de Equipamentos → Notas", "Histórico de Envio de Alertas"], "correta": 1, "explicacao": "O histórico do componente traz SOS, equipamento, horímetros, alterações de forecast e comentários.", "id": "M03q7", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "A barra de notificações do GFC indica:", "opcoes": ["Todos os componentes vencidos do site", "Comentários não lidos de máquinas e componentes dos quais o usuário é responsável", "Os horímetros atrasados", "Os alertas de 135% enviados por e-mail"], "correta": 1, "explicacao": "Ela mostra comentários não lidos e permite marcá-los como lidos.", "id": "M03q8", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Para que serve o comentário registrado pelo CSP no componente?", "opcoes": ["Alterar a vida útil estimada", "Substituir o registro de reforma", "Corrigir o horímetro", "Registrar o contato com o cliente sobre o forecast, como a tendência de antecipar ou postergar a reforma"], "correta": 3, "explicacao": "CSP registra contato com cliente; ENG registra análises e justificativas de vida útil.", "id": "M03q9", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quem pode incluir novos modelos e famílias de equipamento no GFC?", "opcoes": ["Apenas os usuários administradores do sistema", "Qualquer CSP", "O Consultor de Performance do site", "Qualquer usuário de Engenharia"], "correta": 0, "explicacao": "Inclusão de modelos e famílias é restrita aos administradores.", "id": "M03q10", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual relatório você baixa para verificar o histórico de atualizações de horímetro dos equipamentos?", "opcoes": ["Relatório de Forecast de Equipamentos", "Relatório de Vida Útil de Componentes por Equipamento", "Relatório de Atualizações de Horímetros de Equipamentos", "Relatório de Ordens de Serviço"], "correta": 2, "explicacao": "Há um relatório específico de atualizações de horímetros.", "id": "M03q11", "b": 1, "e": "P"},
        {"tipo": "pratica", "peso": 3, "enunciado": "Em modo leitura, localize um equipamento do site indicado pela instrutora. Registre: nº de série, nº de frota, estado, ROM e, para dois componentes, vida atual, horímetro, vida útil estimada e % da vida útil (mostre a conta). Diga se algum está na janela de forecast e onde viu cada dado na tela.", "esperado": "Dados coerentes com a plataforma; % = horímetro ÷ vida útil estimada; identificar a janela de 180 dias; indicar a tela/aba de origem de cada dado.", "id": "M03q12", "b": 4, "e": "A"}
      ]
    },

    /* ======================= FASE 2 ======================= */
    {
      id: "M04", fase: 2, horasEstudo: 6, horasIT: 3, itTitulo: "IT — Cadastro de componentes", notaMin: 8, processo: "Base cadastral",
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
        {"tipo": "mc", "peso": 1, "enunciado": "No cadastro de um componente NOVO, quais valores vão em Horímetro e em Data de Leitura do Horímetro?", "opcoes": ["0 e a data de hoje", "Horímetro do equipamento e data de instalação", "Em branco, para o CSP preencher", "0 e a data de entrega do componente"], "correta": 3, "explicacao": "Novo: horímetro 0 e data de leitura = data de entrega.", "id": "M04q1", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Que posição se informa para uma transmissão?", "opcoes": ["LD", "UN", "LE", "T1"], "correta": 1, "explicacao": "LD/LE só para comando final. Demais componentes: UN.", "id": "M04q2", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Para instalar o componente já no ato do cadastro, o equipamento NÃO pode:", "opcoes": ["Estar Disponível ou Hibernado, nem ter componente semelhante instalado", "Estar Em Manutenção Planejada", "Estar Aguardando Configuração", "Ter outros componentes instalados"], "correta": 0, "explicacao": "Restrição do manual para a instalação no cadastro.", "id": "M04q3", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Os campos Equipamento, Data de Instalação e Posição só ficam habilitados quando:", "opcoes": ["O Estado selecionado é Estoque", "A Vida Atual é maior que 1", "O Estado selecionado é Instalado", "O horímetro é zero"], "correta": 2, "explicacao": "Esses campos dependem do estado Instalado.", "id": "M04q4", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "No campo Cliente do cadastro de componente, informa-se:", "opcoes": ["A empresa que fabricou o componente", "A oficina que fará a reforma", "O site onde opera o equipamento em que o componente será instalado", "O consultor responsável"], "correta": 2, "explicacao": "Cliente = site; Responsável = consultor do site.", "id": "M04q5", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "No campo Modelos Associados (botão +), o que se digita?", "opcoes": ["O código da frota do equipamento que receberá o componente", "O número de série do componente", "O nome do CSP", "O código da OS"], "correta": 0, "explicacao": "Modelos Associados liga o componente ao modelo de equipamento.", "id": "M04q6", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um componente que passou por UMA reforma geral é cadastrado com Vida Atual:", "opcoes": ["1ª vida", "3ª vida", "0", "2ª vida"], "correta": 3, "explicacao": "Novo = 1ª; após uma reforma geral = 2ª.", "id": "M04q7", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um motor comprado avulso pelo cliente chegou à mina. Qual data vai em Data de Entrega do Componente?", "opcoes": ["A data de entrega técnica do equipamento", "A data de chegada do componente na mina", "A data de fabricação", "A data em que será instalado"], "correta": 1, "explicacao": "Para componente avulso, a data de entrega é a chegada na mina.", "id": "M04q8", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Você tenta instalar um motor diesel no cadastro, mas o equipamento já tem um motor diesel instalado. O que acontece?", "opcoes": ["O sistema substitui o motor antigo automaticamente", "O sistema não permite: o equipamento não pode ter um componente semelhante já instalado", "O novo motor entra como reserva no equipamento", "O antigo vai para Estoque automaticamente"], "correta": 1, "explicacao": "Para substituir, usa-se a operação Trocar (tracking).", "id": "M04q9", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Para cadastrar um componente novo direto pela tela de Detalhes do equipamento (Adicionar), antes você precisa:", "opcoes": ["Registrar a reforma do componente", "Lançar o forecast", "Importar os horímetros do site", "Colocar o equipamento no estado Em Manutenção"], "correta": 3, "explicacao": "Adicionar só é habilitado com o equipamento em Aguardando Configuração ou Em Manutenção.", "id": "M04q10", "b": 1, "e": "P"},
        {"tipo": "aberta", "peso": 3, "enunciado": "A data de entrega de um componente foi lançada com um ano de diferença. Descreva os efeitos em cadeia desse erro no GFC, citando pelo menos quatro rotinas ou indicadores afetados.", "esperado": "Horímetro estimado e % da vida útil distorcidos; entrada (ou não) na janela de 180 dias; forecast e alerta de 135% falsos ou perdidos; indicador Vida Útil; RMC errado; plano de troca e parque reserva mal dimensionados; histórico ruim no Weibull.", "id": "M04q11", "b": 4, "e": "A"},
        {"tipo": "pratica", "peso": 3, "enunciado": "Cadastre com apoio um componente reserva (ou descreva um cadastro acompanhado). Informe o valor de cada campo e justifique a escolha de Vida Atual, Data de Entrega, Horímetro, Data de Leitura e Estado.", "esperado": "Todos os campos coerentes com as regras do manual e justificativas corretas.", "id": "M04q12", "b": 4, "e": "P"}
      ]
    },
    {
      id: "M05", fase: 2, horasEstudo: 7, horasIT: 3, itTitulo: "IT — Cadastro e configuração de equipamentos", notaMin: 7, processo: "Base cadastral",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Depois de instalar todos os componentes do equipamento novo, o próximo passo é:", "opcoes": ["Configurar Equipamento", "Registrar reforma", "Importar horímetros", "Lançar o Forecast Comercial"], "correta": 0, "explicacao": "Com os componentes instalados, clica-se em Configurar Equipamento.", "id": "M05q1", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O que é o ROM informado na configuração?", "opcoes": ["Registro de Ordem de Manutenção", "Relatório Operacional de Máquinas", "Regime operacional mensal: horas trabalhadas por mês", "Rotina Obrigatória Mensal"], "correta": 2, "explicacao": "É a base do horímetro estimado.", "id": "M05q2", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Configuração de equipamento NOVO: qual data vai em Data de Leitura do Horímetro?", "opcoes": ["A data de entrega do primeiro componente", "O último dia do mês", "A data do próximo fechamento", "A data de configuração"], "correta": 3, "explicacao": "Novo: leitura = data de configuração; horímetro = 0.", "id": "M05q3", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "'Caminhão Fora de Estrada' é preenchido em qual campo do cadastro?", "opcoes": ["Modelo", "Família", "Fabricante", "Número de Frota"], "correta": 1, "explicacao": "Família = tipo do equipamento; Modelo = ex.: 793F.", "id": "M05q4", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Na tela de Detalhes do equipamento recém-cadastrado, quando usar Instalar em vez de Adicionar?", "opcoes": ["Quando os componentes já estão cadastrados no GFC", "Quando os componentes são novos de fábrica", "Quando o equipamento está Disponível", "Sempre; Adicionar é para equipamentos antigos"], "correta": 0, "explicacao": "Instalar usa componentes já cadastrados; Adicionar cadastra novos.", "id": "M05q5", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Na janela Instalar Componentes, quais três informações você preenche para cada componente?", "opcoes": ["Horímetro, ROM e Estado", "Cliente, Responsável e Local", "Data de Instalação, marcar Escolher e selecionar a Posição", "Data de Entrega, Vida Atual e Custo"], "correta": 2, "explicacao": "Data de instalação, Escolher e Posição, depois Instalar.", "id": "M05q6", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Depois de salvar o cadastro, como você chega aos Detalhes do equipamento?", "opcoes": ["Pelo menu Forecast de Reforma", "Pelo Painel de Componentes", "Digita o nº de série no campo Nº de Série do Equipamento, clica em Buscar e depois na lupa (Detalhes)", "Pela tela Importar Horímetros"], "correta": 2, "explicacao": "Busca por nº de série → Detalhes.", "id": "M05q7", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quando a Vida Atual do EQUIPAMENTO aumenta?", "opcoes": ["Quando o equipamento passa por reforma geral", "A cada troca de componente", "A cada ano de operação", "A cada mudança de site"], "correta": 0, "explicacao": "Equipamento novo = 1ª vida; reforma geral soma uma vida.", "id": "M05q8", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destes campos NÃO faz parte da Configuração Inicial do Equipamento?", "opcoes": ["R.O.M. do equipamento", "Estado atual", "Responsável (Sotreq) pelo equipamento", "Custo de aquisição"], "correta": 3, "explicacao": "A configuração pede vida atual, local, data, estado, ROM, responsável, data de leitura e horímetro.", "id": "M05q9", "b": 4, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um equipamento cadastrado no mês passado ainda está em Aguardando Configuração. Na importação de horímetros deste mês, qual valor você usa?", "opcoes": ["O último dado do GFC", "O horímetro informado pelo cliente", "Zero", "O horímetro estimado pelo ROM"], "correta": 1, "explicacao": "Aguardando configuração é a exceção que usa o dado do cliente.", "id": "M05q10", "b": 3, "e": "P"},
        {"tipo": "pratica", "peso": 3, "enunciado": "Exercício do treinamento: motoniveladora 24M entregue em 20/07/2023, Mina Conceição, ROM 500 h, configuração e instalação em 20/07/2023, deixando-a Disponível. Descreva a sequência completa e o valor de cada campo da configuração.", "esperado": "Cadastro → Detalhes → Adicionar/Instalar componentes (20/07/2023) → Configurar: vida 1, local Mina Conceição, data 20/07/2023, estado Disponível, ROM 500, leitura 20/07/2023, horímetro 0.", "id": "M05q11", "b": 4, "e": "A"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Por que outras áreas da Sotreq dependem de o equipamento estar cadastrado e configurado corretamente no GFC? O que deixa de funcionar se ele ficar em Aguardando Configuração?", "esperado": "Performance, Desenvolvimento e Projetos criam controles a partir da base; sem configuração o equipamento não estima horas pelo ROM, não entra corretamente nos indicadores, no RMC nem no forecast.", "id": "M05q12", "b": 4, "e": "C"}
      ]
    },
    {
      id: "M06", fase: 2, horasEstudo: 4, horasIT: 2, itTitulo: "IT — Atualização do estado dos equipamentos", notaMin: 7, processo: "P2 · Estado",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Quando o campo Regime Operacional Mensal deve ser preenchido na alteração de estado?", "opcoes": ["Sempre", "Somente quando o novo estado for Disponível", "Somente para Hibernado", "Somente para Em Manutenção por Falha"], "correta": 1, "explicacao": "O ROM é informado quando o equipamento volta a operar.", "id": "M06q1", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quantos pontos vale o indicador Estado e Horímetro?", "opcoes": ["20", "15", "50", "35"], "correta": 3, "explicacao": "35 + 20 + 15 + 15 + 15 = 100.", "id": "M06q2", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "O que se faz ANTES de alterar os estados de um site?", "opcoes": ["Emitir o relatório de equipamentos e confrontar com os dados do cliente", "Importar os horímetros", "Lançar o forecast", "Pedir o histórico de trocas"], "correta": 0, "explicacao": "Primeiro identifica-se quais estados não batem com a realidade.", "id": "M06q3", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Onde fica o botão Alterar Estado?", "opcoes": ["No canto inferior direito do Painel de Equipamentos", "Na tela de Forecast de Reforma", "No canto superior direito da tela de Detalhes do equipamento", "No menu Relatórios"], "correta": 2, "explicacao": "Detalhes → canto superior direito.", "id": "M06q4", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destas opções NÃO aparece como novo estado na alteração de estado de um EQUIPAMENTO?", "opcoes": ["Hibernado", "Aguardando Manutenção por Falha", "Em Manutenção Planejada", "Estoque"], "correta": 3, "explicacao": "Estoque é estado de componente, não de equipamento.", "id": "M06q5", "b": 4, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O equipamento quebrou em campo e está parado esperando vaga na oficina. Qual estado?", "opcoes": ["Em Manutenção por Falha", "Aguardando Manutenção por Falha", "Aguardando Manutenção Planejada", "Hibernado"], "correta": 1, "explicacao": "Ainda não entrou em manutenção e a parada é por falha.", "id": "M06q6", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O cliente parou o equipamento por excesso de frota, sem manutenção prevista. Qual estado?", "opcoes": ["Hibernado", "Aguardando Manutenção Planejada", "Disponível", "Descartado"], "correta": 0, "explicacao": "Parado sem operar e sem manutenção = Hibernado.", "id": "M06q7", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O equipamento hibernou no dia 3, mas você só soube e vai lançar no dia 20. Qual data de alteração?", "opcoes": ["Dia 20, a data do lançamento", "O último dia do mês", "Dia 3, a data real da mudança", "O primeiro dia do mês"], "correta": 2, "explicacao": "A data de alteração define desde quando o sistema para de somar horas pelo ROM.", "id": "M06q8", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Pela regra de consistência do indicador Estado e Horímetro, o equipamento recebe X vermelho quando:", "opcoes": ["O ROM está abaixo de 400 h", "O equipamento tem mais de duas vidas", "A variação de horas trabalhadas ou o status é incoerente em relação ao mês anterior", "O CSP não registrou comentário"], "correta": 2, "explicacao": "O sistema cruza status com a leitura horária.", "id": "M06q9", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um equipamento está Hibernado. Na importação de horímetros do mês, qual valor vai para ele?", "opcoes": ["Repetir o último dado do GFC", "O horímetro do cliente", "Zero", "O ROM cadastrado"], "correta": 0, "explicacao": "Hibernado, em manutenção e descartado repetem o último dado.", "id": "M06q10", "b": 3, "e": "P"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Um equipamento consta como Disponível no GFC, mas o cliente informa que está hibernado há dois meses. O que acontece com as projeções e com os indicadores se ninguém corrigir? Como você corrige?", "esperado": "O sistema continua somando horas pelo ROM; componentes envelhecem artificialmente, entram no forecast ou disparam 135% sem motivo; leitura real não bate (X vermelho); RMC mostra ativo que não opera. Correção: Alterar Estado → Hibernado com a data real da parada.", "id": "M06q11", "b": 4, "e": "A"}
      ]
    },
    {
      id: "M07", fase: 2, horasEstudo: 10, horasIT: 4, itTitulo: "IT — Atualização e importação de horímetros", notaMin: 8, processo: "P2 · Horímetros",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Equipamento hibernado: qual horímetro vai para a importação?", "opcoes": ["O informado pelo cliente", "Zero", "O estimado pelo ROM", "Repetir o último dado do GFC"], "correta": 3, "explicacao": "Descartado, em manutenção e hibernado repetem o último dado do GFC.", "id": "M07q1", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Equipamento em Aguardando Configuração: qual horímetro considerar?", "opcoes": ["Repetir o último dado do GFC", "O informado pelo cliente", "Zero", "Não importar"], "correta": 1, "explicacao": "É a única exceção que usa o dado do cliente.", "id": "M07q2", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Equipamento em manutenção, mas o cliente mandou um horímetro 30 h maior que o do mês passado. O que vai para a importação?", "opcoes": ["O valor do cliente", "O último dado do GFC", "A média dos dois", "O valor do cliente menos o ROM"], "correta": 1, "explicacao": "Pela regra do manual, em manutenção repete-se o último dado do GFC.", "id": "M07q3", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destes itens faz a importação falhar?", "opcoes": ["Coluna A com nº de série", "Uma única data de leitura para todos", "Identificar pelo nº de frota", "Horímetro vindo de uma fórmula (PROCV) ligada a outra base"], "correta": 3, "explicacao": "Sem formatação, sem fórmulas ou vínculos e sem casas decimais.", "id": "M07q4", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O cliente mandou o horímetro como 12.450,5. Como ele deve ir para o arquivo?", "opcoes": ["12450, sem casas decimais e sem formatação", "12.450,5", "12450,5", "12,4505"], "correta": 0, "explicacao": "Casas decimais e formatação atrapalham a importação.", "id": "M07q5", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Até quando o CSP deve garantir a inserção dos horímetros?", "opcoes": ["Até o dia 15", "Até o último dia do mês", "Até cinco dias antes do fechamento do mês", "Na primeira semana do mês seguinte"], "correta": 2, "explicacao": "A Engenharia pede até uma semana antes; o CSP insere até cinco dias antes.", "id": "M07q6", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Com que antecedência máxima em relação ao fechamento a Engenharia extrai e solicita os horímetros aos CSPs?", "opcoes": ["Quinze dias", "Um mês", "Dois dias", "Uma semana"], "correta": 3, "explicacao": "No máximo uma semana antes do fechamento.", "id": "M07q7", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Para emitir o relatório dos equipamentos de um site, qual filtro avançado você preenche?", "opcoes": ["Família", "Responsável, com o nome do consultor do site", "Status do Horímetro", "Nº de Série do Componente"], "correta": 1, "explicacao": "Relatório de Equipamentos → filtro → Avançado → Responsável.", "id": "M07q8", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Na tela Importar Horímetros, o que vai no campo Coluna do Identificador?", "opcoes": ["A letra da coluna do arquivo que tem o nº de série ou de frota", "O nome da coluna", "O número de série do primeiro equipamento", "O nome do cliente"], "correta": 0, "explicacao": "Coluna do Identificador e Coluna do Horímetro recebem letras de coluna.", "id": "M07q9", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Depois de importar, onde você verifica os equipamentos que deram problema?", "opcoes": ["No Forecast de Reforma", "No Histórico de Envio de Alertas", "Na planilha de resultados, aba Com Erro", "No Painel de Componentes"], "correta": 2, "explicacao": "Baixe a planilha de resultados e analise a aba Com Erro.", "id": "M07q10", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Por que a atualização de horímetros vem antes do forecast e da calibração do ROM no ciclo?", "opcoes": ["Porque o forecast só abre no fim do mês", "Porque o CSP só trabalha nessa ordem", "Porque as leituras são a premissa para vida útil, forecast e ROM", "Porque o ROM é calculado pelo cliente"], "correta": 2, "explicacao": "Sem leitura atualizada, todas as projeções seguintes ficam erradas.", "id": "M07q11", "b": 2, "e": "A"},
        {"tipo": "aberta", "peso": 3, "enunciado": "O importador aponta 'horímetro abaixo do esperado' para uma máquina. Como você decide entre Utilizar e Descartar? Cite as verificações que faria e com quem.", "esperado": "Verificar estado real (manutenção/hibernado), troca de painel/ECM, erro de digitação ou de identificador; confirmar com CSP/Consultor de Performance. Só Utilizar quando a análise confirmar que o valor é real; senão Descartar e cobrar correção.", "id": "M07q12", "b": 4, "e": "C"},
        {"tipo": "pratica", "peso": 3, "enunciado": "Execute com apoio a atualização de horímetros de um site. Informe: site, nº de máquinas, divergências tratadas e como, quantas linhas foram Utilizar/Descartar e o que apareceu na aba Com Erro.", "esperado": "Resumo coerente, regras de repetição aplicadas, divergências justificadas, aba Com Erro analisada.", "id": "M07q13", "b": 4, "e": "P"}
      ]
    },

    /* ======================= FASE 3 ======================= */
    {
      id: "M08", fase: 3, horasEstudo: 10, horasIT: 4, itTitulo: "IT — Conciliação de trocas e tracking", notaMin: 8, processo: "P1 · Trocas",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Até qual dia do mês a Engenharia solicita formalmente o histórico de trocas?", "opcoes": ["Dia 15", "Dia 5", "Dia 10", "Último dia útil"], "correta": 0, "explicacao": "Impreterivelmente até o dia 15.", "id": "M08q1", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destes NÃO é pré-requisito para o tracking do componente a ser instalado?", "opcoes": ["Estar em Estoque", "Estar no site onde o equipamento opera", "Estar com o consultor responsável pelo site", "Ter o Forecast Comercial confirmado"], "correta": 3, "explicacao": "Pré-requisitos: reforma registrada (se reformado), Estoque, no site e com o consultor do site.", "id": "M08q2", "b": 4, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Na tela de Detalhes, em qual linha você clica na seta da coluna Trocar?", "opcoes": ["Na linha do componente que vai entrar", "Na linha do componente que será REMOVIDO", "Em qualquer linha do mesmo tipo", "Na linha do primeiro componente da lista"], "correta": 1, "explicacao": "A seta fica na linha do componente a ser removido.", "id": "M08q3", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "A operação Trocar pode ser feita com o equipamento em qual estado?", "opcoes": ["Apenas Em Manutenção", "Em qualquer estado", "Apenas Aguardando Configuração", "Apenas Disponível"], "correta": 1, "explicacao": "Diferente de Adicionar/Instalar/Remover, Trocar funciona em qualquer estado.", "id": "M08q4", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Ao trocar, o sistema sugere o horímetro do componente removido. Como ele chega nesse valor?", "opcoes": ["Copia o horímetro do componente novo", "Usa a vida útil estimada", "Usa o último horímetro importado, sem ajuste", "Estima com base na data da troca e no ROM da máquina; você confirma ou corrige"], "correta": 3, "explicacao": "O valor é estimado e deve ser conferido.", "id": "M08q5", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O componente removido vai para reforma programada. Estado após a remoção:", "opcoes": ["Aguardando (ou Em) Manutenção Planejada", "Estoque", "Descartado", "Instalado"], "correta": 0, "explicacao": "Indo para reforma: manutenção planejada ou por falha.", "id": "M08q6", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O Consultor de Performance informa uma troca com componente REFORMADO. O que o CSP precisa fazer antes da baixa?", "opcoes": ["Regularizar saldo como componente novo", "Excluir o componente antigo", "Registrar e oficializar a abertura do ciclo de reforma", "Nada; o analista resolve"], "correta": 2, "explicacao": "Novo → saldo; reformado → abertura do ciclo de reforma.", "id": "M08q7", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "O componente reformado que vai entrar não aparece na lista de Trocar. Causa mais provável?", "opcoes": ["O equipamento está Disponível", "O ROM do equipamento está desatualizado", "O forecast não foi preenchido", "A reforma não foi registrada ou ele não está em Estoque no site/consultor do equipamento"], "correta": 3, "explicacao": "A lista só mostra componentes que cumprem os pré-requisitos.", "id": "M08q8", "b": 4, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Fluxo GADAS: depois da troca, o que você edita no componente REMOVIDO?", "opcoes": ["Vida Atual e Horímetro", "Cliente = site onde são feitas as reformas e o Responsável desse site", "Estado = Descartado", "Modelos Associados"], "correta": 1, "explicacao": "No Painel de Componentes → Editar → Cliente e Responsável do site de reforma.", "id": "M08q9", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Devolução de casco reman ao fornecedor é tratada no GFC como:", "opcoes": ["Descarte de componente", "Registro de reforma", "Adição de componente", "Troca"], "correta": 0, "explicacao": "As etapas de tracking incluem descarte (casco reman e fim de vida).", "id": "M08q10", "b": 1, "e": "C"},
        {"tipo": "aberta", "peso": 3, "enunciado": "O que acontece nos indicadores, no RMC e no plano de troca se uma troca feita em campo não for conciliada dentro do mês?", "esperado": "O retirado segue instalado acumulando horas: aparece vencido/135% sem estar; o novo fica sem rastreio; forecast para componente que já saiu; Aderência e Vida Útil caem; RMC e plano pedem reforma/estoque errados; histórico ruim no Weibull.", "id": "M08q11", "b": 4, "e": "A"},
        {"tipo": "pratica", "peso": 3, "enunciado": "Conduza a conciliação de trocas de um site designado: cole o e-mail de solicitação, liste as trocas auditadas (equipamento, posição, série que saiu/entrou, data, horímetro) e os acionamentos ao CSP.", "esperado": "E-mail formal com prazo; trocas auditadas completas; acionamento no Teams separando novo × reformado; baixa registrada.", "id": "M08q12", "b": 4, "e": "P"}
      ]
    },
    {
      id: "M09", fase: 3, horasEstudo: 7, horasIT: 3, itTitulo: "IT — Registro de reforma de componentes", notaMin: 8, processo: "Reforma",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Reforma feita no concorrente, sem acesso ao custo. O que vai no campo Custo?", "opcoes": ["Em branco", "R$ 0,00", "R$ 1,00", "A média das reformas Sotreq"], "correta": 2, "explicacao": "Concorrente ou custo desconhecido: R$ 1,00.", "id": "M09q1", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O que acontece ao marcar Reforma Completa?", "opcoes": ["Nada muda no componente", "O componente é descartado", "O horímetro do componente zera e ele ganha mais uma vida", "O forecast é confirmado"], "correta": 2, "explicacao": "Reforma completa = reforma geral.", "id": "M09q2", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Reforma feita pela Sotreq: Data Início e Data Fim são:", "opcoes": ["Abertura da OS e faturamento da OS", "Remoção do componente e instalação", "Abertura da OS e data de hoje", "Faturamento da OS e instalação"], "correta": 0, "explicacao": "Início = abertura; fim = faturamento.", "id": "M09q3", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Reforma feita pela Sotreq: o que entra no campo Custo?", "opcoes": ["Somente as peças", "Somente a mão de obra", "R$ 1,00", "A soma de peças, serviços e impostos"], "correta": 3, "explicacao": "Somatória de peças, serviços e impostos.", "id": "M09q4", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Reforma feita pela Sotreq: Empresa Responsável é:", "opcoes": ["O cliente", "O CRC responsável pela reforma", "O CSP do site", "A Caterpillar"], "correta": 1, "explicacao": "Seleciona-se o CRC.", "id": "M09q5", "b": 3, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "O que deve constar na Descrição de uma reforma Sotreq?", "opcoes": ["Somente o nome do CSP", "Nº da OS, OM e demais informações relevantes", "O horímetro do equipamento", "A data do forecast"], "correta": 1, "explicacao": "Rastreabilidade da OS e da OM.", "id": "M09q6", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "O componente a reformar está em Estoque. Antes de Registrar Reforma, você precisa:", "opcoes": ["Instalar o componente em um equipamento", "Apagar o componente e cadastrar de novo", "Lançar o forecast", "Editar Cliente/Responsável para o site da reforma e alterar o estado para manutenção"], "correta": 3, "explicacao": "Registrar reforma exige estado de manutenção e o componente no site dos reparos.", "id": "M09q7", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Em quais estados o componente precisa estar para o registro de reforma?", "opcoes": ["Aguardando ou Em Manutenção (planejada ou por falha)", "Estoque ou Instalado", "Somente Instalado", "Somente Descartado"], "correta": 0, "explicacao": "Pré-requisito do manual.", "id": "M09q8", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Após registrar a reforma, para qual estado vai o componente e com qual data?", "opcoes": ["Instalado, com a data de hoje", "Em Manutenção, com a data de início", "Estoque, com a data de conclusão da reforma", "Disponível, com a data do faturamento"], "correta": 2, "explicacao": "Alterar Estado → Estoque, data = conclusão.", "id": "M09q9", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Depois de registrar a reforma, o que fazer no módulo Forecast de Reforma?", "opcoes": ["Confirmar a reforma de novo", "Aumentar o período de visualização", "Nada", "Apagar a data do Forecast Comercial do componente"], "correta": 3, "explicacao": "O componente reformado começa um novo ciclo; o forecast antigo deve sair.", "id": "M09q10", "b": 3, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Fluxo GADAS, após a reforma: qual operação leva o componente para o site onde ele será instalado?", "opcoes": ["Trocar", "Alterar Local, informando o site de destino, e depois Editar Cliente/Responsável", "Descartar", "Registrar Reforma de novo"], "correta": 1, "explicacao": "Alterar Local + Editar cliente e responsável.", "id": "M09q11", "b": 1, "e": "C"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Por que é um erro marcar Reforma Completa em um reparo parcial? Explique o impacto na vida útil, no forecast, na contagem de vidas e nos dados de confiabilidade.", "esperado": "Zera o horímetro sem o componente ter sido renovado: % vida subestimado, sai da janela de 180 dias, pode falhar sem planejamento e sem estoque; vidas contadas errado; ciclo curto falso contamina o Weibull.", "id": "M09q12", "b": 4, "e": "C"}
      ]
    },
    {
      id: "M10", fase: 3, horasEstudo: 9, horasIT: 4, itTitulo: "IT — Gestão do Forecast de Reforma", notaMin: 8, processo: "P3 · Forecast",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Qual é a janela preventiva que dispara o Forecast Comercial?", "opcoes": ["180 dias antes do vencimento", "90 dias", "135 dias", "365 dias"], "correta": 0, "explicacao": "Janela de 180 dias.", "id": "M10q1", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quando se marca Reforma Confirmada = SIM?", "opcoes": ["Sempre que houver data de forecast", "Quando for no concorrente", "Quando a reforma estiver prevista para o CRC", "Quando o componente já venceu"], "correta": 2, "explicacao": "SIM para reforma prevista no CRC.", "id": "M10q2", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quem processa a demanda futura a partir do Forecast e envia as previsões de fábrica?", "opcoes": ["O Consultor de Performance", "O cliente", "O Planejamento Central, para a Caterpillar", "A oficina do concorrente"], "correta": 2, "explicacao": "Central Planning → previsão de fábrica CAT.", "id": "M10q3", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "A troca não ocorreu na janela prevista. O que fazer?", "opcoes": ["Repactuar com nova data-limite e informar a oficina responsável", "Apagar o forecast", "Esperar chegar a 135%", "Descartar o componente"], "correta": 0, "explicacao": "Reavaliação compulsória.", "id": "M10q4", "b": 3, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quais componentes a tela Forecast de Reforma exibe?", "opcoes": ["Somente os vencidos", "Somente os instalados há mais de um ano", "Todos os componentes do sistema", "Os vencidos e os que vencem dentro do período de visualização informado"], "correta": 3, "explicacao": "Vencidos + a vencer no período.", "id": "M10q5", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Componentes que você esperava ver não aparecem na tela de Forecast. Qual ajuste no filtro resolve primeiro?", "opcoes": ["Trocar o responsável", "Aumentar o Período de Visualização (em dias)", "Marcar Reforma Confirmada", "Diminuir a % de vida útil mínima para zero e salvar"], "correta": 1, "explicacao": "Período maior mostra mais componentes.", "id": "M10q6", "b": 4, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Como priorizar na tela os componentes mais consumidos?", "opcoes": ["Filtrar por Modelo do Equipamento", "Clicar no título da coluna % da Vida Útil para ordenar", "Ordenar pela data de entrega", "Exportar para Excel e ordenar lá"], "correta": 1, "explicacao": "Ordena-se por % da vida útil.", "id": "M10q7", "b": 1, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destas NÃO é uma operação da tela Forecast de Reforma?", "opcoes": ["Alterar a Vida Útil Técnica Ajustada", "Registrar data de Forecast Comercial", "Cadastrar o responsável pela reforma", "Registrar reforma"], "correta": 3, "explicacao": "Registrar reforma é feito nos Detalhes do componente.", "id": "M10q8", "b": 4, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O cliente decidiu postergar a reforma de um comando final em dois meses. Além de mudar a data, o que o CSP deve fazer?", "opcoes": ["Registrar a decisão e a justificativa em Notas/comentários do componente", "Desmarcar o componente do site", "Apagar a vida útil estimada", "Nada mais"], "correta": 0, "explicacao": "Notas guardam o contexto da decisão.", "id": "M10q9", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quem insere a previsão real de parada na plataforma, e até quando?", "opcoes": ["A Engenharia, no dia 15", "O Consultor de Performance, após a troca", "O CSP, após verificar com o cliente, antes do fechamento do mês", "O Central Planning, no mês seguinte"], "correta": 2, "explicacao": "A Engenharia cobra por e-mail; o CSP lança antes do fechamento.", "id": "M10q10", "b": 1, "e": "R"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Diferencie Atualização do Forecast de Aderência do Forecast e dê um exemplo de ação sua que melhora cada um.", "esperado": "Atualização: componentes na janela (ou vencidos) com forecast preenchido — melhora com cobrança formal antes do fechamento. Aderência: planejado × realizado — melhora com repactuação, notas atualizadas e conciliação de trocas em dia.", "id": "M10q11", "b": 4, "e": "C"},
        {"tipo": "pratica", "peso": 3, "enunciado": "Redija a cobrança de forecast de um site ao CSP (cole o texto), listando os componentes na janela sem forecast. A instrutora revisa antes do envio.", "esperado": "E-mail formal com lista (equipamento, componente, posição, % vida, vencimento), prazo antes do fechamento e pedido de notas.", "id": "M10q12", "b": 4, "e": "P"}
      ]
    },
    {
      id: "M11", fase: 3, horasEstudo: 6, horasIT: 3, itTitulo: "IT — Controle de 135% e calibração do ROM", notaMin: 7, processo: "P4 · P5",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Qual período a calibração do ROM usa para calcular o ritmo médio?", "opcoes": ["O último mês", "Os últimos 12 meses", "Desde a entrega", "Os últimos 4 meses"], "correta": 3, "explicacao": "Média dos últimos quatro meses.", "id": "M11q1", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um componente atingiu 135% sem baixa. Qual a conduta?", "opcoes": ["Trocar imediatamente sem consultar", "Avaliar com o Consultor de Performance e, se seguir rodando, emitir alerta formal por e-mail para ajuste no mês", "Excluir do sistema", "Aguardar o próximo RMC"], "correta": 1, "explicacao": "Auditoria técnica + alerta formal.", "id": "M11q2", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Em que momento do ciclo se faz a auditoria do ROM?", "opcoes": ["Depois de consolidar trocas e horímetros", "Antes do dia 15", "No primeiro dia útil", "Uma vez por ano"], "correta": 0, "explicacao": "O ROM é o último ajuste antes dos indicadores.", "id": "M11q3", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Componente com vida útil estimada de 14.000 h. A partir de qual horímetro ele entra no controle crítico?", "opcoes": ["14.000 h", "16.800 h", "18.900 h", "21.000 h"], "correta": 2, "explicacao": "14.000 × 1,35 = 18.900 h.", "id": "M11q4", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Componente com vida útil estimada de 12.000 h e horímetro de 15.600 h. Situação:", "opcoes": ["Dentro do esperado", "Acima de 135%, em protocolo crítico", "Vencido (130%), ainda abaixo do limite crítico de 135%", "Na janela de forecast, ainda não vencido"], "correta": 2, "explicacao": "15.600 ÷ 12.000 = 130%.", "id": "M11q5", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Após o alerta de 135%, quem faz o ajuste técnico e a calibração do ativo na plataforma?", "opcoes": ["O Consultor de Performance", "O CSP", "O Planejamento Central", "O cliente"], "correta": 0, "explicacao": "A Engenharia alerta; o CP ajusta.", "id": "M11q6", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Como é feita a atualização do ROM dos equipamentos com desvio?", "opcoes": ["Com um valor médio aplicado à frota toda", "Pelo cliente, via importação", "Automaticamente pelo sistema", "Individualmente, um a um, no GFC"], "correta": 3, "explicacao": "Ajuste individual por ativo.", "id": "M11q7", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "A média dos últimos 4 meses de um equipamento é 420 h/mês e o ROM cadastrado é 600 h. Qual o efeito, se nada for feito?", "opcoes": ["As horas estimadas ficam abaixo do real", "As horas estimadas ficam acima do real e os componentes parecem mais velhos", "Nenhum, o ROM não afeta estimativas", "O equipamento vai automaticamente para Hibernado"], "correta": 1, "explicacao": "ROM alto superestima o horímetro entre leituras.", "id": "M11q8", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quantos pontos vale o indicador ROM de Equipamentos?", "opcoes": ["35", "20", "15", "10"], "correta": 1, "explicacao": "ROM = 20 pontos.", "id": "M11q9", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "O equipamento que perde o selo 'Máquinas Consistentes ROM' é aquele cujo horímetro:", "opcoes": ["Está acima de 10.000 h", "Não teve comentário do CSP", "Foi importado por nº de frota", "Apresenta desvio estatístico severo em relação à média móvel dos últimos 4 meses"], "correta": 3, "explicacao": "Regra de consistência do indicador ROM.", "id": "M11q10", "b": 3, "e": "A"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Um equipamento está com ROM de 500 h/mês, mas rodou em média 380 h nos últimos quatro meses. Explique como isso distorce horímetro estimado, % de vida útil, forecast e estoque — e o que acontece no caso inverso.", "esperado": "ROM alto superestima horas: componentes 'envelhecem', entram antes na janela, reforma antecipada (desperdício de vida), estoque mal dimensionado. ROM baixo: subestima, componente passa do vencimento sem forecast, risco de falha e de 135%.", "id": "M11q11", "b": 4, "e": "A"}
      ]
    },
    {
      id: "M12", fase: 3, horasEstudo: 4, horasIT: 2, itTitulo: "IT — Apuração e leitura dos indicadores", notaMin: 7, processo: "P6 · Indicadores",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Qual a soma dos pesos dos cinco indicadores?", "opcoes": ["100", "85", "75", "120"], "correta": 0, "explicacao": "35 + 20 + 15 + 15 + 15.", "id": "M12q1", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual indicador mede a fidelidade entre trocas planejadas e realizadas?", "opcoes": ["Atualização do Forecast", "Vida Útil", "Aderência do Forecast", "ROM"], "correta": 2, "explicacao": "Aderência = planejado × realizado.", "id": "M12q2", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Variação de horas incoerente com o status do equipamento gera X vermelho em:", "opcoes": ["Vida Útil", "Aderência do Forecast", "ROM", "Estado e Horímetro"], "correta": 3, "explicacao": "Regra de consistência de Estado e Horímetro.", "id": "M12q3", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "O indicador Vida Útil é consistente quando:", "opcoes": ["Todos os componentes estão abaixo de 100%", "TTSN/TSO dos subconjuntos estão parametrizados e sem conflito de histórico de trocas", "O forecast está preenchido", "O ROM está calibrado"], "correta": 1, "explicacao": "Foco em parametrização e histórico limpo.", "id": "M12q4", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Quais subconjuntos a Estratégia cita como essenciais para a consistência do indicador Vida Útil?", "opcoes": ["Conversor de torque, motor diesel e transmissão", "Pneus, aros e freios", "Material rodante e lâmina", "Cabine e sistema elétrico"], "correta": 0, "explicacao": "Citados explicitamente na regra do indicador.", "id": "M12q5", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um site está perfeito em quatro indicadores e fez 65 pontos. Qual indicador zerou?", "opcoes": ["ROM", "Vida Útil", "Estado e Horímetro", "Aderência do Forecast"], "correta": 2, "explicacao": "100 − 65 = 35, o peso de Estado e Horímetro.", "id": "M12q6", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "O indicador Atualização do Forecast mede:", "opcoes": ["A quantidade de trocas realizadas", "A diferença entre ROM e realizado", "O preenchimento correto, pelo CSP, das datas de forecast dos componentes na janela de 180 dias ou vencidos", "O custo das reformas"], "correta": 2, "explicacao": "É sobre preenchimento, não sobre execução.", "id": "M12q7", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Foram planejadas 10 trocas para o mês e só 4 aconteceram. Qual indicador cai diretamente?", "opcoes": ["Aderência do Forecast", "Atualização do Forecast", "Estado e Horímetro", "Vida Útil"], "correta": 0, "explicacao": "Planejado × realizado.", "id": "M12q8", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "O indicador ROM compara:", "opcoes": ["O ROM cadastrado com o da frota CAT", "O horímetro do componente com a vida útil", "As horas do site com as de outro site", "A leitura do mês atual com a média móvel dos últimos 4 meses do ativo"], "correta": 3, "explicacao": "Média móvel de 4 meses.", "id": "M12q9", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um site perdeu exatamente 15 pontos e só o forecast está com problema. Que indicadores podem ser?", "opcoes": ["Estado e Horímetro", "Atualização do Forecast ou Aderência do Forecast", "ROM", "Estado e Horímetro e ROM juntos"], "correta": 1, "explicacao": "Cada indicador de forecast vale 15.", "id": "M12q10", "b": 3, "e": "A"},
        {"tipo": "aberta", "peso": 3, "enunciado": "A pontuação de um site caiu de 92 para 71 pontos no mês. Descreva como você investigaria a causa usando os cinco indicadores e quais processos do ciclo verificaria primeiro.", "esperado": "Abrir por indicador, começar pelos de maior peso; Estado/HT → estados e importação; ROM → calibração; Vida Útil → trocas não conciliadas e reformas; Atualização → cobrança ao CSP; Aderência → trocas não feitas e repactuação. Listar equipamentos com X, causa e responsável.", "id": "M12q11", "b": 4, "e": "A"}
      ]
    },

    /* ======================= FASE 4 ======================= */
    {
      id: "M13", fase: 4, horasEstudo: 6, horasIT: 3, itTitulo: "IT — Emissão e leitura do RMC", notaMin: 7, processo: "P7 · RMC",
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
        {"tipo": "mc", "peso": 1, "enunciado": "No RMC, um componente vencido exige:", "opcoes": ["Planejar a reforma nos próximos meses", "Ação imediata", "Nada; é informativo", "Descarte automático"], "correta": 1, "explicacao": "Vencido = ação imediata; a vencer = planejar.", "id": "M13q1", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "No RMC, um componente 'a vencer' pede:", "opcoes": ["Ação imediata", "Calibração do ROM", "Alterar o estado do equipamento", "Planejar a reforma"], "correta": 3, "explicacao": "Próximo do vencimento = planejamento.", "id": "M13q2", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Como o RMC é emitido?", "opcoes": ["Mensalmente, por modelo de equipamento em cada site", "Anualmente, para a regional", "Semanalmente, por componente", "Somente a pedido do cliente"], "correta": 0, "explicacao": "Mensal, por modelo, por site.", "id": "M13q3", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destas informações NÃO faz parte da fotografia do RMC?", "opcoes": ["Equipamentos ativos", "Equipamentos hibernados", "Custo das reformas realizadas", "Componentes dentro do esperado"], "correta": 2, "explicacao": "RMC: ativos, hibernados, vencidos, a vencer e dentro do esperado.", "id": "M13q4", "b": 4, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Em Carajás, para quais modelos o RMC é gerado?", "opcoes": ["797F e 994K", "794AC e 24", "Somente 797F", "794AC, 797F, D11 e D11T"], "correta": 3, "explicacao": "Um relatório por modelo de trem de força do site.", "id": "M13q5", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "No RMC de junho/2026 do 794AC em Carajás, quantos equipamentos estavam ativos?", "opcoes": ["14", "20", "12", "64"], "correta": 1, "explicacao": "20 ativos, 14 componentes vencidos, 12 a vencer.", "id": "M13q6", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Por que gerar o RMC antes de fechar trocas e horímetros é um erro?", "opcoes": ["Ele mostra vencidos e a vencer que não correspondem à realidade", "Ele não pode ser gerado antes do dia 15", "O cliente não aceita", "O ROM é zerado"], "correta": 0, "explicacao": "Dados não consolidados geram uma fotografia falsa.", "id": "M13q7", "b": 2, "e": "P"},
        {"tipo": "mc", "peso": 1, "enunciado": "O que transforma o RMC de uma fotografia em uma decisão?", "opcoes": ["O indicador de ROM", "O cadastro de equipamentos", "O plano de troca de componentes", "A barra de notificações"], "correta": 2, "explicacao": "O plano de troca orienta negociação e programação.", "id": "M13q8", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "No mesmo mês, o 797F de Carajás tinha 64 vencidos, o maior volume do site. Qual a explicação principal citada na Estratégia?", "opcoes": ["Tem o pior CSP", "Está em contrato Rentável", "É a maior frota do site", "Tem ROM menor"], "correta": 2, "explicacao": "O volume absoluto acompanha o tamanho da frota.", "id": "M13q9", "b": 3, "e": "C"},
        {"tipo": "aberta", "peso": 3, "enunciado": "O 794AC tinha 14 vencidos e o 797F tinha 64. Isso significa que o 797F está necessariamente em pior situação? Justifique e diga o que mais você olharia para priorizar.", "esperado": "Não: é a maior frota. Relativizar (vencidos por equipamento ativo/total de componentes), distância do vencimento, tipo de componente, estoque de parque reserva e capacidade de reforma.", "id": "M13q10", "b": 4, "e": "C"},
        {"tipo": "pratica", "peso": 3, "enunciado": "Gere o RMC de um site de ponta a ponta e apresente a leitura: vencidos, a vencer, frota prioritária e ações propostas com responsável e prazo.", "esperado": "Dados consolidados; leitura correta; priorização justificada; ações com responsável e prazo.", "id": "M13q11", "b": 4, "e": "P"}
      ]
    },
    {
      id: "M14", fase: 4, horasEstudo: 5, horasIT: 3, itTitulo: "IT — Plano de troca e confiabilidade", notaMin: 7, processo: "P8 · P9",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Além das remoções mês a mês, o plano de troca aponta:", "opcoes": ["O estoque mínimo de parque reserva por tipo de componente", "O custo de cada reforma", "A escala da oficina", "O ROM de cada equipamento"], "correta": 0, "explicacao": "Para a reforma não parar por falta de peça.", "id": "M14q1", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "O plano de troca indica também, quando aplicável:", "opcoes": ["Quando o equipamento deve ser descartado", "Quando o CSP deve ser trocado", "Quando renovar o contrato", "Quando o componente reformado precisa retornar ao estoque"], "correta": 3, "explicacao": "Remoção + retorno do reformado para o próximo ciclo.", "id": "M14q2", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "O que o modelo de Weibull muda no plano de troca?", "opcoes": ["Elimina os horímetros", "Passa a usar a curva de risco real de cada componente, a partir do histórico de falhas, no lugar de uma vida média fixa", "Define o preço da reforma", "Substitui o CSP"], "correta": 1, "explicacao": "Mais assertividade no forecast.", "id": "M14q3", "b": 2, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "O que o Weibull estima, a partir do histórico real de falhas e substituições?", "opcoes": ["O custo da próxima reforma", "A probabilidade de falha ao longo do tempo", "O ROM ideal do equipamento", "A data de entrega do componente"], "correta": 1, "explicacao": "Curva de probabilidade de falha.", "id": "M14q4", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "O otimizador integrado ao Weibull organiza a janela de troca equilibrando:", "opcoes": ["Custo e prazo do CSP", "ROM e horímetro", "Número de sites e de CSPs", "Risco de falha e uso do estoque de parque reserva"], "correta": 3, "explicacao": "Risco × estoque disponível.", "id": "M14q5", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Reformar cedo demais e tarde demais geram, respectivamente:", "opcoes": ["Desperdício de vida útil e risco de falha", "Risco de falha e desperdício de vida", "Economia e disponibilidade", "Nenhum impacto"], "correta": 0, "explicacao": "Cedo = vida desperdiçada; tarde = risco.", "id": "M14q6", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Na análise de Weibull, um parâmetro de forma β maior que 1 indica:", "opcoes": ["Falhas aleatórias, sem relação com a idade", "Falhas de mortalidade infantil", "Taxa de falha crescente com o tempo (desgaste)", "Que o componente nunca falha"], "correta": 2, "explicacao": "β > 1 = desgaste; β ≈ 1 = aleatório; β < 1 = mortalidade infantil.", "id": "M14q7", "b": 1, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Uma troca registrada com data e horímetro errados afeta o Weibull porque:", "opcoes": ["O Weibull só usa dados do cliente", "O Weibull ignora o histórico", "Altera o ROM do equipamento", "Gera uma vida falsa no histórico, distorcendo a curva"], "correta": 3, "explicacao": "O modelo aprende com o histórico lançado no GFC.", "id": "M14q8", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "O plano de troca orienta, com meses de antecedência:", "opcoes": ["Somente a compra de pneus", "A negociação comercial (CSP) e a programação de reforma (Engenharia/CRC)", "A escala de operadores", "A troca de CSPs"], "correta": 1, "explicacao": "É o que transforma o RMC em decisão.", "id": "M14q9", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "'O plano de troca é tão bom quanto…'", "opcoes": ["A estimativa de vida útil que o alimenta", "O número de sites atendidos", "A quantidade de CSPs", "O tamanho do relatório"], "correta": 0, "explicacao": "Por isso o Weibull foi integrado.", "id": "M14q10", "b": 1, "e": "C"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Explique, como se fosse para um CSP, a diferença entre vida útil média fixa e curva de risco — e por que os dados que você lança todo mês determinam a qualidade desse modelo.", "esperado": "Vida média trata todo componente igual; a curva mostra como o risco cresce com as horas, usando o histórico real. Trocas, horímetros e reformas errados geram vidas falsas e uma curva distorcida, levando a forecast e estoque errados.", "id": "M14q11", "b": 4, "e": "A"}
      ]
    },
    {
      id: "M15", fase: 4, horasEstudo: 8, horasIT: 4, itTitulo: "IT — Fechamento mensal completo do GFC", notaMin: 8, processo: "Ciclo completo",
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
        {"tipo": "mc", "peso": 1, "enunciado": "Qual a ordem correta do ciclo mensal?", "opcoes": ["RMC → horímetros → trocas → ROM → indicadores", "Forecast → RMC → trocas → horímetros", "Trocas → estados e horímetros → forecast e 135% → ROM → indicadores → RMC", "Indicadores → ROM → horímetros → trocas → RMC"], "correta": 2, "explicacao": "Dados base primeiro, análises e relatórios depois.", "id": "M15q1", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Dia 27 de um mês de 30 dias: três equipamentos ainda sem horímetro inserido pelo CSP. Situação:", "opcoes": ["Está dentro do prazo", "Deixar para o mês seguinte", "O prazo (5 dias antes do fechamento) já passou; cobrar e tratar ainda dentro do mês", "Repetir o último dado sem falar com ninguém"], "correta": 2, "explicacao": "Tudo deve ser consolidado no mês de competência.", "id": "M15q2", "b": 3, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "O CP informou uma troca, mas o componente que entrou é reformado e ainda não tem reforma registrada. Antes do tracking:", "opcoes": ["Registrar a reforma e colocá-lo em Estoque no site e com o consultor do equipamento", "Fazer o tracking assim mesmo", "Cadastrar o componente de novo como novo", "Descartar o componente"], "correta": 0, "explicacao": "Pré-requisito do tracking.", "id": "M15q3", "b": 3, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Um equipamento Hibernado no GFC aparece com horímetro do cliente 200 h maior que no mês passado. O que isso indica?", "opcoes": ["Que a importação está certa", "Erro do ROM", "Nada; hibernado sempre acumula horas", "Provável inconsistência de estado: ele pode ter voltado a operar; confirmar e corrigir estado e ROM"], "correta": 3, "explicacao": "Estado × HT incoerente = X vermelho.", "id": "M15q4", "b": 3, "e": "A"},
        {"tipo": "mc", "peso": 1, "enunciado": "Componente entrou na janela de 180 dias, e o CSP informa que o cliente vai postergar a parada. Ação:", "opcoes": ["Não lançar nada até a troca", "Registrar a nova data no Forecast Comercial com a justificativa em Notas", "Marcar Reforma Confirmada", "Esperar o 135%"], "correta": 1, "explicacao": "Forecast atualizado e contexto registrado.", "id": "M15q5", "b": 1, "e": "R"},
        {"tipo": "mc", "peso": 1, "enunciado": "Na Fase 4 a revisão passa a ser por amostragem. O que isso muda para você?", "opcoes": ["Não precisa mais conferir datas", "A responsabilidade pela conferência dos dados passa a ser sua", "A instrutora revisa tudo do mesmo jeito", "Os prazos deixam de valer"], "correta": 1, "explicacao": "Autonomia = conferência própria.", "id": "M15q6", "b": 3, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual é o critério de saída da Fase 4?", "opcoes": ["Gerar um RMC", "Passar em todos os testes objetivos", "Acompanhar um caso de 135%", "Ciclo executado com autonomia e plano de desenvolvimento dos próximos 90 dias definido"], "correta": 3, "explicacao": "Avaliação final da imersão.", "id": "M15q7", "b": 1, "e": "C"},
        {"tipo": "mc", "peso": 1, "enunciado": "Qual destas tratativas vai por e-mail, e não por Teams?", "opcoes": ["Alerta de componente acima de 135%", "Pedido rápido de saldo de estoque ao CSP", "Aviso de movimentação sistêmica imediata", "Confirmação de que o CSP já abriu o ciclo de reforma"], "correta": 0, "explicacao": "Alertas e solicitações formais = e-mail.", "id": "M15q8", "b": 1, "e": "R"},
        {"tipo": "aberta", "peso": 3, "enunciado": "Descreva o fluxo mensal completo do GFC com suas palavras, do dia 15 ao RMC: quem faz o quê, em que canal e o que cada etapa protege.", "esperado": "Trocas (e-mail ao CP até dia 15, CSP via Teams, baixa pela Eng) → horímetros (pedido 1 semana antes, CSP até 5 dias antes) → estados → forecast 180 dias → 135% → ROM → indicadores (100 pts) → RMC. Cada etapa protege a seguinte.", "id": "M15q9", "b": 4, "e": "C"},
        {"tipo": "pratica", "peso": 4, "enunciado": "Feche o ciclo mensal dos sites designados. Anexe o checklist do fechamento (feito, pendências, correções apontadas na revisão por amostragem).", "esperado": "Ciclo completo no prazo, sem retrabalho relevante, pendências tratadas, canais corretos.", "id": "M15q10", "b": 4, "e": "P"},
        {"tipo": "aberta", "peso": 2, "enunciado": "Proponha seu plano de desenvolvimento para os próximos 90 dias: sites que quer assumir, processo que quer aprofundar e como vai medir sua evolução.", "esperado": "Plano concreto com sites, processos (ex.: P4, P5, P8, P9), metas e forma de acompanhamento.", "id": "M15q11", "b": 4, "e": "C"}
      ]
    }
  ]
};
