
const DATA = [
  // ══ AULA 01 ══
  {
    section: 0,
    questions: [
      {
        q: "Que elemento determina o primeiro conteúdo em uma página web?",
        opts: [
          "string",
          "&lt;head&gt;, &lt;/head&gt;",
          "css",
          "bold"
        ],
        answer: 1
      },
      {
        q: "O que são tags?",
        opts: ["Código de marcação delimitado pelos sinais de &lt;&gt; e &lt;/&gt;", "Hashtags de redes sociais", "Elemento de estilização", "Componete completo de uma página"],
        answer: 0
      },
      {
        q: "O que faz a linguagem de marcação de hipertexto?",
        opts: [
          "Aplica animações na web",
          "Define o significado e estrutura do conteúdo da web",
          "Determina o comportamento de uma página",
          "Conteúdo completo de uma página"
        ],
        answer: 1
      },
      {
        q: "O que são atributos?",
        opts: [
          "O cabeçalho de uma página",
          "Palavras especiais dentro da tag de abertura de um elemento HTML",
          "HTML, CSS, JavaScript e React",
          "Mídias exportadas de uma API"
        ],
        answer: 1
      },
      {
        q: "Qual tag deixa o texto em negrito?",
        opts: ["&lt;i&gt;", "&lt;bold&gt;", "&lt;string&gt;", "src"],
        answer: 1
      },
      {
        q: "Qual tag é usada para criar um parágrafo?",
        opts: [
          "&lt;paragrafo&gt;",
          "&lth1&gt;",
          "&lt;p&gt;",
          "&lt;b&gt;"
        ],
        answer: 2
      },
      {
        q: "Para o que é utilizada a tag &lt;html lang=&gt;?",
        opts: ["Determinar o idioma que será utilizado na estrutura",
         "Traduzir os elementos da página", 
         "Determinar uma linguagem de programação",
          "Limitar o uso de um site por região"],
        answer: 0
      },
      {
        q: "Qual das seguintes tags HTML é a mais adequada para indicar que um texto possui grande importância ou urgência, exibindo-o em negrito por padrão?",
        opts: [
          "&lt;bold&gt;",
          "&ltstrong&gt;",
          "&ltb&gt;",
          "&ltem&gt;"
        ],
        answer: 1
      },
      {
        q: "No desenvolvimento com HTML5, qual tag semântica é a mais adequada para envolver a seção principal de links de navegação de um site?",
        opts: [
          "&lt;menu&gt;",
          "&lt;links&gt;",
          "&ltnav&gt;",
          "&ltsection&gt;"
        ],
        answer: 2
      },
      {
        q: "Ao criar um link usando a tag <code>&lt;a&gt;</code>, qual atributo e valor devem ser adicionados para garantir que a página de destino seja aberta em uma nova aba do navegador?",
        opts: [`target="_blank"`,
         `rel="newtab"`,
          `href="_new"`,
           `window="blank"`],
        answer: 0
      }
    ]
  },

  // ══ AULA 02 ══
  {
    section: 1,
    questions: [
      {
        q: "O que significa a sigla CSS no desenvolvimento web?",
        opts: [
          "Computer Style Sheet",
          "Cascanding Style Sheets",
          "Creative Style Systems",
          "Color Style Sheets"
        ],
        answer: 1
      },
      {
        q: "Qual propriedade é utilizada para alterar a cor do um texto de um elemento?",
        opts: [
          "text-color",
          "font-color",
          "color",
          "background-color",
        ],
        answer: 2
      },
      {
        q: "O que representa a extensão .css em um projeto web?",
        opts: ["Comportamento e interação da página", 
          "Estilo visual (cores, fontes, layout)",
           "Estrutura da página",
            "Dados estruturados em formato JSON"
          ],
        answer: 1
      },
      {
        q: "Qual propriedade controla o tamanho do texto (fonte) no CSS?",
        opts: ["text-size", 
          "font-style",
           "font-size",
            "text-scale"
          ],
        answer: 2
      },
      {
        q: "Para deixar um texto em negrito utilizando CSS, qual propriedade e valor devem ser aplicados?",
        opts: [
          "font-style: bold",
          "text-transform: uppercase",
          "font-weight: bold",
          "font-thickness: heavy"
        ],
        answer: 2
      },
      {
        q: "Qual propriedade é usada para centralizar um texto dentro do seu bloco?",
        opts: [
          "text-align: center",
          "align-content: center",
          "text-center: true",
          "vertical-align: middle"
        ],
        answer: 0
      },
      {
        q: "Qual é a propriedade correta para adicionar um espaçamento INTERNO entre um conteúdo e a borda de um elemento?",
        opts: ["margin",
           "padding",
            "border-spacing",
             "gap"],
        answer: 1
      },
      {
        q: "Qual propriedade cria um espaçamento EXTERNO, ou seja, uma distancia do lado de fora da borda do elemento?",
        opts: ["padding", 
          "outline",
           "margin",
            "spacing"],
        answer: 2
      },
      {
        q: "Como removemos o sublinhado padrão dos links CSS?",
        opts: [
          "text-style:none",
          "link-underline",
          "text-decoration:none",
        "font-decoration:none",
        ],
        answer: 2
      },
      {
        q:"Como aplicamos uma cor de fundo a um elemento usando CSS?",
        opts: ["background-color",
           "bgcolor",
            "color-background",
             "surface-color",
        ],
        answer: 0
        
      }
    ]
  },

  // ══ AULA 03 ══
  {
    section: 2,
    questions: [
      {
        q: "Qual palavra-chave é utilizada para declarar uma variável cujo valor NÃO pode ser alterado ou reatribuído?",
        opts: [
          "var",
          "let",
          "const",
          "immutable"
        ],
        answer: 2
      },
      {
        q: "Como escrevemos a mensagem 'Olá Mundo' no console do navegador para fins de teste ou depuração?",
        opts: [
          "console.log('Olá Mundo')",
          "print('Olá Mundo')",
          "document.write('Olá Mundo')",
          "alert.show('Olá Mundo')"
        ],
        answer: 0
      },
      {
        q: "Qual dos seguintes tipos de dados representa um valor lógico de verdadeiro ou falso no JavaScript?",
        opts: [
          "String",
          "Boolean",
          "Number",
          "Undefined"
        ],
        answer: 1
      },
      {
        q: "Qual símbolo é utilizado para fazer um comentário de apenas UMA linha no código JavaScript?",
        opts: [
          "",
          "# comentário",
          "/* comentário */",
          "// comentário"
        ],
        answer: 3
      },
      {
        q: "Qual operador é utilizado para verificar se dois valores são estritamente iguais, testando o valor E o tipo do dado ao mesmo tempo?",
        opts: [
          "=",
          "==",
          "===",
          "equal"
        ],
        answer: 2
      },
      {
        q: "Como se chama a estrutura de dados utilizada para armazenar uma lista ordenada de elementos dentro de colchetes, como [1, 2, 3]?",
        opts: [
          "Array",
          "Object",
          "Function",
          "String"
        ],
        answer: 0
      },
      {
        q: "Qual estrutura de repetição (loop) usamos quando queremos executar um bloco de código enquanto uma condição específica for verdadeira?",
        opts: [
          "if",
          "while",
          "for-each",
          "switch"
        ],
        answer: 1
      },
      {
        q: "O que o método 'document.getElementById()' faz no JavaScript?",
        opts: [
          "Cria um novo elemento HTML na página",
          "Deleta um elemento do banco de dados",
          "Seleciona um elemento HTML da página através do seu atributo ID",
          "Altera o estilo CSS de todas as tags da página"
        ],
        answer: 2
      },
      {
        q: "Como definimos uma função padrão no JavaScript?",
        opts: [
          "def minhaFuncao() { }",
          "function minhaFuncao() { }",
          "void minhaFuncao() { }",
          "create minhaFuncao() { }"
        ],
        answer: 1
      },
      {
        q: "Qual evento do JavaScript é disparado quando um usuário clica em um botão na página HTML?",
        opts: [
          "onhover",
          "onchange",
          "onsubmit",
          "onclick"
        ],
        answer: 3
      }
    ]
  },

  // ══ AULA 04 ══
  {
    section: 3,
    questions: [
      {
        q: "O que é Virtualização no contexto computacional?",
        opts: [
          "O processo de comprimir arquivos para economizar espaço em disco",
          "Uma técnica de programação para criar interfaces visuais responsivas",
          "A criação de uma versão virtual de algo (hardware, SO ou rede), permitindo rodar múltiplos ambientes isolados em uma única máquina física",
          "Um método de criptografia para proteger dados em trânsito"
        ],
        answer: 2
      },
      {
        q: "Qual é uma diferença fundamental entre uma Máquina Virtual (VM) e um Container Docker?",
        opts: [
          "A VM usa menos recursos e inicializa em segundos; o Container demora minutos",
          "A VM inclui um sistema operacional próprio e tem tamanho em gigabytes; o Container compartilha o kernel do SO hospedeiro e tem tamanho em megabytes",
          "O Container exige hardware dedicado; a VM pode rodar em qualquer máquina",
          "A VM é gratuita e open-source; o Container é uma tecnologia proprietária e paga"
        ],
        answer: 1
      },
      {
        q: "O que é uma IMAGEM (Image) no Docker?",
        opts: [
          "Uma captura de tela do ambiente de desenvolvimento para fins de documentação",
          "Um container que já está em execução e respondendo a requisições",
          "Um modelo somente leitura com todas as instruções para criar um container — como uma 'receita de bolo'",
          "O arquivo de configuração que define variáveis de ambiente do projeto"
        ],
        answer: 2
      },
      {
        q: "O que é um CONTAINER no Docker?",
        opts: [
          "O arquivo de texto com instruções para construir uma imagem personalizada",
          "Uma instância em execução de uma imagem — você pode ter vários containers rodando a partir da mesma imagem",
          "O repositório público onde imagens Docker são armazenadas e compartilhadas",
          "Um tipo especial de máquina virtual com acesso a recursos de hardware"
        ],
        answer: 1
      },
      {
        q: "Qual é a função de um DOCKERFILE?",
        opts: [
          "Gerenciar múltiplos containers e definir como eles se comunicam",
          "Armazenar credenciais de acesso ao Docker Hub de forma segura",
          "Arquivo de texto com instruções para construir uma imagem personalizada — como um script de configuração do ambiente",
          "Registrar logs de execução dos containers em produção"
        ],
        answer: 2
      },
      {
        q: "O que é o DOCKER HUB?",
        opts: [
          "A interface gráfica local para gerenciar containers no Windows",
          "Um repositório público de imagens Docker — como o GitHub, mas para imagens",
          "O daemon responsável por executar containers no sistema operacional",
          "Uma ferramenta para orquestrar múltiplos containers em produção"
        ],
        answer: 1
      },
      {
        q: "O que faz a flag '-d' no comando 'docker run -d -p 80:80 nginx'?",
        opts: [
          "Define o nome do container como 'detached'",
          "Desativa o modo de segurança do container",
          "Roda o container em modo Detached (background), sem travar o terminal",
          "Deleta automaticamente o container após ele ser encerrado"
        ],
        answer: 2
      },
      {
        q: "No comando 'docker run -d -p 80:80 nginx', o que significa '-p 80:80'?",
        opts: [
          "Define a quantidade máxima de processos simultâneos como 80",
          "Mapeia a porta 80 do container para a porta 80 do computador hospedeiro (port mapping)",
          "Conecta o container à rede local na faixa 80.80.x.x",
          "Especifica que o container deve usar 80 MB de memória RAM"
        ],
        answer: 1
      },
      {
        q: "Como verificar se o Docker está corretamente instalado no computador?",
        opts: [
          "Abrir o gerenciador de tarefas e verificar se o processo 'docker.exe' está ativo",
          "Reiniciar o computador e aguardar a mensagem de confirmação do Docker",
          "Executar o comando 'docker --version' no terminal e verificar se exibe a versão instalada",
          "Acessar o Painel de Controle e verificar em 'Programas Instalados'"
        ],
        answer: 2
      },
      {
        q: "Qual é a principal vantagem do Docker em relação a instalar as ferramentas diretamente no computador?",
        opts: [
          "O Docker aumenta a velocidade de processamento do computador em até 10x",
          "O Docker elimina a necessidade de aprender comandos de terminal",
          "O Docker garante portabilidade e isolamento do ambiente, evitando conflitos de versão e facilitando o onboarding de novos desenvolvedores",
          "O Docker permite programar sem conexão com a internet"
        ],
        answer: 2
      }
    ]
  }
];

// ── State ──
const state = { answers: [{}, {}, {}, {}], checked: [false, false, false, false] };

// ── Render questions ──
function renderAll() {
  DATA.forEach(({ section, questions }) => {
    const container = document.getElementById(`questions-${section}`);
    container.innerHTML = '';
    questions.forEach((q, qi) => {
      const letters = ['A','B','C','D'];
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `card-${section}-${qi}`;
      card.innerHTML = `
        <div class="q-header">
          <div class="q-number">${qi + 1}</div>
          <div class="q-text">${q.q}</div>
        </div>
        <div class="options" id="opts-${section}-${qi}">
          ${q.opts.map((o, oi) => `
            <div class="option" id="opt-${section}-${qi}-${oi}" onclick="selectOption(${section}, ${qi}, ${oi})">
              <div class="option-letter">${letters[oi]}</div>
              <span>${o}</span>
            </div>
          `).join('')}
        </div>
        <div class="feedback-msg" id="fb-${section}-${qi}"></div>
      `;
      container.appendChild(card);
    });
  });
  renderGabarito();
}

function selectOption(sec, qi, oi) {
  if (state.checked[sec]) return;
  state.answers[sec][qi] = oi;
  // Update UI
  const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
  opts.forEach((el, idx) => {
    el.classList.toggle('selected', idx === oi);
  });
  updateProgress(sec);
}

function updateProgress(sec) {
  const answered = Object.keys(state.answers[sec]).length;
  const pct = (answered / 10) * 100;
  document.getElementById(`prog-${sec}`).style.width = pct + '%';
}

function checkSection(sec) {
  if (state.checked[sec]) return;
  let score = 0;
  const questions = DATA[sec].questions;
  questions.forEach((q, qi) => {
    const chosen = state.answers[sec][qi];
    const fb = document.getElementById(`fb-${sec}-${qi}`);
    if (chosen === undefined) {
      // not answered
      const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
      opts[q.answer].classList.add('correct');
      fb.className = 'feedback-msg show err';
      fb.innerHTML = '⚠️ Não respondida. A alternativa correta está destacada em verde.';
      return;
    }
    const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
    if (chosen === q.answer) {
      opts[chosen].classList.remove('selected');
      opts[chosen].classList.add('correct');
      fb.className = 'feedback-msg show ok';
      fb.innerHTML = '✅ Correto!';
      score++;
    } else {
      opts[chosen].classList.remove('selected');
      opts[chosen].classList.add('wrong');
      opts[q.answer].classList.add('correct');
      fb.className = 'feedback-msg show err';
      fb.innerHTML = `❌ Incorreto. A resposta correta é a alternativa <strong>${['A','B','C','D'][q.answer]}</strong>.`;
    }
  });
  state.checked[sec] = true;
  document.getElementById(`scoreVal-${sec}`).innerHTML = `${score} <span>/ 10</span>`;
  document.getElementById(`prog-${sec}`).style.width = '100%';
}

function resetSection(sec) {
  state.answers[sec] = {};
  state.checked[sec] = false;
  document.getElementById(`scoreVal-${sec}`).innerHTML = `— <span>/ 10</span>`;
  document.getElementById(`prog-${sec}`).style.width = '0%';
  DATA[sec].questions.forEach((_, qi) => {
    const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
    opts.forEach(o => { o.classList.remove('selected','correct','wrong'); });
    const fb = document.getElementById(`fb-${sec}-${qi}`);
    fb.className = 'feedback-msg';
    fb.innerHTML = '';
  });
}

// ── Tabs ──
function showTab(idx) {
  document.querySelectorAll('.section').forEach((s, i) => s.classList.toggle('active', i === idx));
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
}

// ── Gabarito for guide tab ──
function renderGabarito() {
  const container = document.getElementById('gabarito-list');
  const labels = ['Aula 01 — Iniciação à TI','Aula 02 — Arquivos & Ética','Aula 03 — Git & Projetos','Aula 04 — Docker'];
  const letters = ['A','B','C','D'];
  container.innerHTML = DATA.map(({ section, questions }) => `
    <div style="background:white;border:1px solid var(--border);border-radius:var(--radius);margin-bottom:20px;overflow:hidden">
      <div style="background:var(--blue-deep);color:white;padding:14px 20px;font-family:'Syne',sans-serif;font-weight:700;font-size:14px">
        ${labels[section]}
      </div>
      <div style="padding:18px 20px">
        ${questions.map((q, qi) => `
          <div style="display:flex;align-items:flex-start;gap:14px;padding:10px 0;border-bottom:1px solid var(--border);${qi===questions.length-1?'border-bottom:none':''}">
            <span style="flex-shrink:0;font-family:'Syne',sans-serif;font-weight:700;font-size:12px;color:var(--text-light);min-width:24px">Q${qi+1}</span>
            <div style="flex:1">
              <div style="font-size:13px;margin-bottom:6px;line-height:1.4">${q.q}</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px">
                ${q.opts.map((o, oi) => `
                  <span style="padding:4px 10px;border-radius:6px;font-size:11.5px;border:1px solid;
                    ${oi===q.answer ? 'background:rgba(0,201,167,0.1);border-color:rgba(0,201,167,0.4);color:#007A63;font-weight:600' : 'background:var(--bg);border-color:var(--border);color:var(--text-light)'}">
                    <strong>${letters[oi]}.</strong> ${o}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

renderAll();
