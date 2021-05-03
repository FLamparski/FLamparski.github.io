<template>
    <div class="index-grid">
        <nuxt-link
            v-for="page in pages"
            :key="page.slug"
            :to="page.path"
            class="page-link">
            <card
                :card-image="page.cardImage"
                :card-image-alt="`Card image for ${page.title}`">
                <template v-slot:body>
                    <h2 class="page-link-title">{{ page.title }}</h2>
                    <p class="page-description">{{ page.description }}</p>
                </template>
                <template v-slot:footer>
                    <p class="text-grey date">{{ formatDate(page.date) }}</p>
                </template>
            </card>
        </nuxt-link>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IContentDocument } from '~/node_modules/@nuxt/content/types/content';
import Card from './Card.vue';
export default Vue.extend({
  components: { Card },
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

    .page-link > .card {
        height: 100%;
    }
}
</style>