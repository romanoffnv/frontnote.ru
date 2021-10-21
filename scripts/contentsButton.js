const contButton = document.createElement('template');
contButton.innerHTML = ` 
    <style>
    * {
        margin: 0;
        padding: 0;
    }
    #contentsButton {
        grid-area: 2/ 6 / 2 / 12;
        background-color: red;
        border: solid red;
        border-radius: 20px;
        padding: 5%;
        text-align: center;
        font-weight: 400;
        font-size: 2em;
        color: white;
        transition: all 0.5s ease-in-out;
      }
  
      #contentsButton:hover {
        cursor: pointer;
        opacity: 0.5;
    }
   

    #contentsButtonBlock {
        background-color: white;
        display: grid;
        grid-template: 50px 100px 50px / repeat(16, 1fr);
        grid-gap: 10px;
        margin-bottom: 5%;
    }

    @media only screen and (max-width: 1070px) { 
        #contentsButtonBlock {
            grid-template: 50px 100px 50px / repeat(14, 1fr);
        }
        #col15, #col16 {
            display: none;
        }
        .rows {
            grid-column: 1 / 15;
        }
        #contentsButton {
            grid-area: 2 / 5 / 2 / 11;
        }
    }

    @media only screen and (max-width: 890px) { 
        #contentsButtonBlock {
            grid-template: 50px 100px 50px / repeat(12, 1fr);
        }
        #col13, #col14 {
            display: none;
        }
        .rows {
            grid-column: 1 / 13;
        }
        #contentsButton {
            grid-area: 2 / 4 / 2 / 10;
        }
    }

    @media only screen and (max-width: 730px) {
        #contentsButtonBlock {
            grid-template: 50px 100px 50px / repeat(10, 1fr);
        }
        #col11, #col12 {
            display: none;
        }
        .rows {
            grid-column: 1 / 11;
        }
        #contentsButton {
            grid-area: 2 / 3 / 2 / 9;
        }
    }

    @media only screen and (max-width: 580px) {
        #contentsButtonBlock {
            grid-template: 50px 100px 50px / repeat(8, 1fr);
        }
        #col9, #col10 {
            display: none;
        }
        .rows {
            grid-column: 1 / 9;
        }
        #contentsButton {
            grid-area: 2 / 2 / 2 / 8;
        }
    }
    @media only screen and (max-width: 500px) { 
        #contentsButtonBlock {
            grid-template: 50px 100px 50px / repeat(6, 1fr);
        }
        #col7, #col8 {
            display: none;
        }
        .rows {
            grid-column: 1 / 7;
        }
        #contentsButton {
            grid-area: 2 / 1 / 2 / 7;
            margin: 0 5%;
        }
        #contentsButton p { 
            font-size: 1.2em;
        }
    }
    @media only screen and (max-width: 390px) { 
        #contentsButtonBlock {
            grid-template: 50px 100px 50px / repeat(4, 1fr);
        }
        #col5, #col6 {
            display: none;
        }
        .rows {
            grid-column: 1 / 5;
        }
        #contentsButton {
            grid-area: 2 / 1 / 2 / 5;
            margin: 0 5%;
        }
        #contentsButton p { 
            font-size: 1em;
            margin: 3% auto;
        }
    }

    @media only screen and (max-width: 330px) {
        #contentsButton p { 
            font-size: 0.8em;
        }
    }


   

    </style>
    
   
        

    <div id = "contentsButtonBlock">
        <div id="contentsButton">
            <p class = "contentsButtonText">К содержанию</p>    
        </div>
    </div>
`

class contentsButton extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(contButton.content.cloneNode(true));
        this.shadowRoot.querySelector('#contentsButton').addEventListener('click', () => toggleContTable());
    }
    
    
    
};
window.customElements.define('cont-button', contentsButton);

