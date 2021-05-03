<template>
    <div class="navbar">
        <div class="link-heading-container">
            <nuxt-link to="/" class="text-heading link-heading">Filip Wieland</nuxt-link>
        </div>
        <link-to-theme
            v-for="link in links"
            :key="link.theme"
            :active="isActive(link.theme)"
            :theme="link.theme"
            :href="link.href">
            {{ link.name }}
        </link-to-theme>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkToTheme from './LinkToTheme.vue';
const links = [
    { href: '/code', theme: 'code', name: 'Code' },
    { href: '/music', theme: 'music', name: 'Music' },
    { href: '/projects', theme: 'projects', name: 'Projects' },
];
export default Vue.extend({
    components: { LinkToTheme },
    props: {
        currentTheme: { type: String, default: null },
    },
    data: () => ({ links }),
    methods: {
        isActive(theme: string): boolean {
            return this.currentTheme === theme;
        },
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.navbar {
    display: flex;
    flex-direction: row;
    background-color: $color-bg;
    color: $color-fg;
    height: 48px;
    align-items: center;

    .link-heading-container {
        flex: 3;
    }

    .link-heading {
        margin-left: 16px;
        color: #fff;

        &:hover {
            color: #fff;
        }

        &:visited {
            color: #fff;
        }
    }

    .link-to-theme {
        flex: 1;
        padding: 0 16px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        @media screen and (max-width: 400px) {
            font-size: 12px;
            padding: 0 8px;
        }
    }
}
</style>