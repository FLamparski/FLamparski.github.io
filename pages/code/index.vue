<template>
    <div class="index">
        <h1>Code</h1>
        <p>
            <strong>Hey!</strong> I work for ThousandEyes (part of Cisco) as a software engineer,
            primarily on frontend development. I also occasionally do some software side projects,
            and even less frequently write about software. Below you may be able to find some of
            these things.
        </p>
        <p>
            <a href="https://github.com/FLamparski/" target="_blank" rel="noopener noreferrer">Find me on GitHub</a>
            <span class="text-grey">&mdash;</span>
            <a href="https://www.linkedin.com/in/ftwieland" target="_blank" rel="noopener noreferrer">Spam me on LinkedIn</a>
            <span class="text-grey">&mdash;</span>
            <a href="https://dev.to/minkovsky" target="_blank" rel="noopener noreferrer">See some of the same stuff on dev.to</a>
        </p>
        <index-grid :pages="pages"></index-grid>
    </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue'
export default Vue.extend({
    layout: 'theme-code',
    head: {
        title: 'Code - Filip Wieland',
    },
    async asyncData({ $content }: Context) {
        const pages = await $content('code').sortBy('date', 'desc').fetch();
        return { pages };
    },
});
</script>
