const htmlSlogan = document.getElementById('htmlslogan').attachShadow({mode: 'open'});

htmlSlogan.innerHTML = `
    <style>
    * {
        margin: 0;
        padding: 0;
    }
    #htmlText {
        margin-bottom: 15%;
        display: grid;
        grid-template: 250px 70px 70px / repeat(16, 1fr);
        grid-gap: 10px; 
    }
    h1 {
        grid-area: 1/2/1/16;
        padding-top: 7%;
        color: #AB1515;
        font-weight: 500;
        font-size: 6em;
        
    }

    p.htmlSloganLine2 {
        grid-area: 2/2/2/16;
        font-size: 2.5em;
        
    }

    p.htmlSloganLine3 {
        grid-area: 3/2/3/16;
        font-weight: 700;
        font-size: 2.6em;;
        
    }
    

    @media only screen and (max-width: 980px) { 
        #htmlText {
            grid-template: 250px 70px 70px  / repeat(14, 1fr);
        }
        
        h1 {
            grid-area: 1/2/1/14;
        }
    
        p.htmlSloganLine2 {
            grid-area: 2/2/2/14;
        }
    
        p.htmlSloganLine3 {
            grid-area: 3/2/3/14;
        }
    }

    @media only screen and (max-width: 810px) { 
        #htmlText {
            grid-template: 250px 70px 70px  / repeat(12, 1fr);
        }
        #col13, #col14 {
            display: none;
        }
        h1 {
            grid-area: 1/2/1/12;
        }
    
        p.htmlSloganLine2 {
            grid-area: 2/2/2/12;
        }
    
        p.htmlSloganLine3 {
            grid-area: 3/2/3/12;
        }
    }

    @media only screen and (max-width: 670px) { 
        #htmlText {
            grid-template: 250px 70px 70px  / repeat(10, 1fr);
        }
        
        h1 {
            grid-area: 1/2/1/10;
        }
    
        p.htmlSloganLine2 {
            grid-area: 2/2/2/10;
        }
    
        p.htmlSloganLine3 {
            grid-area: 3/2/3/10;
        }
    }

    @media only screen and (max-width: 550px) { 
        #htmlText {
            grid-template: 250px 70px 70px  / repeat(8, 1fr);
        }
        
        h1 {
            grid-area: 1/2/1/8;
        }
    
        p.htmlSloganLine2 {
            grid-area: 2/2/2/8;
        }
    
        p.htmlSloganLine3 {
            grid-area: 3/2/3/8;
        }
    }

    @media only screen and (max-width: 495px) { 
        #htmlText {
            grid-template: 200px 70px 70px  / repeat(6, 1fr);
        }
        
        h1 {
            grid-area: 1/2/1/6;
            font-size: 5em;
        }
    
        p.htmlSloganLine2 {
            grid-area: 2/2/2/6;
            font-size: 2em;
        }
    
        p.htmlSloganLine3 {
            grid-area: 3/2/3/6;
        }
    }
    @media only screen and (max-width: 440px) { 
        h1 {
            grid-area: 1/1/1/7;
            font-size: 5em;
            padding-left: 3%;
        }
    
        p.htmlSloganLine2 {
            grid-area: 2/1/2/7;
            font-size: 2em;
            padding-left: 3%;
        }
    
        p.htmlSloganLine3 {
            grid-area: 3/1/3/7;
            padding-left: 3%;
        }
    }

    @media only screen and (max-width: 330px) { 
        #htmlText {
            grid-template: 200px 70px 70px  / repeat(3, 1fr);
        }
        
        h1 {
            grid-area: 1/1/1/4;
            font-size: 5em;
        }
    
        p.htmlSloganLine2 {
            grid-area: 2/1/2/4;
            font-size: 2em;
        }
    
        p.htmlSloganLine3 {
            grid-area: 3/1/3/4;
        }
    }
    </style>
    <div id = "htmlText">
        <!--
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
        <div class = "columns" id = "col16">16</div>
        -->
        <h1 class = "htmlSloganHeader">HTML</h1>
        <p class = "htmlSloganLine2">текст, рисующий</p>
        <p class = "htmlSloganLine3">чертеж</p>
    </div>
`
