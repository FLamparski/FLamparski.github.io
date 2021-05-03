<template>
    <div class="page">
        <nuxt-link to="/code">Code <span class="text-grey">/</span></nuxt-link>
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
    layout: 'theme-code',
    async asyncData({ $content, params }: Context) {
        const doc = await $content(`code/${params.slug}` || 'code/hello').fetch();
        return { doc };
    },
    head(this: Data) {
        return {
            title: this.doc ? `${this.doc.title} - Code - Filip Wieland` : 'Code - Filip Wieland',
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