# Miglioramento continuo

## Scopo

Migliorare gli strumenti di lavoro partendo dai problemi reali incontrati dagli agenti durante le sessioni.

Il miglioramento continuo serve a risolvere problemi nell'ambiente di sviluppo e rendere più utili nel tempo `AGENTS.md`, prompt, `SKILL.md` e documentazione di progetto.

## Descrizione

Alla fine di una sessione, chiedi all'agente quali problemi ha incontrato mentre lavorava.

Il feedback va salvato in una cartella separata, ad esempio:

```text
feedback-ai/
```

Usa un file per ogni sessione, con un nome semplice:

```text
feedback-ai/2026-04-25-validazione-task.md
```

Non tutto il feedback va applicato subito.  
Il singolo feedback può essere incompleto, troppo legato alla sessione o basato su un problema temporaneo.

La regola pratica è:

- salva i feedback dopo le sessioni importanti
- raccogli 5-10 feedback
- poi usa un agente per analizzarli insieme
- implementa solo le migliorie ricorrenti, concrete e riutilizzabili

Le migliorie buone sono quelle che riducono errori futuri: istruzioni più chiare, prompt più precisi, task più completi, comandi documentati meglio, vincoli esplicitati.

## Problemi da correggere subito

Alcuni problemi non devono aspettare la raccolta di 5-10 feedback.

Se emerge un problema d'ambiente concreto, correggilo subito e poi annotalo comunque nel feedback.

Esempi:

- un comando di test indicato in `AGENTS.md` non esiste più
- una variabile d'ambiente necessaria non è documentata
- il comando di build corretto è diverso da quello riportato

Annotarlo serve comunque: se lo stesso problema riaffiora in più sessioni, significa che non basta correggere l'ambiente, bisogna migliorare anche le istruzioni.

## Prompt

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

## Risultato

Il miglioramento continuo funziona quando produce poche modifiche utili, non molte regole nuove.

Alla fine dovresti avere:

- feedback salvati in modo ordinato
- problemi d'ambiente corretti subito
- pattern ricorrenti identificati
- aggiornamenti mirati agli strumenti di lavoro
- meno errori simili nelle sessioni successive
