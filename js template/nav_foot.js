class MyNav extends HTMLElement {
    connectedCallback(){
        this.innerHTML= `
        <nav>
            <div class="logo"><a href="/"><img src="/images/main/fullq/cgrlogoword_black.png" alt="CGR LOGO"></div>
            <input type="checkbox" id="click">
            <label for="click" class="menubtn">
                <i class="fas fa-bars"></i>
            </label>
            <ul>
                <li><a class="" href="/blog/">BLOG</a></li>
                <li><a class="" href="/work/">SERVICES</a></li>
                <li><a class="" href="/about/">ABOUT</a></li>
            </ul>
        </nav>
        <header>
        </header>
        <script type="text/javascript">
            window.addEventListener("scroll",function()
            {
                var header=document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 0 );
            }
            )
        </script>
        `
    }
}
customElements.define('my-nav',MyNav);