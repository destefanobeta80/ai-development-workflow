# Fase 2: Scomporre

## Scopo

Trasformare il piano in task precisi.

## Descrizione

In questa fase `PLAN.md` viene trasformato in `TASKS.md`, un file di task precisi.

Il piano può essere abbastanza lungo, anche se resta molto più compatto del codice che descrive. `TASKS.md` serve a evitare di rileggere tutto `PLAN.md` a ogni implementazione: porta nel singolo task le informazioni operative necessarie.

Ogni task deve avere un ID, uno stato, un obiettivo, un perimetro, istruzioni operative, dipendenze e una verifica concreta. Il file resta semplice, ma deve contenere abbastanza informazioni per implementare un task alla volta senza reinterpretare il piano.

Un task buono non è per forza piccolo. È atomico: copre una parte definita del lavoro e può essere completato senza allargare lo scope.

Le dipendenze sono parte della scomposizione. Alcuni task possono partire subito, altri hanno senso solo dopo che un task precedente è stato completato. Scriverlo evita lavoro fuori ordine e riduce il rischio di correzioni inutili.

Anche questa fase va iterata. Dopo una prima scomposizione bisogna controllare se i task coprono tutta la superficie del piano, se ci sono buchi, sovrapposizioni, dipendenze sbagliate o task ancora troppo vaghi. Se un task richiede decisioni nuove, il piano non è ancora abbastanza chiaro.

## Prompt

### Creare `TASKS.md`

```text
Rileggi AGENTS.md e PLAN.md.

Scomponi il piano in task atomici, autonomi e implementabili.

Crea un file markdown chiamato `TASKS.md`.

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

### Verificare `TASKS.md` rispetto al piano

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

## Risultato

I task sono pronti quando si possono eseguire uno alla volta senza dover reinventare il piano.

`TASKS.md` è la lista operativa da cui partirà la fase Implementare.

Ogni task ha:

- un ID semplice
- uno stato aggiornabile
- dipendenze esplicite
- un obiettivo chiaro
- un perimetro che dice cosa fare e cosa non fare
- istruzioni sufficienti per implementare
- una verifica concreta

Se un task è ancora ambiguo, sovrapposto ad altri o richiede nuove decisioni, non è ancora pronto.
