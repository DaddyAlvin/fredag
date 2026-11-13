import { Link } from 'react-router-dom';

function Subslayer() {
  return (
    <main>
      <section className="hero reveal">
        <h1>SubSlayer</h1>
        <p className="lead">
          En webbapp för att hålla koll på prenumerationer. Jag byggde den med PHP,
          JavaScript och MySQL/MariaDB, från inloggning och databas till API,
          valutaomvandling och automatiska påminnelser.
        </p>
        <p className="actions">
          <a className="btn btn-primary" href="https://github.com/Alvin-Sandgren/SubSlayer">Koden på GitHub</a>
          <Link className="btn btn-secondary" to="/#projects">Tillbaka till projekt</Link>
        </p>
      </section>

      <section className="reveal" id="about">
        <h2>Om projektet</h2>
        <p>
          Användare registrerar sig, loggar in och lägger till sina prenumerationer
          med kostnad, valuta, betalningsperiod och nästa förfallodatum. Appen räknar
          ut årskostnaden, växlar mellan valutor och visar hur stor del av lönen som
          går till prenumerationer.
        </p>
        <p>Projektet består av cirka 1 900 rader egen kod i PHP, JavaScript och CSS.</p>
      </section>

      <section className="reveal" id="features">
        <h2>Funktioner</h2>
        <dl className="features">
          <dt>Konto och inloggning</dt>
          <dd>
            Registrering med e-post och lösenord. Lösenorden hashas med
            <code>password_hash</code> och sessioner styr vad en inloggad användare får se.
          </dd>
          <dt>Prenumerationer</dt>
          <dd>
            Lägg till, ändra och ta bort prenumerationer. Kostnad och valuta kan
            redigeras direkt i tabellen, och de tre nästa förfallodatumen visas med
            antal dagar kvar.
          </dd>
          <dt>REST-API</dt>
          <dd>
            <code>backend/api.php</code> kontrollerar sessionen och svarar med JSON via
            GET, POST, PUT och DELETE. En prenumeration kan bara tas bort av sin ägare.
          </dd>
          <dt>Valutaomvandling</dt>
          <dd>
            Kurser hämtas från Frankfurter API med SEK som bas, så att prenumerationer
            i andra valutor räknas om och går att jämföra.
          </dd>
          <dt>Jämförelse mot lönen</dt>
          <dd>
            Användaren sparar sin månadslön och ser hur stor andel av årslönen som går
            till prenumerationer. Ett cirkeldiagram byggt med Chart.js visar
            kostnadsfördelningen per tjänst.
          </dd>
          <dt>E-postpåminnelser</dt>
          <dd>
            <code>notifier.php</code> skickar påminnelser med PHPMailer för betalningar
            som förfaller inom sju dagar. Skriptet körs en gång per dygn via Windows
            Schemaläggare, loggar till <code>cron_log.txt</code>, och under utveckling
            fångar Mailpit mejlen lokalt.
          </dd>
          <dt>Wall of Shame</dt>
          <dd>
            Ett publikt API, <code>global-stats.php</code>, listar de tio dyraste
            prenumerationerna omräknade till SEK och normaliserade till månadskostnad.
            Startsidan hämtar listan med JavaScript.
          </dd>
        </dl>
      </section>

      <section className="reveal" id="tech">
        <h2>Teknik</h2>
        <ul className="tags">
          <li>PHP 8</li>
          <li>JavaScript (ES-moduler)</li>
          <li>MySQL / MariaDB</li>
          <li>Composer</li>
          <li>PHPMailer</li>
          <li>Chart.js</li>
          <li>Frankfurter API</li>
          <li>Mailpit</li>
          <li>Laragon / XAMPP</li>
          <li>Git och GitHub</li>
        </ul>
      </section>

      <section className="reveal" id="structure">
        <h2>Struktur</h2>
        <p>
          Backend och frontend är separerade: PHP ligger i <code>backend/</code> och
          JavaScriptet är uppdelat i moduler i <code>frontend/js/</code>. Databasuppgifterna
          ligger i en <code>conf.ini</code> utanför projektmappen, så att känslig data
          inte hamnar i källkoden.
        </p>
        <pre className="filetree">{`SubSlayer/
├─ index.html
├─ backend/
│  ├─ api.php, login.php, register.php, logout.php
│  ├─ subslayer.php, salary.php, global-stats.php
│  └─ notifier.php
├─ frontend/
│  ├─ css/style.css
│  └─ js/main.js, api.js, currencies.js, render.js, salary.js
├─ composer/
└─ db/SubSlayer.sql`}</pre>
      </section>
    </main>
  );
}

export default Subslayer;