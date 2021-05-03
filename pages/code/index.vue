<template>
    <div>
        <h1>Code</h1>
        <nuxt-link to="/code/hello">Content</nuxt-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    layout: 'theme-code',
});
</script>