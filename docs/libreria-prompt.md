# Libreria prompt

Prompt pronti da usare nelle varie fasi del workflow.

Sono volutamente generici. L'idea è riusarli in progetti diversi, lasciando che il contesto venga letto da `AGENTS.md`, dai file del repository e dal task corrente.

## Fase 0: Comprendere {#fase-0-comprendere}

```text
Leggi con attenzione tutto il contesto disponibile e rileggi AGENTS.md se esiste già.

Se ci sono documenti, specifiche, note o materiali cliente, usali per capire:
- contesto del progetto
- obiettivo da raggiungere
- vincoli importanti
- dubbi o informazioni mancanti

Se esiste già una soluzione, esplora il repository e aiutami a capirla:
- spiegami in chat a cosa serve
- descrivi la sua architettura principale
- indica lo stato attuale del progetto
- evidenzia vincoli, assunzioni e parti delicate

Poi crea o aggiorna AGENTS.md in modo che diventi una guida pratica per le prossime sessioni di pianificazione e programmazione.

Se AGENTS.md non esiste, crealo da zero. Se esiste già, miglioralo con le informazioni utili emerse.

In questa fase non scegliere ancora la soluzione, non scrivere codice e non creare ancora un piano di lavoro dettagliato.

Voglio un output concreto, non teorico:
1. sintesi del contesto attuale
2. sintesi della soluzione attuale, se esiste
3. obiettivo da raggiungere
4. cosa è già chiaro
5. cosa manca ancora
6. AGENTS.md creato o aggiornato
```

## Fase 1: Progettare {#fase-1-progettare}

```text
Rileggi AGENTS.md e lavora sul piano, non sul codice.

Usa il contesto raccolto, i documenti disponibili e le informazioni già chiarite nella Fase 0.

Voglio un piano dettagliato e spiegabile, salvato in `PLAN.md`. Non scrivere codice. Non limitarti a idee generiche. Vai abbastanza nel dettaglio da guidare bene la scomposizione e l'implementazione successive.

Il piano deve chiarire:
- struttura della soluzione
- scelte principali
- ordine logico del lavoro
- punti delicati
- rischi e dipendenze
- criteri con cui capire se la soluzione regge

Se ci sono opzioni ancora aperte, non nasconderle: esplicita la scelta consigliata e spiega perché.

Alla fine aggiorna `PLAN.md` con la versione corrente del piano.
```

```text
Rileggi AGENTS.md e fai una review severa del piano attuale.

Non voglio complimenti e non voglio riscriverlo da zero. Voglio capire cosa non regge bene, cosa è vago, cosa è fragile, cosa manca e cosa complica inutilmente il lavoro.

Cerca in particolare:
- errori logici
- assunzioni non dimostrate
- parti troppo generiche
- rischi non gestiti
- passaggi che potrebbero creare problemi durante l'implementazione

Restituisci:
1. criticità reali, in ordine di importanza
2. miglioramenti proposti
3. un diff del piano, il più concreto possibile

Il diff deve mostrare cosa cambieresti davvero. Se una parte del piano va bene, lasciala stare. Se le modifiche che proponi sono minime, dillo chiaramente.
```

```text
Ho chiesto a più modelli di creare un piano per lo stesso obiettivo. I piani sono diversi e alcuni coprono parti della soluzione meglio di altri.

Analizza con attenzione il piano iniziale e i piani alternativi. Sii onesto su cosa gli altri piani fanno meglio: struttura, rischi, ordine del lavoro, semplicità, robustezza, dettagli tecnici o criteri di verifica.

Il tuo compito non è fare un merge meccanico. Devi prendere le idee migliori, scartare quelle deboli e migliorare il piano iniziale.

Voglio:
1. punti forti reali trovati nei piani alternativi
2. punti che non integreresti e perché
3. modifiche proposte al piano iniziale in formato diff
4. versione aggiornata del piano

Non indicare nel piano finale quale idea viene da quale modello. Il risultato deve essere un piano unico, più solido e più pratico.
```

```text
Rivedi con attenzione questo piano come se lo vedessi per la prima volta.

Voglio le migliori revisioni possibili per renderlo più chiaro, robusto, semplice da implementare e facile da verificare.

Per ogni modifica proposta, spiegami:
- perché migliora il piano
- quale rischio riduce
- quale parte del piano cambierebbe

Restituisci:
1. problemi principali trovati
2. modifiche consigliate in ordine di importanza
3. diff concreto rispetto al piano originale
4. giudizio finale: il piano è vicino alla convergenza o serve un altro giro?

Piano da revisionare:

[INCOLLA QUI IL PIANO COMPLETO]
```

## Fase 2: Scomporre {#fase-2-scomporre}

```text
Rileggi AGENTS.md e PLAN.md.

Scomponi il piano in task atomici, autonomi e implementabili.

Crea un file markdown chiamato `TASKS.md`.

`TASKS.md` deve evitare di rileggere tutto `PLAN.md` a ogni implementazione: ogni task deve contenere le informazioni operative necessarie per lavorare in modo controllato.

Ogni task deve essere abbastanza specifico da poter essere assegnato a una persona o a un agente senza dover reinterpretare il piano. Non significa creare task minuscoli: significa creare unità di lavoro con obiettivo, perimetro, dipendenze e verifica chiari.

Per ogni task usa sempre questa struttura:

T01 - Titolo task
Stato
Dipende da
Contesto
Obiettivo
Perimetro
Istruzioni
Verifica

Regole:
- usa ID semplici come T01, T02, T03
- in "Stato" usa "Da fare", "In corso", "In review" o "Completato"
- in "Dipende da" scrivi "nessuna" oppure gli ID dei task necessari prima
- in "Perimetro" separa cosa è incluso e cosa non è incluso
- in "Istruzioni" inserisci le decisioni già prese e i passaggi operativi essenziali
- in "Verifica" indica controlli concreti, test o criteri di accettazione

Alla fine controlla la sequenza:
1. quali task possono partire subito
2. quali task sono bloccati da altri
3. se ci sono sovrapposizioni o buchi logici
4. se qualche task è ancora troppo vago o troppo grande

Se trovi problemi, correggi `TASKS.md`. La scomposizione è pronta solo quando copre tutto il piano e le dipendenze sono coerenti.
```

```text
Rileggi AGENTS.md, PLAN.md e TASKS.md.

Fai una review della scomposizione dei task rispetto al piano.

Controlla:
- se tutti i punti importanti del piano sono coperti da almeno un task
- se ci sono task troppo grandi, troppo vaghi o non implementabili
- se ci sono task sovrapposti o duplicati
- se mancano task intermedi necessari
- se le dipendenze tra task sono corrette
- se qualche task richiede decisioni che dovevano essere già prese nel piano
- se ogni task ha una verifica concreta

Restituisci:
1. problemi trovati, in ordine di importanza
2. task da aggiungere
3. task da dividere, unire o riscrivere
4. dipendenze da correggere
5. diff proposto per aggiornare TASKS.md
6. giudizio finale: TASKS.md è pronto per l'implementazione o serve un altro giro?

Non riscrivere tutto se non serve. Correggi solo ciò che rende i task più chiari, completi e implementabili.
```

## Fase 3: Implementare {#fase-3-implementare}

```text
Rileggi AGENTS.md e TASKS.md.

Scegli il primo task libero da implementare:
- deve avere stato "Da fare"
- tutte le sue dipendenze devono avere stato "Completato"

Prima di scrivere codice, aggiorna lo stato del task a "In corso" e riassumi:
1. quale task hai scelto e perché
2. cosa farai
3. quali file pensi di toccare
4. quali rischi vedi
5. cosa resta fuori scope

Poi implementa restando strettamente nel perimetro del task.

Se trovi incoerenze tra task, AGENTS.md o codice, fermati e segnalale.

Quando hai finito:
1. aggiorna lo stato del task a "In review"
2. spiega cosa hai cambiato
3. indica quali verifiche hai fatto
4. segnala cosa merita attenzione nella review
```

## Fase 4: Validare {#fase-4-validare}

```text
Rileggi AGENTS.md, TASKS.md e il codice che hai appena prodotto.

Fai una self-review. Non dare per scontato il tuo lavoro: trattalo come se fosse codice scritto da un altro.

Controlla:
- correttezza rispetto al task
- coerenza con il task
- rischi di regressione
- edge case
- qualità del codice
- verifiche mancanti

Restituisci:
1. problemi trovati, in ordine di importanza
2. correzioni da fare subito
3. verifiche da aggiungere o ripetere
4. verdetto: pronto per review esterna oppure serve un altro giro
```

```text
Rileggi AGENTS.md e TASKS.md.

Individua il task con stato "In review" e analizza il diff delle modifiche non committate rispetto alla base corrente.

Fai una review del codice prodotto per quel task e valuta se il risultato è corretto, chiaro e spiegabile.

Controlla:
- correttezza rispetto al task
- coerenza con il perimetro
- rischi o regressioni possibili
- punti poco chiari o fragili
- verifiche mancanti

Restituisci:
1. problemi trovati
2. severità
3. correzioni richieste
4. verdetto finale: completabile, completabile con migliorie minori, non completabile

Se trovi solo migliorie minori, aggiorna lo stato del task a "Completato". Se trovi problemi sostanziali, lascia il task "In review" e indica cosa correggere.
```

## Fase 5: Spiegare {#fase-5-spiegare}

```text
Rileggi AGENTS.md, TASKS.md e il codice prodotto.

Aiutami a verificare che io abbia compreso davvero tutto il lavoro prodotto.

Spiegami in modo chiaro:
- cosa è stato implementato
- perché questa soluzione risponde al task
- quali scelte del piano sono state applicate
- come funziona il flusso principale del codice
- quali file o parti sono più importanti
- quali punti delicati o rischiosi restano
- quali verifiche sono state fatte

Chiudi con una sintesi breve che distingua:
1. cosa è stato fatto
2. perché è stato fatto così
3. come funziona nel codice
```

## Uso rapido

- Parti dalla fase corretta
- In Progettare fai più loop, non uno solo
- Quando i diff diventano piccoli, sei vicino alla convergenza
- Se l'output è vago, restringi la richiesta
