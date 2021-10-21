
class headerHero extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
    .HeaderBlock {
      display: grid;
      grid-template: 100px 70px 70px 20px 10px 5px 3px / repeat(12, 1fr);
      grid-gap: 10px; 
    }
    
    h1 {
      background-color: #FFD640;
      color: white;
      grid-area: 1/1/1/13;
      font-weight: 900;
      font-size: 50px;
      padding: 1%;
      padding-left: 4%;
    }

    h2 {
      background-color: #FFD640;
      grid-area: 2/1/2/6;
      color: #705E1C;
      padding: 4%;
      padding-left: 10%;
    }

    #headerButtonBlock {
      background-color: #FFD640;
      grid-area: 3/1/3/5;
      
    }

    .headerButton {
      background-color: red;
      border: solid red;
      border-radius: 7px;
      width: 55%;
      height: 70%;
      margin: 2.5% auto;
      margin-left: 13%;
      text-align: center;
      padding: 3%;
      font-weight: 400;
      color: white;
      transition: all 0.5s ease-in-out;
    }

    div.headerButton:hover {
      cursor: pointer;
      opacity: 0.5;
  }

  .blocks {
    background-color: #FFD640;
  }
  #block1 {
    grid-area: 2/6/2/6;
  }
  #block2 {
    grid-area: 2/7/2/7;
  }
  #block3 {
    grid-area: 2/8/2/8;
  }
  #block4 {
    grid-area: 2/9/2/9;
  }
  #block5 {
    grid-area: 2/10/2/10;
  }
  #block6 {
    grid-area: 2/11/2/11;
  }
  #block7 {
    grid-area: 2/12/2/12;
  }


  #block8 {
    grid-area: 3/5/3/5;
  }
  #block9 {
    grid-area: 3/6/3/6;
  }
  #block10 {
    grid-area: 3/7/3/7;
  }
  #block11 {
    grid-area: 3/8/3/8;
  }
  #block12 {
    grid-area: 3/9/3/9;
  }
  #block13 {
    grid-area: 3/10/3/10;
  }
  #block14 {
    grid-area: 3/11/3/11;
  }
  #block15 {
    grid-area: 3/12/3/12;
  }

  #block16 {
    grid-area: 4/1/4/3;
  }
  #block17 {
    grid-area: 4/3/4/5;
  }
  #block18 {
    grid-area: 4/5/4/5;
  }
  #block19 {
    grid-area: 4/6/4/6;
  }
  #block20 {
    grid-area: 4/7/4/7;
  }
  #block21 {
    grid-area: 4/8/4/8;
  }
  #block22 {
    grid-area: 4/9/4/9;
  }
  #block23 {
    grid-area: 4/10/4/10;
  }
  #block24 {
    grid-area: 4/11/4/11;
  }
  #block25 {
    grid-area: 4/12/4/12;
  }

  #block26 {
    grid-area: 5/1/5/1;
  }
  #block27 {
    grid-area: 5/2/5/2;
  }
  #block28 {
    grid-area: 5/3/5/3;
  }
  #block29 {
    grid-area: 5/4/5/4;
  }
  #block30 {
    grid-area: 5/5/5/5;
  }
  #block31 {
    grid-area: 5/6/5/6;
  }
  #block32 {
    grid-area: 5/7/5/7;
  }
  #block33 {
    grid-area: 5/8/5/8;
  }
  #block34 {
    grid-area: 5/9/5/9;
  }
  #block35 {
    grid-area: 5/10/5/10;
  }
  #block36 {
    grid-area: 5/11/5/11;
  }
  #block37 {
    grid-area: 5/12/5/12;
  }


  #block38 {
    grid-area: 6/1/6/1;
  }
  #block39 {
    grid-area: 6/2/6/2;
  }
  #block40 {
    grid-area: 6/3/6/3;
  }
  #block41 {
    grid-area: 6/4/6/4;
  }
  #block42 {
    grid-area: 6/5/6/5;
  }
  #block43 {
    grid-area: 6/6/6/6;
  }
  #block44 {
    grid-area: 6/7/6/7;
  }
  #block45 {
    grid-area: 6/8/6/8;
  }
  #block46 {
    grid-area: 6/9/6/9;
  }
  #block47 {
    grid-area: 6/10/6/10;
  }
  #block48 {
    grid-area: 6/11/6/11;
  }
  #block49 {
    grid-area: 6/12/6/12;
  }


  #block50 {
    grid-area: 7/1/7/1;
  }
  #block51 {
    grid-area: 7/2/7/2;
  }
  #block52 {
    grid-area: 7/3/7/3;
  }
  #block53 {
    grid-area: 7/4/7/4;
  }
  #block54 {
    grid-area: 7/5/7/5;
  }
  #block55 {
    grid-area: 7/6/7/6;
  }
  #block56 {
    grid-area: 7/7/7/7;
  }
  #block57 {
    grid-area: 7/8/7/8;
  }
  #block58 {
    grid-area: 7/9/7/9;
  }
  #block59 {
    grid-area: 7/10/7/10;
  }
  #block60 {
    grid-area: 7/11/7/11;
  }
  #block61 {
    grid-area: 7/12/7/12;
  }

  @media only screen and (max-width: 1025px) {
    .HeaderBlock {
      grid-template: 100px 70px 70px 20px 10px 5px 3px / repeat(11, 1fr);
    }
    h1 {
      grid-area: 1/1/1/12;
    }
    .headerButton {
      width: 60%;
    }
    #col12, #block7, #block15, #block25, #block37, #block49, #block61 {
      display: none;
    }
  }
  @media only screen and (max-width: 905px) { 
    .HeaderBlock {
      grid-template: 100px 70px 70px 20px 10px 5px 3px / repeat(10, 1fr);
    }
    h1 {
      grid-area: 1/1/1/11;
    }
    .headerButton {
      width: 70%;
    }
    #col11, #block6, #block14, #block24, #block36, #block48, #block60 {
      display: none;
    }
  }

  @media only screen and (max-width: 825px) {
    .HeaderBlock {
      grid-template: 100px 70px 70px 20px 10px 5px 3px / repeat(9, 1fr);
    }
    h1 {
      grid-area: 1/1/1/10;
    }
    #col10, #block5, #block13, #block23, #block35, #block47, #block59 {
      display: none;
    }
  }

  @media only screen and (max-width: 760px) {
    .HeaderBlock {
      grid-template: 200px 70px 70px 20px 10px 5px 3px / repeat(8, 1fr);
    }
    h1 {
      grid-area: 1/1/1/9;
      text-align: center;
      font-size: 4.0em;
    }

    .headerButton {
      font-size: 1.3em;
      padding: 2%;
    }
    #col9, #block4, #block12, #block22, #block34, #block46, #block58 {
      display: none;
    }
  }

  @media only screen and (max-width: 690px) {
    .HeaderBlock {
      grid-template: 200px 70px 70px 20px 10px 5px 3px / repeat(7, 1fr);
    }
    h1 {
      grid-area: 1/1/1/8;
      font-size: 3.9em;
    }
    #col8, #block3, #block11, #block21, #block33, #block45, #block57 {
      display: none;
    }
  }

  @media only screen and (max-width: 640px) {
    .HeaderBlock {
      grid-template: 200px 70px 70px 20px 10px 5px 3px / repeat(6, 1fr);
    }
    h1 {
      grid-area: 1/1/1/7;
      font-size: 3.7em;
    }
    #col7, #block2, #block10, #block20, #block32, #block44, #block56 {
      display: none;
    }
  }

  @media only screen and (max-width: 555px) { 
    .HeaderBlock {
      grid-template: 200px 70px 70px 20px 10px 5px 3px / repeat(5, 1fr);
    }
    h1 {
      grid-area: 1/1/1/6;
      font-size: 3.2em;
    }
    #col6, #block9, #block19, #block31, #block43, #block55 {
      display: none;
    }
    #block1 {
      grid-area: 4/1/4/3;
    }
  }

  @media only screen and (max-width: 450px) {
    .HeaderBlock {
      grid-template: 180px 70px 70px 20px 10px 5px 3px / repeat(4, 1fr);
    }
    h1 {
      grid-area: 1/1/1/5;
      font-size: 2.7em;
      padding-top: 5%;
    }

    h2 {
      padding: 3% auto;
      padding-left: 3%;
      grid-area: 2/1/2/5;
      text-align: center;
      font-size: 1.8em;
    }

    #col5, #block8, #block18, #block30, #block42, #block54 {
      display: none;
    }

    .headerButton {
      margin-left: 15%;
      font-size: 1.5em;
      padding-top: 1%;
    }
    
    #headerButtonBlock {
      grid-area: 3/1/3/5;
    }
  } 

  @media only screen and (max-width: 385px) {
    .HeaderBlock {
      grid-template: 180px 70px 70px 20px 10px 5px 3px / repeat(3, 1fr);
    }
    h1 {
      grid-area: 1/1/1/4;
      font-size: 2em;
      padding-top: 15%;
    }
    h2 {
      grid-area: 2/1/2/4;
      font-size: 1.6em;
    }
    #col4, #block8, #block17, #block27, #block28, #block29, #block39, #block40, #block41, #block51, #block52, #block53 {
      display: none;
    }
    #headerButtonBlock {
      grid-area: 3/1/3/4;
    }
    #block16 {
      grid-area: 4/1/4/4;
    }
    #block26 {
      grid-area: 5/1/5/4;
    }
    #block38 {
      grid-area: 6/1/6/4;
    }
    #block50 {
      grid-area: 7/1/7/4;
    }
  }

  @media only screen and (max-width: 310px) {
    h2 {
      padding-top: 7%;
      font-size: 1.2em;
    }
  }
    </style>
        <div class="HeaderBlock" id = "block1">
          <!--
            <div id = "col1">1</div>
            <div id = "col2">2</div>
            <div id = "col3">3</div>
            <div id = "col4">4</div>
            <div id = "col5">5</div>
            <div id = "col6">6</div>
            <div id = "col7">7</div>
            <div id = "col8">8</div>
            <div id = "col9">9</div>
            <div id = "col10">10</div>
            <div id = "col11">11</div>
            <div id = "col12">12</div> -->
            <h1>ИНЖЕНЕРНЫЙ СПРАВОЧНИК</h1>
            <h2>WEB РАЗРАБОТЧИКА</h2>
            <div id = "headerButtonBlock">
                <div class="headerButton" onclick="contentsPop()">
                  <p class = "headerButtonText">К содержанию</p>    
                </div>
            </div>
            <div class = "blocks" id = "block1"></div>
            <div class = "blocks" id = "block2"></div>
            <div class = "blocks" id = "block3"></div>
            <div class = "blocks" id = "block4"></div>
            <div class = "blocks" id = "block5"></div>
            <div class = "blocks" id = "block6"></div>
            <div class = "blocks" id = "block7"></div>

            <div class = "blocks" id = "block8"></div>
            <div class = "blocks" id = "block9"></div>
            <div class = "blocks" id = "block10"></div>
            <div class = "blocks" id = "block11"></div>
            <div class = "blocks" id = "block12"></div>
            <div class = "blocks" id = "block13"></div>
            <div class = "blocks" id = "block14"></div>
            <div class = "blocks" id = "block15"></div>

            <div class = "blocks" id = "block16"></div>
            <div class = "blocks" id = "block17"></div>
            <div class = "blocks" id = "block18"></div>
            <div class = "blocks" id = "block19"></div>
            <div class = "blocks" id = "block20"></div>
            <div class = "blocks" id = "block21"></div>
            <div class = "blocks" id = "block22"></div>
            <div class = "blocks" id = "block23"></div>
            <div class = "blocks" id = "block24"></div>
            <div class = "blocks" id = "block25"></div>

            <div class = "blocks" id = "block26"></div>
            <div class = "blocks" id = "block27"></div>
            <div class = "blocks" id = "block28"></div>
            <div class = "blocks" id = "block29"></div>
            <div class = "blocks" id = "block30"></div>
            <div class = "blocks" id = "block31"></div>
            <div class = "blocks" id = "block32"></div>
            <div class = "blocks" id = "block33"></div>
            <div class = "blocks" id = "block34"></div>
            <div class = "blocks" id = "block35"></div>
            <div class = "blocks" id = "block36"></div>
            <div class = "blocks" id = "block37"></div>

            <div class = "blocks" id = "block38"></div>
            <div class = "blocks" id = "block39"></div>
            <div class = "blocks" id = "block40"></div>
            <div class = "blocks" id = "block41"></div>
            <div class = "blocks" id = "block42"></div>
            <div class = "blocks" id = "block43"></div>
            <div class = "blocks" id = "block44"></div>
            <div class = "blocks" id = "block45"></div>
            <div class = "blocks" id = "block46"></div>
            <div class = "blocks" id = "block47"></div>
            <div class = "blocks" id = "block48"></div>
            <div class = "blocks" id = "block49"></div>

            <div class = "blocks" id = "block50"></div>
            <div class = "blocks" id = "block51"></div>
            <div class = "blocks" id = "block52"></div>
            <div class = "blocks" id = "block53"></div>
            <div class = "blocks" id = "block54"></div>
            <div class = "blocks" id = "block55"></div>
            <div class = "blocks" id = "block56"></div>
            <div class = "blocks" id = "block57"></div>
            <div class = "blocks" id = "block58"></div>
            <div class = "blocks" id = "block59"></div>
            <div class = "blocks" id = "block60"></div>
            <div class = "blocks" id = "block61"></div>
        </div>  
        
        
    `;
  }

}

window.customElements.define('header-hero', headerHero);

document.querySelector('.headerButton').addEventListener('click', () => toggleContTable());