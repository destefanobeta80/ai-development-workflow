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

### Criticare il piano con diff

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

### Integrare piani di modelli diversi

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

### Revisionare il piano in una nuova sessione

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

## Risultato

Hai `PLAN.md` aggiornato con un piano dettagliato e completo, per il quale sai giustificare tutte le decisioni prese.

Sai spiegare perché è fatto così, quali alternative hai scartato, dove sono i punti delicati e quali decisioni sono già state prese. Le critiche rimaste sono piccole, non strutturali.

Se ogni nuovo giro continua a cambiare componenti importanti, il piano non è ancora pronto.
