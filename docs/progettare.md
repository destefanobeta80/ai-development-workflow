# Fase 1: Progettare

## Scopo

Trasformare la comprensione in un piano di lavoro solido.

## Descrizione

Qui si passa dal contesto a un piano di lavoro dettagliato, salvato in `PLAN.md`.

Il piano è una versione compatta del codice. Per questo conviene investire più tempo e più token qui: correggere un errore nel piano costa meno che trovarlo durante l'implementazione, quando il testo prodotto è molto più grande e il codice è già entrato nei dettagli.

In questa fase si possono usare chat web e deep research per costruire il piano partendo dal contesto raccolto, dai documenti disponibili e da `AGENTS.md`. L'obiettivo non è scrivere codice, ma decidere bene prima di programmare.

Il primo piano non è quasi mai il migliore. Va criticato, corretto e migliorato più volte. Di solito servono 4-5 round di critica prima che il piano converga, cioè prima che le nuove correzioni diventino piccole e non strutturali.

Ci sono tre tecniche utili:

- chiedere allo stesso modello di trovare punti deboli, errori logici, parti vaghe e rischi del piano
- far creare piani alternativi a modelli diversi, perché ogni modello tende a coprire parti diverse della soluzione
- aprire una nuova sessione e farle revisionare il piano da zero, senza il contesto della conversazione precedente

## Prompt

### Creare il piano

```text
Rileggi AGENTS.md. Lavora solo sul piano: niente codice, niente task esecutivi.

Usa il contesto raccolto, i documenti disponibili e le informazioni già chiarite nella Fase 0.

Crea o aggiorna PLAN.md. Il piano deve essere abbastanza concreto da poter essere trasformato in task senza reinterpretare l'obiettivo.

Il piano deve chiarire:
- obiettivo e non-obiettivi
- workflow utente/sistema
- architettura proposta
- scelte tecniche principali e alternative scartate
- ordine logico del lavoro
- punti delicati, rischi, dipendenze e failure mode
- strategia di verifica/test
- criteri di accettazione

Se ci sono opzioni ancora aperte, scegli una raccomandazione motivata oppure marca la decisione come bloccante.

Alla fine aggiorna PLAN.md e chiudi con:
1. decisioni prese
2. assunzioni
3. decisioni ancora aperte
4. gate: pronto per scomposizione? sì/no, con motivo
```

### Criticare il piano con diff

```text
Rileggi AGENTS.md e PLAN.md. Fai una review severa del piano attuale.

Niente complimenti. Niente riscrittura totale se non necessaria. Cerca solo difetti che possono causare rework, ambiguità o implementazioni sbagliate.

Cerca in particolare:
- errori logici
- assunzioni non dimostrate
- parti troppo generiche
- rischi non gestiti
- passaggi che potrebbero creare problemi durante l'implementazione
- criteri di verifica mancanti
- decisioni rimandate impropriamente
- dipendenze implicite

Restituisci:
1. criticità reali, in ordine di importanza
2. miglioramenti proposti
3. diff unified concreto su PLAN.md
4. giudizio: converge / serve altro giro / non pronto

Il diff deve modificare solo le sezioni necessarie. Se una modifica è solo opinabile, separala dalle correzioni necessarie.
```

### Integrare piani di modelli diversi

```text
Ho più piani per lo stesso obiettivo. Devi creare una versione migliore del piano iniziale.

Analizza piano iniziale e alternative. Sii intellettualmente onesto su cosa gli altri piani fanno meglio: struttura, rischi, sequenza, semplicità, robustezza, dettagli tecnici, verificabilità.

Non fare un merge meccanico. Integra solo idee che migliorano il piano in modo pratico e verificabile.

Voglio:
1. punti forti reali trovati nei piani alternativi
2. punti che non integreresti e perché
3. modifiche proposte in diff unified su PLAN.md
4. PLAN.md aggiornato
5. rischi residui

Non indicare nel piano finale quale idea viene da quale modello. Il risultato deve essere un piano unico, più solido e più pratico.
```

### Revisionare il piano in una nuova sessione

```text
Leggi AGENTS.md e PLAN.md.

Obiettivo: rendere PLAN.md più chiaro, robusto, implementabile e verificabile.

Per ogni modifica proposta, spiegami:
- perché migliora il piano
- quale rischio riduce
- quale parte del piano cambierebbe
- se è necessaria o solo migliorativa

Restituisci:
1. problemi principali trovati
2. modifiche consigliate in ordine di importanza
3. diff unified concreto
4. giudizio finale: il piano è vicino alla convergenza o serve un altro giro?
```

## Risultato

Hai `PLAN.md` aggiornato con un piano dettagliato e completo, per il quale sai giustificare tutte le decisioni prese.

Sai spiegare perché è fatto così, quali alternative hai scartato, dove sono i punti delicati e quali decisioni sono già state prese. Le critiche rimaste sono piccole, non strutturali.

Se ogni nuovo giro continua a cambiare componenti importanti, il piano non è ancora pronto.
