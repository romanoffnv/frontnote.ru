const footer = document.querySelector('footer').attachShadow({mode: 'open'});
footer.innerHTML = ` 
    <style>

    

    footer {
        background-color: #3F3F3F;
        color: grey;
        display: grid;
        grid-template: 50px 1fr repeat(2, 0.5fr)  50px / repeat(16, 1fr);
        grid-gap: 10px;
        
    }

    #hh {
        background-color: #D3D4E4;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        transition: All 1s;
    }

    #hh:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    #hh img {
        width: 70%;
        margin: 15%;
        margin-top: 20%;
    }

    .socialIcons img {
        width: 80px;
        transition: All 1s;
    }

    .socialIcons img:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    #SIWrapper {
        grid-area: 2/ 6 / 2/ 12;
        display: flex;
        justify-content: space-between;
        margin: 0 10%;
        
    }
    #contacts {
        text-align: center;
        grid-area: 3 / 6 / 3/ 12;
    }
    #contacts p a {
        color: grey;
    }
    #copyright {
        text-align: center;
        grid-area: 4/ 6 / 4 / 12;
    }

    @media only screen and (max-width: 1070px) { 
        footer {
           grid-template-columns: repeat(14, 1fr);
        }
        #col15, #col16 {
            display: none;
        }
        .rows {
            grid-column: 1 / 15;
        }
        #SIWrapper {
            grid-area: 2/ 5/ 2/ 11;
           
        }
        #contacts {
            grid-area: 3 / 5 / 3/ 11;
        }
        #copyright {
            grid-area: 4/ 5 / 4 / 11;
        }

        #hh {
            width: 80px;
            height: 80px;
        }

        .socialIcons img {
            width: 80px;
        }
    }

    @media only screen and (max-width: 890px) { 
        footer {
            grid-template-columns: repeat(12, 1fr);
        }
        #col13, #col14 {
            display: none;
        }
        .rows {
            grid-column: 1 / 13;
        }
        #SIWrapper {
            grid-area: 2/ 4/ 2/ 10;
            margin: 0;
        }
        #contacts {
            grid-area: 3 / 4 / 3/ 10;
        }
        #copyright {
            grid-area: 4/ 4 / 4 / 10;
        }
    }
    
    @media only screen and (max-width: 730px) {
        footer {
            grid-template-columns: repeat(10, 1fr);
        }
        #col11, #col12 {
            display: none;
        }
        .rows {
            grid-column: 1 / 11;
        }
        #SIWrapper {
            grid-area: 2/ 3/ 2/ 9;
            margin: 0 10%;
        }
        #contacts {
            grid-area: 3 / 4 / 3/ 8;
        }
        #copyright {
            grid-area: 4/ 4 / 4 / 8;
        }
        #hh {
            width: 70px;
            height: 70px;
        }

        .socialIcons img {
            width: 70px;
        }
    }
    @media only screen and (max-width: 580px) {
        footer {
            grid-template-columns: repeat(8, 1fr);
        }

        #col9, #col10 {
            display: none;
        }
        .rows {
            grid-column: 1 / 9;
        }
        #SIWrapper {
            grid-area: 2/ 2/ 2/ 8;
            margin: 0 5%;
        }
        #contacts {
            grid-area: 3 / 3 / 3/ 7;
        }
        #copyright {
            grid-area: 4/ 3 / 4 / 7;
        }
        
    }
    @media only screen and (max-width: 500px) { 
        footer {
            grid-template-columns: repeat(6, 1fr);
        }
        #col7, #col8 {
            display: none;
        }
        .rows {
            grid-column: 1 / 7;
        }
        #SIWrapper {
            grid-area: 2/ 1/ 2/ 7;
            margin: 0 10%;
        }
        #contacts {
            grid-area: 3 / 1 / 3/ 7;
        }
        #copyright {
            grid-area: 4/ 1 / 4 / 7;
        }

    }
    @media only screen and (max-width: 390px) { 
        footer {
            grid-template-columns: repeat(4, 1fr);
        }
        #col5, #col6 {
            display: none;
        }
        .rows {
            grid-column: 1 / 5;
        }
        #SIWrapper {
            grid-area: 2/ 1/ 2/ 5;
        }
        #contacts {
            grid-area: 3 / 1 / 3/ 5;
        }
        #copyright {
            grid-area: 4/ 1 / 4 / 5;
        }
        #hh {
            width: 70px;
            height: 70px;
        }

        .socialIcons img {
            width: 70px;
        }
    }
    </style>
    <footer>
        <div id = "SIWrapper">
            <div class = "socialIcons">
                <img src = "img/github-square-brands.png" alt="gitHub"/>
            </div>
            <div class = "socialIcons">
                <img src = "img/codepen-brands.png" alt = "codepen"/>
            </div>
            <div class = "socialIcons" id = "hh">
                <img src = "img/headhunter-hh.png" alt = "headHunter"/>
            </div>
        </div>
        <div id = "contacts">
            <p>+7 929 243 58 31</p>
            <p><a href="mailto:romanoffnv@gmail.com">romanoffnv@gmail.com</a></p>
        </div>
        <div id = "copyright">
            <p>&copy 2021 Yellow Black label</p>
        </div>

    </footer>
    `
