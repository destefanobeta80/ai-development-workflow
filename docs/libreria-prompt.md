# Libreria prompt

Prompt pronti da usare nelle varie fasi del workflow.

Sono volutamente generici. L'idea è riusarli in progetti diversi, lasciando che il contesto venga letto da `AGENTS.md`, dai file del repository e dal task corrente.

---

## Fase 0: Comprendere {#fase-0-comprendere}

```text
Leggi con attenzione tutto il contesto disponibile e rileggi AGENTS.md se esiste già.

Se esiste già una soluzione, il tuo primo compito è comprenderla davvero:
- spiegami in chat a cosa serve
- spiegami come è fatta nelle sue parti principali
- spiegami quali vincoli o assunzioni porta con sé
- spiegami quali punti sembrano delicati o facili da rompere

Poi crea o aggiorna AGENTS.md in modo che diventi una guida pratica per lo sviluppo di questo progetto.

Se invece non esiste ancora una soluzione, analizza i materiali forniti e crea AGENTS.md da zero. Deve contenere il contesto del progetto, l'obiettivo, i vincoli, il tono da mantenere e ciò che conta davvero durante lo sviluppo.

In questa fase non scrivere codice e non creare ancora un piano di lavoro dettagliato.

Voglio un output concreto, non teorico:
1. sintesi del contesto attuale
2. cosa è già chiaro
3. cosa manca ancora
4. AGENTS.md creato o aggiornato
5. principali assunzioni e rischi iniziali
```

```text
Partendo dal contesto raccolto e da AGENTS.md, aiutami a capire le direzioni di soluzione possibili ad alto livello.

Non voglio ancora un piano dettagliato. Voglio capire il campo di gioco:
- quali approcci sembrano sensati
- quali approcci sembrano deboli o inadatti
- quali trade-off sono già visibili
- quali vincoli peseranno davvero sulle scelte successive

Restituisci una sintesi ragionata della futura soluzione possibile, con pro e contro degli approcci realistici, ma senza entrare ancora nella progettazione operativa.
```

---

## Fase 1: Progettare {#fase-1-progettare}

```text
Rileggi AGENTS.md e lavora in plan space, non in code space.

Voglio un piano dettagliato e difendibile. Non scrivere codice. Non limitarti a idee generiche. Vai abbastanza nel dettaglio da guidare bene la scomposizione e l'implementazione successive.

Il piano deve chiarire:
- struttura della soluzione
- scelte principali
- ordine logico del lavoro
- punti delicati
- rischi e dipendenze
- criteri con cui capire se la soluzione regge

Se ci sono opzioni ancora aperte, non nasconderle: esplicita la scelta consigliata e spiega perché.
```

```text
Rileggi AGENTS.md e fai una review severa del piano attuale.

Non voglio complimenti e non voglio riscriverlo da zero. Voglio capire cosa non regge bene, cosa è vago, cosa è fragile, cosa manca e cosa complica inutilmente il lavoro.

Restituisci:
1. criticità reali, in ordine di importanza
2. miglioramenti proposti
3. un diff del piano, il più concreto possibile

Il diff deve mostrare cosa cambieresti davvero. Se una parte del piano va bene, lasciala stare. Se le modifiche che proponi sono minime, dillo chiaramente.
```

```text
Hai davanti il piano attuale e più critiche o review del piano.

Il tuo compito non è fare un merge meccanico. Devi filtrare il rumore, tenere le idee migliori, scartare le peggiori e produrre una nuova versione del piano più forte della precedente.

Voglio:
1. sintesi delle critiche davvero utili
2. conflitti tra proposte, se ci sono
3. decisioni prese
4. nuova versione del piano
5. valutazione finale: serve un altro loop oppure siamo quasi in convergenza?

Se le modifiche residue sono piccole, dillo. Se invece il piano ha ancora debolezze strutturali, dillo senza attenuarle.
```

---

## Fase 2: Scomporre {#fase-2-scomporre}

```text
Rileggi AGENTS.md e il piano attuale.

Scomponi il piano in task piccoli, autonomi e implementabili.

Per ogni task usa sempre questa struttura:

Titolo task
Contesto
Obiettivo
Vincoli
Piano
Verifica

Ogni task deve avere uno scopo singolo, un perimetro chiaro e una verifica minima concreta. Non voglio task generici, non voglio task troppo grandi e non voglio task che costringano chi implementa a reinterpretare il piano.

Se un task è troppo ampio, spezzalo. Se due task si sovrappongono, sistemali. Se manca un passaggio logico, aggiungilo.
```

---

## Fase 3: Implementare {#fase-3-implementare}

```text
Rileggi AGENTS.md e implementa solo il task assegnato.

Prima di scrivere codice, riassumi cosa farai, quali file pensi di toccare, quali rischi vedi e cosa non toccherai.

Poi implementa restando strettamente nello scope. Se trovi incoerenze nel task, nel piano o nel contesto, non improvvisare: fermati e segnalale.

Quando hai finito, spiega in modo concreto cosa hai cambiato, che verifiche hai fatto e che cosa merita attenzione nella review.
```

---

## Fase 4: Validare {#fase-4-validare}

```text
Rileggi AGENTS.md e fai una review severa del codice che hai appena prodotto.

Non difendere il tuo lavoro. Trattalo come se fosse di un altro. Voglio una review vera, non una conferma rassicurante.

Controlla:
- correttezza rispetto al task
- coerenza con il piano
- rischi di regressione
- edge case
- qualità del codice
- verifiche mancanti

Chiudi con un verdetto netto e con la lista delle correzioni che faresti subito prima di passare il lavoro a una review esterna.
```

```text
Rileggi AGENTS.md e fai review di questo codice come agente esterno.

Non dare per buone le scelte fatte. Parti dal task e dal codice prodotto e valuta se il risultato è davvero corretto, chiaro e difendibile.

Voglio:
1. problemi trovati
2. severità
3. rischi o regressioni possibili
4. punti poco chiari o fragili
5. test o controlli mancanti
6. verdetto finale: approvabile, approvabile con correzioni, non approvabile

Se il codice sembra funzionare ma resta difficile da difendere, dillo chiaramente.
```

---

## Fase 5: Spiegare {#fase-5-spiegare}

```text
Rileggi AGENTS.md e spiegami il codice prodotto come se dovessi difenderlo in review senza poter delegare la risposta al modello.

Voglio capire bene:
- come funziona il flusso del codice
- perché sono state fatte queste scelte
- come le modifiche rispondono al task
- quali punti delicati o rischiosi restano
- quali domande dovrei saper gestire in review

Chiudi con una sintesi breve, chiara e difendibile.
```

---

## Uso rapido

- Parti dalla fase corretta
- In Progettare fai più loop, non uno solo
- Quando i diff diventano piccoli, sei vicino alla convergenza
- Se l'output è vago, restringi la richiesta
