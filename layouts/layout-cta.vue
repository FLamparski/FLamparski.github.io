<template>
    <div class="layout-cta">
        <navbar />
        <div class="layout-inner">
            <Nuxt />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.layout-cta {
    background-color: darken($color-cta, 20);
    height: 100vh;

    .layout-inner {
        padding: 16px;
        height: calc(100% - 48px);
        overflow: auto;
    }
}
</style>