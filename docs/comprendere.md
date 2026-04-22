# Fase 0: Comprendere

## Scopo

Capire bene il contesto prima di entrare nel piano.

---

## Descrizione

Questa fase unisce comprensione del problema e definizione del contesto.

Se esiste già una soluzione, va studiata prima di modificarla. Bisogna capire cosa fa, come è organizzata, quali vincoli porta con sé e quali parti non vanno rotte.

Se invece si parte da zero, bisogna leggere bene tutti i materiali disponibili e trasformarli in un contesto operativo chiaro. Il risultato atteso è lo stesso: avere una base solida per decidere bene dopo.

Qui non si scrive ancora il piano dettagliato. Si chiarisce il terreno.

---

## Prompt

### Comprendere il contesto e aggiornare `AGENTS.md`

```text
Leggi con attenzione tutto il contesto disponibile e rileggi AGENTS.md se esiste già.

Se esiste già una soluzione, il tuo primo compito è comprenderla davvero:
- spiegami in chat a cosa serve
- spiegami come è fatta nelle sue parti principali
- spiegami quali vincoli o assunzioni porta con sé
- spiegami quali punti sembrano delicati o facili da rompere

Poi crea o aggiorna AGENTS.md in modo che diventi una guida pratica per lo sviluppo di questo progetto.

Se invece non esiste ancora una soluzione, analizza i materiali forniti e crea AGENTS.md da zero. Deve contenere il contesto del progetto, l'obiettivo, i vincoli, il tono da mantenere e ciò che conta davvero durante lo sviluppo.

In questa fase non scrivere codice e non creare ancora un piano di lavoro dettagliato.

Voglio un output concreto, non teorico:
1. sintesi del contesto attuale
2. cosa è già chiaro
3. cosa manca ancora
4. AGENTS.md creato o aggiornato
5. principali assunzioni e rischi iniziali
```

### Capire le direzioni possibili ad alto livello

```text
Partendo dal contesto raccolto e da AGENTS.md, aiutami a capire le direzioni di soluzione possibili ad alto livello.

Non voglio ancora un piano dettagliato. Voglio capire il campo di gioco:
- quali approcci sembrano sensati
- quali approcci sembrano deboli o inadatti
- quali trade-off sono già visibili
- quali vincoli peseranno davvero sulle scelte successive

Restituisci una sintesi ragionata della futura soluzione possibile, con pro e contro degli approcci realistici, ma senza entrare ancora nella progettazione operativa.
```

---

## Condizione di uscita

Puoi spiegare in modo semplice:

- che cosa esiste già, se esiste
- che cosa si vuole ottenere
- quali vincoli contano davvero
- quali approcci hanno senso ad alto livello

Se il contesto è ancora confuso, non è il momento di progettare.
