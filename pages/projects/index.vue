<template>
    <div class="index">
        <h1>Projects</h1>
        <p>
            <strong>Hey!</strong> I do a lot of stuff that involves electronics, as well as a few
            other things that in general can be classed as "projects". I'm into 3D printing,
            Rust for microcontrollers, making LED ornaments, and that kind of thins.
        </p>
        <p>
            <a href="https://www.instagram.com/minkovsky/" target="_blank" rel="noopener noreferrer">Follow me on Instagram</a>
        </p>
        <index-grid :pages="pages"></index-grid>
    </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue'
export default Vue.extend({
    layout: 'theme-projects',
    head: {
        title: 'Music - Filip Wieland',
    },
    async asyncData({ $content }: Context) {
        const pages = await $content('projects').sortBy('date', 'desc').fetch();
        return { pages };
    },
});
</script>
