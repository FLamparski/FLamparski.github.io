<template>
    <div class="layout-code">
        <navbar current-theme="code" />
        <div class="layout-inner">
            <Nuxt />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.layout-code {
    background-color: darken($color-theme-code, 40);
    height: 100vh;

    .layout-inner {
        padding: 16px;
        height: calc(100% - 48px);
        overflow: auto;
    }
}
</style>