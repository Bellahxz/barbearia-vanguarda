import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Menu extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      dialog {
        display: flex;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        padding: 32px;
        border: 0;
        margin: 0;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex-shrink: 0;

        opacity: 0;
        pointer-events: none;
        transition: opacity 300ms;

        background-color: rgba(0, 0, 0, 40%);
        position: fixed;
        z-index: 110;
      }

      dialog[open] {
        opacity: 1;
        pointer-events: auto;
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-self: flex-end;
        gap: 24px;
      }

      app-logo {
        width: 96px;
        height: 96px;
        background-color: white;
      }

      a, button {
        /* Layout */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        color: #ffff;
        font-family: var(--fonte-titulo);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;

        cursor: pointer;
        transition: color 300ms;
      }

      a,
      button {
        padding: 0;
        border: 0;
        background: transparent;
      }

      a:hover, button:hover {
        color: var(--tom-1);
      }

      a:active, button:active {
        color: var(--tom-1);
      }

      svg,
      feather-icon {
        display: flex;
        width: 24px;
        fill: currentcolor;
      }
    `,
  ];

  rolarContato() {
    return nav.rolarPara('#contatos')
  }

  rolarUnidades() {
    return nav.rolarPara('#unidades')
  }


  render() {
    return html` <dialog>
      <app-logo></app-logo>

      <nav>
        <button @click=${this.rolarUnidades}>Unidades <feather-icon icon="map-pin"></feather-icon></button>
        <button @click=${this.rolarContato}>Contatos <feather-icon icon="phone"></feather-icon></button>
        <a @click=${nav.fechar} href="servicos"> Serviços <feather-icon icon="scissors"></feather-icon> </a>
        <a @click=${nav.fechar} href="a-barbearia">
          A Barbearia
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 28">
            <path
              d="M21.8046 27.4923C21.7723 27.5881 21.7105 27.6709 21.6285 27.7286C21.5464 27.7863 21.4482 27.8157 21.3484 27.8127H20.3527L20.9712 24.6824C21.0453 24.8309 21.1119 24.983 21.1709 25.1382L21.8178 27.1868C21.8522 27.2866 21.8475 27.3959 21.8046 27.4923ZM0.0364603 27.4938C-0.00663124 27.3974 -0.011723 27.2879 0.0222334 27.1878L0.661853 25.1616C0.722837 24.9987 0.79209 24.8391 0.869336 24.6834L1.48786 27.8127H0.492139C0.40349 27.8135 0.316327 27.7896 0.240194 27.7435C0.16406 27.6975 0.10189 27.631 0.0604929 27.5515C0.0512927 27.5328 0.0432674 27.5135 0.0364603 27.4938ZM6.7402 24.9964C6.85423 25.1341 7.00338 25.2374 7.17135 25.295L8.5894 27.8127H7.3808L6.7402 24.9964ZM8.23231 25.1725L9.50321 24.8058C9.89454 25.156 10.3984 25.3493 10.9203 25.3493C11.4421 25.3493 11.946 25.156 12.3374 24.8058L13.6083 25.1725L12.121 27.8127H9.71953L8.23231 25.1725ZM14.6692 25.295C14.7681 25.2606 14.861 25.2106 14.9444 25.1467C15.0016 25.1024 15.0539 25.052 15.1004 24.9964L14.4598 27.8127H13.2512L14.6692 25.295ZM13.0638 18.481C12.4577 18.98 11.7009 19.2523 10.9203 19.2523C10.1397 19.2523 9.38288 18.98 8.77677 18.481C8.42361 18.1875 8.10969 17.9088 7.81048 17.6252C7.81538 17.675 7.82519 17.7247 7.8301 17.7695C7.88259 18.2087 7.91043 18.6506 7.91349 19.0931L10.9203 21.7104L13.9271 19.0931C13.9301 18.6506 13.958 18.2087 14.0105 17.7695C14.0154 17.7197 14.0252 17.675 14.0301 17.6252C13.7309 17.9088 13.417 18.1875 13.0638 18.481ZM2.74356 22.6408C1.96856 23.2131 1.85084 23.3126 1.8116 23.3524C1.75274 23.4121 1.69878 23.4818 1.64483 23.5415L2.48849 27.8107H3.92077L2.74356 22.6408ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM5.04403 21.8795C4.5668 21.9105 4.09623 22.0094 3.64609 22.1731L4.92631 27.8107H6.3733L5.04893 21.9791C5.04241 21.9463 5.04076 21.9128 5.04403 21.8795ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM16.7965 21.8795C16.7998 21.9128 16.7982 21.9463 16.7916 21.9791L15.4673 27.8107H16.9143L18.1945 22.1731C17.7443 22.0094 17.2738 21.9105 16.7965 21.8795ZM20.029 23.3524C19.9897 23.3126 19.872 23.2131 19.097 22.6408L17.9198 27.8107H19.3521L20.1957 23.5415C20.1418 23.4818 20.0878 23.4121 20.029 23.3524ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM12.848 23.2927C12.8691 23.3958 12.8806 23.5008 12.8823 23.6062C12.8808 23.7115 12.8693 23.8165 12.848 23.9196L14.3538 24.3525V22.397L12.848 23.2927ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM14.3293 20.0584L11.9454 22.1283C12.0954 22.2106 12.234 22.3126 12.3575 22.4319L14.0154 21.4466C14.0616 21.4166 14.1133 21.3963 14.1674 21.3869C14.3092 21.3592 14.4552 21.3636 14.5951 21.3997C14.735 21.4359 14.8653 21.5028 14.9768 21.5959C15.1464 21.7364 15.264 21.9311 15.3103 22.1482L15.7027 21.4516L14.3293 20.0584ZM16.7132 9.67879C16.6803 9.69331 16.6456 9.70335 16.6101 9.70865C16.5842 9.72288 16.5595 9.73954 16.5366 9.7584C16.3243 10.7013 16.2303 11.6676 16.257 12.6344C16.3206 12.7199 16.3929 12.7983 16.4728 12.8683C16.5905 12.6494 16.8063 11.9527 16.8063 10.3953C16.8202 10.1526 16.7886 9.9095 16.7132 9.67879ZM16.3747 0.0654776C15.9921 -0.168387 15.2122 0.264511 14.3833 0.727264C13.3679 1.29451 12.2152 1.93639 10.9203 1.93639C5.26966 1.93639 4.54371 3.9317 4.54371 5.66827C4.54151 5.89483 4.55792 6.12118 4.59277 6.34498C4.6873 7.06545 4.93138 7.75738 5.3089 8.37512L7.5407 5.48416C7.64341 5.33661 7.77464 5.2118 7.92641 5.11733C8.07818 5.02285 8.2473 4.96069 8.4235 4.93463C8.5997 4.90856 8.77928 4.91913 8.95132 4.9657C9.12337 5.01227 9.28427 5.09387 9.42424 5.20552C9.85249 5.53905 10.3771 5.72026 10.917 5.72116C11.4569 5.72206 11.9821 5.54259 12.4114 5.21049C12.5512 5.09778 12.7122 5.01519 12.8846 4.96778C13.0569 4.92036 13.237 4.90912 13.4137 4.93474C13.5905 4.96036 13.7603 5.0223 13.9126 5.11677C14.065 5.21124 14.1968 5.33625 14.2999 5.48416L16.4041 8.21092L16.6298 8.2159C17.0657 7.43954 17.2955 6.56172 17.2969 5.66827C17.2969 1.49354 16.7965 0.314269 16.3747 0.0654776ZM5.304 9.76338C5.27491 9.73902 5.24372 9.71737 5.2108 9.6987C5.18261 9.69389 5.15476 9.68724 5.12742 9.67879C5.0514 9.90937 5.01976 10.1526 5.03422 10.3953C5.03422 11.9527 5.25004 12.6494 5.36776 12.8683C5.44767 12.7983 5.52001 12.7199 5.58359 12.6344C5.61023 11.6693 5.51629 10.7046 5.304 9.76338ZM13.5298 6.10117C13.5041 6.05841 13.47 6.02151 13.4295 5.99281C13.3891 5.96411 13.3432 5.94422 13.2948 5.9344C13.2464 5.92458 13.1966 5.92505 13.1484 5.93576C13.1001 5.94648 13.0547 5.96722 13.0147 5.99667C12.4146 6.46337 11.6797 6.71671 10.9236 6.71761C10.1674 6.71851 9.43194 6.46691 8.83073 6.00165C8.79096 5.97121 8.74537 5.94954 8.69686 5.93802C8.64836 5.92651 8.59802 5.9254 8.54907 5.93477C8.50012 5.94414 8.45363 5.96378 8.4126 5.99243C8.37157 6.02109 8.33689 6.05812 8.3108 6.10117L6.12314 8.93739C6.12805 8.95729 6.13295 8.98217 6.13786 9.00705C6.14277 9.03071 6.14933 9.05399 6.15748 9.07672V9.09164C6.54056 10.5336 6.66353 12.0338 6.52045 13.5201C6.51064 13.6197 6.50573 13.7291 6.50573 13.8386C6.50573 14.8039 7.53089 16.1772 9.39481 17.7048C9.8257 18.0604 10.364 18.2549 10.9194 18.2558C11.4749 18.2568 12.0137 18.064 12.4458 17.7098C14.3097 16.1772 15.3348 14.8039 15.3348 13.8386C15.3348 13.7291 15.3299 13.6197 15.3201 13.5102C15.1835 12.0719 15.2947 10.6206 15.6488 9.22101C15.6537 9.20609 15.6586 9.17623 15.6684 9.14638L15.6929 9.05681C15.7027 9.01701 15.7076 8.9772 15.7174 8.93242L13.5298 6.10117ZM10.4298 13.3808H11.4108C11.5409 13.3808 11.6656 13.4332 11.7576 13.5266C11.8496 13.6199 11.9013 13.7464 11.9013 13.8784C11.9013 14.0104 11.8496 14.1369 11.7576 14.2302C11.6656 14.3236 11.5409 14.376 11.4108 14.376H10.4298C10.2997 14.376 10.1749 14.3236 10.0829 14.2302C9.99095 14.1369 9.93927 14.0104 9.93927 13.8784C9.93927 13.7464 9.99095 13.6199 10.0829 13.5266C10.1749 13.4332 10.2997 13.3808 10.4298 13.3808ZM8.95826 10.8929V11.3905C8.95826 11.5224 8.90658 11.649 8.8146 11.7423C8.72261 11.8356 8.59785 11.8881 8.46776 11.8881C8.33767 11.8881 8.2129 11.8356 8.12092 11.7423C8.02893 11.649 7.97725 11.5224 7.97725 11.3905V10.8929H7.48675C7.35666 10.8929 7.23189 10.8405 7.13991 10.7472C7.04792 10.6538 6.99624 10.5273 6.99624 10.3953C6.99624 10.2633 7.04792 10.1368 7.13991 10.0435C7.23189 9.95015 7.35666 9.89773 7.48675 9.89773H9.44877C9.57886 9.89773 9.70362 9.95015 9.79561 10.0435C9.8876 10.1368 9.93927 10.2633 9.93927 10.3953C9.93927 10.5273 9.8876 10.6538 9.79561 10.7472C9.70362 10.8405 9.57886 10.8929 9.44877 10.8929H8.95826ZM11.9013 16.3663H9.93927C9.80918 16.3663 9.68442 16.3139 9.59243 16.2206C9.50045 16.1273 9.44877 16.0007 9.44877 15.8687C9.44877 15.7368 9.50045 15.6102 9.59243 15.5169C9.68442 15.4236 9.80918 15.3711 9.93927 15.3711H11.9013C12.0314 15.3711 12.1561 15.4236 12.2481 15.5169C12.3401 15.6102 12.3918 15.7368 12.3918 15.8687C12.3918 16.0007 12.3401 16.1273 12.2481 16.2206C12.1561 16.3139 12.0314 16.3663 11.9013 16.3663ZM14.3538 10.8929H13.8633V11.3905C13.8633 11.5224 13.8116 11.649 13.7197 11.7423C13.6277 11.8356 13.5029 11.8881 13.3728 11.8881C13.2427 11.8881 13.118 11.8356 13.026 11.7423C12.934 11.649 12.8823 11.5224 12.8823 11.3905V10.8929H12.3918C12.2617 10.8929 12.1369 10.8405 12.045 10.7472C11.953 10.6538 11.9013 10.5273 11.9013 10.3953C11.9013 10.2633 11.953 10.1368 12.045 10.0435C12.1369 9.95015 12.2617 9.89773 12.3918 9.89773H14.3538C14.4839 9.89773 14.6087 9.95015 14.7007 10.0435C14.7926 10.1368 14.8443 10.2633 14.8443 10.3953C14.8443 10.5273 14.7926 10.6538 14.7007 10.7472C14.6087 10.8405 14.4839 10.8929 14.3538 10.8929ZM7.51127 20.0584L6.13786 21.4516L6.53026 22.1482C6.58544 21.8953 6.73575 21.6742 6.94921 21.532C7.16267 21.3898 7.42241 21.3378 7.67314 21.3869C7.72726 21.3963 7.77897 21.4166 7.82519 21.4466L9.4831 22.4319C9.60659 22.3126 9.74515 22.2106 9.89513 22.1283L7.51127 20.0584Z"
            />
            <path
              d="M21.8046 27.4923C21.7723 27.5881 21.7105 27.6709 21.6285 27.7286C21.5464 27.7863 21.4482 27.8157 21.3484 27.8127H20.3527L20.9712 24.6824C21.0453 24.8309 21.1119 24.983 21.1709 25.1382L21.8178 27.1868C21.8522 27.2866 21.8475 27.3959 21.8046 27.4923ZM0.0364603 27.4938C-0.00663124 27.3974 -0.011723 27.2879 0.0222334 27.1878L0.661853 25.1616C0.722837 24.9987 0.79209 24.8391 0.869336 24.6834L1.48786 27.8127H0.492139C0.40349 27.8135 0.316327 27.7896 0.240194 27.7435C0.16406 27.6975 0.10189 27.631 0.0604929 27.5515C0.0512927 27.5328 0.0432674 27.5135 0.0364603 27.4938ZM6.7402 24.9964C6.85423 25.1341 7.00338 25.2374 7.17135 25.295L8.5894 27.8127H7.3808L6.7402 24.9964ZM8.23231 25.1725L9.50321 24.8058C9.89454 25.156 10.3984 25.3493 10.9203 25.3493C11.4421 25.3493 11.946 25.156 12.3374 24.8058L13.6083 25.1725L12.121 27.8127H9.71953L8.23231 25.1725ZM14.6692 25.295C14.7681 25.2606 14.861 25.2106 14.9444 25.1467C15.0016 25.1024 15.0539 25.052 15.1004 24.9964L14.4598 27.8127H13.2512L14.6692 25.295ZM13.0638 18.481C12.4577 18.98 11.7009 19.2523 10.9203 19.2523C10.1397 19.2523 9.38288 18.98 8.77677 18.481C8.42361 18.1875 8.10969 17.9088 7.81048 17.6252C7.81538 17.675 7.82519 17.7247 7.8301 17.7695C7.88259 18.2087 7.91043 18.6506 7.91349 19.0931L10.9203 21.7104L13.9271 19.0931C13.9301 18.6506 13.958 18.2087 14.0105 17.7695C14.0154 17.7197 14.0252 17.675 14.0301 17.6252C13.7309 17.9088 13.417 18.1875 13.0638 18.481ZM2.74356 22.6408C1.96856 23.2131 1.85084 23.3126 1.8116 23.3524C1.75274 23.4121 1.69878 23.4818 1.64483 23.5415L2.48849 27.8107H3.92077L2.74356 22.6408ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM5.04403 21.8795C4.5668 21.9105 4.09623 22.0094 3.64609 22.1731L4.92631 27.8107H6.3733L5.04893 21.9791C5.04241 21.9463 5.04076 21.9128 5.04403 21.8795ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM16.7965 21.8795C16.7998 21.9128 16.7982 21.9463 16.7916 21.9791L15.4673 27.8107H16.9143L18.1945 22.1731C17.7443 22.0094 17.2738 21.9105 16.7965 21.8795ZM20.029 23.3524C19.9897 23.3126 19.872 23.2131 19.097 22.6408L17.9198 27.8107H19.3521L20.1957 23.5415C20.1418 23.4818 20.0878 23.4121 20.029 23.3524ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM12.848 23.2927C12.8691 23.3958 12.8806 23.5008 12.8823 23.6062C12.8808 23.7115 12.8693 23.8165 12.848 23.9196L14.3538 24.3525V22.397L12.848 23.2927ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM10.9203 22.8598C10.3905 22.8598 9.93927 23.2031 9.93927 23.6062C9.93927 24.0142 10.3905 24.3525 10.9203 24.3525C11.45 24.3525 11.9013 24.0142 11.9013 23.6062C11.9013 23.2031 11.45 22.8598 10.9203 22.8598ZM8.9926 23.2927L7.48675 22.397V24.3525L8.9926 23.9196C8.97122 23.8165 8.95972 23.7115 8.95826 23.6062C8.96 23.5008 8.97149 23.3958 8.9926 23.2927ZM14.3293 20.0584L11.9454 22.1283C12.0954 22.2106 12.234 22.3126 12.3575 22.4319L14.0154 21.4466C14.0616 21.4166 14.1133 21.3963 14.1674 21.3869C14.3092 21.3592 14.4552 21.3636 14.5951 21.3997C14.735 21.4359 14.8653 21.5028 14.9768 21.5959C15.1464 21.7364 15.264 21.9311 15.3103 22.1482L15.7027 21.4516L14.3293 20.0584ZM16.7132 9.67879C16.6803 9.69331 16.6456 9.70335 16.6101 9.70865C16.5842 9.72288 16.5595 9.73954 16.5366 9.7584C16.3243 10.7013 16.2303 11.6676 16.257 12.6344C16.3206 12.7199 16.3929 12.7983 16.4728 12.8683C16.5905 12.6494 16.8063 11.9527 16.8063 10.3953C16.8202 10.1526 16.7886 9.9095 16.7132 9.67879ZM16.3747 0.0654776C15.9921 -0.168387 15.2122 0.264511 14.3833 0.727264C13.3679 1.29451 12.2152 1.93639 10.9203 1.93639C5.26966 1.93639 4.54371 3.9317 4.54371 5.66827C4.54151 5.89483 4.55792 6.12118 4.59277 6.34498C4.6873 7.06545 4.93138 7.75738 5.3089 8.37512L7.5407 5.48416C7.64341 5.33661 7.77464 5.2118 7.92641 5.11733C8.07818 5.02285 8.2473 4.96069 8.4235 4.93463C8.5997 4.90856 8.77928 4.91913 8.95132 4.9657C9.12337 5.01227 9.28427 5.09387 9.42424 5.20552C9.85249 5.53905 10.3771 5.72026 10.917 5.72116C11.4569 5.72206 11.9821 5.54259 12.4114 5.21049C12.5512 5.09778 12.7122 5.01519 12.8846 4.96778C13.0569 4.92036 13.237 4.90912 13.4137 4.93474C13.5905 4.96036 13.7603 5.0223 13.9126 5.11677C14.065 5.21124 14.1968 5.33625 14.2999 5.48416L16.4041 8.21092L16.6298 8.2159C17.0657 7.43954 17.2955 6.56172 17.2969 5.66827C17.2969 1.49354 16.7965 0.314269 16.3747 0.0654776ZM5.304 9.76338C5.27491 9.73902 5.24372 9.71737 5.2108 9.6987C5.18261 9.69389 5.15476 9.68724 5.12742 9.67879C5.0514 9.90937 5.01976 10.1526 5.03422 10.3953C5.03422 11.9527 5.25004 12.6494 5.36776 12.8683C5.44767 12.7983 5.52001 12.7199 5.58359 12.6344C5.61023 11.6693 5.51629 10.7046 5.304 9.76338ZM13.5298 6.10117C13.5041 6.05841 13.47 6.02151 13.4295 5.99281C13.3891 5.96411 13.3432 5.94422 13.2948 5.9344C13.2464 5.92458 13.1966 5.92505 13.1484 5.93576C13.1001 5.94648 13.0547 5.96722 13.0147 5.99667C12.4146 6.46337 11.6797 6.71671 10.9236 6.71761C10.1674 6.71851 9.43194 6.46691 8.83073 6.00165C8.79096 5.97121 8.74537 5.94954 8.69686 5.93802C8.64836 5.92651 8.59802 5.9254 8.54907 5.93477C8.50012 5.94414 8.45363 5.96378 8.4126 5.99243C8.37157 6.02109 8.33689 6.05812 8.3108 6.10117L6.12314 8.93739C6.12805 8.95729 6.13295 8.98217 6.13786 9.00705C6.14277 9.03071 6.14933 9.05399 6.15748 9.07672V9.09164C6.54056 10.5336 6.66353 12.0338 6.52045 13.5201C6.51064 13.6197 6.50573 13.7291 6.50573 13.8386C6.50573 14.8039 7.53089 16.1772 9.39481 17.7048C9.8257 18.0604 10.364 18.2549 10.9194 18.2558C11.4749 18.2568 12.0137 18.064 12.4458 17.7098C14.3097 16.1772 15.3348 14.8039 15.3348 13.8386C15.3348 13.7291 15.3299 13.6197 15.3201 13.5102C15.1835 12.0719 15.2947 10.6206 15.6488 9.22101C15.6537 9.20609 15.6586 9.17623 15.6684 9.14638L15.6929 9.05681C15.7027 9.01701 15.7076 8.9772 15.7174 8.93242L13.5298 6.10117ZM10.4298 13.3808H11.4108C11.5409 13.3808 11.6656 13.4332 11.7576 13.5266C11.8496 13.6199 11.9013 13.7464 11.9013 13.8784C11.9013 14.0104 11.8496 14.1369 11.7576 14.2302C11.6656 14.3236 11.5409 14.376 11.4108 14.376H10.4298C10.2997 14.376 10.1749 14.3236 10.0829 14.2302C9.99095 14.1369 9.93927 14.0104 9.93927 13.8784C9.93927 13.7464 9.99095 13.6199 10.0829 13.5266C10.1749 13.4332 10.2997 13.3808 10.4298 13.3808ZM8.95826 10.8929V11.3905C8.95826 11.5224 8.90658 11.649 8.8146 11.7423C8.72261 11.8356 8.59785 11.8881 8.46776 11.8881C8.33767 11.8881 8.2129 11.8356 8.12092 11.7423C8.02893 11.649 7.97725 11.5224 7.97725 11.3905V10.8929H7.48675C7.35666 10.8929 7.23189 10.8405 7.13991 10.7472C7.04792 10.6538 6.99624 10.5273 6.99624 10.3953C6.99624 10.2633 7.04792 10.1368 7.13991 10.0435C7.23189 9.95015 7.35666 9.89773 7.48675 9.89773H9.44877C9.57886 9.89773 9.70362 9.95015 9.79561 10.0435C9.8876 10.1368 9.93927 10.2633 9.93927 10.3953C9.93927 10.5273 9.8876 10.6538 9.79561 10.7472C9.70362 10.8405 9.57886 10.8929 9.44877 10.8929H8.95826ZM11.9013 16.3663H9.93927C9.80918 16.3663 9.68442 16.3139 9.59243 16.2206C9.50045 16.1273 9.44877 16.0007 9.44877 15.8687C9.44877 15.7368 9.50045 15.6102 9.59243 15.5169C9.68442 15.4236 9.80918 15.3711 9.93927 15.3711H11.9013C12.0314 15.3711 12.1561 15.4236 12.2481 15.5169C12.3401 15.6102 12.3918 15.7368 12.3918 15.8687C12.3918 16.0007 12.3401 16.1273 12.2481 16.2206C12.1561 16.3139 12.0314 16.3663 11.9013 16.3663ZM14.3538 10.8929H13.8633V11.3905C13.8633 11.5224 13.8116 11.649 13.7197 11.7423C13.6277 11.8356 13.5029 11.8881 13.3728 11.8881C13.2427 11.8881 13.118 11.8356 13.026 11.7423C12.934 11.649 12.8823 11.5224 12.8823 11.3905V10.8929H12.3918C12.2617 10.8929 12.1369 10.8405 12.045 10.7472C11.953 10.6538 11.9013 10.5273 11.9013 10.3953C11.9013 10.2633 11.953 10.1368 12.045 10.0435C12.1369 9.95015 12.2617 9.89773 12.3918 9.89773H14.3538C14.4839 9.89773 14.6087 9.95015 14.7007 10.0435C14.7926 10.1368 14.8443 10.2633 14.8443 10.3953C14.8443 10.5273 14.7926 10.6538 14.7007 10.7472C14.6087 10.8405 14.4839 10.8929 14.3538 10.8929ZM7.51127 20.0584L6.13786 21.4516L6.53026 22.1482C6.58544 21.8953 6.73575 21.6742 6.94921 21.532C7.16267 21.3898 7.42241 21.3378 7.67314 21.3869C7.72726 21.3963 7.77897 21.4166 7.82519 21.4466L9.4831 22.4319C9.60659 22.3126 9.74515 22.2106 9.89513 22.1283L7.51127 20.0584Z"
            />
          </svg>
        </a>
        <a @click=${nav.fechar} href="/">Home <feather-icon icon="home"></feather-icon></a>

        <button @click=${nav.fechar}>
          <feather-icon icon="x"> </feather-icon>
        </button>
      </nav>
    </dialog>`;
  }
}
customElements.define("menu-section", Menu);
