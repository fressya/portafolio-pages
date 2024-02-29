<template>
    <header class="TheMenu">
        <div>
            <a class="logo"  href="/"> 
                <img class="logotipo" src="@/assets/logotipo.png" height="40" width="30" alt="Logo">
            <span>Fressya Gomez</span>
            </a>
            
        </div>
        <nav>
            <ul>
                <li class="link"><router-link to="/" class="enlace">Home</router-link></li>
                <li class="link"><router-link to="/work" class="enlace">Work</router-link></li>
                <li class="link"><router-link to="/about" class="enlace"> About</router-link></li>
                <li class="link"><router-link to="/contact" class="enlace">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<style>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    color: #fff;
    font-size: 18px;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 1rem;
}
span{
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #000;
}
.TheMenu {
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    display: flex;
    background: #fff;
    margin: auto;
}

.social-icons {
    display: flex;
}

.social-icons a {
    margin-left: 1rem;
}
.enlace{
    cursor: pointer;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    color: #4B5565;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    padding: 12px 16px;
}
.enlace:hover{
    transition-duration: .15s;
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
    text-decoration-line: underline;
    text-decoration-color: #220f07;

}
.logo{
    display: flex;
    align-items: center;
    text-decoration:none;
}
.logotipo{
    padding: 0px 15px;
}
</style>