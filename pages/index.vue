<template>
  <div class="container">
    <div class="main-header">
      <h1>Filip Wieland</h1>
      <p class="text-blurb">Bad code, bad music, bad electronics, self-deprecation</p>
      <nuxt-link to="/contact" class="contact-link">
        <div>Contact Me</div>
      </nuxt-link>
    </div>
    <link-to-theme href="/code" theme="code">Code</link-to-theme>
    <link-to-theme href="/music" theme="music">Music</link-to-theme>
    <link-to-theme href="/projects" theme="projects">Projects</link-to-theme>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkToTheme from '~/components/LinkToTheme.vue'

export default Vue.extend({
  components: { LinkToTheme },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';

.container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media screen and (max-width: 480px) {
        width: 100vw;
    }

    @media screen and (min-width: 481px) {
        width: 100%;
        max-width: 560px;
        margin: 0 auto;
    }

    .main-header {
        position: relative;
        flex: 1;
        flex-basis: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        > .text-blurb {
            width: 50%;
            font-size: 16px;
        }
    }

    .link-to-theme {
        flex: 1;
        flex-basis: 100px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 30px;
    }

    .contact-link {
        position: absolute;
        width: 64px;
        height: 64px;
        color: #fff;
        background-color: $color-cta;
        border-radius: 100%;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(32px, 32px) rotate(-5deg);
        bottom: 50%;
        right: 64px;
        border: 1px solid $color-cta;

        @media screen and (min-width: 600px) {
            right: 0;
        }

        > div {
            width: 64px;
            height: 64px;
            padding: 16px 0;
        }

        &:link {
            transition: 0.3s;
            box-shadow: 0 0 0 0 $color-cta;
        }

        &:hover {
            transition: 0.3s;
            box-shadow: 0 0 0 10px $color-cta;
            transform: translate(32px, 32px) rotate(-10deg);
        }

        &:visited {
            color: #fff;
        }
    }
}
</style>