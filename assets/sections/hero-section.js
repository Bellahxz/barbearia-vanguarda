import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
      }

      span {
        color: var(--tom-3, #664e38);
        font-weight: 900;
      }

      app-titulo {
        display: flex;
        align-items: center;
        align-self: stretch;

        position: relative;
      }

      app-logo {
        width:160px;
        height:160px;
        opacity: 0.75%;
        
        position: absolute;
        right: -72px;
        top: -39px;
      }

      img {
        height: 100% ;
      }

      app-paragrafo {
        font-size: 1.25rem;
      }

      @media (min-width: 768px) {
        app-logo {
        width: 220px;
        height: 220px;
        }
      }

      @media (min-width: 1024px) {
        app-paragrafo {
          display: none;
        }

        app-logo {
          width: 220px;
          height: 220px;
        }
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>Barbearia <br> <span>Vanguarda</span></h1>
          <app-logo></app-logo>
        </app-titulo>
        <app-quadro>
          <img loading="lazy" src="slider-1.png" alt="Imagem slider 1"/>
        </app-quadro>
      </section>
      <app-paragrafo>
          Obtenha um estilo impecável, do cabelo à barba.
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
