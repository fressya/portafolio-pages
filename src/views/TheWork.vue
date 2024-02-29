<template>
    <section class="about-container">
        <main class="main-content">
            <h1>Work</h1>
            <p>
                Aquí hay algunos proyectos de diseño anteriores en los que he trabajado. ¿Quieres ver más? Envíeme un correo electrónico .
            </p>
         
            <h3>Links</h3>
            <ul>
                <li><a href="https://twitter.com/fresya2">Twitter</a></li>
                <li><a href="https://mastodon.social">Mastodon</a></li>
                <li><a href="https://bsky.app">Bluesky</a></li>
                <li><a href="https://t.me">Telegram</a></li>
                <li><a href="https://sindresorhus.substack.com">Newsletter</a></li>
                <li><a href="https://github.com/fressya">GitHub</a></li>
                <li><a href="https://instagram.com">Instagram</a></li>
                <li><a href="https://unsplash.com">Unsplash</a></li>
            </ul>
        </main>
    </section>
</template>
  
<script lang="ts" setup>

</script>
  
<style scoped>
.about-container {
    padding: 32px 24px;
    margin: 0px 82px 80px;
    margin-bottom: 5rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;

}

.main-content {
    max-width: 55rem;
    width: 80%;
    text-align: center;
}

h1 {
    letter-spacing: -.05em;
    margin: 48px 0px;
    text-align: left;
    font-size: 48px;
    color: #111827;

}
h3{
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    text-align: left;
    font-weight: 700;
    letter-spacing: -.05em;
    font-size: 1.3333333em;
    margin-top: 1.6666667em;
    margin-bottom: 0.6666667em;
    line-height: 1.5;
    color: #111827;
}

p {
    letter-spacing: 0.01em;
    text-align: left;
    font-weight: 400;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    margin-top: 1.2em;
    margin-bottom: 1.2em;
    font-size: 18px;
    color: #374151;

}

ul {
    text-align: left;
    font-weight: 400;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    list-style: none;
    padding: 0;
}
li{
    margin: 12px 0px;
    padding: 0px 0px 0px 8px;
}
a {
    font-weight: 500;
    font-size: 18px;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
    text-decoration-color: #3b82f6;
    color: #000000BF;
}

a:hover {
    text-decoration: none;
}

</style>