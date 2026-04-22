# AI Development Workflow

Un workflow semplice per usare l'AI nello sviluppo senza perdere controllo.

## Perché esiste

L'AI accelera il lavoro, ma porta anche un rischio chiaro: scrivere troppo presto.

Il punto non è generare più codice. Il punto è arrivare al codice dopo aver capito il contesto, dopo aver fatto convergere il piano e dopo aver definito task chiari.

Qui l'idea di fondo è pratica:

- capire bene prima di decidere
- decidere bene prima di implementare
- iterare dove costa poco
- validare e spiegare prima di chiudere

---

## Workflow

<div class="workflow-diagram" style="position: relative; width: min(100%, 600px); margin: 0 0 1rem;">
  <svg viewBox="0 0 600 480" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Workflow AI development" style="display: block; width: 100%; height: auto;">
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
    <line x1="180" y1="40" x2="180" y2="67" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="110" x2="180" y2="137" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="180" x2="180" y2="207" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="250" x2="180" y2="277" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="180" y1="320" x2="180" y2="347" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="310" y1="85" x2="372" y2="85" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <text x="388" y="90" font-size="12" fill="#666">
      <tspan x="388" dy="0">Loop fino a</tspan>
      <tspan x="388" dy="12">convergenza</tspan>
    </text>
    <line x1="372" y1="100" x2="316" y2="100" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <line x1="310" y1="295" x2="372" y2="295" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
    <text x="388" y="300" font-size="12" fill="#666">
      <tspan x="388" dy="0">Loop fino a</tspan>
      <tspan x="388" dy="12">convergenza</tspan>
    </text>
    <line x1="372" y1="310" x2="316" y2="310" stroke="#555" stroke-width="2" stroke-linecap="round" marker-end="url(#arrow)"/>
  </svg>

  <div aria-hidden="false">
    <a href="/ai-development-workflow/comprendere.html" aria-label="Vai alla pagina Fase 0: Comprendere" title="Fase 0: Comprendere" style="position: absolute; left: 8.4%; top: 1.1%; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 0</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-0-comprendere" aria-label="Vai al prompt della Fase 0: Comprendere" title="Prompt Fase 0" style="position: absolute; left: 44.2%; top: 1.7%; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/progettare.html" aria-label="Vai alla pagina Fase 1: Progettare" title="Fase 1: Progettare" style="position: absolute; left: 8.4%; top: 18.0%; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 1</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-1-progettare" aria-label="Vai al prompt della Fase 1: Progettare" title="Prompt Fase 1" style="position: absolute; left: 44.2%; top: 16.6%; display: grid; place-items: center; width: 3.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/scomporre.html" aria-label="Vai alla pagina Fase 2: Scomporre" title="Fase 2: Scomporre" style="position: absolute; left: 8.4%; top: 34.9%; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 2</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-2-scomporre" aria-label="Vai al prompt della Fase 2: Scomporre" title="Prompt Fase 2" style="position: absolute; left: 44.2%; top: 30.4%; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/implementare.html" aria-label="Vai alla pagina Fase 3: Implementare" title="Fase 3: Implementare" style="position: absolute; left: 8.4%; top: 51.8%; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 3</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-3-implementare" aria-label="Vai al prompt della Fase 3: Implementare" title="Prompt Fase 3" style="position: absolute; left: 44.2%; top: 45.4%; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/validare.html" aria-label="Vai alla pagina Fase 4: Validare" title="Fase 4: Validare" style="position: absolute; left: 8.4%; top: 68.7%; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 4</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-4-validare" aria-label="Vai al prompt della Fase 4: Validare" title="Prompt Fase 4" style="position: absolute; left: 44.2%; top: 59.8%; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
    <a href="/ai-development-workflow/spiegare.html" aria-label="Vai alla pagina Fase 5: Spiegare" title="Fase 5: Spiegare" style="position: absolute; left: 8.4%; top: 85.6%; width: 40.8%; height: 9.5%; display: block; text-decoration: none;"><span aria-hidden="true" style="display: block; width: 100%; height: 100%; opacity: 0;">Fase 5</span></a>
    <a href="/ai-development-workflow/libreria-prompt.html#fase-5-spiegare" aria-label="Vai al prompt della Fase 5: Spiegare" title="Prompt Fase 5" style="position: absolute; left: 44.2%; top: 74.4%; display: grid; place-items: center; width: 4.7%; min-width: 24px; max-width: 28px; aspect-ratio: 1; color: inherit; text-decoration: none; font-size: clamp(0.95rem, 1.6vw, 1.15rem); line-height: 1; border-radius: 6px;">📜</a>
  </div>
</div>

---

## Principi

**1. Pianificare costa meno che correggere**  
L'errore trovato prima costa poco.  
Lo stesso errore trovato nel codice costa molto di più.

**2. Bisogna capire il contesto prima del piano**  
Se esiste già una soluzione, va capita prima di cambiarla.  
Se non esiste, il contesto va costruito bene.

**3. La qualità nasce dall'iterazione**  
Il primo piano non basta.  
Il primo review pass non basta.

**4. Il codice va saputo spiegare**  
Se non sai raccontare come funziona, non lo stai controllando davvero.

---

## Come usarlo

Usa questo flusso per ogni task non banale.

Inizia da Comprendere. Poi investi davvero tempo in Progettare: crea il piano, criticalo, miglioralo, ripeti. Quando il piano converge, scomponilo in task piccoli e implementa un task alla volta. Infine valida e spiega.

L'obiettivo non è produrre più codice. È produrre codice capito, verificato e difendibile.
