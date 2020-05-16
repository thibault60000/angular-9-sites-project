import { Component } from "@angular/core";

@Component({
  selector: "app-loader",
  template: ` <div class="lds-hourglass"></div> `,
  styles: [
    `
      .lds-hourglass {
        position: absolute;
        top: 35vh;
        left: 48%;
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-hourglass:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 50px solid #08003c;
        border-color: #08003c transparent #08003c transparent;
        animation: lds-hourglass 1.2s infinite;
      }
      @keyframes lds-hourglass {
        0% {
          transform: rotate(0);
          animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
          transform: rotate(900deg);
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
          transform: rotate(1800deg);
        }
      }
    `,
  ],
})
export class LoaderComponent {}
