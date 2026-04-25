# AI Development Workflow

Un playbook operativo per usare l'AI nella pianificazione e nello sviluppo di progetti software.

A cura di Matteo De Stefano.

## Obiettivo

L'AI accelera il lavoro, ma porta anche il rischio di non comprendere cosa si è prodotto.

Il punto non è solo generare più codice. È importante arrivare al codice dopo aver capito il contesto, definito un buon piano e preparato task precisi e puntuali.

La soluzione proposta è un workflow in sei fasi che guida il lavoro dall'analisi iniziale alla spiegazione finale: prima si comprende e si progetta, poi si scompone, si implementa, si valida e si chiude sapendo spiegare il codice prodotto.

## Fasi del workflow

<div class="workflow-diagram" style="position: relative; width: min(100%, 600px); margin: 0 0 1rem;">
  <svg viewBox="0 0 460 400" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Workflow AI development" style="display: block; width: 100%; height: auto;">
    <defs>
      <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#555" />
      </marker>
    </defs>
    <rect x="65" y="1" width="230" height="40" fill="#eaf4ff" stroke="#2f6fb3" stroke-width="1"/>
    <text x="180" y="25" text-anchor="middle" font-size="14">Fase 0: Comprendere</text>
    <rect x="65" y="70" width="230" height="40" fill="#eaf4ff" stroke="#2f6fb3" stroke-width="1"/>
    <text x="180" y="95" text-anchor="middle" font-size="14">Fase 1: Progettare</text>
    <rect x="65" y="140" width="230" height="40" fill="#eaf4ff" stroke="#2f6fb3" stroke-width="1"/>
    <text x="180" y="165" text-anchor="middle" font-size="14">Fase 2: Scomporre</text>
    <rect x="65" y="210" width="230" height="40" fill="#eaf4ff" stroke="#2f6fb3" stroke-width="1"/>
    <text x="180" y="235" text-anchor="middle" font-size="14">Fase 3: Implementare</text>
    <rect x="65" y="280" width="230" height="40" fill="#eaf4ff" stroke="#2f6fb3" stroke-width="1"/>
    <text x="180" y="305" text-anchor="middle" font-size="14">Fase 4: Validare</text>
    <rect x="65" y="350" width="230" height="40" fill="#eaf4ff" stroke="#2f6fb3" stroke-width="1"/>
    <text x="180" y="375" text-anchor="middle" font-size="14">Fase 5: Spiegare</text>
    <line x1="180" y1="41" x2="180" y2="65" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="110" x2="180" y2="135" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="180" x2="180" y2="205" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="250" x2="180" y2="275" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="320" x2="180" y2="345" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <path d="M295 85 H372 V100 H301" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)"/>
    <text x="388" y="90" font-size="12" fill="#666">
      <tspan x="388" dy="0">Loop fino a</tspan>
      <tspan x="388" dy="12">convergenza</tspan>
    </text>
    <path d="M295 155 H372 V170 H301" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)"/>
    <text x="388" y="160" font-size="12" fill="#666">
      <tspan x="388" dy="0">Loop fino a</tspan>
      <tspan x="388" dy="12">convergenza</tspan>
    </text>
    <path d="M295 300 H372 V230 H301" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)"/>
    <text x="388" y="258" font-size="12" fill="#666">
      <tspan x="388" dy="0">Loop fino a</tspan>
      <tspan x="388" dy="12">convergenza</tspan>
    </text>
  </svg>
</div>

Le fasi del workflow sono:

- **Fase 0: Comprendere**: chiarire contesto, vincoli e obiettivo prima di pensare alla soluzione.
- **Fase 1: Progettare**: costruire un piano solido, iterando fino a convergenza.
- **Fase 2: Scomporre**: trasformare il piano in task atomici e implementabili, iterando fino a coprire tutto il piano.
- **Fase 3: Implementare**: scrivere codice un task alla volta, senza allargare lo scope.
- **Fase 4: Validare**: testare, fare review e correggere fino a convergenza.
- **Fase 5: Spiegare**: terminare il lavoro sapendo spiegare cosa è stato fatto, perché e come funziona.

## Output del workflow

Ogni fase produce un artefatto concreto:

- `AGENTS.md`: contesto, obiettivo, vincoli e indicazioni operative
- `PLAN.md`: piano dettagliato e spiegabile
- `TASKS.md`: task pronti per implementare senza rileggere tutto il piano
- codice validato: modifiche limitate ai task e passate in review
- spiegazione finale: cosa è stato fatto, perché e come funziona

## Principi

**1. Pianificare costa meno che programmare**  
Conviene investire più tempo e più token nella pianificazione, dove lo spazio d'azione è più ridotto.  
Il piano è più compatto dei task, e i task sono più compatti del codice. Individuare problemi a monte costa meno che scoprirli quando il codice è già stato scritto.

**2. La qualità nasce dall'iterazione**  
Il primo piano non è quello finale. Il primo codice prodotto non è la soluzione migliore.  
Analizzare più volte il piano, i task e il codice ne migliora la qualità ad ogni round.
Servono 3-5 ri-lavorazioni affinché il prodotto convergenza a una soluzione stabile.

**3. Il lavoro va capito fino in fondo**  
Bisogna capire cosa è stato fatto, perché e come. La responsabilità del risultato resta sempre della persona: l'AI può aiutare a produrre e verificare, ma non può sostituire il giudizio di chi firma il lavoro.

## Come usarlo

Il sito è organizzato per seguire il workflow passo dopo passo.

Il percorso pratico è: chiarire il contesto in `AGENTS.md`, costruire il piano in `PLAN.md` iterando fino a convergenza, trasformarlo in `TASKS.md` controllando mancanze e dipendenze, implementare un task alla volta, validare il codice iterando fino a convergenza e concludere avendo una comprensione completa del lavoro svolto.

Dopo le pagine delle fasi trovi gli strumenti: la Libreria prompt per copiare i prompt operativi e il Miglioramento continuo per trasformare i feedback degli agenti in istruzioni migliori.
