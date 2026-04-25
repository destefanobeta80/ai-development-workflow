# AI Development Workflow

Un workflow semplice per usare l'AI nello sviluppo.

## Obiettivo

L'AI accelera il lavoro, ma porta anche il rischio di non comprendere cosa si è prodotto.

Il punto non è solo generare più codice. È importante arrivare al codice dopo aver capito il contesto, definito un buon piano e preparato task precisi e puntuali.

Il workflow produce artefatti semplici da riusare: contesto, piano, task, codice validato e spiegazione finale.

## Workflow

<div class="workflow-diagram" style="position: relative; width: min(100%, 600px); margin: 0 0 1rem;">
  <svg viewBox="0 0 600 400" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Workflow AI development" style="display: block; width: 100%; height: auto;">
    <defs>
      <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#555" />
      </marker>
    </defs>
    <rect x="50" y="0" width="260" height="40" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/>
    <text x="180" y="25" text-anchor="middle" font-size="14">Fase 0: Comprendere</text>
    <rect x="50" y="70" width="260" height="40" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/>
    <text x="180" y="95" text-anchor="middle" font-size="14">Fase 1: Progettare</text>
    <rect x="50" y="140" width="260" height="40" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/>
    <text x="180" y="165" text-anchor="middle" font-size="14">Fase 2: Scomporre</text>
    <rect x="50" y="210" width="260" height="40" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/>
    <text x="180" y="235" text-anchor="middle" font-size="14">Fase 3: Implementare</text>
    <rect x="50" y="280" width="260" height="40" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/>
    <text x="180" y="305" text-anchor="middle" font-size="14">Fase 4: Validare</text>
    <rect x="50" y="350" width="260" height="40" rx="8" fill="#fff" stroke="#ccc" stroke-width="2"/>
    <text x="180" y="375" text-anchor="middle" font-size="14">Fase 5: Spiegare</text>
    <line x1="180" y1="40" x2="180" y2="65" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="110" x2="180" y2="135" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="180" x2="180" y2="205" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="250" x2="180" y2="275" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="320" x2="180" y2="345" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <path d="M310 85 H372 V100 H316" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)"/>
    <text x="388" y="90" font-size="12" fill="#666">
      <tspan x="388" dy="0">Loop fino a</tspan>
      <tspan x="388" dy="12">convergenza</tspan>
    </text>
    <path d="M310 155 H372 V170 H316" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)"/>
    <text x="388" y="160" font-size="12" fill="#666">
      <tspan x="388" dy="0">Loop fino a</tspan>
      <tspan x="388" dy="12">convergenza</tspan>
    </text>
    <path d="M310 300 H372 V230 H316" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)"/>
    <text x="388" y="258" font-size="12" fill="#666">
      <tspan x="388" dy="0">Loop fino a</tspan>
      <tspan x="388" dy="12">convergenza</tspan>
    </text>
  </svg>

  <div aria-hidden="false">
    <a href="/ai-development-workflow/comprendere.html" aria-label="Vai alla pagina Fase 0: Comprendere" title="Fase 0: Comprendere" style="position: absolute; left: 8.4%; top: 0px; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 0</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-0-comprendere" aria-label="Vai al prompt della Fase 0: Comprendere" title="Prompt Fase 0" style="position: absolute; left: 44.2%; top: 7px; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/progettare.html" aria-label="Vai alla pagina Fase 1: Progettare" title="Fase 1: Progettare" style="position: absolute; left: 8.4%; top: 69px; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 1</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-1-progettare" aria-label="Vai al prompt della Fase 1: Progettare" title="Prompt Fase 1" style="position: absolute; left: 44.2%; top: 79px; display: grid; place-items: center; width: 3.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/scomporre.html" aria-label="Vai alla pagina Fase 2: Scomporre" title="Fase 2: Scomporre" style="position: absolute; left: 8.4%; top: 140px; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 2</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-2-scomporre" aria-label="Vai al prompt della Fase 2: Scomporre" title="Prompt Fase 2" style="position: absolute; left: 44.2%; top: 148px; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/implementare.html" aria-label="Vai alla pagina Fase 3: Implementare" title="Fase 3: Implementare" style="position: absolute; left: 8.4%; top: 209px; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 3</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-3-implementare" aria-label="Vai al prompt della Fase 3: Implementare" title="Prompt Fase 3" style="position: absolute; left: 44.2%; top: 218px; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/validare.html" aria-label="Vai alla pagina Fase 4: Validare" title="Fase 4: Validare" style="position: absolute; left: 8.4%; top: 278px; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 4</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-4-validare" aria-label="Vai al prompt della Fase 4: Validare" title="Prompt Fase 4" style="position: absolute; left: 44.2%; top: 287px; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/spiegare.html" aria-label="Vai alla pagina Fase 5: Spiegare" title="Fase 5: Spiegare" style="position: absolute; left: 8.4%; top: 347px; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 5</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-5-spiegare" aria-label="Vai al prompt della Fase 5: Spiegare" title="Prompt Fase 5" style="position: absolute; left: 44.2%; top: 357px; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
  </div>
</div>

## Output del workflow

Ogni fase lascia qualcosa di concreto:

- `AGENTS.md`: contesto, obiettivo, vincoli e indicazioni operative
- `PLAN.md`: piano dettagliato e spiegabile
- `TASKS.md`: task pronti per implementare senza rileggere tutto il piano
- codice validato: modifiche limitate ai task e passate in review
- spiegazione finale: cosa è stato fatto, perché e come funziona

## Principi

**1. Pianificare costa meno che programmare**  
Conviene investire più tempo e più token nella pianificazione, dove lo spazio d'azione è più ridotto.  
Il piano è più compatto del codice, e i task sono più operativi del piano completo. Trovare un errore a monte costa meno che scoprirlo quando il codice è già stato scritto.

**2. La qualità nasce dall'iterazione**  
Il primo piano non è quello finale.  
Il primo codice prodotto non è la soluzione migliore.  
Si migliora tornando sul piano, facendo review, correggendo e validando fino a convergenza.

**3. Il lavoro va capito fino in fondo**  
Bisogna capire cosa è stato fatto, perché è stato fatto così e come funziona nel codice.

## Come usarlo

Il sito è organizzato per seguire il workflow passo dopo passo.

Dal diagramma puoi aprire la pagina di una fase specifica oppure andare direttamente al prompt collegato.

Il percorso pratico è: chiarire il contesto in `AGENTS.md`, costruire il piano in `PLAN.md`, trasformarlo in `TASKS.md`, implementare un task alla volta, validare il codice e chiudere spiegando il lavoro prodotto.

Dopo le pagine delle fasi trovi la Libreria Prompt, che raccoglie tutti i prompt utili in un unico punto per copiarli e riusarli rapidamente.
