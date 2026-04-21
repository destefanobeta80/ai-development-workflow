# AGENTS.md

## Contesto

Questo repository contiene un sito VitePress che documenta un workflow interno per lo sviluppo software assistito da AI.

Il contesto organizzativo è il seguente:
- team di circa 15 persone
- sviluppatori Python
- circa 1 senior, vari junior, 2 project manager e altre figure
- azienda di consulenza
- focus attuale su progetti AI e integrazione AI nei processi dei clienti
- uso di ChatGPT Enterprise da parte dei singoli dipendenti
- attenzione al costo in token e alla semplicità operativa

Il team non lavora con architetture multi-agent complesse o swarm costosi.  
L’obiettivo non è massimizzare il numero di agenti, ma migliorare il modo in cui le persone usano l’AI nello sviluppo quotidiano.

---

## Obiettivo del repository

Questo sito deve aiutare il gruppo a lavorare meglio con l’AI durante lo sviluppo.

Il sito deve essere:
- chiaro
- sintetico
- pratico
- facile da consultare spesso
- adatto anche a persone junior

Non deve essere un manifesto teorico.  
Deve essere un playbook operativo.

L’obiettivo principale è introdurre un processo condiviso che riduca questi rischi:
- partire troppo presto con il codice
- accettare soluzioni AI non capite
- non saper difendere piano e implementazione
- non leggere davvero il codice generato
- fare commit di codice non compreso

---

## Workflow da rappresentare

Il workflow ufficiale del sito è questo:

Fase 0: Capire  
Fase 1: Definire  
Fase 2: Progettare  
Fase 3: Scomporre  
Fase 4: Implementare  
Fase 5: Validare  
Fase 6: Spiegare

Logica del flusso:
- Progettare è una fase iterativa
- Validare è una fase iterativa
- il diagramma deve mostrare chiaramente questi loop
- Spiegare è la fase finale, non opzionale

---

## Significato delle fasi

### Fase 0: Capire
Comprendere il problema prima di pensare alla soluzione.

### Fase 1: Definire
Chiarire obiettivo, vincoli e risultato atteso.

### Fase 2: Progettare
Scegliere la soluzione e saperla difendere.  
Questa fase è iterativa: si continua fino a convergenza.

### Fase 3: Scomporre
Trasformare la soluzione in passi piccoli, chiari e implementabili.

### Fase 4: Implementare
Scrivere codice in modo controllato, un task alla volta, senza allargare lo scope.

### Fase 5: Validare
Testare, fare review, trovare problemi, migliorare, correggere bug.  
Questa fase è iterativa: si continua fino a convergenza.

### Fase 6: Spiegare
Dimostrare di aver capito il codice prodotto e saperlo difendere.

---

## Principi chiave

Il sito deve riflettere sempre questi tre principi:

1. Non si programma ciò che non si è capito.
2. Non si implementa un piano che non si sa difendere.
3. Non si committa codice che non si sa spiegare.

Questi principi hanno priorità alta e devono restare coerenti in tutto il repository.

---

## Struttura del sito

La struttura desiderata è:

- pagina principale con spiegazione e diagramma
- una pagina per ogni fase
- una sezione "Libreria Prompt"
- una sezione "Template Task"

Le pagine delle fasi devono mantenere una struttura coerente.

Struttura standard di ogni fase:
- Scopo
- Descrizione
- Prompt
- Condizione di uscita

Descrizione e prompt possono essere alternati quando utile, ma il tono deve restare pratico e lineare.

---

## Tono e stile

I contenuti devono essere:
- in italiano
- chiari
- sintetici
- concreti
- leggibili anche da persone junior

Evitare:
- linguaggio pomposo
- testo prolisso
- frasi astratte
- buzzword non necessarie
- spiegazioni troppo accademiche

Preferire:
- frasi brevi
- elenchi essenziali
- istruzioni operative
- esempi semplici quando servono

---

## Prompt

I prompt presenti nel sito devono essere:
- pratici
- brevi quando possibile
- pensati per uso quotidiano
- coerenti con la fase in cui si trovano

Non devono essere:
- troppo lunghi
- troppo generici
- troppo "AI-sounding"
- pieni di contesto inutile

---

## Template Task

Il template task deve restare semplice.

Struttura attuale desiderata:
- Titolo task
- Contesto
- Obiettivo
- Vincoli
- Piano
- Verifica

Non aggiungere sezioni inutili, ID, metadati complessi, dipendenze o strutture troppo pesanti.

Il template deve essere ispirato al concetto di unità di lavoro autonoma, ma in una forma semplificata e adatta all’uso reale del team.

---

## Diagramma

Il diagramma in home deve rispettare queste regole:
- fasi una sotto l’altra
- numerazione da Fase 0 a Fase 6
- loop di Progettare e Validare mostrati come testo laterale
- testo loop: "Loop fino a convergenza"
- niente forme complesse o decorative inutili
- stile semplice, pulito, leggibile

---

## Vincoli di modifica

Quando modifichi questo repository:

- non cambiare il nome delle fasi senza una ragione forte
- non introdurre nuove fasi senza necessità
- non complicare il workflow
- non rendere i prompt più lunghi del necessario
- non spostare il focus dal controllo umano alla delega totale all’AI
- non trasformare il sito in una documentazione generica sull’AI

Il repository serve a definire un metodo operativo di sviluppo AI-assisted, non una panoramica generale del settore.

---

## Priorità

Quando devi scegliere tra più direzioni, privilegia questo ordine:

1. chiarezza
2. utilità pratica
3. coerenza interna
4. facilità di adozione da parte del team
5. eleganza estetica

La semplicità vince sulla sofisticazione.

---

## Cosa fare bene

Sono particolarmente benvenuti:
- miglioramenti di leggibilità
- uniformità tra le pagine
- affinamento dei prompt
- piccoli miglioramenti visivi coerenti
- migliore organizzazione dei contenuti
- testi più chiari e più facilmente copiabili

---

## Cosa evitare

Evita in particolare:
- riscritture inutili del contenuto già approvato
- cambi di tono
- inglesismi gratuiti nei contenuti italiani
- complessità tecnica non necessaria
- framework o componenti inutili
- trasformazioni che allontanano il sito dal suo uso quotidiano

---

## Indicazione operativa per gli agenti

Quando proponi modifiche:
- mantieni il workflow come fonte di verità
- verifica la coerenza con le pagine già esistenti
- preferisci cambi piccoli e mirati
- non introdurre teoria se non serve a migliorare l’uso pratico

Ogni modifica dovrebbe aiutare il team a usare meglio l’AI nello sviluppo reale.