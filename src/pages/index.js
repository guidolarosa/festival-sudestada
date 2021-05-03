import * as React from "react";
import './../stylus/stylesheet.styl';

// markup
const IndexPage = () => {
  return (
    <>
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>MAREA - Festival S udestada</title>
      </head>
      <body>
          <header className="container">
              <span className="pre-header">
                  <span> 
                      El Festival Sudestada de dibujo e ilustración se transforma 
                      <br />
                      para su tercera y pandemica edición en 
                  </span>
                  <div className="header-decoration"></div>
              </span>
              <section className="header-body">
                  <h1>MAREA</h1>
                  <span>
                      Antología de historieta<br /> contemporánea en colaboración
                  </span>
              </section>
          </header>
          <main className="container">
              <section className="book-mockup">
                  <img src={'./mockup.png'} alt="Book mockup"/>
                  <span className="download-text">
                      <a href="./marea.pdf" download="marea.pdf">Descargá</a> el libro completo
                  </span>
              </section>
              <section className="authors">
                  <span className="section-title">
                      Con trabajos de
                  </span>
                  <div className="name-list">
                      <ul>
                          <li>Javiera PS</li>
                          <li>Pitucardi</li>
                          <li>Femimutancia</li>
                          <li>Sile.Xile</li>
                          <li>Sukermercado</li>
                          <li>Leandro Davel</li>
                          <li>Mariana Sabattini</li>
                          <li>Marcelo Díaz</li>
                          <li>Martín M. Muntaner</li>
                          <li>Manuel Depetris</li>
                          <li>Natalia Novia</li>
                          <li>Ariel López V.</li>
                      </ul>
                  </div>
              </section>
          </main>
          <footer className="container">
              <section className="footer-logos">
                  <img src="./mecenazgo_cultural.png" alt="Alt" />
                  <img src="./ccr.png" alt="Alt" />
              </section>
              <section className="lower-footer">
                  <span className="previous-editions">
                      Ediciones anteriores <a href="#">2017</a> / <a href="@">2018</a>
                  </span>
              </section>
          </footer>
      </body>
    </>
  )
}

export default IndexPage;
