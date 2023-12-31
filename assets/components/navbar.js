import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Navbar extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        mix-blend-mode: difference;
        color: white;

        transition: top 1s;
        pointer-events: none;
      }

      feather-icon{
        cursor: pointer;
        pointer-events: auto;
      }

      app-logo {
        background-color: white;
      }

      @media (min-width: 768px) {
        app-logo {
          width: 96px;
          height: 96px;
        }
      }
    `,
  ];

  render() {
    return html`
      <app-logo></app-logo>

      <feather-icon icon="menu" @click=${nav.abrir}></feather-icon>
    `;
  }
}
customElements.define("app-navbar", Navbar);
