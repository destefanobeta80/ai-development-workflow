# Libreria prompt

Prompt pronti da usare nelle varie fasi del workflow.

Sono volutamente generici. L'idea è riusarli in progetti diversi, lasciando che il contesto venga letto da `AGENTS.md`, dai file del repository e dal task corrente.

## Fase 0: Comprendere {#fase-0-comprendere}

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

## Fase 1: Progettare {#fase-1-progettare}

### Creare il piano

```text
Rileggi AGENTS.md. Lavora solo sul piano: niente codice, niente task esecutivi.

Usa il contesto raccolto, i documenti disponibili e le informazioni già chiarite nella Fase 0.

Crea o aggiorna PLAN.md. Il piano deve essere abbastanza concreto da poter essere trasformato in task senza reinterpretare l'obiettivo.

Il piano deve chiarire:
- obiettivo e non-obiettivi
- workflow utente/sistema
- architettura proposta
- scelte tecniche principali e alternative scartate
- ordine logico del lavoro
- punti delicati, rischi, dipendenze e failure mode
- strategia di verifica/test
- criteri di accettazione

Se ci sono opzioni ancora aperte, scegli una raccomandazione motivata oppure marca la decisione come bloccante.

Alla fine aggiorna PLAN.md e chiudi con:
1. decisioni prese
2. assunzioni
3. decisioni ancora aperte
4. gate: pronto per scomposizione? sì/no, con motivo
```

### Criticare il piano con diff

```text
Rileggi AGENTS.md e PLAN.md. Fai una review severa del piano attuale.

Niente complimenti. Niente riscrittura totale se non necessaria. Cerca solo difetti che possono causare rework, ambiguità o implementazioni sbagliate.

Cerca in particolare:
- errori logici
- assunzioni non dimostrate
- parti troppo generiche
- rischi non gestiti
- passaggi che potrebbero creare problemi durante l'implementazione
- criteri di verifica mancanti
- decisioni rimandate impropriamente
- dipendenze implicite

Restituisci:
1. criticità reali, in ordine di importanza
2. miglioramenti proposti
3. diff unified concreto su PLAN.md
4. giudizio: converge / serve altro giro / non pronto

Il diff deve modificare solo le sezioni necessarie. Se una modifica è solo opinabile, separala dalle correzioni necessarie.
```

### Integrare piani di modelli diversi

```text
Ho più piani per lo stesso obiettivo. Devi creare una versione migliore del piano iniziale.

Analizza piano iniziale e alternative. Sii intellettualmente onesto su cosa gli altri piani fanno meglio: struttura, rischi, sequenza, semplicità, robustezza, dettagli tecnici, verificabilità.

Non fare un merge meccanico. Integra solo idee che migliorano il piano in modo pratico e verificabile.

Voglio:
1. punti forti reali trovati nei piani alternativi
2. punti che non integreresti e perché
3. modifiche proposte in diff unified su PLAN.md
4. PLAN.md aggiornato
5. rischi residui

Non indicare nel piano finale quale idea viene da quale modello. Il risultato deve essere un piano unico, più solido e più pratico.
```

### Revisionare il piano in una nuova sessione

```text
Leggi AGENTS.md e PLAN.md.

Obiettivo: rendere PLAN.md più chiaro, robusto, implementabile e verificabile.

Per ogni modifica proposta, spiegami:
- perché migliora il piano
- quale rischio riduce
- quale parte del piano cambierebbe
- se è necessaria o solo migliorativa

Restituisci:
1. problemi principali trovati
2. modifiche consigliate in ordine di importanza
3. diff unified concreto
4. giudizio finale: il piano è vicino alla convergenza o serve un altro giro?
```

## Fase 2: Scomporre {#fase-2-scomporre}

### Creare `TASKS.md`

```text
Rileggi AGENTS.md e PLAN.md.

Trasforma il piano in task autonomi, implementabili e verificabili. Crea o aggiorna TASKS.md.

Ogni task deve essere self-contained: un agente deve poterlo implementare senza rileggere tutto PLAN.md.
Non creare task minuscoli. Crea unità di lavoro con obiettivo, contesto, perimetro, dipendenze, istruzioni e verifica chiari.

Per ogni task usa sempre questa struttura:

### T01 - Titolo task
- **Stato:** Da fare / In corso / In review / Completato
- **Dipende da:** nessuna / Txx, Tyy
- **Contesto:** informazioni necessarie dal piano
- **Obiettivo:** cosa deve ottenere il task
- **Perimetro incluso:** cosa va fatto
- **Perimetro escluso:** cosa non va fatto
- **Istruzioni:** decisioni già prese, vincoli e passaggi essenziali
- **File/aree probabili:** se deducibili
- **Verifica:** test, controlli manuali o criteri di accettazione
- **Note di rischio:** edge case, regressioni o punti delicati

Regole:
- usa ID semplici come T01, T02, T03
- ogni elemento materiale del piano deve comparire in almeno un task
- ogni task deve avere una verifica concreta
- nessun task deve richiedere decisioni architetturali nuove
- se una decisione manca, segnala il blocco invece di nasconderlo

Alla fine controlla la sequenza:
1. quali task possono partire subito
2. quali task sono bloccati da altri
3. se ci sono sovrapposizioni o buchi logici
4. se qualche task è ancora troppo vago o troppo grande
5. se ogni parte del piano è coperta
6. se ogni dipendenza è esplicita

Correggi TASKS.md finché la copertura è completa, le dipendenze sono coerenti e i task sono eseguibili.
```

### Verificare `TASKS.md` rispetto al piano

```text
Rileggi AGENTS.md, PLAN.md e TASKS.md.

Verifica che TASKS.md sia una traduzione fedele, completa e implementabile di PLAN.md.

Controlla:
- se tutti i punti importanti del piano sono coperti da almeno un task
- se ci sono task troppo grandi, troppo vaghi o non implementabili
- se ci sono task sovrapposti o duplicati
- se mancano task intermedi necessari
- se le dipendenze tra task sono corrette
- se qualche task richiede decisioni che dovevano essere già prese nel piano
- se ogni task ha una verifica concreta
- se ogni task è self-contained
- se esistono task pronti subito
- se il grafo delle dipendenze ha blocchi inutili

Restituisci:
1. problemi trovati, in ordine di importanza
2. matrice sintetica sezione PLAN.md - task collegati
3. task da aggiungere
4. task da dividere, unire o riscrivere
5. dipendenze da correggere
6. diff unified su TASKS.md
7. giudizio finale: pronto / serve altro giro / tornare al piano

Non riscrivere tutto se non serve. Correggi solo ciò che aumenta copertura, chiarezza, implementabilità o verificabilità.
```

## Fase 3: Implementare {#fase-3-implementare}

### Implementare un task

```text
Rileggi AGENTS.md e TASKS.md. Controlla anche lo stato corrente del repository.

Scegli il task libero da implementare:
- deve avere stato "Da fare"
- tutte le sue dipendenze devono avere stato "Completato"
- preferisci il task che sblocca più lavoro a valle

Prima di scrivere codice:
- aggiorna lo stato del task a "In corso"
- identifica il perimetro esatto
- verifica che non ci siano modifiche non correlate già presenti

Riassumi:
1. quale task hai scelto e perché
2. cosa farai
3. quali file pensi di toccare
4. quali rischi vedi
5. cosa resta fuori scope

Poi implementa restando strettamente nel perimetro del task.
Non modificare file o logiche fuori dal perimetro concordato, anche se noti miglioramenti possibili altrove.

Fermati e segnala se:
- il task è ambiguo
- manca una decisione necessaria
- il codice contraddice il piano
- servirebbe modificare fuori scope
- le dipendenze non sono davvero completate

Quando hai finito:
1. aggiorna lo stato del task a "In review"
2. spiega cosa hai cambiato
3. indica quali verifiche hai fatto
4. segnala cosa merita attenzione nella review
5. segnala eventuali follow-up fuori scope, senza implementarli
```

## Fase 4: Validare {#fase-4-validare}

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

## Fase 5: Spiegare {#fase-5-spiegare}

### Spiegare il lavoro prodotto

```text
Rileggi AGENTS.md, TASKS.md, il task completato e il diff/codice prodotto.

Spiega il lavoro in modo che un PM o reviewer tecnico possa capirlo e verificarlo:
- cosa è stato implementato
- perché questa soluzione risponde al task
- quali scelte del piano sono state applicate
- come funziona il flusso principale del codice
- quali file o parti sono più importanti
- quali punti delicati o rischiosi restano
- quali verifiche sono state fatte
- come rifare la verifica
- cosa non è stato fatto perché fuori scope

Chiudi con una sintesi breve che distingua:
1. cosa è stato fatto
2. perché è stato fatto così
3. come funziona nel codice
4. come verificare che funzioni
```

## Miglioramento continuo {#miglioramento-continuo}

### Raccogliere feedback dalla sessione

```text
Rileggi AGENTS.md, TASKS.md, i prompt usati nella sessione e il lavoro appena svolto.

Aiutami a raccogliere feedback utile per migliorare il sistema di lavoro.

Non voglio una retrospettiva generica. Voglio problemi concreti che hanno rallentato, confuso o reso più rischiosa la sessione.

Controlla:
- istruzioni mancanti o ambigue in AGENTS.md
- prompt poco chiari o troppo generici
- task incompleti, troppo grandi o non self-contained
- comandi di test, build o setup mancanti o sbagliati
- vincoli scoperti tardi
- errori ripetuti o correzioni evitabili
- eventuali SKILL.md o istruzioni operative da migliorare

Distingui i problemi d'ambiente da correggere subito dalle migliorie di processo da raccogliere.

Salva il feedback in un nuovo file dentro feedback-ai/.
Usa un nome file descrittivo: feedback-ai/YYYY-MM-DD-nome-sessione.md.

Il file deve contenere:
1. contesto breve della sessione
2. problemi incontrati
3. impatto pratico
4. causa probabile
5. suggerimento di miglioramento
6. cosa correggere subito, se è un problema d'ambiente
```

### Analizzare feedback e proporre migliorie

```text
Rileggi AGENTS.md, eventuali template o SKILL.md rilevanti e tutti i file in feedback-ai/.

Analizza i feedback raccolti e cerca pattern ricorrenti.

Non applicare ogni suggerimento. Separa:
- problemi reali e ripetuti
- problemi già risolti
- osservazioni troppo specifiche di una singola sessione
- preferenze opinabili
- problemi d'ambiente da correggere subito

Proponi solo migliorie che rendono il lavoro futuro più chiaro, ripetibile o sicuro.

Restituisci:
1. pattern principali trovati
2. problemi da correggere subito
3. migliorie consigliate, in ordine di impatto
4. modifiche proposte a AGENTS.md, prompt, template, SKILL.md o documentazione
5. diff unified concreto per le modifiche consigliate
6. feedback da archiviare senza azione, con motivo

Non complicare il workflow e non aggiungere nuove regole se il beneficio non è chiaro.
```

## Uso rapido

- Parti dalla fase corretta
- In Progettare, Scomporre e Validare fai più loop, non uno solo
- Quando i diff diventano piccoli, sei vicino alla convergenza
- Se l'output è vago, restringi la richiesta
- Dopo ogni ciclo, valuta se aggiornare AGENTS.md solo con lezioni riutilizzabili
