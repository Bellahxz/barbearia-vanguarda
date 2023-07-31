import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/section-style";

export class ServiçOsSection extends LitElement {
  static styles = [
    animate,
    section,
    css`
      :host {
        padding: 2rem 0;
      }

      app-bolinhas {
        width: 270px;
        height: 23px;
        --cor-bolinhas: var(--tom-3);
      }

      app-bolinhas:first-child {
        /* Seleciona o primeiro app-bolinhas*/
        transform: rotate(180deg);
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      span {
        color: var(--tom-3);
        font-weight: 600; /*Semi Bold*/
      }

      .titulo {
        width: 270px;
      }

      section {
        display: flex;
        align-items: center;
        gap: 36px;
        align-self: stretch;
      }

      aside {
        display: flex;
        padding: 96px 0px 8px 0px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;

        z-index: -10;
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }

      article app-paragrafo:first-child {
        font-weight: 700;
        color: var(--tom-3);
      }

      .descricao {
        width: 108px;
        height: 0.875rem;
      }

      img {
        height: 100%;
      }

      app-quadro {
        width: 165px;
        height: 320px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      swiper-container {
        width: 100%;
        height: 100%;
      }

      swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (min-width: 768px) {
        :host {
          padding: 3rem 0;
        }

        section {
          align-self: center;
        }

        app-quadro {
          width: 265px;
          height: 520px;
          border-radius: 8px;
        }

        .titulo {
          width: 330px;
          font-size: 1.25rem;
        }

        article app-paragrafo:first-child {
          font-size: 1.25rem;
        }

        .descricao {
          width: 158px;
          text-align: center;
          font-size: 1rem;
        }

        aside {
          padding: 176px 0px 16px 0px;
        }
      }

      @media (min-width: 1024px) {
        div {
          display: none;
        }
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo class="titulo animate__animated" data-toggle-class="animate__fadeIn">
        Estilo, cuidado e excelência em cada <span>corte</span>.
      </app-paragrafo>

      <section>
        <app-quadro class="animate__animated" data-toggle-class="animate__fadeInLeft">
          <swiper-container
            effect="fade"
            loop="true"
            autoplay="true"
            speed="750"
            simulate-touch="false"
            disabe-on-interaction="false"
          >
            <swiper-slide>
              <img
                loading="lazy"
                src="servicos-1.jpg"
                alt="Imagem Serviços 1"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                loading="lazy"
                src="servicos-2.jpg"
                alt="Imagem Serviços 2"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                loading="lazy"
                src="servicos-3.jpg"
                alt="Imagem Serviços 3"
              />
            </swiper-slide>
          </swiper-container>
        </app-quadro>

        <aside class="animate__animated animate__delay-1s" data-toggle-class="animate__fadeInLeft">
          <article>
            <app-paragrafo>Corte</app-paragrafo>
            <app-paragrafo class="descricao">
              Social,degradê, surfista, militar, razor part, undercut.
            </app-paragrafo>
          </article>

          <app-botao><a href="servicos"> Ver mais </a></app-botao>
        </aside>
      </section>

      <div>
        <app-bolinhas formato="vazias"></app-bolinhas>
        <app-bolinhas formato="preenchidas"></app-bolinhas>
      </div>
    `;
  }
}
customElements.define("servicos-section", ServiçOsSection);
