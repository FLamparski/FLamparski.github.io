<template>
    <div class="layout-projects">
        <navbar current-theme="projects" />
        <div class="layout-inner">
            <Nuxt />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.layout-projects {
    background-color: darken($color-theme-projects, 30);
    height: 100vh;

    .layout-inner {
        padding: 16px;
        height: calc(100% - 48px);
        overflow: auto;
    }
}
</style>