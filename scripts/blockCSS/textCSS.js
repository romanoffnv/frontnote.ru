const CSSSlogan = document.getElementById('CSSslogan').attachShadow({mode: 'open'});
CSSSlogan.innerHTML = `
    <style>
    * {
        margin: 0;
        padding: 0;
    }
    #CSSText {
        margin-bottom: 15%;
        display: grid;
        grid-template: 250px 70px 70px / repeat(16, 1fr);
        grid-gap: 10px; 
    }
    h1 {
        grid-area: 1/2/1/16;
        padding-top: 7%;
        color: #5B9BD5;
        font-weight: 500;
        font-size: 6em;
    }

    p.CSSSloganLine2 {
        grid-area: 2/2/2/16;
        font-size: 2.5em;
    }

    p.CSSSloganLine3 {
        grid-area: 3/2/3/16;
        font-weight: 700;
        font-size: 2.6em;;
    }
    

    @media only screen and (max-width: 980px) { 
        #CSSText {
            grid-template: 250px 70px 70px  / repeat(14, 1fr);
        }
        h1 {
            grid-area: 1/2/1/14;
        }
        p.CSSSloganLine2 {
            grid-area: 2/2/2/14;
        }
        p.CSSSloganLine3 {
            grid-area: 3/2/3/14;
        }
    }
    @media only screen and (max-width: 930px) { 
        #CSSText {
            grid-template-rows: 250px 120px 70px;
        }
    }
    @media only screen and (max-width: 810px) {
        #CSSText {
            grid-template: 250px 120px 70px  / repeat(12, 1fr);
        } 
        h1 {
            grid-area: 1/2/1/12;
        }
        p.CSSSloganLine2 {
            grid-area: 2/2/2/12;
        }
        p.CSSSloganLine3 {
            grid-area: 3/2/3/12;
        }
    }
    @media only screen and (max-width: 670px) {
        #CSSText {
            grid-template: 250px 120px 70px  / repeat(10, 1fr);
        } 
        h1 {
            grid-area: 1/2/1/10;
        }
        p.CSSSloganLine2 {
            grid-area: 2/2/2/10;
        }
        p.CSSSloganLine3 {
            grid-area: 3/2/3/10;
        }
    }
    @media only screen and (max-width: 585px) { 
        #CSSText {
            grid-template-rows: 250px 160px 70px;
        }
    }
    @media only screen and (max-width: 550px) { 
        #CSSText {
            grid-template: 250px 160px 70px  / repeat(8, 1fr);
        }
        h1 {
            grid-area: 1/2/1/8;
        }
        p.CSSSloganLine2 {
            grid-area: 2/2/2/8;
            font-size: 2.2em;
        }
        p.CSSSloganLine3 {
            grid-area: 3/2/3/8;
        }
    }
    @media only screen and (max-width: 495px) { 
        #CSSText {
            grid-template: 250px 160px 70px  / repeat(6, 1fr);
        }
        h1 {
            padding-top: 10%;
            padding-left: 5%;
            grid-area: 1/1/1/7;
        }
        p.CSSSloganLine2 {
            font-size: 2em;
            grid-area: 2/1/2/7;
            padding-left: 5%;

        }
        p.CSSSloganLine3 {
            grid-area: 3/1/3/7;
            padding-left: 5%;
        }
    }
    @media only screen and (max-width: 440px) { 
        h1 {
            grid-area: 1/1/1/7;
            padding-left: 3%;
        }
        p.CSSSloganLine2 {
            font-size: 2.1em;
            grid-area: 2/1/2/7;
            padding-left: 3%;
        }
        p.CSSSloganLine3 {
            grid-area: 3/1/3/7;
            padding-left: 3%;
        }
    }
    @media only screen and (max-width: 330px) { 
        #CSSText {
            grid-template: 250px 160px 70px  / repeat(3, 1fr);
        }
        h1 {
            grid-area: 1/1/1/4;
            font-size: 5em;
        }
        p.CSSSloganLine2 {
            grid-area: 2/1/2/4;
            font-size: 2em;
        }
        p.CSSSloganLine3 {
            grid-area: 3/1/3/4;
        }
    }
    </style>
    <div id = "CSSText">
        <!--Service cols 
        <div class = "columns" id = "col1">1</div>
        <div class = "columns" id = "col2">2</div>
        <div class = "columns" id = "col3">3</div>
        <div class = "columns" id = "col4">4</div>
        <div class = "columns" id = "col5">5</div>
        <div class = "columns" id = "col6">6</div>
        <div class = "columns" id = "col7">7</div>
        <div class = "columns" id = "col8">8</div>
        <div class = "columns" id = "col9">9</div>
        <div class = "columns" id = "col10">10</div>
        <div class = "columns" id = "col11">11</div>
        <div class = "columns" id = "col12">12</div>
        <div class = "columns" id = "col13">13</div>
        <div class = "columns" id = "col14">14</div>
        <div class = "columns" id = "col15">15</div>
        <div class = "columns" id = "col16">16</div>-->
        
        <h1 class = "CSSSloganHeader">CSS</h1>
        <p class = "CSSSloganLine2">верстаем, добавляем стили, создаем</p>
        <p class = "CSSSloganLine3">дизайн</p>
    </div>
`
