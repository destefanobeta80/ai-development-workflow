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
Leggi con attenzione tutto il contesto disponibile e rileggi AGENTS.md se esiste già.

Se ci sono documenti, specifiche, note o materiali cliente, usali per capire:
- contesto del progetto
- obiettivo da raggiungere
- vincoli importanti
- dubbi o informazioni mancanti

Se esiste già una soluzione, esplora il repository e aiutami a capirla:
- spiegami in chat a cosa serve
- descrivi la sua architettura principale
- indica lo stato attuale del progetto
- evidenzia vincoli, assunzioni e parti delicate

Poi crea o aggiorna AGENTS.md in modo che diventi una guida pratica per le prossime sessioni di pianificazione e programmazione.

Se AGENTS.md non esiste, crealo da zero. Se esiste già, miglioralo con le informazioni utili emerse.

In questa fase non scegliere ancora la soluzione, non scrivere codice e non creare ancora un piano di lavoro dettagliato.

Voglio un output concreto, non teorico:
1. sintesi del contesto attuale
2. sintesi della soluzione attuale, se esiste
3. obiettivo da raggiungere
4. cosa è già chiaro
5. cosa manca ancora
6. AGENTS.md creato o aggiornato
```

## Risultato

Puoi spiegare in modo semplice:

- che cosa esiste già, se esiste
- che cosa si vuole ottenere
- quali vincoli contano davvero
- quali informazioni mancano ancora
- quali indicazioni sono state inserite o aggiornate in `AGENTS.md`

Se il contesto è ancora confuso, non è il momento di progettare.
