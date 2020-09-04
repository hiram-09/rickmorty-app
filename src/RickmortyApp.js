import { LitElement, html, css } from 'lit-element';
import '../node_modules/rickmorty-data/rickmorty-data.js';
import '../node_modules/rickmorty-component/rickmorty-component.js';

export class RickmortyApp extends LitElement {
    static get properties() {
        return {
            rmArray: { type: Array }
        };
    }

    static get styles() {
        return css `
        :host {
          display: flex;
          align-items: center;
          flex-direction: column;
          background: black;
        }
        .container{
          display: flex;
          flex-direction: column;
          flex-flow: wrap;
          align-items: center;
          justify-content: space-between;
        }
         h2 {
          text-align: center;
          color: white;
          font-family: cursive;
          font-size: 4em;
        }
    `;
    }
    constructor() {
        super();
        this.rmArray = [];
    }
    render() {
            return html `
        <rickmorty-data @get-array="${(e) => this.rmArray = e.detail.data}"></rickmorty-data>
        <div>
          <h2>Rick & Mont APP</h2>
        </div>
        <div class="container">
          ${
            this.rmArray.map((item) => html`
              <rickmorty-component
                id="${item.id}"
                nombre="${item.name}"
                img="${item.image}"></rickmorty-component>
            `)
          }
        </div>
    `;
    }
}