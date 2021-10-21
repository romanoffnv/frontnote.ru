const templateJSP = document.createElement('template');
templateJSP.innerHTML = `
<div id = "mainbox">
<style>
    #mainbox {
        background-color: #FFD640;
        display: grid;
        grid-template:  50px 90px 25px 20px 10px 5px  120px 5px 10px 20px 25px 90px 50px / 3% repeat(5, 1fr) 1% 1% repeat(7, 1fr) 3%;
        grid-gap: 10px;
        margin-bottom: 50px;
    }
    #codeView {
        background-color: #8E7724;
        grid-area: 2 / 2 / 13 / 7;
        z-index: 2;
        min-width: 350px;
        overflow: hidden;
    }
    .presView {
        z-index: 2;
    }
    #presView {
        background-color: white;
        grid-area: 2 / 9 / 13 / 16;
        
    }
    header {
        grid-area: 2 / 9 / 2 / 16;
        background-color: #C09100;
    }
    footer {
        grid-area: 12 / 9 / 12 / 16;
        background-color: #705E1C;
    }
    .indent1 {
        padding-left: 20px;
    }
    .indent2 {
        padding-left: 40px;
    }
    .indent3 {
        padding-left: 60px;
    }
    p {
        width: 600px;
        color: #DDE197;
        margin: 0;
    }
</style>
<div id = "codeView">
    <p class = "indent1"> window.onload = function start() {</p>
        <p class = "indent2">jsHTML();</p>
        <p class = "indent2">fireBlocks();</p>
        <p class = "indent2">fireWord();</p>
        <p class = "indent1">}</p>
        <br>
        
        <p class = "indent1">function fireWord() {</p>
            <p class = "indent2">let num = 0;</p>
            <p class = "indent2">let arr = ['#FFD640;', '#fdff76', '#f0cd59', '#fa9624', '#fa6824', '#a33f11'];</p>
        <p class = "indent1">}</p>
        <br>
        <p class = "indent1">window.setInterval(function () {</p>
            <p class = "indent2">num = (num + 1) % 4;</p>
            <p class = "indent2">document.querySelector('.fireBlock h1').style.color = arr[Math.floor(Math.random() * arr.length)]; </p>
        <p class = "indent1">}</p>
        <br>
        <p class = "indent1">function fireBlocks() {</p>
            <p class = "indent2">let num = 0;</p>
            <p class = "indent2">let arr = ['0.1', '.2', '0.3', '.4', '.5', '.6', '.7', '.8', '.9', '1'];</p>
        <p class = "indent1">}</p>
        <br>
        <p class = "indent1">function fireWord() {</p>
            <p class = "indent2">let num = 0;</p>
            <p class = "indent2">let arr = ['0.1', '.2', '0.3', '.4', '.5', '.6', '.7', '.8', '.9', '1'];</p>
        <p class = "indent1">}</p>
</div>
<div class = "presView" id = "presView"></div>
<header class = "presView"></header>
<footer class = "presView"></footer>

<style>
    .fireBlocksTop {
        background-color: #C09100;
        z-index: 2;
        transition: All 1s;
    }
    .fireBlocksBottom {
        background-color: #705E1C;
        z-index: 2;
        transition: All 1s;
    }
    /* Fire blocks row 1 */
    #fireBlock1 {
        grid-area: 3 / 9 / 3 / 9;
    }
    #fireBlock2 {
        grid-area: 3 / 10 / 3 / 10;
    }
    #fireBlock3 {
        grid-area: 3 / 11 / 3 / 11;
    }
    #fireBlock4 {
        grid-area: 3 / 12 / 3 / 12;
    }
    #fireBlock5 {
        grid-area: 3 / 13 / 3 / 13;
    }
    #fireBlock6 {
        grid-area: 3 / 14 / 3 / 14;
    }
    #fireBlock7 {
        grid-area: 3 / 15 / 3 / 15;
    }
    
    /* Fire blocks row 2 */
    #fireBlock8 {
        grid-area: 4 / 9 / 4 / 9;
    }
    #fireBlock9 {
        grid-area: 4 / 10 / 4 / 10;
    }
    #fireBlock10 {
        grid-area: 4 / 11 / 4 / 11;
    }
    #fireBlock11 {
        grid-area: 4 / 12 / 4 / 12;
    }
    #fireBlock12 {
        grid-area: 4 / 13 / 4 / 13;
    }
    #fireBlock13 {
        grid-area: 4 / 14 / 4 / 14;
    }
    #fireBlock14 {
        grid-area: 4 / 15 / 4 / 15;
    }
    /* Fire blocks row 3 */
    #fireBlock15 {
        grid-area: 5 / 9 / 5 / 9;
    }
    #fireBlock16 {
        grid-area: 5 / 10 / 5 / 10;
    }
    #fireBlock17 {
        grid-area: 5 / 11 / 5 / 11;
    }
    #fireBlock18 {
        grid-area: 5 / 12 / 5 / 12;
    }
    #fireBlock19 {
        grid-area: 5 / 13 / 5 / 13;
    }
    #fireBlock20 {
        grid-area: 5 / 14 / 5 / 14;
    }
    #fireBlock21 {
        grid-area: 5 / 15 / 5 / 15;
    }

    /* Fire blocks row 4 */
    #fireBlock22 {
        grid-area: 6 / 9 / 6 / 9;
    }
    #fireBlock23 {
        grid-area: 6 / 10 / 6 / 10;
    }
    #fireBlock24 {
        grid-area: 6 / 11 / 6 / 11;
    }
    #fireBlock25 {
        grid-area: 6 / 12 / 6 / 12;
    }
    #fireBlock26 {
        grid-area: 6 / 13 / 6 / 13;
    }
    #fireBlock27 {
        grid-area: 6 / 14 / 6 / 14;
    }
    #fireBlock28 {
        grid-area: 6 / 15 / 6 / 15;
    }


    /* Core block  */
    #coreFireBlock {
        grid-area: 7 / 9 / 7 / 16;
        z-index: 2;
    }
    #coreFireBlock h1{
        margin-top: 6%;
        text-align: center;
    }

    /* Fire blocks row 5 */
    #fireBlock29 {
        grid-area: 8 / 9 / 8 / 9;
    }
    #fireBlock30 {
        grid-area: 8 / 10 / 8 / 10;
    }
    #fireBlock31 {
        grid-area: 8 / 11 / 8 / 11;
    }
    #fireBlock32 {
        grid-area: 8 / 12 / 8 / 12;
    }
    #fireBlock33 {
        grid-area: 8 / 13 / 8 / 13;
    }
    #fireBlock34 {
        grid-area: 8 / 14 / 8 / 14;
    }
    #fireBlock35 {
        grid-area: 8 / 15 / 8 / 15;
    }

    /* Fire blocks row 6 */
    #fireBlock36 {
        grid-area: 9 / 9 / 9 / 9;
    }
    #fireBlock37 {
        grid-area: 9 / 10 / 9 / 10;
    }
    #fireBlock38 {
        grid-area: 9 / 11 / 9 / 11;
    }
    #fireBlock39 {
        grid-area: 9 / 12 / 9 / 12;
    }
    #fireBlock40 {
        grid-area: 9 / 13 / 9 / 13;
    }
    #fireBlock41 {
        grid-area: 9 / 14 / 9 / 14;
    }
    #fireBlock42 {
        grid-area: 9 / 15 / 9 / 15;
    }
    
    /* Fire blocks row 7 */
    #fireBlock43 {
        grid-area: 10 / 9 / 10 / 9;
    }
    #fireBlock44 {
        grid-area: 10 / 10 / 10 / 10;
    }
    #fireBlock45 {
        grid-area: 10 / 11 / 10 / 11;
    }
    #fireBlock46 {
        grid-area: 10 / 12 / 10 / 12;
    }
    #fireBlock47 {
        grid-area: 10 / 13 / 10 / 13;
    }
    #fireBlock48 {
        grid-area: 10 / 14 / 10 / 14;
    }
    #fireBlock49 {
        grid-area: 10 / 15 / 10 / 15;
    }

    /* Fire blocks row 8 */
    #fireBlock50 {
        grid-area: 11 / 9 / 11 / 9;
    }
    #fireBlock51 {
        grid-area: 11 / 10 / 11 / 10;
    }
    #fireBlock52 {
        grid-area: 11 / 11 / 11 / 11;
    }
    #fireBlock53 {
        grid-area: 11 / 12 / 11 / 12;
    }
    #fireBlock54 {
        grid-area: 11 / 13 / 11 / 13;
    }
    #fireBlock55 {
        grid-area: 11 / 14 / 11 / 14;
    }
    #fireBlock56 {
        grid-area: 11 / 15 / 11 / 15;
    }
</style>

<!--Fire blocks row 1 -->
<div class = "fireBlocksTop" id = "fireBlock1"></div>
<div class = "fireBlocksTop" id = "fireBlock2"></div>
<div class = "fireBlocksTop" id = "fireBlock3"></div>
<div class = "fireBlocksTop" id = "fireBlock4"></div>
<div class = "fireBlocksTop" id = "fireBlock5"></div>
<div class = "fireBlocksTop" id = "fireBlock6"></div>
<div class = "fireBlocksTop" id = "fireBlock7"></div>
<!--Fire blocks row 2 -->
<div class = "fireBlocksTop" id = "fireBlock8"></div>
<div class = "fireBlocksTop" id = "fireBlock9"></div>
<div class = "fireBlocksTop" id = "fireBlock10"></div>
<div class = "fireBlocksTop" id = "fireBlock11"></div>
<div class = "fireBlocksTop" id = "fireBlock12"></div>
<div class = "fireBlocksTop" id = "fireBlock13"></div>
<div class = "fireBlocksTop" id = "fireBlock14"></div>
<!--Fire blocks row 3 -->
<div class = "fireBlocksTop" id = "fireBlock15"></div>
<div class = "fireBlocksTop" id = "fireBlock16"></div>
<div class = "fireBlocksTop" id = "fireBlock17"></div>
<div class = "fireBlocksTop" id = "fireBlock18"></div>
<div class = "fireBlocksTop" id = "fireBlock19"></div>
<div class = "fireBlocksTop" id = "fireBlock20"></div>
<div class = "fireBlocksTop" id = "fireBlock21"></div>
<!--Fire blocks row 4 -->
<div class = "fireBlocksTop" id = "fireBlock22"></div>
<div class = "fireBlocksTop" id = "fireBlock23"></div>
<div class = "fireBlocksTop" id = "fireBlock24"></div>
<div class = "fireBlocksTop" id = "fireBlock25"></div>
<div class = "fireBlocksTop" id = "fireBlock26"></div>
<div class = "fireBlocksTop" id = "fireBlock27"></div>
<div class = "fireBlocksTop" id = "fireBlock28"></div>


<!--Core block -->
<div id = "coreFireBlock"><h1>FIRE</h1></div>

<!--Fire blocks row 5 -->
<div class = "fireBlocksBottom" id = "fireBlock29"></div>
<div class = "fireBlocksBottom" id = "fireBlock30"></div>
<div class = "fireBlocksBottom" id = "fireBlock31"></div>
<div class = "fireBlocksBottom" id = "fireBlock32"></div>
<div class = "fireBlocksBottom" id = "fireBlock33"></div>
<div class = "fireBlocksBottom" id = "fireBlock34"></div>
<div class = "fireBlocksBottom" id = "fireBlock35"></div>
<!--Fire blocks row 6 -->
<div class = "fireBlocksBottom" id = "fireBlock36"></div>
<div class = "fireBlocksBottom" id = "fireBlock37"></div>
<div class = "fireBlocksBottom" id = "fireBlock38"></div>
<div class = "fireBlocksBottom" id = "fireBlock39"></div>
<div class = "fireBlocksBottom" id = "fireBlock40"></div>
<div class = "fireBlocksBottom" id = "fireBlock41"></div>
<div class = "fireBlocksBottom" id = "fireBlock42"></div>
<!--Fire blocks row 7 -->
<div class = "fireBlocksBottom" id = "fireBlock43"></div>
<div class = "fireBlocksBottom" id = "fireBlock44"></div>
<div class = "fireBlocksBottom" id = "fireBlock45"></div>
<div class = "fireBlocksBottom" id = "fireBlock46"></div>
<div class = "fireBlocksBottom" id = "fireBlock47"></div>
<div class = "fireBlocksBottom" id = "fireBlock48"></div>
<div class = "fireBlocksBottom" id = "fireBlock49"></div>
<!--Fire blocks row 8 -->
<div class = "fireBlocksBottom" id = "fireBlock50"></div>
<div class = "fireBlocksBottom" id = "fireBlock51"></div>
<div class = "fireBlocksBottom" id = "fireBlock52"></div>
<div class = "fireBlocksBottom" id = "fireBlock53"></div>
<div class = "fireBlocksBottom" id = "fireBlock54"></div>
<div class = "fireBlocksBottom" id = "fireBlock55"></div>
<div class = "fireBlocksBottom" id = "fireBlock56"></div>


<!--Service cols and rows
<div class = "blocks" id = "col1">1</div>
<div class = "blocks" id = "col2">2</div>
<div class = "blocks" id = "col3">3</div>
<div class = "blocks" id = "col4">4</div>
<div class = "blocks" id = "col5">5</div>
<div class = "blocks" id = "col6">6</div>
<div class = "blocks" id = "col7">7</div>
<div class = "blocks" id = "col8">8</div>
<div class = "blocks" id = "col9">9</div>
<div class = "blocks" id = "col10">10</div>
<div class = "blocks" id = "col11">11</div>
<div class = "blocks" id = "col12">12</div>
<div class = "blocks" id = "col13">13</div>
<div class = "blocks" id = "col14">14</div>
<div class = "blocks" id = "col15">15</div>
<div class = "blocks" id = "col16">16</div>

<div class = "blocks" id = "row1">1</div>
<div class = "blocks" id = "row2">2</div>
<div class = "blocks" id = "row3">3</div>
<div class = "blocks" id = "row4">4</div>
<div class = "blocks" id = "row5">5</div>
<div class = "blocks" id = "row6">6</div>
<div class = "blocks" id = "row7">7</div>
<div class = "blocks" id = "row8">8</div>
<div class = "blocks" id = "row9">9</div>
<div class = "blocks" id = "row10">10</div>
<div class = "blocks" id = "row11">11</div>
<div class = "blocks" id = "row12">12</div>
<div class = "blocks" id = "row13">13</div> 
<div class = "blocks" id = "row14">14</div> 
<div class = "blocks" id = "row15">15</div> 
<div class = "blocks" id = "row16">16</div>   
-->
<style>
@media only screen and (max-width: 960px) { 
    #mainbox {
        grid-template:  50px 90px 25px 20px 10px 5px  120px 5px 10px 20px 25px 90px 50px / 3% repeat(5, 1fr) 3% repeat(6, 1fr) 3%;
    }
    
    #col15, #col16 {
        display: none;
    }
    #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11, #row12, #row13 {
        grid-column: 1 / 15;
    }
    
    #presView {
        background-color: white;
        grid-area: 2 / 8 / 13 / 14;
        
    }
    header {
        grid-area: 2 / 8 / 2 / 14;
    }

    /* Fire blocks row 1 */
    #fireBlock1 {
        grid-area: 3 / 8 / 3 / 8;
    }
    #fireBlock2 {
        grid-area: 3 / 9 / 3 / 9;
    }
    #fireBlock3 {
        grid-area: 3 / 10 / 3 / 10;
    }
    #fireBlock4 {
        grid-area: 3 / 11 / 3 / 11;
    }
    #fireBlock5 {
        grid-area: 3 / 12 / 3 / 12;
    }
    #fireBlock6 {
        grid-area: 3 / 13 / 3 / 13;
    }
    #fireBlock7 {
        display: none;
        grid-area: 3 / 14 / 3 / 14;
    }
    
    /* Fire blocks row 2 */
    #fireBlock8 {
        grid-area: 4 / 8 / 4 / 8;
    }
    #fireBlock9 {
        grid-area: 4 / 9 / 4 / 9;
    }
    #fireBlock10 {
        grid-area: 4 / 10 / 4 / 10;
    }
    #fireBlock11 {
        grid-area: 4 / 11 / 4 / 11;
    }
    #fireBlock12 {
        grid-area: 4 / 12 / 4 / 12;
    }
    #fireBlock13 {
        grid-area: 4 / 13 / 4 / 13;
    }
    #fireBlock14 {
        display: none;
        grid-area: 4 / 14 / 4 / 14;
    }
    /* Fire blocks row 3 */
    #fireBlock15 {
        grid-area: 5 / 8 / 5 / 8;
    }
    #fireBlock16 {
        grid-area: 5 / 9 / 5 / 9;
    }
    #fireBlock17 {
        grid-area: 5 / 10 / 5 / 10;
    }
    #fireBlock18 {
        grid-area: 5 / 11 / 5 / 11;
    }
    #fireBlock19 {
        grid-area: 5 / 12 / 5 / 12;
    }
    #fireBlock20 {
        grid-area: 5 / 13 / 5 / 13;
    }
    #fireBlock21 {
        display: none;
        grid-area: 5 / 14 / 5 / 14;
    }

    /* Fire blocks row 4 */
    #fireBlock22 {
        grid-area: 6 / 8 / 6 / 8;
    }
    #fireBlock23 {
        grid-area: 6 / 9 / 6 / 9;
    }
    #fireBlock24 {
        grid-area: 6 / 10 / 6 / 10;
    }
    #fireBlock25 {
        grid-area: 6 / 11 / 6 / 11;
    }
    #fireBlock26 {
        grid-area: 6 / 12 / 6 / 12;
    }
    #fireBlock27 {
        grid-area: 6 / 13 / 6 / 13;
    }
    #fireBlock28 {
        display: none;
        grid-area: 6 / 14 / 6 / 14;
    }


    /* Core block  */
    #coreFireBlock {
        grid-area: 7 / 8 / 7 / 14;
        
    }
    #coreFireBlock h1{
        margin-top: 9%;
    }

    /* Fire blocks row 5 */
    #fireBlock29 {
        grid-area: 8 / 8 / 8 / 8;
    }
    #fireBlock30 {
        grid-area: 8 / 9 / 8 / 9;
    }
    #fireBlock31 {
        grid-area: 8 / 10 / 8 / 10;
    }
    #fireBlock32 {
        grid-area: 8 / 11 / 8 / 11;
    }
    #fireBlock33 {
        grid-area: 8 / 12 / 8 / 12;
    }
    #fireBlock34 {
        grid-area: 8 / 13 / 8 / 13;
    }
    #fireBlock35 {
        display: none;
        grid-area: 8 / 14 / 8 / 14;
    }

    /* Fire blocks row 6 */
    #fireBlock36 {
        grid-area: 9 / 8 / 9 / 8;
    }
    #fireBlock37 {
        grid-area: 9 / 9 / 9 / 9;
    }
    #fireBlock38 {
        grid-area: 9 / 10 / 9 / 10;
    }
    #fireBlock39 {
        grid-area: 9 / 11 / 9 / 11;
    }
    #fireBlock40 {
        grid-area: 9 / 12 / 9 / 12;
    }
    #fireBlock41 {
        grid-area: 9 / 13 / 9 / 13;
    }
    #fireBlock42 {
        display: none;
        grid-area: 9 / 14 / 9 / 14;
    }
    
    /* Fire blocks row 7 */
    #fireBlock43 {
        grid-area: 10 / 8 / 10 / 8;
    }
    #fireBlock44 {
        grid-area: 10 / 9 / 10 / 9;
    }
    #fireBlock45 {
        grid-area: 10 / 10 / 10 / 10;
    }
    #fireBlock46 {
        grid-area: 10 / 11 / 10 / 11;
    }
    #fireBlock47 {
        grid-area: 10 / 12 / 10 / 12;
    }
    #fireBlock48 {
        grid-area: 10 / 13 / 10 / 13;
    }
    #fireBlock49 {
        display: none;
        grid-area: 10 / 14 / 10 / 14;
    }

    /* Fire blocks row 8 */
    #fireBlock50 {
        grid-area: 11 / 8 / 11 / 8;
    }
    #fireBlock51 {
        grid-area: 11 / 9 / 11 / 9;
    }
    #fireBlock52 {
        grid-area: 11 / 10 / 11 / 10;
    }
    #fireBlock53 {
        grid-area: 11 / 11 / 11 / 11;
    }
    #fireBlock54 {
        grid-area: 11 / 12 / 11 / 12;
    }
    #fireBlock55 {
        grid-area: 11 / 13 / 11 / 13;
    }
    #fireBlock56 {
        display: none;
        grid-area: 11 / 14 / 11 / 14;
    }


    footer {
        grid-area: 12 / 8 / 12 / 14;
    }
}

@media only screen and (max-width: 830px) { 
    
    #mainbox {
        grid-template:  50px 90px 25px 20px 10px 5px  120px 5px 10px 20px 25px 90px 50px / 3% repeat(5, 1fr) 3% repeat(5, 1fr) 3%;
    }
    
    #col14 {
        display: none;
    }
    #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11, #row12, #row13 {
        grid-column: 1 / 14;
    }
    #codeView {
        min-width: 280px;
    }
    #presView {
        background-color: white;
        grid-area: 2 / 8 / 13 / 13;
        
    }
    header {
        grid-area: 2 / 8 / 2 / 13;
    }

    /* Fire blocks row 1 */
    #fireBlock1 {
        grid-area: 3 / 8 / 3 / 8;
    }
    #fireBlock2 {
        grid-area: 3 / 9 / 3 / 9;
    }
    #fireBlock3 {
        grid-area: 3 / 10 / 3 / 10;
    }
    #fireBlock4 {
        grid-area: 3 / 11 / 3 / 11;
    }
    #fireBlock5 {
        grid-area: 3 / 12 / 3 / 12;
    }
    #fireBlock6 {
        display: none;
        grid-area: 3 / 13 / 3 / 13;
    }
    #fireBlock7 {
        display: none;
        grid-area: 3 / 14 / 3 / 14;
    }
    
    /* Fire blocks row 2 */
    #fireBlock8 {
        grid-area: 4 / 8 / 4 / 8;
    }
    #fireBlock9 {
        grid-area: 4 / 9 / 4 / 9;
    }
    #fireBlock10 {
        grid-area: 4 / 10 / 4 / 10;
    }
    #fireBlock11 {
        grid-area: 4 / 11 / 4 / 11;
    }
    #fireBlock12 {
        grid-area: 4 / 12 / 4 / 12;
    }
    #fireBlock13 {
        display: none;
        grid-area: 4 / 13 / 4 / 13;
    }
    #fireBlock14 {
        display: none;
        grid-area: 4 / 14 / 4 / 14;
    }
    /* Fire blocks row 3 */
    #fireBlock15 {
        grid-area: 5 / 8 / 5 / 8;
    }
    #fireBlock16 {
        grid-area: 5 / 9 / 5 / 9;
    }
    #fireBlock17 {
        grid-area: 5 / 10 / 5 / 10;
    }
    #fireBlock18 {
        grid-area: 5 / 11 / 5 / 11;
    }
    #fireBlock19 {
        grid-area: 5 / 12 / 5 / 12;
    }
    #fireBlock20 {
        display: none;
        grid-area: 5 / 13 / 5 / 13;
    }
    #fireBlock21 {
        display: none;
        grid-area: 5 / 14 / 5 / 14;
    }

    /* Fire blocks row 4 */
    #fireBlock22 {
        grid-area: 6 / 8 / 6 / 8;
    }
    #fireBlock23 {
        grid-area: 6 / 9 / 6 / 9;
    }
    #fireBlock24 {
        grid-area: 6 / 10 / 6 / 10;
    }
    #fireBlock25 {
        grid-area: 6 / 11 / 6 / 11;
    }
    #fireBlock26 {
        grid-area: 6 / 12 / 6 / 12;
    }
    #fireBlock27 {
        display: none;
        grid-area: 6 / 13 / 6 / 13;
    }
    #fireBlock28 {
        display: none;
        grid-area: 6 / 14 / 6 / 14;
    }


    /* Core block  */
    #coreFireBlock {
        grid-area: 7 / 8 / 7 / 13;
    }
    

    /* Fire blocks row 5 */
    #fireBlock29 {
        grid-area: 8 / 8 / 8 / 8;
    }
    #fireBlock30 {
        grid-area: 8 / 9 / 8 / 9;
    }
    #fireBlock31 {
        grid-area: 8 / 10 / 8 / 10;
    }
    #fireBlock32 {
        grid-area: 8 / 11 / 8 / 11;
    }
    #fireBlock33 {
        grid-area: 8 / 12 / 8 / 12;
    }
    #fireBlock34 {
        display: none;
        grid-area: 8 / 13 / 8 / 13;
    }
    #fireBlock35 {
        display: none;
        grid-area: 8 / 14 / 8 / 13;
    }

    /* Fire blocks row 6 */
    #fireBlock36 {
        grid-area: 9 / 8 / 9 / 8;
    }
    #fireBlock37 {
        grid-area: 9 / 9 / 9 / 9;
    }
    #fireBlock38 {
        grid-area: 9 / 10 / 9 / 10;
    }
    #fireBlock39 {
        grid-area: 9 / 11 / 9 / 11;
    }
    #fireBlock40 {
        grid-area: 9 / 12 / 9 / 12;
    }
    #fireBlock41 {
        display: none;
        grid-area: 9 / 13 / 9 / 13;
    }
    #fireBlock42 {
        display: none;
        grid-area: 9 / 14 / 9 / 14;
    }
    
    /* Fire blocks row 7 */
    #fireBlock43 {
        grid-area: 10 / 8 / 10 / 8;
    }
    #fireBlock44 {
        grid-area: 10 / 9 / 10 / 9;
    }
    #fireBlock45 {
        grid-area: 10 / 10 / 10 / 10;
    }
    #fireBlock46 {
        grid-area: 10 / 11 / 10 / 11;
    }
    #fireBlock47 {
        grid-area: 10 / 12 / 10 / 12;
    }
    #fireBlock48 {
        display: none;
        grid-area: 10 / 13 / 10 / 13;
    }
    #fireBlock49 {
        display: none;
        grid-area: 10 / 14 / 10 / 14;
    }

    /* Fire blocks row 8 */
    #fireBlock50 {
        grid-area: 11 / 8 / 11 / 8;
    }
    #fireBlock51 {
        grid-area: 11 / 9 / 11 / 9;
    }
    #fireBlock52 {
        grid-area: 11 / 10 / 11 / 10;
    }
    #fireBlock53 {
        grid-area: 11 / 11 / 11 / 11;
    }
    #fireBlock54 {
        grid-area: 11 / 12 / 11 / 12;
    }
    #fireBlock55 {
        display: none;
        grid-area: 11 / 13 / 11 / 13;
    }
    #fireBlock56 {
        display: none;
        grid-area: 11 / 14 / 11 / 14;
    }


    footer {
        grid-area: 12 / 8 / 12 / 13;
    }
}

@media only screen and (max-width: 730px) {
    #mainbox {
        grid-template:  50px 90px 25px 20px 10px 5px  120px 5px 10px 20px 25px 90px 30px repeat(2, 80px) 50px / repeat(9, 1fr);
    }
    #col10, #col11, #col12, #col13 {
        display: none;
    }

    #row14 {
        display: block;
        grid-area: 14 / 1 / 14 / 10;
         
    }
    #row15 {
        display: block;
        grid-area: 15 / 1 / 15 / 10;
    }
    #row16 {
        display: block;
        grid-area: 16 / 1 / 16 / 10;
    }

    #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11, #row12, #row13 {
        grid-column: 1 / 10;
    }

    #col1, #col2, #col3, #col4, #col5, #col6, #col7, #col8, #col9, #col10, #col11, #col12 {
        grid-row: 1 / 17;
    }
    #codeView {
        grid-area: 14 / 2 / 16 / 9;
    }
    #presView {
        background-color: white;
        grid-area: 2 / 2 / 13 / 9;
        
    }
    header {
        grid-area: 2 / 2 / 2 / 9;
    }

    /* Fire blocks row 1 */
    #fireBlock1 {
        grid-area: 3 / 2 / 3 / 2;
    }
    #fireBlock2 {
        grid-area: 3 / 3 / 3 / 3;
    }
    #fireBlock3 {
        grid-area: 3 / 4 / 3 / 4;
    }
    #fireBlock4 {
        grid-area: 3 / 5  / 3 / 5 ;
    }
    #fireBlock5 {
        grid-area: 3 / 6  / 3 / 6 ;
    }
    #fireBlock6 {
        display: block;
        grid-area: 3 / 7 / 3 / 7;
    }
    #fireBlock7 {
        display: block;
        grid-area: 3 / 8 / 3 / 8;
    }
    
    /* Fire blocks row 2 */
    #fireBlock8 {
        grid-area: 4 / 2 / 4 / 2;
    }
    #fireBlock9 {
        grid-area: 4 / 3 / 4 / 3;
    }
    #fireBlock10 {
        grid-area: 4 / 4 / 4 / 4;
    }
    #fireBlock11 {
        grid-area: 4 / 5  / 4 / 5 ;
    }
    #fireBlock12 {
        grid-area: 4 / 6  / 4 / 6 ;
    }
    #fireBlock13 {
        display: block;
        grid-area: 4 / 7 / 4 / 7;
    }
    #fireBlock14 {
        display: block;
        grid-area: 4 / 8 / 4 / 8;
    }


    /* Fire blocks row 3 */
    #fireBlock15 {
        grid-area: 5 / 2 / 5 / 2;
    }
    #fireBlock16 {
        grid-area: 5 / 3 / 5 / 3;
    }
    #fireBlock17 {
        grid-area: 5 / 4 / 5 / 4;
    }
    #fireBlock18 {
        grid-area: 5 / 5  / 5 / 5;
    }
    #fireBlock19 {
        grid-area: 5 / 6 / 5 / 6;
    }
    #fireBlock20 {
        display: block;
        grid-area: 5 / 7 / 5 / 7;
    }
    #fireBlock21 {
        display: block;
        grid-area: 5 / 8 / 5 / 8;
    }

    /* Fire blocks row 4 */
    #fireBlock22 {
        grid-area: 6 / 2 / 6 / 2;
    }
    #fireBlock23 {
        grid-area: 6 / 3 / 6 / 3;
    }
    #fireBlock24 {
        grid-area: 6 / 4 / 6 / 4;
    }
    #fireBlock25 {
        grid-area: 6 / 5 / 6 / 5;
    }
    #fireBlock26 {
        grid-area: 6 / 6 / 6 / 6;
    }
    #fireBlock27 {
        display: block;
        grid-area: 6 / 7 / 6 / 7;
    }
    #fireBlock28 {
        display: block;
        grid-area: 6 / 8 / 6 / 8;
    }


    /* Core block  */
    #coreFireBlock {
        grid-area: 7 / 2 / 7 / 9;
    }
    

    /* Fire blocks row 5 */
    #fireBlock29 {
        grid-area: 8 / 2 / 8 / 2;
    }
    #fireBlock30 {
        grid-area: 8 / 3 / 8 / 3;
    }
    #fireBlock31 {
        grid-area: 8 / 4 / 8 / 4;
    }
    #fireBlock32 {
        grid-area: 8 / 5 / 8 / 5;
    }
    #fireBlock33 {
        grid-area: 8 / 6 / 8 / 6;
    }
    #fireBlock34 {
        display: block;
        grid-area: 8 / 7 / 8 / 7;
    }
    #fireBlock35 {
        display: block;
        grid-area: 8 / 8 / 8 / 8;
    }

    /* Fire blocks row 6 */
    #fireBlock36 {
        grid-area: 9 / 2 / 9 / 2;
    }
    #fireBlock37 {
        grid-area: 9 / 3 / 9 / 3;
    }
    #fireBlock38 {
        grid-area: 9 / 4 / 9 / 4;
    }
    #fireBlock39 {
        grid-area: 9 / 5 / 9 / 5;
    }
    #fireBlock40 {
        grid-area: 9 / 6 / 9 / 6;
    }
    #fireBlock41 {
        display: block;
        grid-area: 9 / 7 / 9 / 7;
    }
    #fireBlock42 {
        display: block;
        grid-area: 9 / 8 / 9 / 8;
    }
    
    /* Fire blocks row 7 */
    #fireBlock43 {
        grid-area: 10 / 2 / 10 / 2;
    }
    #fireBlock44 {
        grid-area: 10 / 3 / 10 / 3;
    }
    #fireBlock45 {
        grid-area: 10 / 4 / 10 / 4;
    }
    #fireBlock46 {
        grid-area: 10 / 5 / 10 / 5;
    }
    #fireBlock47 {
        grid-area: 10 / 6 / 10 / 6;
    }
    #fireBlock48 {
        display: block;
        grid-area: 10 / 7 / 10 / 7;
    }
    #fireBlock49 {
        display: block;
        grid-area: 10 / 8 / 10 / 8;
    }

    /* Fire blocks row 8 */
    #fireBlock50 {
        grid-area: 11 / 2 / 11 / 2;
    }
    #fireBlock51 {
        grid-area: 11 / 3 / 11 / 3;
    }
    #fireBlock52 {
        grid-area: 11 / 4 / 11 / 4;
    }
    #fireBlock53 {
        grid-area: 11 / 5 / 11 / 5;
    }
    #fireBlock54 {
        grid-area: 11 / 6 / 11 / 6;
    }
    #fireBlock55 {
        display: block;
        grid-area: 11 / 7 / 11 / 7;
    }
    #fireBlock56 {
        display: block;
        grid-area: 11 / 8 / 11 / 8;
    } 
    

    footer {
        grid-area: 12 / 2 / 12 / 9;
    }
}

@media only screen and (max-width: 580px) {
    #mainbox {
        grid-template:  50px 90px 25px 20px 10px 5px  120px 5px 10px 20px 25px 90px 30px repeat(2, 80px) 50px / 3% repeat(7, 1fr) 3%;
    }
}
@media only screen and (max-width: 470px) {
    #mainbox {
        grid-template:  50px 90px 25px 20px 10px 5px  120px 5px 10px 20px 25px 90px 30px repeat(2, 80px) 50px / repeat(7, 1fr);
    }
  
    #col8, #col9 {
        display: none;
    }
    #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11, #row12, #row13, #row14, #row15, #row16 {
        grid-column: 1 / 8;
    }

    #col1, #col2, #col3, #col4, #col5, #col6, #col7, #col8, #col9, #col10, #col11, #col12 {
        grid-row: 1 / 17;
    }
    #codeView {
        grid-area: 14 / 1 / 16 / 8;
    }
    #presView {
        background-color: white;
        grid-area: 2 / 1 / 13 / 8;
    }
    header {
        grid-area: 2 / 1 / 2 / 8;
    }

    /* Fire blocks row 1 */
    #fireBlock1 {
        grid-area: 3 / 1  / 3 / 1 ;
    }
    #fireBlock2 {
        grid-area: 3 / 2  / 3 / 2 ;
    }
    #fireBlock3 {
        grid-area: 3 / 3  / 3 / 3 ;
    }
    #fireBlock4 {
        grid-area: 3 / 4  / 3 / 4 ;
    }
    #fireBlock5 {
        grid-area: 3 / 5  / 3 / 5 ;
    }
    #fireBlock6 {
        display: block;
        grid-area: 3 / 6  / 3 / 6 ;
    }
    #fireBlock7 {
        display: block;
        grid-area: 3 / 7  / 3 / 7 ;
    }
    
    /* Fire blocks row 2 */
    #fireBlock8 {
        grid-area: 4 / 1  / 4 / 1 ;
    }
    #fireBlock9 {
        grid-area: 4 / 2  / 4 / 2 ;
    }
    #fireBlock10 {
        grid-area: 4 / 3  / 4 / 3 ;
    }
    #fireBlock11 {
        grid-area: 4 / 4  / 4 / 4 ;
    }
    #fireBlock12 {
        grid-area: 4 / 5  / 4 / 5 ;
    }
    #fireBlock13 {
        display: block;
        grid-area: 4 / 6  / 4 / 6 ;
    }
    #fireBlock14 {
        display: block;
        grid-area: 4 / 7  / 4 / 7 ;
    }


    /* Fire blocks row 3 */
    #fireBlock15 {
        grid-area: 5 / 1  / 5 / 1 ;
    }
    #fireBlock16 {
        grid-area: 5 / 2  / 5 / 2 ;
    }
    #fireBlock17 {
        grid-area: 5 / 3  / 5 / 3 ;
    }
    #fireBlock18 {
        grid-area: 5 / 4  / 5 / 4 ;
    }
    #fireBlock19 {
        grid-area: 5 / 5  / 5 / 5 ;
    }
    #fireBlock20 {
        display: block;
        grid-area: 5 / 6  / 5 / 6 ;
    }
    #fireBlock21 {
        display: block;
        grid-area: 5 / 7  / 5 / 7 ;
    }

    /* Fire blocks row 4 */
    #fireBlock22 {
        grid-area: 6 / 1  / 6 / 1 ;
    }
    #fireBlock23 {
        grid-area: 6 / 2  / 6 / 2 ;
    }
    #fireBlock24 {
        grid-area: 6 / 3  / 6 / 3 ;
    }
    #fireBlock25 {
        grid-area: 6 / 4  / 6 / 4 ;
    }
    #fireBlock26 {
        grid-area: 6 / 5  / 6 / 5 ;
    }
    #fireBlock27 {
        display: block;
        grid-area: 6 / 6  / 6 / 6 ;
    }
    #fireBlock28 {
        display: block;
        grid-area: 6 / 7  / 6 / 7 ;
    }


    /* Core block  */
    #coreFireBlock {
        grid-area: 7 / 1  / 7 / 8;
    }
    

    /* Fire blocks row 5 */
    #fireBlock29 {
        grid-area: 8 / 1  / 8 / 1 ;
    }
    #fireBlock30 {
        grid-area: 8 / 2  / 8 / 2 ;
    }
    #fireBlock31 {
        grid-area: 8 / 3  / 8 / 3 ;
    }
    #fireBlock32 {
        grid-area: 8 / 4  / 8 / 4 ;
    }
    #fireBlock33 {
        grid-area: 8 / 5  / 8 / 5 ;
    }
    #fireBlock34 {
        display: block;
        grid-area: 8 / 6  / 8 / 6 ;
    }
    #fireBlock35 {
        display: block;
        grid-area: 8 / 7  / 8 / 7 ;
    }

    /* Fire blocks row 6 */
    #fireBlock36 {
        grid-area: 9 / 1  / 9 / 1 ;
    }
    #fireBlock37 {
        grid-area: 9 / 2  / 9 / 2 ;
    }
    #fireBlock38 {
        grid-area: 9 / 3  / 9 / 3 ;
    }
    #fireBlock39 {
        grid-area: 9 / 4  / 9 / 4 ;
    }
    #fireBlock40 {
        grid-area: 9 / 5  / 9 / 5 ;
    }
    #fireBlock41 {
        display: block;
        grid-area: 9 / 6  / 9 / 6 ;
    }
    #fireBlock42 {
        display: block;
        grid-area: 9 / 7  / 9 / 7 ;
    }
    
    /* Fire blocks row 7 */
    #fireBlock43 {
        grid-area: 10 / 1  / 10 / 1 ;
    }
    #fireBlock44 {
        grid-area: 10 / 2  / 10 / 2 ;
    }
    #fireBlock45 {
        grid-area: 10 / 3  / 10 / 3 ;
    }
    #fireBlock46 {
        grid-area: 10 / 4  / 10 / 4 ;
    }
    #fireBlock47 {
        grid-area: 10 / 5  / 10 / 5 ;
    }
    #fireBlock48 {
        display: block;
        grid-area: 10 / 6  / 10 / 6 ;
    }
    #fireBlock49 {
        display: block;
        grid-area: 10 / 7  / 10 / 7 ;
    }

    /* Fire blocks row 8 */
    #fireBlock50 {
        grid-area: 11 / 1  / 11 / 1 ;
    }
    #fireBlock51 {
        grid-area: 11 / 2  / 11 / 2 ;
    }
    #fireBlock52 {
        grid-area: 11 / 3  / 11 / 3 ;
    }
    #fireBlock53 {
        grid-area: 11 / 4  / 11 / 4 ;
    }
    #fireBlock54 {
        grid-area: 11 / 5  / 11 / 5 ;
    }
    #fireBlock55 {
        display: block;
        grid-area: 11 / 6  / 11 / 6 ;
    }
    #fireBlock56 {
        display: block;
        grid-area: 11 / 7  / 11 / 7 ;
    } 
    

    footer {
        grid-area: 12 / 1  / 12 / 8;
    }

@media only screen and (max-width: 370px) {
#mainbox {
    grid-template:  50px 90px 25px 20px 10px 5px  120px 5px 10px 20px 25px 90px 30px repeat(2, 80px) 50px / repeat(6, 1fr);
}
#col7 {
    display: none;
}
#row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11, #row12, #row13, #row14, #row15, #row16 {
    grid-column: 1 / 7;
}

#col1, #col2, #col3, #col4, #col5, #col6, #col7, #col8, #col9, #col10, #col11, #col12 {
    grid-row: 1 / 17;
}
#codeView {
    grid-area: 14 / 1 / 16 / 7;
}
#presView {
    background-color: white;
    grid-area: 2 / 1 / 13 / 7;
}
header {
    grid-area: 2 / 1 / 2 / 7;
}

/* Fire blocks row 1 */
#fireBlock1 {
    grid-area: 3 / 1  / 3 / 1 ;
}
#fireBlock2 {
    grid-area: 3 / 2  / 3 / 2 ;
}
#fireBlock3 {
    grid-area: 3 / 3  / 3 / 3 ;
}
#fireBlock4 {
    grid-area: 3 / 4  / 3 / 4 ;
}
#fireBlock5 {
    grid-area: 3 / 5  / 3 / 5 ;
}
#fireBlock6 {
    display: block;
    grid-area: 3 / 6  / 3 / 6 ;
}
#fireBlock7 {
    display: none;
    grid-area: 3 / 7  / 3 / 7 ;
}

/* Fire blocks row 2 */
#fireBlock8 {
    grid-area: 4 / 1  / 4 / 1 ;
}
#fireBlock9 {
    grid-area: 4 / 2  / 4 / 2 ;
}
#fireBlock10 {
    grid-area: 4 / 3  / 4 / 3 ;
}
#fireBlock11 {
    grid-area: 4 / 4  / 4 / 4 ;
}
#fireBlock12 {
    grid-area: 4 / 5  / 4 / 5 ;
}
#fireBlock13 {
    display: block;
    grid-area: 4 / 6  / 4 / 6 ;
}
#fireBlock14 {
    display: none;
    grid-area: 4 / 7  / 4 / 7 ;
}


/* Fire blocks row 3 */
#fireBlock15 {
    grid-area: 5 / 1  / 5 / 1 ;
}
#fireBlock16 {
    grid-area: 5 / 2  / 5 / 2 ;
}
#fireBlock17 {
    grid-area: 5 / 3  / 5 / 3 ;
}
#fireBlock18 {
    grid-area: 5 / 4  / 5 / 4 ;
}
#fireBlock19 {
    grid-area: 5 / 5  / 5 / 5 ;
}
#fireBlock20 {
    display: block;
    grid-area: 5 / 6  / 5 / 6 ;
}
#fireBlock21 {
    display: none;
    grid-area: 5 / 7  / 5 / 7 ;
}

/* Fire blocks row 4 */
#fireBlock22 {
    grid-area: 6 / 1  / 6 / 1 ;
}
#fireBlock23 {
    grid-area: 6 / 2  / 6 / 2 ;
}
#fireBlock24 {
    grid-area: 6 / 3  / 6 / 3 ;
}
#fireBlock25 {
    grid-area: 6 / 4  / 6 / 4 ;
}
#fireBlock26 {
    grid-area: 6 / 5  / 6 / 5 ;
}
#fireBlock27 {
    display: block;
    grid-area: 6 / 6  / 6 / 6 ;
}
#fireBlock28 {
    display: none;
    grid-area: 6 / 7  / 6 / 7 ;
}


/* Core block  */
#coreFireBlock {
    grid-area: 7 / 1  / 7 / 7;
}


/* Fire blocks row 5 */
#fireBlock29 {
    grid-area: 8 / 1  / 8 / 1 ;
}
#fireBlock30 {
    grid-area: 8 / 2  / 8 / 2 ;
}
#fireBlock31 {
    grid-area: 8 / 3  / 8 / 3 ;
}
#fireBlock32 {
    grid-area: 8 / 4  / 8 / 4 ;
}
#fireBlock33 {
    grid-area: 8 / 5  / 8 / 5 ;
}
#fireBlock34 {
    display: block;
    grid-area: 8 / 6  / 8 / 6 ;
}
#fireBlock35 {
    display: none;
    grid-area: 8 / 7  / 8 / 7 ;
}

/* Fire blocks row 6 */
#fireBlock36 {
    grid-area: 9 / 1  / 9 / 1 ;
}
#fireBlock37 {
    grid-area: 9 / 2  / 9 / 2 ;
}
#fireBlock38 {
    grid-area: 9 / 3  / 9 / 3 ;
}
#fireBlock39 {
    grid-area: 9 / 4  / 9 / 4 ;
}
#fireBlock40 {
    grid-area: 9 / 5  / 9 / 5 ;
}
#fireBlock41 {
    display: block;
    grid-area: 9 / 6  / 9 / 6 ;
}
#fireBlock42 {
    display: none;
    grid-area: 9 / 7  / 9 / 7 ;
}

/* Fire blocks row 7 */
#fireBlock43 {
    grid-area: 10 / 1  / 10 / 1 ;
}
#fireBlock44 {
    grid-area: 10 / 2  / 10 / 2 ;
}
#fireBlock45 {
    grid-area: 10 / 3  / 10 / 3 ;
}
#fireBlock46 {
    grid-area: 10 / 4  / 10 / 4 ;
}
#fireBlock47 {
    grid-area: 10 / 5  / 10 / 5 ;
}
#fireBlock48 {
    display: block;
    grid-area: 10 / 6  / 10 / 6 ;
}
#fireBlock49 {
    display: none;
    grid-area: 10 / 7  / 10 / 7 ;
}

/* Fire blocks row 8 */
#fireBlock50 {
    grid-area: 11 / 1  / 11 / 1 ;
}
#fireBlock51 {
    grid-area: 11 / 2  / 11 / 2 ;
}
#fireBlock52 {
    grid-area: 11 / 3  / 11 / 3 ;
}
#fireBlock53 {
    grid-area: 11 / 4  / 11 / 4 ;
}
#fireBlock54 {
    grid-area: 11 / 5  / 11 / 5 ;
}
#fireBlock55 {
    display: block;
    grid-area: 11 / 6  / 11 / 6 ;
}
#fireBlock56 {
    display: none;
    grid-area: 11 / 7  / 11 / 7 ;
} 


footer {
    grid-area: 12 / 1  / 12 / 7;
}

}


@media only screen and (max-width: 325px) {
    #mainbox {
        grid-template:  50px 90px 25px 20px 10px 5px  120px 5px 10px 20px 25px 90px 30px repeat(2, 80px) 50px / repeat(5, 1fr);
    }
    #col6 {
        display: none;
    }
    #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11, #row12, #row13, #row14, #row15, #row16 {
        grid-column: 1 / 6;
    }

    #col1, #col2, #col3, #col4, #col5, #col6, #col7, #col8, #col9, #col10, #col11, #col12 {
        grid-row: 1 / 17;
    }
    #codeView {
        grid-area: 14 / 1 / 16 / 6;
    }
    #presView {
        background-color: white;
        grid-area: 2 / 1 / 13 / 6;
    }
    header {
        grid-area: 2 / 1 / 2 / 6;
    }

    /* Fire blocks row 1 */
    #fireBlock1 {
        grid-area: 3 / 1  / 3 / 1 ;
    }
    #fireBlock2 {
        grid-area: 3 / 2  / 3 / 2 ;
    }
    #fireBlock3 {
        grid-area: 3 / 3  / 3 / 3 ;
    }
    #fireBlock4 {
        grid-area: 3 / 4  / 3 / 4 ;
    }
    #fireBlock5 {
        grid-area: 3 / 5  / 3 / 5 ;
    }
    #fireBlock6 {
        display: none;
        grid-area: 3 / 6  / 3 / 6 ;
    }
    #fireBlock7 {
        display: none;
        grid-area: 3 / 7  / 3 / 7 ;
    }
    
    /* Fire blocks row 2 */
    #fireBlock8 {
        grid-area: 4 / 1  / 4 / 1 ;
    }
    #fireBlock9 {
        grid-area: 4 / 2  / 4 / 2 ;
    }
    #fireBlock10 {
        grid-area: 4 / 3  / 4 / 3 ;
    }
    #fireBlock11 {
        grid-area: 4 / 4  / 4 / 4 ;
    }
    #fireBlock12 {
        grid-area: 4 / 5  / 4 / 5 ;
    }
    #fireBlock13 {
        display: none;
        grid-area: 4 / 6  / 4 / 6 ;
    }
    #fireBlock14 {
        display: none;
        grid-area: 4 / 7  / 4 / 7 ;
    }


    /* Fire blocks row 3 */
    #fireBlock15 {
        grid-area: 5 / 1  / 5 / 1 ;
    }
    #fireBlock16 {
        grid-area: 5 / 2  / 5 / 2 ;
    }
    #fireBlock17 {
        grid-area: 5 / 3  / 5 / 3 ;
    }
    #fireBlock18 {
        grid-area: 5 / 4  / 5 / 4 ;
    }
    #fireBlock19 {
        grid-area: 5 / 5  / 5 / 5 ;
    }
    #fireBlock20 {
        display: none;
        grid-area: 5 / 6  / 5 / 6 ;
    }
    #fireBlock21 {
        display: none;
        grid-area: 5 / 7  / 5 / 7 ;
    }

    /* Fire blocks row 4 */
    #fireBlock22 {
        grid-area: 6 / 1  / 6 / 1 ;
    }
    #fireBlock23 {
        grid-area: 6 / 2  / 6 / 2 ;
    }
    #fireBlock24 {
        grid-area: 6 / 3  / 6 / 3 ;
    }
    #fireBlock25 {
        grid-area: 6 / 4  / 6 / 4 ;
    }
    #fireBlock26 {
        grid-area: 6 / 5  / 6 / 5 ;
    }
    #fireBlock27 {
        display: none;
        grid-area: 6 / 6  / 6 / 6 ;
    }
    #fireBlock28 {
        display: none;
        grid-area: 6 / 7  / 6 / 7 ;
    }


    /* Core block  */
    #coreFireBlock {
        grid-area: 7 / 1  / 7 / 6;
    }
    

    /* Fire blocks row 5 */
    #fireBlock29 {
        grid-area: 8 / 1  / 8 / 1 ;
    }
    #fireBlock30 {
        grid-area: 8 / 2  / 8 / 2 ;
    }
    #fireBlock31 {
        grid-area: 8 / 3  / 8 / 3 ;
    }
    #fireBlock32 {
        grid-area: 8 / 4  / 8 / 4 ;
    }
    #fireBlock33 {
        grid-area: 8 / 5  / 8 / 5 ;
    }
    #fireBlock34 {
        display: none;
        grid-area: 8 / 6  / 8 / 6 ;
    }
    #fireBlock35 {
        display: none;
        grid-area: 8 / 7  / 8 / 7 ;
    }

    /* Fire blocks row 6 */
    #fireBlock36 {
        grid-area: 9 / 1  / 9 / 1 ;
    }
    #fireBlock37 {
        grid-area: 9 / 2  / 9 / 2 ;
    }
    #fireBlock38 {
        grid-area: 9 / 3  / 9 / 3 ;
    }
    #fireBlock39 {
        grid-area: 9 / 4  / 9 / 4 ;
    }
    #fireBlock40 {
        grid-area: 9 / 5  / 9 / 5 ;
    }
    #fireBlock41 {
        display: none;
        grid-area: 9 / 6  / 9 / 6 ;
    }
    #fireBlock42 {
        display: none;
        grid-area: 9 / 7  / 9 / 7 ;
    }
    
    /* Fire blocks row 7 */
    #fireBlock43 {
        grid-area: 10 / 1  / 10 / 1 ;
    }
    #fireBlock44 {
        grid-area: 10 / 2  / 10 / 2 ;
    }
    #fireBlock45 {
        grid-area: 10 / 3  / 10 / 3 ;
    }
    #fireBlock46 {
        grid-area: 10 / 4  / 10 / 4 ;
    }
    #fireBlock47 {
        grid-area: 10 / 5  / 10 / 5 ;
    }
    #fireBlock48 {
        display: none;
        grid-area: 10 / 6  / 10 / 6 ;
    }
    #fireBlock49 {
        display: none;
        grid-area: 10 / 7  / 10 / 7 ;
    }

    /* Fire blocks row 8 */
    #fireBlock50 {
        grid-area: 11 / 1  / 11 / 1 ;
    }
    #fireBlock51 {
        grid-area: 11 / 2  / 11 / 2 ;
    }
    #fireBlock52 {
        grid-area: 11 / 3  / 11 / 3 ;
    }
    #fireBlock53 {
        grid-area: 11 / 4  / 11 / 4 ;
    }
    #fireBlock54 {
        grid-area: 11 / 5  / 11 / 5 ;
    }
    #fireBlock55 {
        display: none;
        grid-area: 11 / 6  / 11 / 6 ;
    }
    #fireBlock56 {
        display: none;
        grid-area: 11 / 7  / 11 / 7 ;
    } 
    

    footer {
        grid-area: 12 / 1  / 12 / 6;
    }

    }
`;
class presentJS extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateJSP.content.cloneNode(true));
        let arr = ['#FFD640;', '#fdff76', '#f0cd59', '#fa9624', '#fa6824', '#a33f11'];
        let arr2 = ['0.1', '.2', '0.3', '.4', '.5', '.6', '.7', '.8', '.9', '1'];
        let num = 0;
        let fbt = this.shadowRoot.querySelectorAll('.fireBlocksTop'), i;
        let fbb = this.shadowRoot.querySelectorAll('.fireBlocksBottom');
        
        this.fireWord = setInterval(() => {
            num = (num + 1) % 4;
            this.shadowRoot.querySelector('#coreFireBlock h1').style.color = arr[Math.floor(Math.random() * arr.length)];
        }, 1000);
        
        this.fireBlock = setInterval(() => {
            num = (num + 1) % 4;
            for(i = 0; i < fbt.length; i++) {
                //fbt[i].style.backgroundColor = arr[Math.floor(Math.random() * arr.length)];
                fbt[i].style.opacity = arr2[Math.floor(Math.random() * arr2.length)];
            }
            for(i = 0; i < fbb.length; i++) {
                //fbb[i].style.backgroundColor = arr[Math.floor(Math.random() * arr.length)];
                fbb[i].style.opacity = arr2[Math.floor(Math.random() * arr2.length)];
            }
        
        }, 1000);
        this.fireWord();
        this.fireBlock();
    }
};

window.customElements.define('present-js', presentJS);

