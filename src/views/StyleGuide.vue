<template>
  <Layout>
    <section>
      <h2 class="mb-6 title">Logos</h2>
      <div class="flex">
        <div class="p-8 pl-0 mr-8">
          <h3>Dark Logo</h3>
          <DarkLogo />
        </div>
        <div class="p-8 bg-black">
          <h3 class="text-teal">Light Logo</h3>
          <LightLogo />
        </div>
      </div>
    </section>
    <!-- logos -->
    <section>
      <h2 class="mt-8 title">Typography</h2>
      <div class="flex">
        <div class="p-4 pl-0 mr-8">
          <h3 class="mb-4">Primary</h3>
          <ul class="list-reset">
            <li class="font-sans font-medium text-lg mb-4">Lato, 500</li>
            <li class="font-sans font-semibold text-lg">Lato, 600</li>
          </ul>
        </div>
        <div class="p-4">
          <h3 class="mb-4">Secondary</h3>
          <ul class="list-reset">
            <li class="font-serif font-bold text-lg mb-4">Playfair Display, 700</li>
            <li class="font-serif font-black text-lg">Playfair Display, 900</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- /typography -->
    <section>
      <h2 class="mt-8 title">Colors</h2>
      <div class="flex">
        <div class="flex flex-col justify-center items-center px-4 mr-4">
          <div class="rounded-full w-16 h-16 bg-teal mb-4 shadow-md"></div>
          <span class="font-sans">teal <code>#4DC0B5</code></span>
        </div>
        <div class="flex flex-col justify-center items-center px-4 mr-4">
          <div class="rounded-full w-16 h-16 bg-black mb-4 shadow-md"></div>
          <span class="font-sans">black <code>#2d2d2d</code></span>
        </div>
        <div class="flex flex-col justify-center items-center px-4">
          <div class="rounded-full w-16 h-16 bg-white mb-4 shadow-md"></div>
          <span class="font-sans">white <code>#ffffff</code></span>
        </div>
      </div>
    </section>
    <!-- colors -->
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DarkLogo from '@/components/icons/DarkLogo.vue';
import LightLogo from '@/components/icons/LightLogo.vue';

@Component({
  components: {
    DarkLogo,
    LightLogo
  }
})
export default class StyleGuide extends Vue {}
</script>

<style scoped>
* {
  color: #2d2d2d;
}
</style>
