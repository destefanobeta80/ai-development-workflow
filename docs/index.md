# AI Development Workflow

Un metodo semplice per usare l’AI nello sviluppo senza perdere controllo, qualità e comprensione.

## Perché esiste

L’AI accelera la scrittura del codice, ma introduce rischi:
- codice non capito
- decisioni non difendibili
- bug nascosti

Questo workflow serve a:
- rallentare dove serve (prima)
- accelerare dove ha senso (dopo)

---

## Workflow

Capire → Definire → Progettare 🔁 → Scomporre → Implementare → Validare 🔁 → Spiegare

<svg width="560" height="620" xmlns="http://www.w3.org/2000/svg">

  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L6,3 z" fill="#555" />
    </marker>
  </defs>

  <!-- Boxes -->
  <rect x="50" y="0" width="220" height="40" rx="8" fill="#fff" stroke="#ccc"/>
  <text x="160" y="25" text-anchor="middle" font-size="14">Fase 0: Capire</text>

  <rect x="50" y="70" width="220" height="40" rx="8" fill="#fff" stroke="#ccc"/>
  <text x="160" y="95" text-anchor="middle" font-size="14">Fase 1: Definire</text>

  <rect x="50" y="140" width="220" height="40" rx="8" fill="#fff" stroke="#ccc"/>
  <text x="160" y="165" text-anchor="middle" font-size="14">Fase 2: Progettare</text>

  <rect x="50" y="210" width="220" height="40" rx="8" fill="#fff" stroke="#ccc"/>
  <text x="160" y="235" text-anchor="middle" font-size="14">Fase 3: Scomporre</text>

  <rect x="50" y="280" width="220" height="40" rx="8" fill="#fff" stroke="#ccc"/>
  <text x="160" y="305" text-anchor="middle" font-size="14">Fase 4: Implementare</text>

  <rect x="50" y="350" width="220" height="40" rx="8" fill="#fff" stroke="#ccc"/>
  <text x="160" y="375" text-anchor="middle" font-size="14">Fase 5: Validare</text>

  <rect x="50" y="420" width="220" height="40" rx="8" fill="#fff" stroke="#ccc"/>
  <text x="160" y="445" text-anchor="middle" font-size="14">Fase 6: Spiegare</text>

  <!-- Vertical arrows -->
  <line x1="160" y1="40" x2="160" y2="70" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="160" y1="110" x2="160" y2="140" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="160" y1="180" x2="160" y2="210" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="160" y1="250" x2="160" y2="280" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="160" y1="320" x2="160" y2="350" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="160" y1="390" x2="160" y2="420" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Loop Progettare -->
  <line x1="270" y1="155" x2="350" y2="155" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="355" y="165" font-size="12" fill="#666">Loop fino a convergenza</text>
  <line x1="350" y1="175" x2="270" y2="175" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Loop Validare -->
  <line x1="270" y1="365" x2="350" y2="365" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="355" y="375" font-size="12" fill="#666">Loop fino a convergenza</text>
  <line x1="350" y1="385" x2="270" y2="385" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>

</svg>

- 🔁 Progettare = loop di pensiero  
- 🔁 Validare = loop di qualità  

---

## Principi

**1. Non si programma ciò che non si è capito**  
Se salti Capire, lavori nel vuoto.

**2. Non si implementa un piano che non si sa difendere**  
Se salti Progettare, costruisci cose fragili.

**3. Non si committa codice che non si sa spiegare**  
Se salti Spiegare, crei debito tecnico.

---

## Come usarlo

- Usa questo flusso per ogni task non banale
- Usa i prompt nelle singole fasi
- Usa il template task per lavorare con ordine

L’obiettivo non è scrivere più codice.  
È scrivere codice che capisci.