<template>
    <header class="TheMenu">
        <div>
            <a class="logo" href="/home">
                <img class="logotipo" src="@/assets/logotipo.png" height="40" width="30" alt="Logo">
                <span class="logo-text">Fressya Gomez</span>
            </a>

        </div>
        <div>
            <button class="menu-toggle" @click="toggleMenu" v-if="windowWidth <= 730" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                    width="30px" height="25px">
                    <g fill-opacity="0.45882" fill="#000000" fill-rule="nonzero">
                        <g transform="scale(5.12,5.12)">
                            <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
                        </g>
                    </g>
                </svg>
            </button>
            <nav :class="{ 'open': isMenuOpen }">
                <ul>
                    <li class="link"><router-link to="/home" class="enlace">Home</router-link></li>
                    <li class="link"><router-link to="/work" class="enlace">Work</router-link></li>
                    <li class="link"><router-link to="/about" class="enlace"> About</router-link></li>
                    <li class="link"><router-link to="/contact" class="enlace">Contact</router-link></li>
                </ul>
            </nav>
    </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const windowWidth = ref(window.innerWidth);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

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
    display: flex;
}

nav ul li {
    display: inline;
    margin-right: 1rem;
}

.logo-text {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #000;
}
.TheMenu {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
    display: flex;
    background: #fff;
    margin: auto;
}

.enlace {
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
    color: #4B5565;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    padding: 12px 16px;
}

@media (max-width: 730px) {
    .enlace {
        padding: 12px 10px;
    }
}

.enlace:hover {
    transition-duration: .15s;
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
    text-decoration-line: underline;
    text-decoration-color: #220f07;

}

.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.logotipo {
    padding: 0px 15px;
}

@media (max-width: 730px) {
    
    .logo-text{
        padding-left: 80px;
    }
    nav ul {
        visibility: hidden;
        height: 0;
        top: 46px;
        flex-direction: column;
        position: absolute;
        background-color: #fff;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    nav ul li {
        margin: 0;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }

    nav.open ul {
        visibility: visible;
        height: auto;
    }
    ul{
        position: absolute;
        width: 100%;
        left: 0px;
        top: auto;
        z-index: 1000;
        background: #ffffff;
    }
}

.menu-toggle {
    position: relative;
    cursor: pointer;
    border: none;
}

nav.open {
    display: block;
}
</style>