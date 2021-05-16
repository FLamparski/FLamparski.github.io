<template>
    <a :href="src">
        <img :alt="alt" :src="src">
    </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        alt: { type: String, required: true },
        asset: { type: String, required: true },
    },
    computed: {
        src(): string {
            return require(`~/assets/${this.asset}`);
        },
    }
});
</script>