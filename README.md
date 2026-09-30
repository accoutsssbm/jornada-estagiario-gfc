[README.md](https://github.com/user-attachments/files/32879922/README.md)
# jornada-estagiario-gfv# Trilha GFC — Sotreq

Interface de controle de aprendizagem dos estagiários do GFC (Gestão de Frotas e Componentes), Engenharia de Mineração Norte.

A trilha segue o PDCA do plano de imersão: 4 fases, 15 módulos, 60 dias úteis (12 semanas). Cada módulo é um ciclo PDCA:

| Etapa | No módulo |
|---|---|
| **P** — Planejar | Objetivo, prazo em dias úteis e nota mínima definidos |
| **D** — Executar | Estudo do conteúdo (manual + estratégia), checklist, autoavaliação de domínio, anotações |
| **C** — Checar | Ao fim do prazo o teste libera; a instrutora corrige e dá feedback |
| **A** — Agir | Nota ≥ mínima: aprova e libera o próximo. Abaixo: reciclagem com novo prazo |

## Arquivos

```
index.html     a aplicação (instrutora e estagiário)
curriculo.js   conteúdo da trilha: fases, módulos, passos, "por que importa", questões e gabaritos
config.js      repositório onde fica a base de dados
```

A base de dados é um único arquivo JSON (`data/db.json`) criado automaticamente na primeira gravação.

## Publicar no GitHub (recomendado: 2 repositórios)

A página pode ser pública, mas a base tem nomes, respostas e notas. Por isso a recomendação é separar:

- **`trilha-gfc`** (público) — o site, publicado no GitHub Pages.
- **`trilha-gfc-dados`** (privado) — só a base de dados.

### 1. Repositório da base (privado)
1. Em github.com → **New repository** → nome `trilha-gfc-dados` → **Private** → marque *Add a README* → **Create**.

### 2. Repositório do site (público) + GitHub Pages
1. Crie o repositório `trilha-gfc` (Public).
2. Suba `index.html`, `curriculo.js`, `config.js` e este `README.md`.
3. Edite `config.js`:
   ```js
   github: { owner: "SEU_USUARIO", repo: "trilha-gfc-dados", branch: "main", path: "data/db.json" }
   ```
4. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save.**
5. Em 1–2 minutos o site fica em `https://SEU_USUARIO.github.io/trilha-gfc/`.

### 3. Tokens de acesso (um por pessoa)
Cada pessoa que usa a trilha precisa de um token para ler e gravar a base.

1. GitHub → foto → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
2. **Repository access → Only select repositories →** `trilha-gfc-dados`.
3. **Permissions → Repository permissions → Contents → Read and write.**
4. Defina a validade (ex.: 90 dias, a duração da imersão) e gere.
5. Na trilha: **Configurar armazenamento** → cole o token → **Testar conexão** → **Salvar e reconectar**.

Para o estagiário: gere um token separado com o mesmo escopo (só o repositório de dados) e entregue a ele. Assim você revoga o acesso dele quando a imersão terminar, sem mexer no seu. Se preferir que cada um tenha conta própria, crie uma organização gratuita no GitHub, mova o repositório de dados para ela e adicione o estagiário como membro.

O token fica salvo só no navegador de quem colou. **Nunca coloque o token no `config.js`.**

## Primeiro uso
1. Abra o site → **Primeiro acesso** → crie seu perfil de instrutora (nome + PIN).
2. **Painel → Cadastrar estagiário**: nome, data de início e PIN.
3. O estagiário abre o site, configura o token dele, entra com nome + PIN e inicia o M01.

## Rotina
- **Estagiário**: abre o módulo → inicia (o prazo começa a contar) → estuda, marca o checklist, registra dúvidas → no fim do prazo faz o teste.
- **Instrutora**: em **Avaliações**, as objetivas já chegam corrigidas; você pontua dissertativas e práticas, valida o nível de domínio e escreve o feedback. A decisão (avança ou recicla) sai da nota.
- **Conversas semanais**: registre os 30 minutos semanais e os gatilhos de ajuste ou aceleração.
- **Acompanhamento**: por estagiário, veja módulos conforme, assertividade do tempo (planejado ÷ real), reciclagens, recálculo da previsão de término e a matriz processo × domínio.
- **Ajustar** (por módulo): prazo, nota mínima, escopo (dispensar módulo), liberar teste antes do prazo, reabrir para reciclagem.

## Editar o conteúdo
Tudo o que o estagiário lê está em `curriculo.js`. Prazos-padrão (`dias`), nota mínima (`notaMin`), textos e questões podem ser editados direto ali. Você também pode criar e desativar questões pela tela **Banco de questões**, sem editar código.

## Limites e cuidados
- O PIN é uma trava de conveniência, não uma segurança forte: quem tem o token consegue editar o JSON direto no GitHub.
- O gabarito das questões objetivas está em `curriculo.js`, que é público se o repositório do site for público. O peso maior das avaliações está nas questões dissertativas e práticas, corrigidas por você. Se quiser esconder também o conteúdo, torne o repositório do site privado (GitHub Pages em repositório privado exige plano pago) ou abra o `index.html` direto do computador — funciona igual.
- Cada gravação vira um commit no repositório de dados: há histórico completo de alterações. Checklist e anotações são agrupados para não gerar um commit por clique.
- **Configurações → Baixar base** gera uma cópia de segurança em JSON a qualquer momento.
- Confirme com a TI da Sotreq se é permitido guardar dados de treinamento no GitHub.
