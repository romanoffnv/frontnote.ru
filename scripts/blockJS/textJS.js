const JSslogan = document.getElementById('JSslogan').attachShadow({mode: 'open'});
JSslogan.innerHTML = `
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
    color: #705E1C;
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


#col1 {
    grid-area: 1 / 1 / 4 / 1;
}
#col2 {
    grid-area: 1 / 2 / 4 / 2;
}
#col3 {
    grid-area: 1 / 3 / 4 / 3;
}
#col4 {
    grid-area: 1 / 4 / 4 / 4;
}
#col5 {
    grid-area: 1 / 5 / 4 / 5;
}
#col6 {
    grid-area: 1 / 6 / 4 / 6;
}
#col7 {
    grid-area: 1 / 7 / 4 / 7;
}
#col8 {
    grid-area: 1 / 8 / 4 / 8;
}
#col9 {
    grid-area: 1 / 9 / 4 / 9;
}
#col10 {
    grid-area: 1 / 10 / 4 / 10;
}
#col11 {
    grid-area: 1 / 11 / 4 / 11;
}
#col12 {
    grid-area: 1 / 12 / 4 / 12;
}
#col13 {
    grid-area: 1 / 13 / 4 / 13;
}
#col14 {
    grid-area: 1 / 14 / 4 / 14;
}
#col15 {
    grid-area: 1 / 15 / 4 / 15;
}
#col16 {
    grid-area: 1 / 16 / 4 / 16;
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
    #col15, #col16 {
        display: none;
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
    #col11, #col12 {
        display: none;
    }
    h1 {
        grid-area: 1/2/1/10;
        font-size: 5.5em;
    }

    p.htmlSloganLine2 {
        grid-area: 2/2/2/10;
    }

    p.htmlSloganLine3 {
        grid-area: 3/2/3/10;
    }
}

@media only screen and (max-width: 615px) { 
    h1 {
    font-size: 5.2em;
    }
}
@media only screen and (max-width: 585px) { 
    h1 {
    font-size: 4.8em;
    }
}
@media only screen and (max-width: 550px) { 
    #htmlText {
        grid-template: 250px 70px 70px  / repeat(8, 1fr);
    }
    #col9, #col10 {
        display: none;
    }
    h1 {
        font-size: 4.5em;
        grid-area: 1/2/1/8;
    }

    p.htmlSloganLine2 {
        grid-area: 2/2/2/8;
    }

    p.htmlSloganLine3 {
        grid-area: 3/2/3/8;
    }
}

@media only screen and (max-width: 530px) { 
    h1 {
        font-size: 4.1em;
    }
}
@media only screen and (max-width: 495px) { 
    #htmlText {
        grid-template: 200px 70px 70px  / repeat(6, 1fr);
    }
    
    #col7, #col8 {
        display: none;
    }
    h1 {
        font-size: 4.5em;
        grid-area: 1/1/1/7;
        padding-left: 5%;
    }

    p.htmlSloganLine2 {
        grid-area: 2/1/2/7;
        padding-left: 5%;
    }

    p.htmlSloganLine3 {
        grid-area: 3/1/3/7;
        padding-left: 5%;
    }
}
@media only screen and (max-width: 440px) { 
    h1 {
        grid-area: 1/1/1/7;
        font-size: 3.8em;
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
@media only screen and (max-width: 350px) { 
    h1 {
        font-size: 3.5em;
    }
}
@media only screen and (max-width: 330px) { 
    #htmlText {
        grid-template: 200px 70px 70px  / repeat(3, 1fr);
    }
    #col4, #col5, #col6 {
        display: none;
    }
    h1 {
        padding-top: 20%;
        grid-area: 1/1/1/4;
        font-size: 3.2em;
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
    <h1 class = "htmlSloganHeader">JavaScript</h1>
    <p class = "htmlSloganLine2">просто добавь</p>
    <p class = "htmlSloganLine3">огня</p>
</div> 
`

/*

textJS();
function textJS() {
    document.getElementById('jsSlogan').innerHTML = 
    '<h1 id = "jsSloganHeader">JavaScript</h1>' +
    '<p id = "jsSloganLine2">просто добавь</p>' +
    '<p id = "jsSloganLine3">огня</p>'
};



let jsSlogan = document.getElementById('jsSlogan');

let jsSloganHeader = document.getElementById("jsSloganHeader");

let jsSloganLine2 = document.getElementById("jsSloganLine2");

let jslSloganLine3 = document.getElementById("jsSloganLine3");

jsSlogan.style.margin = "160px auto";

jsSloganHeader.style.color = "#705E1C";
jsSloganHeader.style.fontWeight = "500";
jsSloganHeader.style.fontSize = "100px";
jsSloganHeader.style.margin = "25px auto";
jsSloganHeader.style.marginTop = "100px";

jsSloganLine2.style.fontSize = "32px";
jsSloganLine2.style.margin = "15px auto";

jsSloganLine3.style.fontWeight = "700";
jsSloganLine3.style.fontSize = "40px";
jsSloganLine3.style.margin = "15px auto";

*/