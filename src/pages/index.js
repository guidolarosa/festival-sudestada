import * as React from "react";
import {Link} from 'gatsby';
import './../stylus/stylesheet.styl';

// markup
const IndexPage = () => {
  const couples = [
    ['Javiera PS', 'Pitucardi'],
    ['Femimutancia', 'Sile.Xile'],
    ['Sukermercado', 'Leandro Davel'],
    ['Mariana Sabattini', 'Marcelo Díaz'],
    ['Martín M. Muntaner', 'Manuel Depetris'],
    ['Natalia Novia', 'Ariel López V.']
  ];

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
                      para su tercera y pandémica edición en 
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
                        {couples.map((couple) => (
                            <li className="couple">
                              <span>{couple[0]}</span>
                              <span> • </span>
                              <span>{couple[1]}</span>
                            </li>
                        ))}
                      </ul>
                  </div>
              </section>
          </main>
          <footer className="container">
              <section className="footer-logos">
                  <img src="./mc.jpg" alt="Mecenazgo Cultural" />
                  <img src="./fs.png" alt="Festival Sudestada de Dibujo e Ilustración" />
                  <img src="./ccr.png" alt="Centro Cultural Recoleta" />
              </section>
              <section className="lower-footer">
                  <span className="previous-editions">
                      Ediciones anteriores 
                      <a href="/2017">2017</a> / 
                      <a href="/2018">2018</a>
                  </span>
              </section>
          </footer>
      </body>
    </>
  )
}

export default IndexPage;
