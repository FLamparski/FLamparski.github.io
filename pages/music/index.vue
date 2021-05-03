<template>
    <div class="index">
        <h1>Music</h1>
        <p>
            <strong>Hey!</strong> I make music and play with electronics that help with that sort
            of thing. Here you can find some of the writeups of my tracks, custom Eurorack modules,
            and a few other things.
        </p>
        <p>
            <a href="https://distrokid.com/hyperfollow/filipwieland/dissociate-ep" target="_blank" rel="noopener noreferrer">My latest EP</a>
            <span class="text-grey">&mdash;</span>
            <a href="https://soundcloud.com/filiplamparski" target="_blank" rel="noopener noreferrer">Some of my early instrumental stuff</a>
        </p>
        <index-grid :pages="pages"></index-grid>
    </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue'
export default Vue.extend({
    layout: 'theme-music',
    head: {
        title: 'Music - Filip Wieland',
    },
    async asyncData({ $content }: Context) {
        const pages = await $content('music').sortBy('date', 'desc').fetch();
        return { pages };
    },
});
</script>
