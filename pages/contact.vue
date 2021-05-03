<template>
    <main class="contact">
        <h1>Hi!</h1>
        <p>Here are some of the best ways to contact me:</p>
        <p><a href="https://twitter.com/Minkovsky" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <p><a href="https://instagram.com/minkovsky" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p><a href="mailto:filiplamparski+website@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
        <p>You can also find other links for the specific themes in their pages.</p>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    layout: 'layout-cta',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

a {
    color: lighten($color-cta, 20);
}

.contact {
    margin: 0 auto;
    width: 100%;
    max-width: 640px;
}
</style>