# Fase 4: Validare

## Scopo

Verificare davvero che il lavoro regga.

---

## Descrizione

Qui non basta chiedersi se il codice gira. Bisogna capire se è corretto, se rispetta il task, se introduce regressioni e se regge una review seria.

Anche questa fase è iterativa. Prima si può fare una self-review severa. Poi conviene passare il lavoro a un agente esterno che non ha scritto il codice e quindi lo legge con occhi più freddi.

---

## Prompt

### Self-review dell'agente che ha scritto il codice

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

### Review di un agente esterno

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

## Condizione di uscita

La validazione è finita quando i problemi residui sono marginali e non strutturali.

Se review e contro-review continuano a trovare punti sostanziali, serve un altro loop.
