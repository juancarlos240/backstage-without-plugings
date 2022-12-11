import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { createRepositriesPlugin, CreateRepositriesPage } from '../src/plugin';

createDevApp()
  .registerPlugin(createRepositriesPlugin)
  .addPage({
    element: <CreateRepositriesPage />,
    title: 'Root Page',
    path: '/create-repositries'
  })
  .render();
