import { Link } from 'react-router-dom';

function Main() {
    return (
    <main id="home">
      <section className="hero reveal">
        <h1>Alvin Sandgren</h1>
        <p className="lead">
          Junior developer med en grundlig programmeringsbakgrund från gymnasiets
          teknikutbildning. Här samlar jag vem jag är, vad jag kan och mina projekt.
        </p>
        <p className="actions">
          <a className="btn btn-primary" href="#projects">Se projekt</a>
          <a className="btn btn-secondary" href="#contact">Kontakta mig</a>
        </p>
      </section>

      <section className="reveal" id="about">
        <h2>Om mig</h2>
        <p>
          Jag heter Alvin Sandgren, är 19 år och junior developer. Under gymnasiet
          gick jag en utbildning inom teknik där jag lärde mig programmering på
          djupet, och det är där grunden till det jag kan idag byggdes.
        </p>
      </section>

      <section className="reveal" id="skills">
        <h2>Kunskaper</h2>
        <h3>Språk</h3>
        <ul className="tags">
          <li>PHP</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>Python</li>
        </ul>
        <h3>Verktyg</h3>
        <ul className="tags">
          <li>Git</li>
          <li>Visual Studio Code</li>
          <li>Laravel / XAMPP</li>
          <li>Docker</li>
          <li>Portar och testning för hemsidor</li>
          <li>FTP</li>
          <li>MySQL / MariaDB</li>
        </ul>
      </section>

      <section className="reveal" id="projects">
        <h2>Projekt</h2>

        <div className="cards">
          <article id="subslayer">
            <h3>SubSlayer</h3>
            <p>
              Webbapp för att hålla koll på prenumerationer: förfallodatum, årskostnad,
              flera valutor och e-postpåminnelser.
            </p>
            <ul className="tags">
              <li>PHP</li>
              <li>JavaScript</li>
              <li>MySQL / MariaDB</li>
            </ul>
            <Link className="btn btn-primary" to="/subslayer">Läs om projektet</Link>
          </article>
        </div>
      </section>

      <section className="reveal" id="interests">
        <h2>Fritid</h2>
        <p>
          På fritiden läser jag en del och spelar datorspel. Jag tränar också,
          och därför har matlagning blivit ett intresse.
        </p>
        <ul className="tags">
          <li>Läsning</li>
          <li>Datorspel</li>
          <li>Träning</li>
          <li>Matlagning</li>
        </ul>
        <article className="pet">
          <h3>Billy</h3>
          <p>Min katt, 3 år gammal, som jag älskar väldigt mycket.</p>
        </article>
      </section>

      <section className="reveal" id="contact">
        <h2>Kontakt</h2>
        <ul className="contact-list">
          <li>E-post: <a href="mailto:alvin_sandgren@icloud.com">alvin_sandgren@icloud.com</a></li>
          <li>Telefon: +070-29 55 107</li>
        </ul>
      </section>
    </main>
    );
}

export default Main;