# Fase 0: Comprendere

## Scopo

Capire il contesto prima di iniziare a lavorare.

## Descrizione

Questa fase serve a capire tre cose prima di pensare alla soluzione:

- il contesto in cui si lavora
- la soluzione attuale, se esiste
- l'obiettivo da chiarire

Se esiste già una soluzione, va studiata prima di modificarla. Bisogna capire cosa fa, come è organizzata, quali vincoli porta con sé, quali parti sono delicate e qual è lo stato reale del progetto.

Se invece si parte da zero, bisogna leggere bene i materiali disponibili e trasformarli in un contesto operativo chiaro: obiettivo, vincoli, aspettative, utenti, dati disponibili e punti ancora incerti.

Per farlo si possono usare strumenti diversi:

- chat web e deep research per analizzare documenti, specifiche, note, materiali cliente e contesto di dominio
- agenti di sviluppo per esplorare il repository, ricostruire l'architettura, leggere il codice esistente e capire lo stato della soluzione

Qui non si sceglie ancora la soluzione e non si scrive il piano dettagliato. Si chiarisce il terreno.

Un risultato importante della fase è `AGENTS.md`: se non esiste, va creato; se esiste, va aggiornato e migliorato. Deve guidare le sessioni successive di pianificazione e programmazione.

## Prompt

### Comprendere il contesto e preparare `AGENTS.md`

```text
Rileggi AGENTS.md se esiste. Analizza repository, documenti, specifiche, note e materiali disponibili.

Ricava solo informazioni supportate dalle fonti disponibili:
- contesto del progetto
- obiettivo da raggiungere
- utenti/workflow principali
- vincoli importanti
- stack e convenzioni
- rischi
- dubbi o informazioni mancanti

Se esiste già una soluzione, esplora il repository:
- sintetizza a cosa serve e la sua architettura principale
- valuta lo stato attuale del codice
- individua punti di ingresso, test e verifiche disponibili
- mappa vincoli, assunzioni e parti delicate

Poi crea o aggiorna AGENTS.md come manuale operativo per le prossime sessioni.

Se AGENTS.md non esiste, crealo da zero. Se esiste già, preserva le regole valide e aggiungi solo informazioni utili, verificabili e riutilizzabili.

In questa fase non scegliere la soluzione finale, non scrivere codice e non creare PLAN.md.

Output richiesto:
1. sintesi del contesto attuale
2. sintesi della soluzione attuale, se esiste
3. obiettivo da raggiungere
4. cosa è già chiaro
5. cosa manca ancora
6. assunzioni dichiarate
7. AGENTS.md creato o aggiornato
```

## Risultato

Puoi spiegare in modo semplice:

- che cosa esiste già, se esiste
- che cosa si vuole ottenere
- quali vincoli contano davvero
- quali informazioni mancano ancora
- quali indicazioni sono state inserite o aggiornate in `AGENTS.md`

Se il contesto è ancora confuso, non è il momento di progettare.
