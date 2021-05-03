<template>
    <div class="index-grid">
        <nuxt-link
            v-for="page in pages"
            :key="page.slug"
            :to="page.path"
            class="page-link">
            <h2 class="page-link">{{ page.title }}</h2>
            <p class="page-description">{{ page.description }}</p>
            <p class="text-grey date">{{ formatDate(page.date) }}</p>
        </nuxt-link>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IContentDocument } from '~/node_modules/@nuxt/content/types/content';
export default Vue.extend({
    props: {
        pages: { type: Array as PropType<IContentDocument[]>, required: true },
    },
    methods: {
        formatDate(date?: string): string {
            return date ? date.split('T')[0] : '';
        }
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.index-grid {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8px;
    row-gap: 8px;

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
    }

    > .page-link {
        display: flex;
        flex-direction: column;
        background-color: #fafafa;
        border-radius: 4px;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

        > .date {
            margin-top: auto;
        }
    }
}
</style>