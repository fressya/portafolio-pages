<template>
    <section class="about-container">
        <main class="main-content">
            <h1>Acerca de Fressya Gomez</h1>
            <p>
                Como desarrollador freelance a tiempo completo, tomé la decisión en 2022 de dejar mi trabajo de oficina en
                una empresa de diseño en Perú para abrazar el estilo de vida del trabajo remoto. Desde entonces, he estado
                disfrutando de la comodidad de trabajar desde casa, mientras continúo viviendo en Arequipa, Perú. Esta
                libertad me ha brindado la oportunidad de explorar otros lugares cuando lo deseo, sin que esto afecte mi
                productividad.

            </p>
            <p>
                Mi enfoque principal se centra en el desarrollo de aplicaciones utilizando tecnologías modernas como Vue.js
                y Node.js, entre otros paquetes y herramientas disponibles. Mi trayectoria profesional me ha llevado a
                desarrollar habilidades sólidas en áreas específicas del desarrollo de software, y mantengo una cartera
                activa de proyectos tanto personales como profesionales.

                A lo largo de los años, he acumulado una amplia experiencia en la creación y mantenimiento de aplicaciones,
                así como en la gestión de múltiples proyectos de manera simultánea. Esta experiencia me ha permitido
                convertirme en un desarrollador versátil y capaz de adaptarse a diferentes entornos y desafíos.
                
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
    align-items: center;
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
}</style>