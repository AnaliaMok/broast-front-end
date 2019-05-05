import { Vue, Component } from 'vue-property-decorator';
import DarkLogo from '@/components/icons/DarkLogo.vue';

@Component({
  components: {
    DarkLogo
  }
})
export default class DefaultLayout extends Vue {
  goToStyleGuide(e: Event) {
    e.preventDefault();
    this.$router.push({ name: 'styleGuide' });
  }

  render() {
    return (
      <div class="container mx-auto sm:py-12 px-8">
        <header>
          <nav>
            <ul class="list-reset flex justify-center items-center font-serif text-xl font-semibold text-black">
              <li class="px-8">Coffees</li>
              <li onContextMenu={this.goToStyleGuide}>
                <router-link to={{ name: 'home' }}>
                  <DarkLogo />
                </router-link>
              </li>
              <li class="px-8">Roaster</li>
            </ul>
          </nav>
        </header>
        <main>{this.$slots.default}</main>
      </div>
    );
  } // End of render.
}
