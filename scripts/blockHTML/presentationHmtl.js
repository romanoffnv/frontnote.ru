const presentationHmtl = document.getElementById('presentationHmtl').attachShadow({mode: 'open'});
presentationHmtl.innerHTML = ` 
	
    <!--Mainbox and Code view section-->
    <style>
        * {
            margin: 0;
            padding: 0;
        }
    
        #mainbox {
            display: grid;
            grid-template: 50px 110px 25px repeat(2, 60px) 30px repeat(2, 60px) 100px 50px/ repeat(17, 1fr);
            grid-gap: 10px; 
            background-color: #B44C4C;
            margin-bottom: 40px;
        }

        #codeView {
            grid-area: 2 / 2/ 10 / 7;
            z-index: 1;
            overflow: hidden;
            background-color: #AB1515;
        }
        #codeView p   {
            width: 400px;
            color: rgb(216, 145, 145);
            font-size: 1em;
            grid-area: 2 / 2/ 10 / 7;
            z-index: 2;
        }
        .indent1 {
            padding-left: 10px;
        }
        
        .indent2 {
            padding-left: 20px;
        }
        
        .indent3 {
            padding-left: 30px;
        }
        
        .indent4 {
            padding-left: 40px;
        }
        
        .indent5 {
            padding-left: 60px;
        }
    </style>
	<div id = "mainbox">
        <div id = "codeView">
                <p class ="htmlCode"> &lt!doctype html&gt </p>
                <p class ="htmlCode"> &lthtml lang="en"&gt </p>
                <p class ="htmlCode indent1"> &lthead&gt </p>
                <p class ="htmlCode indent2"> &ltmeta charset="utf-8"&gt </p>
                <p class ="htmlCode indent2"> &lttitle&gtFront Book&lt/title&gt </p>
                <p class ="htmlCode indent2"> &ltcontent="Front End Engineering Handbook"&gt  </p>
                <p class ="htmlCode indent2"> &ltmeta name="author" content="AndyRomanoff"&gt </p>
                <p class ="htmlCode indent2"> &ltmeta name="keywords" content="Front End, html, css"&gt  </p>
                <p class ="htmlCode indent2"> &ltlink rel="stylesheet" href="scripts/Header</p>
                <p class ="htmlCode indent2"> &ltlink rel="stylesheet" href="css/stylesIndex2.css"  </p>
                <p class ="htmlCode indent2"> &ltlink rel="stylesheet" href="css/stylesInde" </p>
                <p class ="htmlCode indent2"> &ltlink rel="preconnect" href="https://fonts." </p>
                <p class ="htmlCode indent2"> &ltlink href="https://fonts.googleapis.com/css2?</p>
                <p class ="htmlCode indent1"> &lt/head&gt </p>
                <p class ="htmlCode indent1"> &ltbody&gt </p>
                <p class ="htmlCode indent2"> &ltdiv class = "container"&gt </p>
                <p class ="htmlCode indent3"> &ltnav&gt </p>            
                <p class ="htmlCode indent4"> &ltform class="searchField"&gt </p>
                <p class ="htmlCode indent5"> &ltimg src = "img/magnifier.png" alt = "magnifier glass"&gt </p> 
                <p class ="htmlCode indent5"> &ltinput type="text" placeholder="Enter text" id="superform"&gt </p>
                <p class ="htmlCode indent4"> &lt/form&gt </p>
                <p class ="htmlCode indent4"> &ltul&gt </p>
                <p class ="htmlCode indent5"> &lta href="#"&gt&ltli&gtFAQ&lt/li&gt&lt/a&gt </p>
                <p class ="htmlCode indent5"> &lta href="#"&gt&ltli&gtО ПРОЕКТЕ&lt/li&gt&lt/a&gt </p>
                <p class ="htmlCode indent4"> &lt/ul&gt </p>
                <p class ="htmlCode indent3"> &lt/nav&gt </p>
                <p class ="htmlCode indent2"> &ltheader&gt </p>
                <p class ="htmlCode indent3"> &ltbutton onclick="topFunction()" id="myBtn" </p>
                <p class ="htmlCode indent4"> &ltimg src="img/expand-button.png" alt = "toTop" </p>
                <p class ="htmlCode indent3"> &lt/button&gt </p>
                <p class ="htmlCode indent3"> &ltdiv class = "contentsPopUp" id="contentsTable </p>
                <p class ="htmlCode indent3"> &ltsection&gt </p>
                <p class ="htmlCode indent4"> &ltdiv class = "htmlSlogan"&gt </p>
                <p class ="htmlCode indent5"> &ltscript src = "scripts/HTMLtext/textHtml.js"></script&gt </p>
                <p class ="htmlCode indent4"> &lt/div&gt </p>
        </div>
        
        <!--Presentation View Section-->
        <style>
            #presentationView {
                border: solid white;
                grid-area: 2 /8 / 10 / 17;
                z-index: 2;
            }
            .presViewBlocks {
                color: white;
                text-align: center;
                background-color:  #AB1515;
                opacity: 0.9;
                z-index: 2;
            }
            #presHeader {
                grid-area: 2 / 8 / 3 / 17;
            }
            #presHeader h1 {
                margin: 5% auto;
            }
            #img1 {
                grid-area: 3 / 9 / 6 / 12;
            }
            #img2 {
                grid-area: 6 / 9 / 9 / 12;
            }
            .imgBlocks {
                font-size: 0.9em;
                padding-top: 30%;
            }
            #subHeader1 {
                grid-area: 3 / 13 / 3 / 16;
            }
            #subHeader2 {
                grid-area: 6 / 13 / 6 / 16;
            }
            .subHeaders {
                padding-top: 2%;
                font-size: 0.8em;
            }
            #txtBlock1 {
                grid-area: 4 / 13 / 6 / 16;
            }
            #txtBlock2 {
                grid-area: 7 / 13 / 9 / 16;
            }
            .txtBlocks {
                font-size: 0.75em;
                padding: 2% 5%;
                text-align: left;
            }
            #presFooter {
                grid-area: 9 / 8 / 9 / 17;
            }
            #presFooter h1 {
                margin: 5% auto;
            }
        </style>
        <div id = "presentationView"></div>
        <div class = "presViewBlocks headerFooter" id = "presHeader"><h1>&lth1&gtHEADER&lt/h1&gt</h1></div>
        <div class = "presViewBlocks imgBlocks" id = "img1">&ltimg src = "img1.png"  /&gt</div>
        <div class = "presViewBlocks imgBlocks" id = "img2">&ltimg src = "img2.png"  /&gt</div>
        <div class = "presViewBlocks subHeaders" id = "subHeader1"></h5>&lth3&gt SUB HEADER &lt/h3&gt</h5></div>
        <div class = "presViewBlocks subHeaders" id = "subHeader2"></h5>&lth3&gt SUB HEADER &lt/h3&gt</h5></div>
        <div class = "presViewBlocks txtBlocks" id = "txtBlock1"><p>&ltp&gt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. &lt/p&gt</p></h5></div>
        <div class = "presViewBlocks txtBlocks" id = "txtBlock2"><p>&ltp&gt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. &lt/p&gt</p></div>
        <div class = "presViewBlocks headerFooter" id = "presFooter"><h1>&lth1&gtFOOTER&lt/h1&gt</h1></div>

        <!--Decorative cols and rows-->
        <style>
            .decBlocks {
                border: solid white;
                color: white;
                text-align: center;
                z-index: 1;
            }
            #decCol1 {
                grid-area: 2 / 8 / 10 / 8;
            }
            #decCol2 {
                grid-area: 2 / 9 / 10 / 9;
            }
            #decCol3 {
                grid-area: 2 / 10 / 10 / 10;
            }
            #decCol4 {
                grid-area: 2 / 11 / 10 / 11;
            }
            #decCol5 {
                grid-area: 2 / 12 / 10 / 12;
            }
            #decCol6 {
                grid-area: 2 / 13 / 10 / 13;
            }
            #decCol7 {
                grid-area: 2 / 14 / 10 / 14;
            }
            #decCol8 {
                grid-area: 2 / 15 / 10 / 15;
            }
            #decCol9 {
                grid-area: 2 / 16 / 10 / 16;
            }
            #decCol10 {
                display: none;
            }

            .Rows {
                text-align: left;
                padding-left: 4%;
            }
            #decRow1 {
                grid-area: 2 / 8 / 2 / 17;
            }
            #decRow2 {
                grid-area: 3 / 8 / 3 / 17;
            }
            #decRow3 {
                grid-area: 4 / 8 / 4 / 17;
            }
            #decRow4 {
                grid-area: 5 / 8 / 5 / 17;
            }
            #decRow5 {
                grid-area: 6 / 8 / 6 / 17;
            }
            #decRow6 {
                grid-area: 7 / 8 / 7 / 17;
            }
            #decRow7 {
                grid-area: 8 / 8 / 8 / 17;
            }
            #decRow8 {
                grid-area: 9 / 8 / 9 / 17;
            }
        </style>
        <div class = "decBlocks" id = "decCol1"></div>
        <div class = "decBlocks" id = "decCol2">2</div>
        <div class = "decBlocks" id = "decCol3">3</div>
        <div class = "decBlocks" id = "decCol4">4</div>
        <div class = "decBlocks" id = "decCol5">5</div>
        <div class = "decBlocks" id = "decCol6">6</div>
        <div class = "decBlocks" id = "decCol7">7</div>
        <div class = "decBlocks" id = "decCol8">8</div>
        <div class = "decBlocks" id = "decCol9">9</div>
        <div class = "decBlocks" id = "decCol10">10</div>

        <div class = "decBlocks Rows" id = "decRow1">1</div>
        <div class = "decBlocks Rows" id = "decRow2">2</div>
        <div class = "decBlocks Rows" id = "decRow3">3</div>
        <div class = "decBlocks Rows" id = "decRow4">4</div>
        <div class = "decBlocks Rows" id = "decRow5">5</div>
        <div class = "decBlocks Rows" id = "decRow6">6</div>
        <div class = "decBlocks Rows" id = "decRow7">7</div>
        <div class = "decBlocks Rows" id = "decRow8">8</div>
        
        <!--Service cols and rows-->
        <!--
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
        <div class = "blocks" id = "col17">17</div>

        <div class = "blocks" id = "row1">1</div>
        <div class = "blocks" id = "row2">2</div>
        <div class = "blocks" id = "row3">3</div>
        <div class = "blocks" id = "row4">4</div>
        <div class = "blocks" id = "row5">5</div>
        <div class = "blocks" id = "row6">6</div>
        <div class = "blocks" id = "row7">7</div>
        <div class = "blocks" id = "row8">8</div>
        <div class = "blocks" id = "row9">9</div>
        <div class = "blocks" id = "row10">10</div>-->
        
    </div>
    <style>
        @media only screen and (max-width: 1050px) { 
            .imgBlocks {
                font-size: 0.8em;
            }
            #codeView p {
                font-size: 0.9em;
            }
        }
        @media only screen and (max-width: 1020px) { 
            .subHeaders {
                font-size: 0.7em;
            }
        }
        @media only screen and (max-width: 950px) { 
            .imgBlocks {
                font-size: 0.7em;
            }
            #codeView p {
                font-size: 0.8em;
            }
        }

        @media only screen and (max-width: 905px) { 
            #mainbox {
                grid-template: 50px 110px 25px repeat(2, 70px) 30px repeat(2, 70px) 100px 50px/ 3% repeat(5, 1fr) 1% 2% repeat(6, 1fr) 2% 3%;
            }
            #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10 {
                grid-column: 1 / 17;
            }
            #decRow1, #decRow2, #decRow3, #decRow4, #decRow5, #decRow6, #decRow7, #decRow8 {
                padding-top: 1%;
                font-size: 0.6em;
                grid-column: 8 / 16;
            }
            #col17, #decCol9 {
                display: none;
            }
            #codeView p   {
                font-size: 0.9em;
            }
            #presentationView {
                grid-area: 2 /8 / 10 / 16;
                
            }
           
            #presHeader {
                grid-area: 2 / 8 / 3 / 16;
            }
            .imgBlocks {
                font-size: .9em;
            }
            #img1 {
                grid-area: 3 / 9 / 6 / 12;
            }
            #img2 {
                grid-area: 6 / 9 / 9 / 12;
            }
            .subHeaders {
                font-size: .9em;
            }
            #subHeader1 {
                grid-area: 3 / 12 / 3 / 15;
            }
            #subHeader2 {
                grid-area: 6 / 12 / 6 / 15;
            }
            .txtBlocks {
                font-size: .8em;
            }
            #txtBlock1 {
                grid-area: 4 / 12 / 6 / 15;
            }
            #txtBlock2 {
                grid-area: 7 / 12 / 9 / 15;
            }
            #presFooter {
                grid-area: 9 / 8 / 9 / 16;
            }
            
        }

        @media only screen and (max-width: 845px) {
            #mainbox {
                grid-template: 50px 110px 25px repeat(2, 70px) 30px repeat(2, 70px) 100px 50px/ 3% repeat(5, 1fr) 2% repeat(6, 1fr) 3%;
            }
            #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10 {
                grid-column: 1 / 15;
            }
            #decRow1, #decRow2, #decRow3, #decRow4, #decRow5, #decRow6, #decRow7, #decRow8 {
                padding-top: 1%;
                font-size: 0.6em;
                grid-column: 8 / 14;
            }
            #col15, #col16, #decCol8, #decCol7 {
                display: none;
            }

            #codeView   {
                min-width: 320px;
            }
            #presentationView {
                z-index: 4;
                grid-area: 2 /8 / 10 / 14;
                
            }
           
            #presHeader {
                grid-area: 2 / 8 / 3 / 14;
            }
            
            #img1 {
                grid-area: 3 / 9 / 6 / 13;
            }
            #img2 {
                display: none;
            }
            
            #subHeader1 {
                display: none;
            }
            #subHeader2 {
                grid-area: 6 / 9 / 6 / 13;
            }
            .txtBlocks {
                font-size: .9em;
            }
            #txtBlock1 {
                display: none;
            }
            #txtBlock2 {
                grid-area: 7 / 9 / 9 / 13;
            }
            #presFooter {
                grid-area: 9 / 8 / 9 / 14;
            }
            .headerFooter {
                padding-top: 4%;
                font-size: .9em;
            }
        }
        @media only screen and (max-width: 760px) {
            #mainbox {
                grid-template-rows: 50px 110px 25px repeat(2, 70px) 40px repeat(2, 80px) 100px 50px;
            }
            #img1 {
                grid-area: 3 / 8 / 6 / 14;
            }
            .imgBlocks {
                padding-top: 23%;
                font-size: 1.1em;
            }
            .subHeaders {
                font-size: 1.1em;
            }
            #subHeader2 {
                grid-area: 6 / 8 / 6 / 14;
            }
            .txtBlocks {
                font-size: 1em;
            }
            #txtBlock2 {
                padding-top: 5%;
                grid-area: 7 / 8 / 9 / 14;
            }
            .headerFooter {
                font-size: .8em;
            }
        }

        @media only screen and (max-width: 710px) { 
            #mainbox {
                grid-template: 50px 80px 25px repeat(2, 70px) 30px repeat(2, 70px) 80px 150px 50px/ 1fr 3% repeat(3, 1fr) 3% repeat(4, 1fr) 3% 1fr;
            }
            #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10 {
                grid-column: 1 / 13;
            }
            #col13, #col14  {
                display: none;
            }
            .decBlocks {
                font-size: 0.5em;
            }
            #decCol1 {
                grid-area: 2 / 2 / 10 / 2;
            }
            #decCol2 {
                grid-area: 2 / 3 / 10 / 3;
            }
            #decCol3 {
                grid-area: 2 / 4 / 10 / 4;
            }
            #decCol4 {
                grid-area: 2 / 5 / 10 / 5;
            }
            #decCol5 {
                grid-area: 2 / 6 / 10 / 6;
            }
            #decCol6 {
                grid-area: 2 / 7 / 10 / 7;
            }
            #decCol7 {
                display: block;
                grid-area: 2 / 8 / 10 / 8;
            }
            #decCol8 {
                display: block;
                grid-area: 2 / 9 / 10 / 9;
            }
            #decCol9 {
                display: block;
                grid-area: 2 / 10 / 10 / 10;
            }
            #decCol10 {
                display: block;
                grid-area: 2 / 11 / 10 / 11;
            }
          

            #decRow1 {
                grid-area: 2 / 2 / 2 / 12;
            }
            #decRow2 {
                grid-area: 3 / 2 / 3 / 12;
            }
            #decRow3 {
                grid-area: 4 / 2 / 4 / 12;
            }
            #decRow4 {
                grid-area: 5 / 2 / 5 / 12;
            }
            #decRow5 {
                grid-area: 6 / 2 / 6 / 12;
            }
            #decRow6 {
                grid-area: 7 / 2 / 7 / 12;
            }
            #decRow7 {
                grid-area: 8 / 2 / 8 / 12;
            }
            #decRow8 {
                grid-area: 9 / 2 / 9 / 12;
            }


            #presentationView {
                z-index: 2;
                grid-area: 2 /2 / 10 / 12;   
            }
            #presHeader {
                grid-area: 2 / 2 / 3 / 12; 
            }
            #presHeader h1 {
                margin: 0;
            }
            .imgBlocks {
                font-size: 0.9em;
            }
            #img1 {
                grid-area: 3 / 3 / 6 / 6;
            }
            #img2 {
                display: block;
                grid-area: 6 / 3 / 9 / 6;
            }
            .subHeaders {
                font-size: 0.9em;
            }
            #subHeader1 {
                display: block;
                grid-area: 3 / 7 / 3 / 11;
            }
            #subHeader2 {
                grid-area: 6 / 7 / 6 / 11;
            }
            .txtBlocks {
                font-size: .9em;
            }
            #txtBlock1 {
                display: block;
                grid-area: 4 / 7 / 6 / 11;
            }
            #txtBlock2 {
                grid-area: 7 / 7 / 9 / 11;
            }
            #presFooter {
                grid-area: 9 / 2 / 9 / 12;
            }
            #presFooter h1 {
                margin: 0;
            }
            .headerFooter {
                font-size: 1em;
            }
            
            #codeView   {
                grid-area: 10 / 2 / 10 / 12;
            }
        }
        @media only screen and (max-width: 675px) {
            .imgBlocks {
                font-size: 0.8em;
            }
        }

        @media only screen and (max-width: 610px) {
            #mainbox {
                grid-template: 50px 80px 25px repeat(2, 70px) 40px repeat(2, 70px) 80px 170px 50px / repeat(9, 1fr);
            }
            #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10 {
                grid-column: 1 / 10;
            }
            #decRow1, #decRow2, #decRow3, #decRow4, #decRow5, #decRow6, #decRow7, #decRow8 {
                grid-column: 2 / 9;
            }
            #col10, #col11, #col12, #decCol10, #decCol9, #decCol8 {
                display: none;
            }
            #presentationView {
                grid-area: 2 /2 / 10 / 9;   
            }
            #presHeader {
                grid-area: 2 / 2 / 3 / 9; 
            }
            #presHeader h1 {
                margin: 0;
            }
            .imgBlocks {
                font-size: 1.1em;
            }
            #img1 {
                grid-area: 3 / 3 / 6 / 8;
            }
            #img2 {
                display: none;
                grid-area: 6 / 3 / 9 / 6;
            }
            .subHeaders {
                font-size: 1em;
            }
            #subHeader1 {
                display: none;
                grid-area: 3 / 7 / 3 / 11;
            }
            #subHeader2 {
                grid-area: 6 / 3 / 6 / 8;
            }
            .txtBlocks {
                font-size: 1em;
            }
            #txtBlock1 {
                display: none;
                grid-area: 4 / 7 / 6 / 11;
            }
            #txtBlock2 {
                grid-area: 7 / 3 / 9 / 8;
            }
            #presFooter {
                grid-area: 9 / 2 / 9 / 9;
            }
            #presFooter h1 {
                margin: 0;
            }
            .headerFooter {
                font-size: .9em;
            }
            #codeView   {
                grid-area: 10 / 2 / 10 / 9;
            }
        }
        @media only screen and (max-width: 490px) { 
            #mainbox {
                grid-template: 50px 80px 25px repeat(2, 70px) 40px repeat(2, 70px) 80px 170px 50px / 1fr 3% repeat(5, 1fr) 3% 1fr;
            }
            .headerFooter {
                font-size: .8em;
            }
        }
        @media only screen and (max-width: 420px) { 
            #mainbox {
                grid-template: 50px 80px 25px repeat(2, 70px) 40px repeat(2, 80px) 80px 170px 50px / repeat(6, 1fr);
            }
            #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10 {
                grid-column: 1 / 7;
            }
            #decRow1, #decRow2, #decRow3, #decRow4, #decRow5, #decRow6, #decRow7, #decRow8 {
                grid-column: 1 / 7;
            }
            #col7, #col8, #col9, #decCol6, #decCol7 {
                display: none;
            }
            #decCol1 {
                grid-area: 2 / 1 / 10 / 1;
            }
            #decCol2 {
                grid-area: 2 / 2 / 10 / 2;
            }
            #decCol3 {
                grid-area: 2 / 3 / 10 / 3;
            }
            #decCol4 {
                grid-area: 2 / 4 / 10 / 4;
            }
            #decCol5 {
                grid-area: 2 / 5 / 10 / 5;
            }
            #decCol6 {
                display: block;
                grid-area: 2 / 6 / 10 / 6;
            }
        
            #presentationView {
                border: none;
                grid-area: 2 / 1 / 10 / 7;   
            }
            #presHeader {
                grid-area: 2 / 1 / 3 / 7; 
            }
            
            .imgBlocks {
                font-size: 1.2em;
            }
            #img1 {
                grid-area: 3 / 1 / 6 / 7;
            }
            
            .subHeaders {
                font-size: 1.2em;
            }
            
            #subHeader2 {
                grid-area: 6 / 1 / 6 / 7;
            }
            .txtBlocks {
                font-size: 1.2em;
            }
            
            #txtBlock2 {
                grid-area: 7 / 1 / 9 / 7;
            }
            #presFooter {
                grid-area: 9 / 1 / 9 / 7;
            }
            #presFooter h1 {
                margin: 0;
            }
            .headerFooter {
                font-size: .9em;
            }
            #codeView   {
                font-size: 1.1em;
                grid-area: 10 / 1 / 10 / 7;
            }
        }
        @media only screen and (max-width: 330px) { 
            #mainbox {
                grid-template: 50px 80px 25px repeat(2, 55px) 40px repeat(2, 80px) 80px 170px 50px / repeat(6, 1fr);
            }
           .headerFooter {
                padding-top: 6%;
                font-size: .8em;
            }
            .imgBlocks {
                padding-top: 15%;
            }
            .txtBlocks {
                font-size: 1em;
            }
            #codeView   {
                font-size: 0.9em;
             
            }
        }
    </style>            
`


