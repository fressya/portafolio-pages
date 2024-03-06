<template>
    <section class="content">
        <div class="main-content">
            <h1>Contacto</h1>
            <div class="contact-info">
                <a class="contact-email" href="mailto:fressyaluciagomez@gmail.com">
                    fressyaluciagomez@gmail.com
                </a>
            </div>
            <p>Valoro mi tiempo, así que haz que valga la pena y sé conciso .</p>
            <p>Para consultas relacionadas.</p>
        </div>
    </section>
</template>
  
<style scoped>
.content {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
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
    text-align: left;
}
h1{
    color: #111827;
}

.contact-email {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    background: linear-gradient(#ec4899, #3b82f6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: 0em;
}
@media (max-width: 730px) {
    .contact-info{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   }
  .contact-email{
    display: flex;
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 900;
  }
}

p {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 400;
    color: #374151;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
}
</style>
