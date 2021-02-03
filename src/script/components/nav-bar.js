import $ from "jquery";
window.$ = $;
class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
        /* navbar regular css start */
        .navbar-area {
            background: transparent;
            
        }
        .site-navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        a.site-logo img{
            width: 70%;
        }
        .site-navbar ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
        }
        .site-navbar ul li a {
            padding: 20px;
            display: block;
            text-decoration: none;
            text-transform: uppercase;
        }
        .site-navbar ul li a:hover {
            background: linear-gradient(90deg, #4458dc 0%, #854fee 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        /* navbar regular css end */
        /* nav-toggler css start */
        .nav-toggler {
            border: 3px solid transparent;
            padding: 5px;
            background-color: transparent;
            cursor: pointer;
            height: 39px;
            display: none;
        }
        .nav-toggler span, 
        .nav-toggler span:before, 
        .nav-toggler span:after {
            width: 28px;
            height: 3px;
            background-color: black;
            display: block;
            transition: .3s;
        }
        .nav-toggler span:before {
            content: '';
            transform: translateY(-9px);
        }
        .nav-toggler span:after {
            content: '';
            transform: translateY(6px);
        }
        .nav-toggler.toggler-open span {
            background-color: white;
        }
        .nav-toggler.toggler-open span:before {
            transform: translateY(0px) rotate(45deg);   
        }
        .nav-toggler.toggler-open span:after {
            transform: translateY(-3px) rotate(-45deg);
        }
        /* nav-toggler css start */
        /* mobile breakpoint start */
        @media screen and (max-width: 767px) {
            .navbar-area {
                background: transparent;
            }
            .container {
                max-width: 95%;
            }
            /* navbar css for mobile start */
            .nav-toggler{
                display: block;
                
            }
            .site-navbar {
                min-height: 60px;
                
            }
            .site-navbar ul {
                position: absolute;
                width: 100%;
                height: calc(100vh - 60px);
                left: 0;
                top: 60px;
                flex-direction: column;
                align-items: center;
                background-color: white;
                max-height: 0;
                z-index: 999;
                overflow: hidden;
                transition: .3s;
            }
            .site-navbar ul li {
                width: 90%;
                text-align: center;
            }
            .site-navbar ul li a {
                padding: 25px;
            }
            
            .site-navbar ul.open {
                max-height: 100vh;
                overflow: visible;
            }
            /* navbar css for mobile end */
        }
        </style>

  <div class="navbar-area">
    <div class="container">
      <nav class="site-navbar">
        <!-- site logo -->
        <a href="#home" class="site-logo"><img src="./image/Logo.png" /></a>
  
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#track">Track</a></li>
          <li><a href="#article">Article</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#tips">Tips</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>

        <button class="nav-toggler">
          <span></span>
        </button>
      </nav>
    </div>
  </div>
    `;
    }
}
customElements.define("nav-bar", NavBar);