<template>
    <div class="card">
        <img
            v-if="cardImage"
            :src="cardImage"
            :alt="cardImageAlt"
            class="card-image" />
        <div class="card-body">
            <slot name="body"></slot>
        </div>
        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        cardImage: { type: String, default: null },
        cardImageAlt: { type: String, default: null },
    },
})
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    > .card-image {
        margin: -8px -8px 8px -8px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: block;
        width: calc(100% + 16px);
        height: 100%;
        max-height: 220px;
        object-fit: cover;
    }

    > .card-footer {
        margin-top: auto;
    }
}
</style>