<template>
    <div class="page">
        <nuxt-link to="/music">Music <span class="text-grey">/</span></nuxt-link>
        <h1>{{ doc.title }}</h1>
        <main>
            <nuxt-content :document="doc" />
        </main>
    </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';
import Vue from 'vue'
export default Vue.extend({
    layout: 'theme-music',
    async asyncData({ $content, params }: Context) {
        const doc = await $content(`music/${params.slug}` || 'music/hello').fetch();
        return { doc };
    },
    head(this: Data) {
        return {
            title: this.doc ? `${this.doc.title} - Music - Filip Wieland` : 'Music - Filip Wieland',
        };
    },
});

interface Data {
    doc?: IContentDocument;
}
</script>

<style lang="scss" scoped>
.page {
    margin: 0 auto;
    width: 100%;
    max-width: 640px;
}
</style>