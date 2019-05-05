<template>
  <Layout>
    <h2>Home Page</h2>
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
                description
                funFact
                logo
                createdAt
                updatedAt
              }
            }
          }
        `,
        result(result: ApolloResponse) {
          if (!result.loading) {
            this.data = result.data.roasters.data;
            console.log(this.data);
          }
        }
      };
    }
  }
})
export default class Home extends Vue {
  data: Roaster[] = [];
}
</script>
