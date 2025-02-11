# Documentazione sull'uso degli Attributi name, id e autocomplete nei Moduli HTML

## Introduzione
Negli elementi di input di un modulo HTML, gli attributi `name`, `id` e `autocomplete` hanno scopi distinti e sono utilizzati per migliorare la funzionalità, l'accessibilità e l'esperienza utente. Questa documentazione fornisce una panoramica dettagliata di ciascun attributo e fornisce tabelle categorizzate con i valori consigliati.

## 1. Differenze tra gli Attributi name, id e autocomplete

| Attributo    | Scopo |
|-------------|----------------------------------------------|
| `name`      | Identifica il campo nel set di dati inviato al server. |
| `id`        | Fornisce un identificatore univoco per il riferimento interno nel documento HTML. |
| `autocomplete` | Suggerisce il tipo di dati previsto per la compilazione automatica del browser. |

Esempio di utilizzo corretto:
```html
<label for="email">Indirizzo Email:</label>
<input type="email" id="email" name="user_email" autocomplete="email">
```

## 2. Tabelle con Valori Consigliati

### 2.1 Informazioni Personali
| Campo             | id           | name        | autocomplete       |
|------------------|-------------|------------|--------------------|
| Nome completo   | full-name    | full_name  | name               |
| Titolo onorifico | honorific   | honorific  | honorific-prefix   |
| Nome            | first-name  | first_name | given-name         |
| Secondo nome   | middle-name | middle_name| additional-name    |
| Cognome        | last-name   | last_name  | family-name        |
| Soprannome     | nickname    | nickname   | nickname           |
| Nome utente    | username    | username   | username           |
| Nuova password | new-password| new_password | new-password     |
| Password attuale | current-password | current_password | current-password |
| Codice monouso | one-time-code | one_time_code | one-time-code |

### 2.2 Informazioni di Contatto
| Campo                 | id                 | name            | autocomplete       |
|----------------------|------------------|----------------|------------------|
| Titolo professionale | job-title        | job_title      | organization-title |
| Nome azienda         | company          | company        | organization     |
| Indirizzo           | address          | address        | street-address   |
| Linea indirizzo 1   | address-line1    | address_line1  | address-line1    |
| Linea indirizzo 2   | address-line2    | address_line2  | address-line2    |
| Città             | city             | city           | address-level2   |
| Provincia          | province         | province       | address-level1   |
| Codice postale     | postal-code      | postal_code    | postal-code      |
| Paese              | country          | country        | country          |
| Nome del paese     | country-name     | country_name   | country-name     |
| Email             | email            | email          | email            |
| Telefono          | phone            | phone          | tel              |
| Prefisso internazionale | phone-country-code | phone_country_code | tel-country-code |
| Numero locale      | phone-local      | phone_local    | tel-local        |
| Interno telefonico | phone-extension  | phone_extension | tel-extension   |
| URL messaggistica istantanea | impp | impp | impp |

### 2.3 Informazioni di Pagamento
| Campo             | id        | name       | autocomplete |
|------------------|----------|-----------|-------------|
| Nome sulla carta | cc-name  | cc_name   | cc-name     |
| Numero carta     | cc-number | cc_number | cc-number   |
| Data di scadenza | cc-exp   | cc_exp    | cc-exp      |
| Mese di scadenza | cc-exp-month | cc_exp_month | cc-exp-month |
| Anno di scadenza | cc-exp-year | cc_exp_year | cc-exp-year |
| Codice di sicurezza | cc-csc | cc_csc | cc-csc |
| Tipo di carta    | cc-type  | cc_type   | cc-type     |

### 2.4 Informazioni Personali Aggiuntive
| Campo             | id          | name         | autocomplete  |
|------------------|------------|-------------|--------------|
| Data di nascita  | bday       | bday        | bday        |
| Giorno di nascita | bday-day   | bday_day    | bday-day    |
| Mese di nascita  | bday-month | bday_month  | bday-month  |
| Anno di nascita  | bday-year  | bday_year   | bday-year   |
| Genere          | gender     | gender      | sex         |
| Sito web personale | website | website | url         |
| Foto del profilo | photo      | photo       | photo       |

### 2.5 Informazioni Relative alle Transazioni
| Campo                   | id                    | name                  | autocomplete        |
|------------------------|----------------------|----------------------|-------------------|
| Valuta della transazione | transaction-currency | transaction_currency | transaction-currency |
| Importo della transazione | transaction-amount  | transaction_amount   | transaction-amount |
| Lingua preferita        | language            | language             | language           |

## 3. Conclusione
L'uso corretto degli attributi `id`, `name` e `autocomplete` nei moduli HTML migliora l'accessibilità, facilita l'invio di dati al server e ottimizza l'esperienza dell'utente con suggerimenti per l'autocompletamento.
Per maggiori dettagli su `autocomplete`, è possibile consultare la [documentazione ufficiale MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).

