# Libreria prompt

Prompt pronti da usare nelle varie fasi del workflow.

Usali come base e aggiungi solo il contesto che serve davvero.

---

## Fase 0: Capire

```text
Agisci come analista tecnico.

Obiettivo: capire il problema prima di proporre soluzioni.

Input:
- richiesta / ticket:
[INCOLLA QUI]

- contesto noto:
[FILE, MODULI, NOTE]

Non scrivere codice.
Non proporre ancora soluzioni.

Restituisci:
1. problema reale
2. comportamento attuale
3. aree del codice coinvolte
4. dubbi e incertezze
5. informazioni mancanti
```

---

## Fase 1: Definire

```text
Agisci come tech lead.

Partendo dal problema, definisci il risultato corretto.

Restituisci:
- Obiettivo
- Non obiettivi
- Acceptance criteria
- Vincoli tecnici
- Rischi principali
- Definition of done

Se qualcosa è ambiguo, evidenzialo.
Se è troppo grande, riduci lo scope.
```

---

## Fase 2: Progettare

```text
Agisci come solution designer.

Obiettivo: definire una soluzione solida prima dell'implementazione.

Scrivi:
- possibili approcci
- pro e contro
- soluzione scelta
- motivazione

Vincoli:
- non scrivere codice
- sii specifico, evita genericità
- evidenzia rischi e punti deboli
```

---

## Fase 3: Scomporre

```text
Agisci come engineering manager.

Trasforma la soluzione in task piccoli.

Per ogni task:
- obiettivo
- cosa toccare
- cosa NON toccare
- verifica minima

Regole:
- un task = uno scopo
- deve essere testabile da solo
- se è grande, spezzalo
```

---

## Fase 4: Implementare

```text
Agisci come sviluppatore Python senior.

Implementa SOLO questo task.

Prima:
- riassumi cosa farai
- indica i file coinvolti
- evidenzia rischi
- conferma cosa NON toccherai

Poi implementa.

Vincoli:
- non allargare lo scope
- segui le convenzioni
- se trovi incoerenze, fermati

Alla fine:
- spiega cosa hai fatto file per file
```

---

## Fase 5: Validare

```text
Agisci come reviewer tecnico.

Valuta il codice su:
- correttezza
- allineamento al requisito
- qualità
- rischi
- edge case

Per ogni punto:
- problemi trovati
- severità
- suggerimenti

Alla fine:
- approvabile / non approvabile
```

---

## Fase 6: Spiegare

```text
Agisci come tutor tecnico.

Spiegami il codice come se dovessi difenderlo in review.

Restituisci:
- flusso del codice
- motivo delle modifiche
- collegamento con il requisito
- possibili problemi
- domande che devo saper rispondere
```

---

## Uso rapido

- Parti dal prompt della fase corretta
- Aggiungi solo contesto utile
- Non unire più fasi nello stesso prompt se non serve
- Se l'output è vago, restringi obiettivo e vincoli
