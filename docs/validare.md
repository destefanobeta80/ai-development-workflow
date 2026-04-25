# Fase 4: Validare

## Scopo

Migliorare la qualità del codice prodotto e trovare errori.

## Descrizione

Qui non basta chiedersi se il codice funziona. Bisogna capire se è corretto, se rispetta il task, se introduce regressioni e se può essere spiegato in review.

Anche questa fase è iterativa. Si valida, si corregge, si rivalida e si continua fino a convergenza. La convergenza arriva quando le review non trovano più problemi sostanziali, ma solo miglioramenti minori.

Il primo passaggio è la self-review: l'agente che ha scritto il codice deve rileggerlo "con occhi nuovi", cercando errori, parti fragili e verifiche mancanti.

Il secondo passaggio utile è una review in una nuova sessione. Una sessione nuova non ha seguito tutto il ragionamento precedente e quindi tende a leggere il codice con meno bias.

Quando le review segnalano solo migliorie minori e il task è coerente con piano, perimetro e verifiche, lo stato del task può passare da "In review" a "Completato".

## Prompt

### Self-review dell'agente

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

### Review di un agente esterno

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

Voglio:
1. problemi trovati
2. severità
3. correzioni richieste
4. verdetto finale: completabile, completabile con migliorie minori, non completabile

Se trovi solo migliorie minori, aggiorna lo stato del task a "Completato". Se trovi problemi sostanziali, lascia il task "In review" e indica cosa correggere.
```

## Risultato

La validazione è finita quando i problemi residui sono marginali e non strutturali.

Il task passa a "Completato" solo quando review e nuova review non trovano più problemi sostanziali.

Se le review continuano a trovare punti importanti, serve un altro loop di correzione e validazione.
