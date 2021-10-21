const toTop = document.createElement('template');
toTop.innerHTML = ` 
    <style>
    #arrowWrap {
        display: none;
        position: fixed;
        bottom: 20px; 
        right: 20px; 
        border: solid #999999;
        border-radius: 13%;
        width: 40px;
        height: 25px;
        padding: 1% 1%;
        z-index: 100;
        cursor: pointer;
        
    }
    #arrowWrap:hover {
        opacity: 0.7;
    }

    #arrowWrap:active {
        opacity: 0.7;
    }
    .arrow-up {
        width: 40px;
        height: 40px;
        background-color: #999999;
        clip-path: polygon(50% 0%, 100% 50%, 0% 50%);
        
        }
    @media only screen and (max-width: 400px) { 
        #arrowWrap {
            width: 80%;
            border-radius: 10px;
            height: 30px;
            margin: 0 3%;
        }
        .arrow-up {
            width: 60px;
            height: 40px;
            background-color: #999999;
            clip-path: polygon(50% 0%, 100% 50%, 0% 50%);
            margin: 1% auto;
            }
    }
    </style>
    <div id = "arrowWrap"> 
        <div class="arrow-up"></div>
    </div>
`

class toTheTop extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(toTop.content.cloneNode(true));
    } 
    connectedCallback () {
        let a =  this.shadowRoot.querySelector('#arrowWrap');
        window.onscroll = function() {
            if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
                a.style.display = "block";
                } else {
                a.style.display = "none";
            }
        };  
        this.shadowRoot.querySelector('#arrowWrap').addEventListener('click', () => this.toTopFunc());
    }
    
    toTopFunc() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
        
};

window.customElements.define('to-top', toTheTop);
