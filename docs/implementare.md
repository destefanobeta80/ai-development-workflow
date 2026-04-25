# Fase 3: Implementare

## Scopo

Trasformare i task in codice di alta qualità.

## Descrizione

Tutto il lavoro precedente serve ad accelerare questa fase e a ridurre gli errori mentre si scrive codice.

Se contesto, piano e task sono chiari, l'implementazione diventa più controllata: si sceglie un task pronto, si lavora solo su quello e si evita di riprogettare durante la scrittura del codice.

Prima di iniziare a programmare, assicurati che `AGENTS.md` contenga le indicazioni utili per sviluppare: convenzioni, comandi di test, comandi di lint o build, vincoli importanti e cose da non modificare senza motivo.

Durante l'implementazione il perimetro resta quello del task scelto. Se emergono incoerenze tra `TASKS.md` e codice reale, bisogna fermarsi e segnalarle invece di cambiare direzione in autonomia.

## Prompt

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

## Risultato

Il task è pronto per la validazione quando è coerente con `TASKS.md`, limitato allo scope e abbastanza pulito da passare a una review senza ambiguità.

Lo stato del task è aggiornato a "In review" e sono chiare le verifiche eseguite.

Se per completarlo hai dovuto inventare parti importanti, a monte c'è un problema: il task o il piano vanno rivisti.
