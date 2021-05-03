<template>
    <nuxt-link
        :to="href"
        :class="className"
        class="link-to-theme">
        <span class="text-heading">
            <slot></slot>
        </span>
    </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        href: { type: String, required: true },
        theme: { type: String, required: true },
        active: { type: Boolean, default: false },
    },
    computed: {
        className(): string {
            return `theme-${this.theme} ${this.active ? 'active' : ''}`;
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.link-to-theme {
    text-decoration: none;
    text-transform: uppercase;

    @each $theme, $color in $theme-to-color {
        &.theme-#{$theme} {
            background-color: $color;
            color: lighten($color, 30);

            &:link {
                transition: 0.3s;
            }

            &:hover, &:visited:hover, &.active {
                color: #fff;
                background-color: darken($color, 20);
                box-shadow: inset 0 0 5px 2px transparentize(darken($color, 40), 0.2);
                transition: 0.3s;
            }

            &:visited {
                color: lighten($color, 30);
            }
        }
    }
}
</style>