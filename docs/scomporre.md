# Fase 2: Scomporre

## Scopo

Trasformare il piano in task precisi.

## Descrizione

Qui il piano smette di essere una buona idea generale e diventa lavoro eseguibile.

Ogni task deve avere un perimetro netto. Deve poter essere assegnato senza lasciare decisioni ambigue a chi implementa.

Il formato del task va definito qui, nella fase di scomposizione. Se un task è troppo grosso, va spezzato prima, non durante l'implementazione.

## Prompt

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

## Condizione di uscita

I task sono pronti quando si possono eseguire uno alla volta senza dover reinventare il piano.

Se un task è ancora ambiguo, non è ancora un task.
