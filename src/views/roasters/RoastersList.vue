<template>
  <Layout>
    <h1 class="title mt-8 text-black">Our Roasters</h1>
    <section class="flex">
      <div
        v-for="roaster in roasters"
        :key="roaster.id"
        class="flex-1 md:max-w-1/2 lg:max-w-1/3 mx-4 text-center border border-grey pb-4 rounded-lg shadow"
      >
        <img :src="roaster.logo" :alt="roaster.name" class="w-full" />
        <strong class="text-xl font-sans text-teal-dark mt-4 mb-2 block">{{ roaster.name }}</strong>
        <p class="text-lg">{{ roaster.city }}, {{ roaster.state }}</p>
      </div>
    </section>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Roaster } from '@/models/index';
import { ApolloResponse } from '@/types/index';
import gql from 'graphql-tag';

@Component({
  apollo: {
    roasters() {
      return {
        query: gql`
          query {
            roasters {
              data {
                id
                name
                city
                state
                logo
              }
            }
          }
        `,
        result(result: ApolloResponse) {
          if (!result.loading) {
            this.roasters = result.data.roasters.data;
            console.log(this.roasters);
          }
        }
      };
    }
  }
})
export default class RoastersList extends Vue {
  roasters: Roaster[] = [];
}
</script>

<style></style>
