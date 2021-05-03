<template>
    <div class="layout-music">
        <navbar current-theme="music" />
        <div class="layout-inner">
            <Nuxt />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.layout-music {
    background-color: darken($color-theme-music, 25);
    height: 100vh;

    .layout-inner {
        padding: 16px;
        height: calc(100% - 48px);
        overflow: auto;
    }
}
</style>