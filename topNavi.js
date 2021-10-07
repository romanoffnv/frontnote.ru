
const template = document.createElement('template');
template.innerHTML = `
    <style>
    
    /*Search field*/
    #topNaviPanel {
      width: 100%;
      display: grid;
      grid-template: 40px / repeat(16, 1fr);
      grid-gap: 10px;
      margin: 5px auto;
      
    }
    

    /*left part of the pannel*/
    .searchField {
        grid-area: 1 / 1 / 1 / 4;
        height: 30px;
        margin: 1% 10%;
        display: flex;
        border: solid grey;
        border-radius: 7px;
        
    }
     .searchField img {
        width: 20px;
        height: 20px;
        margin: 5px;
    }
    #superform {
      width: 65%;
      font-size: .8em;
      border: none;
    }
    
    /*Top navigation Menu. Rigth part of the pannel*/
    ul {
        grid-area: 1 / 12 / 1 / 16;
        list-style-type: none;
        width: 100%;
        margin: 0 10%;
        padding: 0 10%;
        display: flex;
        justify-content: space-between;
        
    
     }
    
     ul a {

      
        width: 50%;
        height: 100%;
        text-decoration: none;
        font-weight: 500;
     }
    
     ul a li {
       
       padding-top: 3%;
       text-align: center;
       margin-top: 10px auto;
       height: 75%;
       transition: all 0.5s ease-in-out;
     }

     ul a li:hover {
        background-color: black;
        color: white;
     }
     
     @media only screen and (max-width: 940px) {
      #topNaviPanel {
        grid-template: 40px / repeat(12, 1fr);
      }
      #superform {
        font-size: 1em;
      }
      ul {
       grid-area: 1 / 9 / 1 / 12;
      }
      #col13, #col14, #col15, #col16 {
        display:none;
      }
  }
    
  @media only screen and (max-width: 870px) {
    #topNaviPanel {
      grid-template: 40px / repeat(9, 1fr);
    }
    ul {
      grid-area: 1 / 6 / 1 / 9;
     }
    #col10,#col11, #col12  {
      display:none;
    }
  }

  @media only screen and (max-width: 650px) {
    #topNaviPanel {
      grid-template: 60px 80px/ repeat(6, 1fr);
    }
    .searchField {
      grid-area: 1 / 1 / 1 / 7;
      height: 45px;
    }
    .searchField img {
      width: 35px;
      height: 35px;
    }
    #superform {
      font-size: 1.2em;
      width: 85%;
    }
    ul {
      grid-area: 2 / 1 / 2 / 6;
      margin: 0;
      
     }
    
     ul a li {
       
      font-size: 1.5em;
      padding-top: 7%;
      margin: 0 auto;
      margin-right: 5%;
     }
    #col7,#col8, #col9  {
      display:none;
    }
  }

  @media only screen and (max-width: 420px) { 
    ul a li {
      font-size: 1.2em;
     }
     #superform {
      font-size: 1em;
      width: 75%;
    }
  @media only screen and (max-width: 340px) { 
    ul a li {
      font-size: 1.1em;
     }
  }
    </style>
    

    <div id = "topNaviPanel"> 
        <div class="searchField">
            <img src = "img/magnifier.png" alt = "magnifier glass"> 
            <input type="text" placeholder="Enter text" id="superform">
        </div>
        <ul>
            <a href="#"><li>FAQ</li></a>
            <a href="#"><li>О ПРОЕКТЕ</li></a>
        </ul>
    </div>

    
`
class topNavi extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('top-navi', topNavi);
