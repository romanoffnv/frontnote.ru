const presentationCSS = document.getElementById('presentationCSS').attachShadow({mode: 'open'});
presentationCSS.innerHTML = ` 
    <style>
    * {
        margin: 0;
        padding: 0;
    }

    #mainbox {
        display: grid;
        grid-template:  50px repeat(2, 60px) repeat(6, 1fr) 50px  / 3% repeat(5, 1fr) 3% repeat(8, 1fr) 3%;
        grid-gap: 10px; 
        background-color: #5B9BD5;
        margin-bottom: 40px;
    }

    #codeView {
        grid-area: 2 / 2 / 10 / 7;
        z-index: 1;
        overflow: hidden;
        background-color: #4D87BD;
    }
    #codeView p   {
        
        color: #B5C1CA;
        font-size: 1em;
        grid-area: 2 / 2/ 10 / 7;
        z-index: 2;
    }
    .indent3 {
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
                <p class = "cssCode">.cssBlock {</p>
                <p class = "cssCode indent3">width: 100%;</p>
                <p class = "cssCode indent3">height: auto;</p>
                <p class = "cssCode indent3">background-color: white;</p>
                <p class = "cssCode indent3">display: flex;</p>
                <p class = "cssCode indent3">}</p><br>
                
                <p class = "cssCode">.ccsCodeView {</p>
                <p class = "cssCode indent3">border: 10px solid #4d87bd;</p>
                <p class = "cssCode indent3">background-color: #4d87bd;</p>
                <p class = "cssCode indent3">width: 30%;</p>
                <p class = "cssCode indent3">overflow: hidden;</p>
                <p class = "cssCode indent3">height: 790px;</p>
                <p class = "cssCode indent3">margin: 40px auto;</p>
                <p class = "cssCode indent3">}</p><br>
            
                <p class = "cssCode">.ccsPresentationView {</p>
                <p class = "cssCode indent3">border: solid #3a6d9c;</p>
                <p class = "cssCode indent3"> color: white;</p>
                <p class = "cssCode indent3">background-color: white;</p>
                <p class = "cssCode indent3">width: 60%;</p>
                <p class = "cssCode indent3">height: auto;</p>
                <p class = "cssCode indent3">margin: 40px auto;</p>
                <p class = "cssCode indent3">display: grid;</p>
                <p class = "cssCode indent3"> grid-template: 150px 300px 220px 90px   / repeat(12, 1fr);</p>
                <p class = "cssCode indent3">grid-gap: 10px;</p>
                <p class = "cssCode indent3">}</p><br>
            
            
                <p class = "cssCode">h3 {</p>
                <p class = "cssCode indent3">margin: 10px 20px;</p>
                <p class = "cssCode indent3">color: #1079c9;</p>
                <p class = "cssCode indent3">font-weight: 100;</p>
                <p class = "cssCode indent3">}</p><br>
            
                <p class = "cssCode">p.ipsumLorem {</p>
                <p class = "cssCode indent3">margin: 10px 20px;</p>
                <p class = "cssCode indent3">color: black;</p>
                <p class = "cssCode indent3">}</p>
        </div>

        
        <div class = "presView" id = "presentationView"></div>
        <header>
            <style>
                header {
                    display: flex;
                    justify-content: space-around;
                }
                #zenCircle {
                    margin: 2%;
                    width: 110px;
                    height: 110px;
                    background-color: white;
                    border: none;
                    border-radius: 100px;
                }
                #zenCircle img {
                    width: 110px;
                    height: 110px;
                }
                h1 {
                    text-align: right;
                    color: white;
                    padding-top: 7%;
                    width: 60%;
                }
                .presView {
                    background-color: white;
                    z-index: 2;
                }
                #presentationView {
                    grid-area: 2 / 8 / 10 / 16;
                }
                header {
                    background-color: #2684CC;
                    grid-area: 2 / 8 / 4 / 16;
                    z-index: 2; 
                } 
                #covDisImg {
                    grid-area: 4 / 8 / 7 / 11;
                }
                #covDisImg img {
                    width: 100%;
                }
                #covDisTxt {
                    padding: 2% 10%;
                    grid-area: 4 / 11 / 7 / 16;
                    font-size: 0.9em;
                }
                #covDisTxt h3 {
                    color: #004376;
                    font-weight: 400;
                    margin-bottom: 3%;
                    
                }
                #day {
                    grid-area: 7 / 8 / 9 / 10;
                }
                h5 {
                    color: #004376;
                    text-align: center;
                    font-weight: 500;
                    margin-bottom: 10%;
                }
                #day img {
                    margin: 1% 10%;
                    width: 80%;
                }
                #and {
                    grid-area: 7 / 10 / 9 / 12;
                }
                #and img {
                    width: 80%;
                    margin: 10% 10%;
                }
                #nite {
                    grid-area: 7 / 12 / 9 / 14;
                }
                #nite img {
                    width: 75%;
                    margin: 1% 10%;
                }
                
                #watchinU {
                    grid-area: 7 / 14 / 9 / 16;
                }  
                #watchinU img {
                    width: 85%;
                    margin: 1% 5%;
                }
                #presFooter {
                    z-index: 4;
                    background-color: #004376;
                    grid-area: 9 / 8 / 9 / 16;
                }
            </style>
            <div id = "zenCircle">
                <img src = "scripts/blockCSS/InYan.png" alt="zen"/>
            </div>
            <h1>ПРОСТОЙ ZEN</h1>
        </header>
        <div class = "presView" id = "covDisImg">
            <img src = "scripts/blockCSS/Sindy.png" alt = "Sinderella" />
        </div>
        <div class = "presView" id = "covDisTxt">
            <h3> WEAR MASK </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div class = "presView" id = "day">
            <h5>ДНЕМ</h5>
            <img src = "scripts/blockCSS/sunny-day.png" alt = "day"/>
        </div>
        <div class = "presView" id = "and">
            <img src = "scripts/blockCSS/ampersand.png" alt = "and"/>
        </div>
        <div class = "presView" id = "nite">
            <h5>НОЧЬЮ</h5>
            <img src = "scripts/blockCSS/night-mode.png" alt = "night"/>
        </div>
        <div class = "presView" id = "watchinU">
            <h5>СЛЕЖУ ЗА ТОБОЙ</h5>
            <img src = "scripts/blockCSS/eye.png" alt = "watch"/>
        </div>
        <footer class = "presView" id ="presFooter"></footer>
                
        </article>


        <!--Service cols and rows
        <style>
            .blocks {
                border: solid black;
            }
            #col1 {
                grid-area: 1 / 1 / 11 / 1;
            }
            #col2 {
                grid-area: 1 / 2 / 11 / 2;
            }
            #col3 {
                grid-area: 1 / 3 / 11 / 3;
            }
            #col4 {
                grid-area: 1 / 4 / 11 / 4;
            }
            #col5 {
                grid-area: 1 / 5 / 11 / 5;
            }
            #col6 {
                grid-area: 1 / 6 / 11 / 6;
            }
            #col7 {
                grid-area: 1 / 7 / 11 / 7;
            }
            #col8 {
                grid-area: 1 / 8 / 11 / 8;
            }
            #col9 {
                grid-area: 1 / 9 / 11 / 9;
            }
            #col10 {
                grid-area: 1 / 10 / 11 / 10;
            }
            #col11 {
                grid-area: 1 / 11 / 11 / 11;
            }
            #col12 {
                grid-area: 1 / 12 / 11 / 12;
            }
            #col13 {
                grid-area: 1 / 13 / 11 / 13;
            }
            #col14 {
                grid-area: 1 / 14 / 11 / 14;
            }
            #col15 {
                grid-area: 1 / 15 / 11 / 15;
            }
            #col16 {
                grid-area: 1 / 16 / 11 / 16;
            }

            #row1 {
                grid-area: 1 / 1 / 1 / 17;
            }
            #row2 {
                grid-area: 2 / 1 / 2 / 17;
            }
            #row3 {
                grid-area: 3 / 1 / 3 / 17;
            }
            #row4 {
                grid-area: 4 / 1 / 4 / 17;
            }
            #row5 {
                grid-area: 5 / 1 / 5 / 17;
            }
            #row6 {
                grid-area: 6 / 1 / 6 / 17;
            }
            #row7 {
                grid-area: 7 / 1 / 7 / 17;
            }
            #row8 {
                grid-area: 8 / 1 / 8 / 17;
            }
            #row9 {
                grid-area: 9 / 1 / 9 / 17;
            }
            #row10 {
                grid-area: 10 / 1 / 10 / 17;
            }
            #row11 {
                display: none;
            }
        </style>
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
        <div class = "blocks" id = "row11">11</div>-->
        <style>
            @media only screen and (max-width: 1077px) { 
                #codeView {
                    min-width: 350px;
                }
                #day img {
                    margin: 10% 10%;
                    width: 70%;
                }
                
                #and img {
                    width: 70%;
                    margin: 15% 10%;
                }
                #nite img {
                    width: 70%;
                    margin: 15% 10%;
                }
                #watchinU img {
                    margin: 0;
                    width: 90%;
                }
                h5 {
                    font-size: 0.7em;
                }
            }

            @media only screen and (max-width: 1040px) { 
                #covDisImg img {
                    margin: 10% auto;
                }
            }
            @media only screen and (max-width: 1005px) { 
                #covDisTxt {
                    font-size: 0.87em;}
            } 
            @media only screen and (max-width: 990px) {
                #mainbox {
                    grid-template:  50px repeat(2, 60px) repeat(2, 180px) 230px repeat(2, 1fr) 150px 70px 50px / 3% repeat(5, 1fr) 3% repeat(6, 1fr) 3%;
                }
                #row11 {
                    display: block;
                    grid-area: 11 / 1 / 11 / 15;
                }
                #col1, #col2, #col3, #col4, #col5, #col6, #col7, #col8, #col9, #col10, #col11, #col12, #col13, #col14 {
                    grid-row: 1 / 12;
                }
                #col15, #col16 {
                    display: none;
                }
                #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10 {
                    grid-column: 1 / 15;
                }
                #codeView {
                    grid-area: 2 / 2 / 11 / 7;
                }
                #presentationView {
                    grid-area: 2 / 8 / 11 / 14;
                }
                header {
                    grid-area: 2 / 8 / 4 / 14;
                } 
                h1 {
                    margin: 4% auto;
                    font-size: 1.8em;
                }
                #covDisImg {
                    grid-area: 4 / 9 / 6 / 13;
                }
                #covDisImg img {
                    width: 90%;  
                }
                h3 {
                    text-align: center;
                }
                #covDisTxt {
                    font-size: 0.85em;
                    grid-area: 6 / 8 / 6 / 14;
                }
                #day {
                    grid-area: 7 / 8 / 9 / 10;
                }
                h5 {
                    margin-bottom: 3%;
                }
                #day img {
                    width: 60%;
                    margin: 0 15%;
                }
                #and {
                    grid-area: 7 / 10 / 9 / 12;
                }
                #and img {
                    width: 60%;
                    margin: 0 17%;
                }
                #nite {
                    grid-area: 7 / 12 / 9 / 14;
                }
                #nite img {
                    width: 60%;
                    margin: 0 15%;
                }
                
                #watchinU {
                    grid-area: 9 / 9 / 9 / 13;
                    margin-top: 5%;
                }  
                #watchinU img {
                    width: 40%;
                    margin: 1% 25%;
                }
                #presFooter {
                    grid-area: 10 / 8 / 10 / 14;
                }
            }
            @media only screen and (max-width: 870px) {
                #mainbox {
                    grid-template:  50px repeat(2, 70px) repeat(2, 185px) 250px repeat(2, 1fr) 175px 70px 50px / 3% repeat(5, 1fr) 3% repeat(6, 1fr) 3%;
                }
                header {
                    display: block;
                }
                #zenCircle {
                    margin: 2% auto;
                    width: 80px;
                    height: 80px;
                }
                #zenCircle img {
                    width: 80px;
                    height: 80px;
                }
                h1 {
                    text-align: center;
                    padding-top: 0;
                    width: 100%;
                }
                #covDisImg {
                    grid-area: 4 / 8 / 6 / 14;
                }
                #covDisImg img {
                    margin: 0 10%;
                    width: 70%;  
                }
                
                #day img {
                    width: 90%;
                    margin: 0 10%;
                }
                #and img {
                    width: 100%;
                    margin: 0;
                }
                #nite img {
                    width: 90%;
                    margin: 0;
                }
                #watchinU h5 {
                    margin-bottom: 0;
                }
                #watchinU img {
                    width: 60%;
                    margin: 0 20%;
                }
            }
            @media only screen and (max-width: 850px) { 
                #mainbox {
                    grid-template:  50px repeat(2, 70px) 1fr 30px 190px 30px  100px 30px 170px 50px / repeat(12, 1fr);
                }
                #col13, #col14 {
                    display: none;
                }
                #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11 {
                    grid-column: 1 / 13;
                }
                #codeView {
                    grid-area: 10 / 2 / 11 / 12;
                }
                #presentationView {
                    grid-area: 2 / 2 / 9 / 12;
                }

                header {
                    grid-area: 2 / 2 / 4 / 12;
                    display: flex;
                }
                #zenCircle {
                    margin: 2% auto;
                    width: 110px;
                    height: 110px;
                }
                #zenCircle img {
                    width: 110px;
                    height: 110px;
                }
                h1 {
                    text-align: right;
                    padding-top: 2%;
                    width: 60%;
                    font-size: 3.3em;
                }

                #covDisImg {
                    grid-area: 4 / 2 / 5 / 7;
                }
                #covDisImg img {
                    margin: 0 10%;
                    width: 70%;  
                }
                #covDisTxt {
                    grid-area: 4 / 7 / 5 / 12;
                    font-size: 1em;
                    padding: 2%;
                    padding-right: 5%;
                }
                
                
                
                h5 {
                    margin-bottom: 25%;
                    font-size: 1em;
                }
                #day {
                    
                    grid-area: 6 / 2 / 6 / 4;
                }
                
                #and  {
                    grid-area: 6 / 4 / 6 / 6;
                }
                #nite {
                    grid-area: 6 / 6 / 6 / 8;
                }
                #watchinU  {
                    margin: 0;
                    grid-area: 6 / 8 / 6 / 12;
                }
                #watchinU img {
                    margin-top: 5%;
                }
                #presFooter {
                    grid-area: 8 / 2 / 8 / 12;
                 }
            }
            @media only screen and (max-width: 825px) { 
                h1 {
                    font-size: 3em;
                }
            }
            @media only screen and (max-width: 815px) {
                #covDisImg img {
                    margin: 10% 10%;
                    width: 70%;  
                }
            } 
            @media only screen and (max-width: 755px) {
                h1 {
                    margin-top: 7%;
                    font-size: 2.5em;
                }
            }
            @media only screen and (max-width: 750px) { 
                #covDisTxt {
                    font-size: 0.95em;
                }
            }
            @media only screen and (max-width: 740px) {
                #covDisImg {
                    width: 100%;
                }
            }
            @media only screen and (max-width: 715px) {
                #covDisTxt {
                    font-size: 0.9em;
                }
            }
            @media only screen and (max-width: 680px) {
                #covDisTxt {
                    font-size: 0.85em;
                }
            }

            @media only screen and (max-width: 645px) {
                #mainbox {
                    grid-template:  50px repeat(2, 70px) 1fr 30px 190px 30px  100px 30px 170px 50px / 3% repeat(10, 1fr) 3%;
                }
                
            }
            @media only screen and (max-width: 600px) {
                #mainbox {
                    grid-template:  50px repeat(2, 70px) repeat(2, 1fr) 180px 210px 80px 30px 180px 50px / repeat(9, 1fr);
                }
                #col10, #col11, #col12 {
                    display: none;
                }
                #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11 {
                    grid-column: 1 / 10;
                }
                #codeView {
                    grid-area: 10 / 2 / 11 / 9;
                }
                #presentationView {
                    grid-area: 2 / 2 / 9 / 9;
                }
                header {
                    grid-area: 2 / 2 / 4 / 9;
                    display: flex;
                }
            
                #zenCircle {
                    margin: 2% auto;
                    width: 110px;
                    height: 110px;
                }
                #zenCircle img {
                    width: 110px;
                    height: 110px;
                }
                h1 {
                    padding-top: 5%;
                    font-size: 2.1em;
                }

                #covDisImg {
                    grid-area: 4 / 3 / 5 / 8;
                }
                #covDisImg img {
                    margin: 0 10%;
                    width: 70%;  
                }
                #covDisTxt {
                    grid-area: 5 / 2 / 5 / 9;
                    padding: 5%;
                    font-size: 1em;
                }

                #day {
                    grid-area: 6 / 2 / 6 / 4;
                    
                }
                #and  {
                    grid-area: 6 / 4 / 6 / 7;
                }
                #and img {
                    margin: 0 15%;
                    width: 70%;
                }
                #nite {
                    grid-area: 6 / 7 / 6 / 9;
                }
                #watchinU  {
                    grid-area: 7 / 3 / 7 / 8;
                }
                #presFooter {
                    grid-area: 8 / 2 / 8 / 9;
                 }
            }
            @media only screen and (max-width: 590px) {
                h1 {
                    padding-top: 5%;
                    font-size: 1.8em;
                }
            }
            @media only screen and (max-width: 555px) { 
                #mainbox {
                    grid-template:  50px repeat(2, 75px) 1fr 270px 180px 210px 80px 30px 180px 50px / 3% repeat(7, 1fr) 3%;
                }
                #covDisTxt {
                    font-size: 1em;
                }
                #watchinU   {
                    width: 90%;
                }
            }

            @media only screen and (max-width: 515px) { 
                #covDisTxt {
                   font-size: 0.95em;
                }

            }
            @media only screen and (max-width: 490px) { 
                #covDisTxt {
                    font-size: 0.9em;
                 }
            }
            @media only screen and (max-width: 480px) { 
                header {
                    grid-area: 2 / 2 / 4 / 9;
                    display: block;
                }
            
                #zenCircle {
                    margin: 2% auto;
                    width: 80px;
                    height: 80px;
                }
                #zenCircle img {
                    width: 80px;
                    height: 80px;
                }
                h1 {
                    width: 100%;
                    text-align: center;
                    margin: 0;
                    padding-top: 0;
                    font-size: 2.1em;
                }

                #covDisImg {
                    grid-area: 4 / 2 / 5 / 9;
                }
                #covDisImg img {
                    margin: 0 10%;
                    width: 70%;  
                }
                #covDisTxt {
                    font-size: .95em;
                }
            }
            @media only screen and (max-width: 435px) {
                
               #mainbox {
                        grid-template-rows:  50px repeat(2, 75px) 1fr 335px 180px 210px 80px 30px 180px 50px;
                   }
               #covDisTxt {
                    font-size: 1em;
                }
            }
            @media only screen and (max-width: 420px) { 
                #mainbox {
                    grid-template:  50px repeat(2, 45px) 1fr 340px 180px 210px 80px 30px 180px 50px / repeat(6, 1fr);
                }
                #col7, #col8, #col9 {
                    display: none;
                }
                #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11 {
                    grid-column: 1 / 7;
                }
                #codeView {
                    grid-area: 10 / 1 / 11 / 7;
                }
                #presentationView {
                    grid-area: 1 / 1 / 9 / 7;
                }
                header {
                    grid-area: 1 / 1 / 4 / 7;
                    
                }
                #zenCircle {
                    margin: 2% auto;
                    width: 90px;
                    height: 90px;
                }
                #zenCircle img {
                    width: 90px;
                    height: 90px;
                }
                h1 {
                    padding-top: 0;
                    font-size: 2.1em;
                }

                #covDisImg {
                    grid-area: 4 / 1 / 5 / 7;
                }
                #covDisImg img {
                    margin: 0 10%;
                    width: 70%;  
                }
                #covDisTxt {
                    grid-area: 5 / 1 / 5 / 7;
                    font-size: 1.1em;
                }

                #day {
                    grid-area: 6 / 1 / 6 / 3;
                    
                }
                #and  {
                    grid-area: 6 / 3 / 6 / 5;
                }
                #and img {
                    margin: 15% 15%;
                    width: 70%;
                }
                #nite {
                    grid-area: 6 / 5 / 6 / 7;
                }
                #watchinU  {
                    grid-area: 7 / 2 / 7 / 6;
                }
                #presFooter {
                    grid-area: 8 / 1 / 8 / 7;
                 }
            }
            @media only screen and (max-width: 400px) {
                #mainbox {
                    grid-template-rows:  50px repeat(2, 45px) 1fr 370px 180px 210px 80px 30px 180px 50px;
                }
            } 
            @media only screen and (max-width: 370px) { 
                #mainbox {
                    grid-template:  50px repeat(2, 45px) 1fr 380px 180px 210px 80px 30px 180px 50px / repeat(6, 1fr);
                }
                #covDisTxt {
                    font-size: 1.05em;
                }
            }

            @media only screen and (max-width: 360px) { 
                #mainbox {
                    grid-template:  50px repeat(2, 80px) 1fr 380px 180px 230px 100px 30px 180px 50px / repeat(3, 1fr);
                }
                #col4, #col5, #col6 {
                    display: none;
                }
                #row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11 {
                    grid-column: 1 / 4;
                }
                #codeView {
                    min-width: 300px;
                    grid-area: 10 / 1 / 11 / 4;
                }
                #presentationView {
                    grid-area: 1 / 1 / 9 / 4;
                }
                header {
                    grid-area: 2 / 1 / 4 / 4;
                    
                }
                #zenCircle {
                    margin: 2% auto;
                    width: 90px;
                    height: 90px;
                }
                #zenCircle img {
                    width: 90px;
                    height: 90px;
                }
                h1 {
                    padding-top: 0;
                    font-size: 2.1em;
                }

                #covDisImg {
                    grid-area: 4 / 1 / 5 / 4;
                }
                #covDisImg img {
                    margin: 0 10%;
                    width: 70%;  
                }
                #covDisTxt {
                    grid-area: 5 / 1 / 5 / 4;
                    font-size: 1.1em;
                }

                #day {
                    grid-area: 6 / 1 / 6 / 1;
                    
                }
                #and  {
                    grid-area: 6 / 2 / 6 / 2;
                }
                #and img {
                    margin: 15% 15%;
                    width: 70%;
                }
                #nite {
                    grid-area: 6 / 3 / 6 / 3;
                }
                #watchinU  {
                    grid-area: 7 / 1 / 7 / 4;
                }
                #presFooter {
                    grid-area: 8 / 1 / 8 / 4;
                 }

            }
            @media only screen and (max-width: 355px) {
                #mainbox {
                    grid-template:  50px repeat(2, 80px) 1fr 400px 180px 230px 100px 30px 180px 50px / repeat(3, 1fr);
                }
            }
            @media only screen and (max-width: 340px) {
                #mainbox {
                    grid-template:  50px repeat(2, 80px) 1fr 360px 180px 230px 100px 30px 180px 50px / repeat(3, 1fr);
                }
                #covDisTxt {
                    font-size: 1em;
                }
            }

            @media only screen and (max-width: 320px) {
                #mainbox {
                    grid-template:  50px repeat(2, 80px) 1fr 380px 180px 230px 100px 30px 180px 50px / repeat(3, 1fr);
                }
            }
            @media only screen and (max-width: 310px) {
                #mainbox {
                    grid-template:  50px repeat(2, 80px) 1fr 400px 180px 230px 100px 30px 180px 50px / repeat(3, 1fr);
                }
            }
        </style>
    </div>
`
