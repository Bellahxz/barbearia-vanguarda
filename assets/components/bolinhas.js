import { LitElement, html, css } from "lit";

export class Bolinhas extends LitElement {
  static get properties() {
    return {
      formato: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        width: 100px;
        height: 100px;

        display: block;
      }

      .inteira {
        -webkit-mask: url("bolinhas.svg") no-repeat center;
        mask: url("bolinhas.svg") no-repeat center;
      }

      .metade {
        -webkit-mask: url("bolinhas-metade.svg") no-repeat center;
        mask: url("bolinhas-metade.svg") no-repeat center;
      }

      .preenchidas {
        -webkit-mask: url("bolinhas-preenchidas.svg") no-repeat center;
        mask: url("bolinhas-preenchidas.svg") no-repeat center;
      }

      .vazias {
        -webkit-mask: url("bolinhas-vazias.svg") no-repeat center;
        mask: url("bolinhas-vazias.svg") no-repeat center;
      }

      .bolinhas {
        width: 100%;
        height: 100%;

        -webkit-mask-size: 100%;
        mask-size: 100%;
        background-color: var(--cor-bolinhas, black);
      }
    `,
  ];

  /**
   * Define o formato das bolinhas
   * @returns Classe do formato
   */
   definirFormato() {
    if (this.formato === "preenchidas") {
      return "preenchidas";
    }
    if (this.formato === "vazias") {
      return "vazias";
    }
    if (this.formato === "metade") {
      return "metade";
    }
    return "inteira";
  }

  render() {
    return html`
      <div class=${`bolinhas ${this.definirFormato()}`}></div>
    `;
  }
}
customElements.define("app-bolinhas", Bolinhas);
