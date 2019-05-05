<template>
  <div class="container mx-auto sm:py-12 px-8">
    <header>
      <nav>
        <ul
          class="list-reset flex justify-center items-center font-serif text-xl font-semibold text-black"
        >
          <li class="px-8">Coffees</li>
          <li @contextmenu.prevent="goToStyleGuide">
            <router-link :to="{ name: 'home' }"><DarkLogo /></router-link>
          </li>
          <li class="px-8">
            <router-link :to="{ name: 'roasters' }" class="no-underline text-black hover:underline"
              >Roasters</router-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <main class="py-8">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DarkLogo from '@/components/icons/DarkLogo.vue';

@Component({
  components: {
    DarkLogo
  }
})
export default class DefaultLayout extends Vue {
  goToStyleGuide() {
    this.$router.push({ name: 'styleGuide' });
  }
}
</script>
