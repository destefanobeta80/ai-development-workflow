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
Rileggi AGENTS.md, TASKS.md, il task in review e il diff delle modifiche prodotte.

Fai self-review come se il codice fosse stato scritto da un altro agente.

Controlla:
- correttezza rispetto al task
- coerenza con il task
- rispetto del perimetro
- rischi di regressione
- edge case
- qualità del codice
- verifiche mancanti
- aggiornamenti necessari a documentazione o task

Restituisci:
1. problemi trovati, in ordine di importanza
2. correzioni da fare subito
3. verifiche da aggiungere o ripetere
4. diff correttivo, se necessario
5. verdetto: pronto per review esterna / serve correzione
```

### Review di un agente esterno

```text
Rileggi AGENTS.md, TASKS.md, il task in review e il diff non committato.

Individua il task con stato "In review". Se ce ne sono più di uno, scegli quello con ID più basso e dichiaralo. Analizza il diff delle modifiche non committate.

Controlla:
- correttezza rispetto al task
- coerenza con il perimetro
- rischi o regressioni possibili
- punti poco chiari o fragili
- verifiche mancanti
- modifiche fuori scope
- compatibilità con convenzioni del repository

Restituisci:
1. problemi trovati
2. severità: bloccante / minore / suggerimento
3. correzioni richieste
4. verifiche richieste
5. verdetto finale: completabile / completabile con note / non completabile

Aggiorna il task a "Completato" solo se non ci sono problemi bloccanti e le verifiche minime sono state eseguite. Altrimenti lascialo "In review".
```

## Risultato

La validazione è finita quando i problemi residui sono marginali e non strutturali.

Il task passa a "Completato" solo quando review e nuova review non trovano più problemi sostanziali.

Se le review continuano a trovare punti importanti, serve un altro loop di correzione e validazione.
