import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const createRepositriesPlugin = createPlugin({
  id: 'create-repositries',
  routes: {
    root: rootRouteRef,
  },
});

export const CreateRepositriesPage = createRepositriesPlugin.provide(
  createRoutableExtension({
    name: 'CreateRepositriesPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
