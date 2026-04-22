# Fase 1: Progettare

## Scopo

Trasformare la comprensione in un piano di lavoro solido.

---

## Descrizione

Qui si passa dal quadro generale a un piano dettagliato.

È la fase che va iterata più volte. L'obiettivo non è produrre il primo piano plausibile, ma arrivare a un piano che regga bene alle critiche.

La sequenza giusta è: creare il piano, criticarlo, integrare il meglio delle critiche, ripetere. Quando i diff proposti diventano piccoli e poco sostanziali, si è vicini alla convergenza.

---

## Prompt

### Creare il piano

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

### Criticare il piano con diff

```text
Rileggi AGENTS.md e fai una review severa del piano attuale.

Non voglio complimenti e non voglio riscriverlo da zero. Voglio capire cosa non regge bene, cosa è vago, cosa è fragile, cosa manca e cosa complica inutilmente il lavoro.

Restituisci:
1. criticità reali, in ordine di importanza
2. miglioramenti proposti
3. un diff del piano, il più concreto possibile

Il diff deve mostrare cosa cambieresti davvero. Se una parte del piano va bene, lasciala stare. Se le modifiche che proponi sono minime, dillo chiaramente.
```

### Integrare più critiche e migliorare il piano

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

## Condizione di uscita

Hai un piano che puoi difendere bene.

Sai spiegare perché è fatto così, dove sono i punti delicati e quali decisioni sono già state prese. Le critiche rimaste sono piccole, non strutturali.

Se ogni nuovo giro continua a cambiare pezzi importanti, il piano non è ancora pronto.
