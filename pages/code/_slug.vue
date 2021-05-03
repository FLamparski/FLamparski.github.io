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
import Vue from 'vue'
export default Vue.extend({
    layout: 'theme-code',
    async asyncData({ $content, params }) {
        const doc = await $content(`code/${params.slug}` || 'code/hello').fetch();
        return { doc };
    }
});
</script>

<style lang="scss" scoped>
.page {
    margin: 0 auto;
    width: 100%;
    max-width: 640px;
}
</style>