```ts
import gql from 'graphql-tag';

import { BrewMethod } from '@/models/index';

brewMethods() {
  return {
    query: gql`query { brewMethods { id title } }`,
    result(result: ApolloResponse) {
      if (!result.loading) {
        this.brewMethods = result.data.brewMethods;
        console.log(this.brewMethods);
      }
    }
  };
}
```
