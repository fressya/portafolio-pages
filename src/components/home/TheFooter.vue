<template>
    <footer class="info">
        <div class="social-icons">
            <a href="https://github.com" target="_blank"><img class="icon" src="@/assets/github-icon.png" height="40px" width="40px" alt="Github"></a>
            <a href="https://twitter.com" target="_blank"><img class="icon" src="@/assets/twitter-icon.png" height="40px" width="40px" alt="Twitter"></a>
            <a href="https://linkedin.com" target="_blank"><img class="icon" src="@/assets/linkedin-icon.png" height="40px" width="40px" alt="LinkedIn"></a>
            <a href="mailto:your-email@example.com"><img class="icon" src="@/assets/email-icon.png" height="40px" width="40px" alt="Email"></a>
        </div>
    </footer>
</template>
<style>
.social-icons{
    display: flex; 
    padding: 0px .9375rem;
    width: 15.625rem;
    flex-direction: row-reverse;
    filter: invert(100%);
}

.info {
    margin: 4.0625rem auto 0;
    color: #4d4d4d;
    font-size: .6875rem;
    text-shadow: 0 .0625rem 0 rgba(255, 255, 255, 0.5);
    text-align: center;
}

.info a {
    color: inherit;
    text-decoration: none;
    font-size: 18px;
    margin: auto;
    font-weight: 400;
}

.info p {
    line-height: 1;
    margin-bottom: 40px;
}
</style>